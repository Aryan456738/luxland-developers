'use client';

import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';

export default function Header() {
  const router = useRouter();

  async function logout() {
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 32px', background: '#0f172a', color: '#fff', borderBottom: '1px solid #263449' }}>
      <div>
        <b style={{ fontSize: 20, color: '#f5d76e' }}>Luxland Admin</b>
        <span style={{ display: 'block', marginTop: 4, color: '#94a3b8', fontSize: 13 }}>Website management panel</span>
      </div>
      <button onClick={logout} style={{ border: '1px solid #475569', borderRadius: 8, padding: '8px 16px', background: 'transparent', color: '#fff', cursor: 'pointer' }}>Logout</button>
    </header>
  );
}