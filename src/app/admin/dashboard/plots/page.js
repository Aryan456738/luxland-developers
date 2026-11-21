'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import { initialPlots } from '@/lib/appData';

export default function AdminPlotsPage() {
  const [plots, setPlots] = useState([]);
  const [error, setError] = useState('');

  async function load() {
    const { data, error: loadError } = await supabase.from('plots').select('*').order('created_at', { ascending: false });
    const localResponse = await fetch('/api/local-plots').catch(() => null);
    const localData = localResponse?.ok ? await localResponse.json() : [];
    if (loadError) {
      const localPlots = JSON.parse(localStorage.getItem('luxland_local_plots') || 'null');
      const combined = [...initialPlots, ...(Array.isArray(localPlots) ? localPlots : []), ...localData];
      setPlots(combined.reduce((unique, plot) => {
        const index = unique.findIndex((item) => String(item.id) === String(plot.id));
        if (index >= 0) unique[index] = plot;
        else unique.push(plot);
        return unique;
      }, []));
      setError('');
    } else if (data?.length) {
      setPlots([...(data || []), ...initialPlots.filter((initial) =>
        !(data || []).some((remote) => String(remote.id) === String(initial.id))
      ), ...localData.filter((local) =>
        !(data || []).some((remote) => String(remote.id) === String(local.id)) &&
        !initialPlots.some((initial) => String(initial.id) === String(local.id))
      )]);
      setError('');
    } else {
      const localPlots = JSON.parse(localStorage.getItem('luxland_local_plots') || 'null');
      setPlots([...initialPlots, ...localData, ...(Array.isArray(localPlots) ? localPlots : [])].filter((plot, index, all) =>
        all.findIndex((item) => String(item.id) === String(plot.id)) === index
      ));
      setError('');
    }
  }

  useEffect(() => { load(); }, []);

  async function removePlot(id) {
    if (!window.confirm('Delete this plot?')) return;
    const { error: deleteError } = await supabase.from('plots').delete().eq('id', id);
    await fetch('/api/local-plots', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    }).catch(() => {});
    if (deleteError) {
      const remaining = plots.filter((plot) => String(plot.id) !== String(id));
      setPlots(remaining);
      localStorage.setItem('luxland_local_plots', JSON.stringify(remaining));
      setError('');
    } else {
      load();
    }
  }

  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '36px 32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <h1 style={{ color: '#fff' }}>Plots</h1>
        <Link href="/admin/dashboard/plots/add" style={{ background: '#d9a91c', color: '#020617', padding: '10px 16px', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>+ Add Plot</Link>
      </div>
      {error && <p style={{ color: '#f87171' }}>{error}</p>}
      <div style={{ display: 'grid', gap: 12, marginTop: 24 }}>
        {plots.map((plot) => (
          <article key={plot.id} style={{ display: 'grid', gridTemplateColumns: '90px 1fr auto', gap: 16, alignItems: 'center', padding: 16, background: '#0f172a', border: '1px solid #334155', borderRadius: 12 }}>
            {plot.image ? <img src={plot.image} alt="" style={{ width: 90, height: 70, objectFit: 'cover', borderRadius: 8 }} /> : <div style={{ width: 90, height: 70, background: '#1e293b', borderRadius: 8 }} />}
            <div><h3 style={{ margin: '0 0 6px', color: '#fff' }}>{plot.title}</h3><p style={{ margin: 0, color: '#94a3b8' }}>{plot.location} · {plot.area} · {plot.is_published ? 'Published' : 'Hidden'}</p></div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Link href={`/admin/dashboard/plots/edit/${plot.id}`} style={{ color: '#facc15', textDecoration: 'none' }}>Edit</Link>
              <button onClick={() => removePlot(plot.id)} style={{ border: 0, background: 'transparent', color: '#fb7185', cursor: 'pointer' }}>Delete</button>
            </div>
          </article>
        ))}
        {!plots.length && !error && <p style={{ color: '#94a3b8' }}>No plots yet. Add your first plot.</p>}
      </div>
    </main>
  );
}
