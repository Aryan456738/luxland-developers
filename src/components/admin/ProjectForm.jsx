'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import ImageUpload from '@/components/shared/ImageUpload';

export default function ProjectForm({ initialData }) {
  const router = useRouter();
  const [project, setProject] = useState(initialData || {
    title: '', location: '', description: '', status: 'Upcoming', image: '', is_published: true,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function submit(event) {
    event.preventDefault();
    setSaving(true);
    setError('');
    const payload = {
      title: project.title.trim(),
      location: project.location.trim(),
      description: project.description.trim(),
      status: project.status,
      image: project.image.trim(),
      is_published: Boolean(project.is_published),
    };
    const query = initialData?.id
      ? supabase.from('projects').update(payload).eq('id', initialData.id)
      : supabase.from('projects').insert(payload);
    const { error: saveError } = await query;
    setSaving(false);
    if (saveError) return setError(saveError.message);
    router.push('/admin/dashboard/projects');
    router.refresh();
  }

  const inputStyle = { width: '100%', boxSizing: 'border-box', borderRadius: 8, border: '1px solid #475569', background: '#020617', color: '#fff', padding: 12 };
  return (
    <form onSubmit={submit} style={{ display: 'grid', gap: 16 }}>
      {[
        ['title', 'Project title'], ['location', 'Location'],
        ['description', 'Description'],
      ].map(([field, label]) => (
        <label key={field} style={{ display: 'grid', gap: 8, color: '#cbd5e1' }}>
          {label}
          {field === 'description' ? (
            <textarea required rows={5} value={project[field] || ''} onChange={(event) => setProject({ ...project, [field]: event.target.value })} style={inputStyle} />
          ) : (
            <input required={field === 'title'} value={project[field] || ''} onChange={(event) => setProject({ ...project, [field]: event.target.value })} style={inputStyle} />
          )}
        </label>
      ))}
      <ImageUpload value={project.image} onChange={(url) => setProject({ ...project, image: url })} folder="projects" label="Project photo" />
      <label style={{ display: 'grid', gap: 8, color: '#cbd5e1' }}>
        Status
        <select value={project.status} onChange={(event) => setProject({ ...project, status: event.target.value })} style={inputStyle}>
          <option>Upcoming</option><option>Ongoing</option><option>Completed</option>
        </select>
      </label>
      <label style={{ display: 'flex', gap: 10, alignItems: 'center', color: '#cbd5e1' }}>
        <input type="checkbox" checked={Boolean(project.is_published)} onChange={(event) => setProject({ ...project, is_published: event.target.checked })} />
        Published on website
      </label>
      {error && <p style={{ color: '#f87171' }}>{error}</p>}
      <button disabled={saving} style={{ padding: 14, border: 0, borderRadius: 8, background: '#d9a91c', color: '#020617', fontWeight: 800 }}>{saving ? 'Saving...' : 'Save Project'}</button>
    </form>
  );
}
