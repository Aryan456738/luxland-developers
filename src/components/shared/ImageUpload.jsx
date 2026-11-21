'use client';

import { useRef, useState } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function ImageUpload({ value, onChange, folder = 'plots', label = 'Plot image' }) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [dragging, setDragging] = useState(false);

  async function uploadFile(file) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file.');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('Photo must be smaller than 10 MB.');
      return;
    }

    const previewUrl = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.readAsDataURL(file);
    });

    setUploading(true);
    setError('');
    const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const uniqueId = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const fileName = `${folder}/${Date.now()}-${uniqueId}.${extension}`;
    const { error: uploadError } = await supabase.storage
      .from('luxland-media')
      .upload(fileName, file, { cacheControl: '3600', upsert: false, contentType: file.type });
    if (uploadError) {
      onChange(previewUrl);
      setError(uploadError.message.includes('Bucket not found')
        ? 'Photo preview selected. Permanent upload starts after Supabase luxland-media bucket is created.'
        : uploadError.message);
      setUploading(false);
      return;
    }
    const { data } = supabase.storage.from('luxland-media').getPublicUrl(fileName);
    onChange(data.publicUrl);
    setUploading(false);
  }

  function upload(event) {
    uploadFile(event.target.files?.[0]);
  }

  function handleDrop(event) {
    event.preventDefault();
    setDragging(false);
    uploadFile(event.dataTransfer.files?.[0]);
  }

  return (
    <div style={{ display: 'grid', gap: 10 }}>
      <span style={{ color: '#cbd5e1' }}>{label}</span>
      <input ref={inputRef} type="file" accept="image/png,image/jpeg,image/webp" onChange={upload} style={{ display: 'none' }} />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        onDragEnter={(event) => { event.preventDefault(); setDragging(true); }}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        style={{ height: 180, border: `2px dashed ${dragging ? '#facc15' : '#64748b'}`, borderRadius: 12, background: dragging ? '#1e293b' : '#020617', color: '#cbd5e1', cursor: 'pointer', overflow: 'hidden', padding: 0 }}
      >
        {value ? (
          <img src={value} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span>{uploading ? 'Uploading...' : 'Choose photo from phone or computer'}</span>
        )}
      </button>
      {value && <button type="button" onClick={() => inputRef.current?.click()} style={{ border: 0, background: 'transparent', color: '#facc15', cursor: 'pointer', textAlign: 'left' }}>Change photo</button>}
      {error && <p style={{ color: '#f87171', margin: 0 }}>{error}</p>}
    </div>
  );
}
