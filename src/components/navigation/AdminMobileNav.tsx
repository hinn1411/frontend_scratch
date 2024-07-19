import { PanelLeft } from "lucide-react";

const AdminMobileNav = () => {
  return (
    <>
      <button className="h-10 w-10 sm:hidden inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors  border border-input bg-background rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        <PanelLeft className="w-5 h-5" />
        <span className="sr-only">Toggle Menu</span>
      </button>
    </>
  );
};

export default AdminMobileNav;
