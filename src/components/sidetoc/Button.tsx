import { ArrowRightIcon } from "./icon";
import useSidebarStore from "./store";
const Button = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();
  console.log(`isSidebarOpen = ${isSidebarOpen}`);

  return (
    <div className="fixed left-6 bottom-8 z-50">
      <button
        onClick={toggleSidebar}
        className="rounded-full bg-gray-200 p-2 text-gray-500 opacity-100 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      >
        <ArrowRightIcon
          className={`w-5 h-5 transform transition-transform ${
            isSidebarOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
};

export default Button;
