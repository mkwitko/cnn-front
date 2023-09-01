'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { motion as m } from 'framer-motion';

import { AiOutlineMenu } from 'react-icons/ai';
import { BiSolidUser } from 'react-icons/bi';
import { SiCnn } from 'react-icons/si';
import Cookies from 'js-cookie';
import { setCache } from '@/services/cache';
import { CACHE_PATH } from '@/infra/cache';

interface HeaderProps {
  showRouteIcons: boolean;
  setOpen?: any;
}

export default function Header({
  showRouteIcons = false,
  setOpen,
}: HeaderProps) {
  const router = useRouter();
  const [isLogOutButtonVisible, setIsLogOutButtonVisible] =
    useState<boolean>(false);

  const handleLogout = async () => {
    try {
      Cookies.remove('auth');
      setCache(CACHE_PATH.AUTH.AUTH);
      router.refresh();
    } catch (err: any) {
      console.log(err.message);
    }
  };

  function handleOpenLogOutButton() {
    setIsLogOutButtonVisible(true);
  }

  async function handleCloseLogOutButton() {
    await setTimeout(() => {
      setIsLogOutButtonVisible(false);
    }, 100);
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-[70px] w-full flex-row items-center justify-between bg-black p-6 text-white shadow-xl">
      <div className="max-width-default flex items-center justify-between">
        <div className="flex max-w-[16rem] flex-row items-center justify-center gap-8">
          {setOpen && (
            <button
              type="button"
              onClick={() => {
                setOpen((prevState: any) => !prevState);
              }}
            >
              <AiOutlineMenu />
            </button>
          )}
          <SiCnn className="text-white w-16 h-16" />
        </div>

        {showRouteIcons && (
          <div className="relative flex flex-row items-center gap-4">
            <button
              className="font-bold"
              onFocus={handleOpenLogOutButton}
              onBlur={handleCloseLogOutButton}
            >
              <BiSolidUser className="h-6 w-6" />
            </button>

            {isLogOutButtonVisible && (
              <m.button
                onClick={handleLogout}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.1 }}
                type="button"
                className="group absolute right-0 top-8 rounded-small bg-white px-6 py-2 shadow-lg transition-colors hover:bg-zinc-200"
              >
                <span className="text-primary">Logout</span>
              </m.button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
