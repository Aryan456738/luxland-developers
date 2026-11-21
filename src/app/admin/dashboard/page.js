'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import { initialPlots } from '@/lib/appData';

export default function DashboardPage() {
  const [counts, setCounts] = useState({ plots: 0, projects: 0, enquiries: 0 });

  useEffect(() => {
    Promise.all([
      supabase.from('plots').select('id'),
      supabase.from('projects').select('id'),
      supabase.from('enquiries').select('id'),
    ]).then(([plots, projects, enquiries]) => {
      const localPlots = JSON.parse(localStorage.getItem('luxland_local_plots') || 'null');
      const localEnquiries = JSON.parse(localStorage.getItem('luxland_local_enquiries') || '[]');
      const displayedPlots = plots.data?.length
        ? plots.data
        : (Array.isArray(localPlots) ? localPlots : initialPlots);
      setCounts({
        plots: displayedPlots.length,
        projects: projects.data?.length || 0,
        enquiries: (enquiries.data?.length || 0) + (Array.isArray(localEnquiries) ? localEnquiries.length : 0),
      });
    });
  }, []);

  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 32px' }}>
      <p style={{ margin: 0, color: '#94a3b8' }}>Welcome back, Admin</p>
      <h1 style={{ margin: '8px 0 32px', fontSize: 36, color: '#fff' }}>Dashboard Overview</h1>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 18 }}>
        {[
          ['Plots', counts.plots, 'Manage your property listings', '/admin/dashboard/plots'],
          ['Projects', counts.projects, 'Manage development projects', '/admin/dashboard/projects'],
          ['Enquiries', counts.enquiries, 'Review contact enquiries', '/admin/dashboard/enquiries'],
          ['Content', '—', 'Update website content', '/admin/dashboard/content'],
        ].map(([title, count, description, href]) => (
          <Link key={href} href={href} style={{ display: 'block', padding: 24, minHeight: 125, border: '1px solid #334155', borderRadius: 14, background: '#0f172a', color: '#fff', textDecoration: 'none' }}>
            <h2 style={{ margin: 0, fontSize: 22, color: '#f5d76e' }}>{title}</h2>
            <strong style={{ display: 'block', marginTop: 10, fontSize: 28, color: '#fff' }}>{count}</strong>
            <p style={{ margin: '12px 0 0', color: '#cbd5e1', lineHeight: 1.5 }}>{description}</p>
            <span style={{ display: 'block', marginTop: 16, color: '#facc15' }}>Open →</span>
          </Link>
        ))}
      </section>

      <section style={{ marginTop: 32, padding: 24, borderRadius: 14, background: '#0f172a', border: '1px solid #334155' }}>
        <h2 style={{ marginTop: 0, color: '#fff' }}>Admin panel status</h2>
        <p style={{ marginBottom: 0, color: '#cbd5e1' }}>Login is working. The management pages are ready for their data and save actions to be connected.</p>
      </section>
    </main>
  );
}
