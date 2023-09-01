import { Popover } from '@/components/ui/popover';

export default function CnnPopover({
  children,
  open,
  openChange,
}: {
  children: React.ReactNode;
  open: boolean;
  openChange: (open: boolean) => void;
}) {
  return (
    <Popover
      open={open}
      onOpenChange={(e) => {
        openChange(!open);
      }}
    >
      {children}
    </Popover>
  );
}
