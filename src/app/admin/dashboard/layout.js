import Header from '@/components/admin/Header';

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}