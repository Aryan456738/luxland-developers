'use client';

import { useEffect, useState } from 'react';

const defaults = {
  heroTitle: 'Premium Land. Timeless Legacy.',
  heroSubtitle: 'Explore handpicked premium plots across Alibaug and nearby coastal locations.',
  aboutTitle: 'About Luxland Developers',
  aboutText: 'Clear-title premium land parcels and thoughtful real estate development.',
};

export default function AdminContentPage() {
  const [content, setContent] = useState(defaults);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('luxland_content') || 'null');
    if (stored) setContent({ ...defaults, ...stored });
  }, []);

  function save(event) {
    event.preventDefault();
    localStorage.setItem('luxland_content', JSON.stringify(content));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const inputStyle = { width: '100%', boxSizing: 'border-box', borderRadius: 8, border: '1px solid #475569', background: '#020617', color: '#fff', padding: 12 };

  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '36px 32px' }}>
      <h1 style={{ color: '#fff' }}>Website Content</h1>
      <form onSubmit={save} style={{ display: 'grid', gap: 16 }}>
        {[
          ['heroTitle', 'Hero title'], ['heroSubtitle', 'Hero subtitle'],
          ['aboutTitle', 'About title'], ['aboutText', 'About text'],
        ].map(([field, label]) => (
          <label key={field} style={{ display: 'grid', gap: 8, color: '#cbd5e1' }}>
            {label}
            {field.includes('Text') || field.includes('Subtitle') ? (
              <textarea rows={4} value={content[field]} onChange={(event) => setContent({ ...content, [field]: event.target.value })} style={inputStyle} />
            ) : (
              <input value={content[field]} onChange={(event) => setContent({ ...content, [field]: event.target.value })} style={inputStyle} />
            )}
          </label>
        ))}
        <button style={{ padding: 14, border: 0, borderRadius: 8, background: '#d9a91c', color: '#020617', fontWeight: 800 }}>
          {saved ? 'Saved' : 'Save Website Content'}
        </button>
      </form>
    </main>
  );
}
