import "../styles/App.css";

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 h-screen">
      <nav className="h-full flex flex-col bg-gray-900 border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center"></div>
      </nav>
    </aside>
  );
};

export default Sidebar;
