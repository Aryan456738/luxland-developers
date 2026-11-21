'use client';

import PlotForm from '@/components/admin/PlotForm';

export default function AddPlotPage() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '36px 32px' }}>
      <h1 style={{ color: '#fff' }}>Add Plot</h1>
      <PlotForm />
    </main>
  );
}
