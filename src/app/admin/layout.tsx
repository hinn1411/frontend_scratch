import AdminHeader from "@/components/navigation/AdminHeader";
import Sidebar from "@/components/navigation/Sidebar";
import "@/styles/globals.css";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main className="flex min-h-screen w-full flex-col bg-muted/40">
          {/* Sidebar  */}

          <Sidebar />

          {/* Main  */}
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <AdminHeader />
            <div className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
