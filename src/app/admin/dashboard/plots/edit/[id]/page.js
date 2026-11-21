'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PlotForm from '@/components/admin/PlotForm';
import { supabase } from '@/lib/supabase/client';
import { initialPlots } from '@/lib/appData';

export default function EditPlotPage() {
  const params = useParams();
  const [plot, setPlot] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPlot() {
      const localResponse = await fetch('/api/local-plots').catch(() => null);
      const serverLocalPlots = localResponse?.ok ? await localResponse.json() : [];
      const browserLocalPlots = JSON.parse(localStorage.getItem('luxland_local_plots') || '[]');
      const serverOverride = serverLocalPlots.find((item) => String(item.id) === String(params.id));
      const browserOverride = browserLocalPlots.find((item) => String(item.id) === String(params.id));
      if (serverOverride || browserOverride) {
        setPlot(serverOverride || browserOverride);
        setError('');
        return;
      }
      const { data, error: loadError } = await supabase.from('plots').select('*').eq('id', params.id).single();
      if (data) {
        setPlot(data);
        setError('');
        return;
      }
      const seededPlot = initialPlots.find((item) => String(item.id) === String(params.id));
      setPlot(seededPlot || null);
      setError(seededPlot ? '' : loadError?.message || 'Plot not found');
    }
    loadPlot();
  }, [params.id]);

  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '36px 32px' }}>
      <h1 style={{ color: '#fff' }}>Edit Plot</h1>
      {error && <p style={{ color: '#f87171' }}>{error}</p>}
      {plot ? <PlotForm initialData={plot} /> : !error && <p style={{ color: '#94a3b8' }}>Loading...</p>}
    </main>
  );
}
