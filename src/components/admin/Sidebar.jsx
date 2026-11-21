'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['/admin/dashboard', 'Dashboard'],
  ['/admin/dashboard/plots', 'Plots'],
  ['/admin/dashboard/projects', 'Projects'],
  ['/admin/dashboard/enquiries', 'Enquiries'],
  ['/admin/dashboard/content', 'Website Content'],
  ['/admin/dashboard/testimonials', 'Testimonials'],
  ['/admin/dashboard/settings', 'Settings'],
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside style={{ minHeight: '100vh', background: '#0b1220', borderRight: '1px solid #1e293b', padding: 20 }}>
      <Link href="/admin/dashboard" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, color: '#fff', textDecoration: 'none' }}>
        <img src="/logo/luxland-developers-logo.png" alt="Luxland" style={{ width: 42, height: 42, objectFit: 'contain' }} />
        <b style={{ color: '#f5d76e' }}>Luxland</b>
      </Link>
      <nav style={{ display: 'grid', gap: 6 }}>
        {links.map(([href, label]) => {
          const active = href === '/admin/dashboard' ? pathname === href : pathname.startsWith(href);
          return (
            <Link key={href} href={href} style={{ padding: '11px 12px', borderRadius: 8, color: active ? '#020617' : '#cbd5e1', background: active ? '#d9a91c' : 'transparent', textDecoration: 'none', fontWeight: active ? 800 : 500 }}>
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
