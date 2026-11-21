 'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import ImageUpload from '@/components/shared/ImageUpload';

const emptyPlot = {
  title: '', location: '', zone: '', area: '', rate: '', fsi: '',
  highlights: '', access: '', extras: '', image: '', is_published: true,
};

export default function PlotForm({ initialData }) {
  const router = useRouter();
  const [plot, setPlot] = useState(initialData ? { ...initialData } : emptyPlot);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function update(field, value) {
    setPlot((current) => ({ ...current, [field]: value }));
  }

  async function submit(event) {
    event.preventDefault();
    setSaving(true);
    setError('');
    const payload = {
      title: plot.title.trim(),
      location: plot.location.trim(),
      zone: plot.zone.trim(),
      area: plot.area.trim(),
      rate: plot.rate.trim(),
      fsi: plot.fsi.trim(),
      highlights: Array.isArray(plot.highlights)
        ? plot.highlights.join(', ')
        : String(plot.highlights || '').trim(),
      access: plot.access.trim(),
      extras: plot.extras.trim(),
      image: typeof plot.image === 'string' ? plot.image.trim() : '',
      is_published: Boolean(plot.is_published),
    };
    const query = initialData?.id
      ? supabase.from('plots').update(payload).eq('id', initialData.id)
      : supabase.from('plots').insert(payload);
    const { error: saveError } = await query;
    const savedId = initialData?.id || `local-${Date.now()}`;
    await fetch('/api/local-plots', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, id: savedId }),
    }).catch(() => {});
    setSaving(false);
    if (saveError) {
      const existing = JSON.parse(localStorage.getItem('luxland_local_plots') || 'null');
      const localPlots = Array.isArray(existing) ? existing : [];
      if (initialData?.id) {
        const updated = localPlots.map((item) => String(item.id) === String(initialData.id) ? { ...item, ...payload } : item);
        if (!localPlots.some((item) => String(item.id) === String(initialData.id))) {
          updated.push({ ...payload, id: initialData.id });
        }
        localStorage.setItem('luxland_local_plots', JSON.stringify(updated));
      } else {
        const localPlot = { ...payload, id: `local-${Date.now()}` };
        localStorage.setItem('luxland_local_plots', JSON.stringify([localPlot, ...localPlots]));
      }
    }
    router.push('/admin/dashboard/plots');
    router.refresh();
  }

  const inputStyle = { width: '100%', boxSizing: 'border-box', borderRadius: 8, border: '1px solid #475569', background: '#020617', color: '#fff', padding: 12 };

  return (
    <form onSubmit={submit} style={{ display: 'grid', gap: 16 }}>
      {[
        ['title', 'Plot title'], ['location', 'Location'], ['zone', 'Zone'],
        ['area', 'Area'], ['rate', 'Rate'], ['fsi', 'FSI'],
        ['highlights', 'Highlights'], ['access', 'Road access'],
        ['extras', 'Extra details'],
      ].map(([field, label]) => (
        <label key={field} style={{ display: 'grid', gap: 8, color: '#cbd5e1' }}>
          {label}
          {field === 'highlights' || field === 'extras' ? (
            <textarea value={plot[field] || ''} onChange={(event) => update(field, event.target.value)} rows={3} style={inputStyle} />
          ) : (
            <input value={plot[field] || ''} onChange={(event) => update(field, event.target.value)} required={field === 'title'} style={inputStyle} />
          )}
        </label>
      ))}
      <ImageUpload value={plot.image} onChange={(url) => update('image', url)} folder="plots" label="Plot photo" />
      <label style={{ display: 'flex', gap: 10, alignItems: 'center', color: '#cbd5e1' }}>
        <input type="checkbox" checked={Boolean(plot.is_published)} onChange={(event) => update('is_published', event.target.checked)} />
        Published on website
      </label>
      {error && <p style={{ color: '#f87171' }}>{error}</p>}
      <button disabled={saving} style={{ padding: 14, border: 0, borderRadius: 8, background: '#d9a91c', color: '#020617', fontWeight: 800 }}>
        {saving ? 'Saving...' : 'Save Plot'}
      </button>
    </form>
  );
}
