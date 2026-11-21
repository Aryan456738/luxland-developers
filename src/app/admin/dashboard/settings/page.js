'use client';

import { useEffect, useState } from 'react';

const defaults = {
  siteName: 'Luxland Developers',
  phone: '',
  email: '',
  address: 'Alibaug, Maharashtra',
  whatsapp: '',
  description: 'Premium land parcels and luxury real estate in Alibaug.',
};

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState(defaults);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('luxland_settings') || 'null');
    if (stored) setSettings({ ...defaults, ...stored });
  }, []);

  function save(event) {
    event.preventDefault();
    localStorage.setItem('luxland_settings', JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const inputStyle = { width: '100%', boxSizing: 'border-box', borderRadius: 8, border: '1px solid #475569', background: '#020617', color: '#fff', padding: 12 };

  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '36px 32px' }}>
      <h1 style={{ color: '#fff' }}>Website Settings</h1>
      <form onSubmit={save} style={{ display: 'grid', gap: 16 }}>
        {[
          ['siteName', 'Website name'],
          ['phone', 'Phone number'],
          ['email', 'Email address'],
          ['address', 'Office address'],
          ['whatsapp', 'WhatsApp number'],
        ].map(([field, label]) => (
          <label key={field} style={{ display: 'grid', gap: 8, color: '#cbd5e1' }}>
            {label}
            <input value={settings[field]} onChange={(event) => setSettings({ ...settings, [field]: event.target.value })} style={inputStyle} />
          </label>
        ))}
        <label style={{ display: 'grid', gap: 8, color: '#cbd5e1' }}>
          Website description
          <textarea rows={4} value={settings.description} onChange={(event) => setSettings({ ...settings, description: event.target.value })} style={inputStyle} />
        </label>
        <button style={{ padding: 14, border: 0, borderRadius: 8, background: '#d9a91c', color: '#020617', fontWeight: 800 }}>
          {saved ? 'Saved' : 'Save Settings'}
        </button>
      </form>
    </main>
  );
}
