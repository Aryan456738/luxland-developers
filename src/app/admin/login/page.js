'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return setError('Email ya password galat hai.');
    const adminEmails = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || '')
      .split(',')
      .map((adminEmail) => adminEmail.trim().toLowerCase())
      .filter(Boolean);
    const isAdminEmail = adminEmails.includes(data.user?.email?.toLowerCase());
    if (data.user?.app_metadata?.role !== 'admin' && !isAdminEmail) {
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) console.error('Could not sign out non-admin user:', signOutError);
      return setError('Is account ko admin access nahi diya gaya hai.');
    }
    router.push('/admin/dashboard');
    router.refresh();
  }

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#020617', color: '#fff' }}>
      <form onSubmit={handleLogin} style={{ width: 320, display: 'grid', gap: 12 }}>
        <h1>Admin Login</h1>
        <p>Authorized admins only. Sign in with your admin account.</p>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: 12, color: '#000' }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: 12, color: '#000' }} />
        <button disabled={loading} style={{ padding: 12, background: '#d9a91c', fontWeight: 700 }}>
          {loading ? 'Please wait...' : 'Login'}
        </button>
        {error && <p style={{ color: '#fb7185' }}>{error}</p>}
      </form>
    </main>
  );
}