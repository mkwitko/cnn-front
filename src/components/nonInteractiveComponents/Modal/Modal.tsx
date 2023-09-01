'use client';

import { Dialog } from '@/components/ui/dialog';

export default function Modal({
  children,
  open = false,
  openChange,
}: {
  children: React.ReactNode;
  open?: boolean;
  openChange?: (e: boolean) => void;
}) {
  return (
    <Dialog
      open={open}
      onOpenChange={openChange}
    >
      {children}
    </Dialog>
  );
}
