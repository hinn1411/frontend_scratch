import AdminProfile from "../profile/AdminProfile";
import AdminSearchInput from "../search/AdminSearchInput";
import AdminMobileNav from "./AdminMobileNav";
import DashboardBreadcumb from "./DashboardBreadcrumb";

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <AdminMobileNav />
      <DashboardBreadcumb />
      <AdminSearchInput />
      <AdminProfile />
    </header>
  );
}
