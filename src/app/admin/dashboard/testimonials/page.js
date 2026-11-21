'use client';

import { useEffect, useState } from 'react';

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTestimonials(JSON.parse(localStorage.getItem('luxland_testimonials') || '[]'));
  }, []);

  function add(event) {
    event.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const next = [{ id: Date.now(), name: name.trim(), message: message.trim(), is_published: true }, ...testimonials];
    setTestimonials(next);
    localStorage.setItem('luxland_testimonials', JSON.stringify(next));
    setName('');
    setMessage('');
  }

  function remove(id) {
    if (!window.confirm('Delete this testimonial?')) return;
    const next = testimonials.filter((item) => item.id !== id);
    setTestimonials(next);
    localStorage.setItem('luxland_testimonials', JSON.stringify(next));
  }

  const inputStyle = { width: '100%', boxSizing: 'border-box', borderRadius: 8, border: '1px solid #475569', background: '#020617', color: '#fff', padding: 12 };

  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '36px 32px' }}>
      <h1 style={{ color: '#fff' }}>Testimonials</h1>
      <form onSubmit={add} style={{ display: 'grid', gap: 12, marginBottom: 28 }}>
        <input required placeholder="Customer name" value={name} onChange={(event) => setName(event.target.value)} style={inputStyle} />
        <textarea required rows={4} placeholder="Testimonial" value={message} onChange={(event) => setMessage(event.target.value)} style={inputStyle} />
        <button style={{ padding: 12, border: 0, borderRadius: 8, background: '#d9a91c', color: '#020617', fontWeight: 800 }}>Add Testimonial</button>
      </form>
      <div style={{ display: 'grid', gap: 12 }}>
        {testimonials.map((item) => (
          <article key={item.id} style={{ padding: 16, border: '1px solid #334155', background: '#0f172a', borderRadius: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <h3 style={{ margin: 0, color: '#fff' }}>{item.name}</h3>
              <button onClick={() => remove(item.id)} style={{ border: 0, background: 'transparent', color: '#fb7185', cursor: 'pointer' }}>Delete</button>
            </div>
            <p style={{ color: '#cbd5e1' }}>{item.message}</p>
          </article>
        ))}
        {!testimonials.length && <p style={{ color: '#94a3b8' }}>No testimonials yet.</p>}
      </div>
    </main>
  );
}
