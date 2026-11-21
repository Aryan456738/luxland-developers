'use client';

import ProjectForm from '@/components/admin/ProjectForm';

export default function AddProjectPage() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '36px 32px' }}>
      <h1 style={{ color: '#fff' }}>Add Project</h1>
      <ProjectForm />
    </main>
  );
}
