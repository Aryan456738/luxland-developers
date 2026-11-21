'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProjectForm from '@/components/admin/ProjectForm';
import { supabase } from '@/lib/supabase/client';

export default function EditProjectPage() {
  const params = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    supabase.from('projects').select('*').eq('id', params.id).single()
      .then(({ data, error: loadError }) => {
        if (loadError) setError(loadError.message); else setProject(data);
      });
  }, [params.id]);

  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '36px 32px' }}>
      <h1 style={{ color: '#fff' }}>Edit Project</h1>
      {error && <p style={{ color: '#f87171' }}>{error}</p>}
      {project ? <ProjectForm initialData={project} /> : !error && <p style={{ color: '#94a3b8' }}>Loading...</p>}
    </main>
  );
}
