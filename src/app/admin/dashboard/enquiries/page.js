'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState([]);
  const [error, setError] = useState('');

  async function load() {
    const { data, error: loadError } = await supabase.from('enquiries').select('*').order('created_at', { ascending: false });
    const localEnquiries = JSON.parse(localStorage.getItem('luxland_local_enquiries') || '[]');
    if (loadError) {
      setEnquiries(Array.isArray(localEnquiries) ? localEnquiries : []);
      setError('');
    } else {
      const databaseEnquiries = data || [];
      setEnquiries([...databaseEnquiries, ...localEnquiries]);
      setError('');
    }
  }
  useEffect(() => { load(); }, []);

  async function removeEnquiry(id) {
    if (!window.confirm('Delete this enquiry?')) return;
    const { error: deleteError } = await supabase.from('enquiries').delete().eq('id', id);
    if (deleteError) {
      const localEnquiries = JSON.parse(localStorage.getItem('luxland_local_enquiries') || '[]');
      const remaining = localEnquiries.filter((item) => String(item.id) !== String(id));
      localStorage.setItem('luxland_local_enquiries', JSON.stringify(remaining));
      setError('');
    } else {
      const localEnquiries = JSON.parse(localStorage.getItem('luxland_local_enquiries') || '[]');
      const remaining = localEnquiries.filter((item) => String(item.id) !== String(id));
      localStorage.setItem('luxland_local_enquiries', JSON.stringify(remaining));
    }
    load();
  }

  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '36px 32px' }}>
      <h1 style={{ color: '#fff' }}>Enquiries</h1>
      {error && <p style={{ color: '#f87171' }}>{error}</p>}
      <div style={{ display: 'grid', gap: 12, marginTop: 24 }}>
        {enquiries.map((enquiry) => (
          <article key={enquiry.id} style={{ padding: 18, background: '#0f172a', border: '1px solid #334155', borderRadius: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <h3 style={{ margin: 0, color: '#fff' }}>{enquiry.name}</h3>
              <button onClick={() => removeEnquiry(enquiry.id)} style={{ border: 0, background: 'transparent', color: '#fb7185', cursor: 'pointer' }}>Delete</button>
            </div>
            <p style={{ color: '#94a3b8', margin: '8px 0' }}>{enquiry.phone} · {enquiry.email || 'No email'}</p>
            <p style={{ color: '#cbd5e1' }}>{enquiry.message || 'No message'}</p>
            <small style={{ color: '#64748b' }}>{new Date(enquiry.created_at).toLocaleString()}</small>
          </article>
        ))}
        {!enquiries.length && !error && <p style={{ color: '#94a3b8' }}>No enquiries yet.</p>}
      </div>
    </main>
  );
}
