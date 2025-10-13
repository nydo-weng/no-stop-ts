import type { ReactNode } from 'react';
import { Outlet } from 'react-router';

function Layout() {
  const NavButton = ({ children }: { children: ReactNode }) => {
    return (
      <li className="h-full w-1/3 flex items-center justify-center border-2 border-blue-200 text-blue-100 hover:bg-blue-100 hover:text-[#355360] active:bg-blue-300 active:text-white cursor-pointer transition-colors duration-200">
        {children}
      </li>
    );
  };
  return (
    <div className="h-screen flex flex-col bg-[#8A6460] items-center">
      <div className="container bg-[#355360] flex-1 flex flex-col">
        <header className="h-16 w-full bg-[#8EB2C0] flex items-center justify-center">
          <nav className="h-full w-full max-w-2xl bg-[#355360]">
            <ul className="h-full w-full flex items-center justify-between">
              <NavButton>刷题</NavButton>
              <NavButton>题库管理</NavButton>
              <NavButton>设置</NavButton>
            </ul>
          </nav>
        </header>
        <main className="flex-1 bg-[#F3F6F0]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default Layout;
