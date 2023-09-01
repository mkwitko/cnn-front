'use client';

import Header from '@/components/core/Header';
import SideBar from '@/components/core/Sidebar';
import { LoggedContextProvider } from '@/contexts/LoggedContext';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <Header
        showRouteIcons={true}
        setOpen={setOpen}
      />
      <div className="mt-[70px] flex">
        <LoggedContextProvider>
          <SideBar
            open={open}
            setOpen={setOpen}
          />
          <div className="w-full sm:ml-16">{children}</div>
        </LoggedContextProvider>
      </div>
    </div>
  );
}
