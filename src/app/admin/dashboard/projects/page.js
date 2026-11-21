'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  async function load() {
    const { data, error: loadError } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    if (loadError) setError(loadError.message); else setProjects(data || []);
  }
  useEffect(() => { load(); }, []);

  async function removeProject(id) {
    if (!window.confirm('Delete this project?')) return;
    const { error: deleteError } = await supabase.from('projects').delete().eq('id', id);
    if (deleteError) setError(deleteError.message); else load();
  }

  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '36px 32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: '#fff' }}>Projects</h1>
        <Link href="/admin/dashboard/projects/add" style={{ background: '#d9a91c', color: '#020617', padding: '10px 16px', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>+ Add Project</Link>
      </div>
      {error && <p style={{ color: '#f87171' }}>{error}</p>}
      <div style={{ display: 'grid', gap: 12, marginTop: 24 }}>
        {projects.map((project) => (
          <article key={project.id} style={{ display: 'grid', gridTemplateColumns: '90px 1fr auto', gap: 16, alignItems: 'center', padding: 16, background: '#0f172a', border: '1px solid #334155', borderRadius: 12 }}>
            {project.image ? <img src={project.image} alt="" style={{ width: 90, height: 70, objectFit: 'cover', borderRadius: 8 }} /> : <div style={{ width: 90, height: 70, background: '#1e293b', borderRadius: 8 }} />}
            <div><h3 style={{ margin: '0 0 6px', color: '#fff' }}>{project.title}</h3><p style={{ margin: 0, color: '#94a3b8' }}>{project.location} · {project.status} · {project.is_published ? 'Published' : 'Hidden'}</p></div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Link href={`/admin/dashboard/projects/edit/${project.id}`} style={{ color: '#facc15', textDecoration: 'none' }}>Edit</Link>
              <button onClick={() => removeProject(project.id)} style={{ border: 0, background: 'transparent', color: '#fb7185', cursor: 'pointer' }}>Delete</button>
            </div>
          </article>
        ))}
        {!projects.length && !error && <p style={{ color: '#94a3b8' }}>No projects yet. Add your first project.</p>}
      </div>
    </main>
  );
}
