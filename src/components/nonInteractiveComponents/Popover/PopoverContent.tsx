import { PopoverContent } from '@/components/ui/popover';

export default function CnnPopoverContent({
  children,
  align = 'start',
  classes,
}: {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  classes?: string;
}) {
  return (
    <PopoverContent
      align={align}
      className={classes}
    >
      {children}
    </PopoverContent>
  );
}
