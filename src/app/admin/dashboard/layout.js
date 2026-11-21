import Header from '@/components/admin/Header';
import Sidebar from '@/components/admin/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '220px 1fr', background: '#020617', color: '#e2e8f0' }}>
      <Sidebar />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
}