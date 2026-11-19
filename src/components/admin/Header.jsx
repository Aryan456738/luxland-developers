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
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 16 }}>
      <b>Luxland Admin</b>
      <button onClick={logout}>Logout</button>
    </div>
  );
}