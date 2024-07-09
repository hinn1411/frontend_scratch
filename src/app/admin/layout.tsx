import Sidebar from "@/components/navigation/Sidebar";
import '@/styles/globals.css'
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="flex">
          <div className="flex-1">
            <Sidebar />
          </div>
          <div className="flex-[3]">{children}</div>
        </div>
      </body>
    </html>
  );
}
