import { PopoverTrigger } from '@/components/ui/popover';

export default function CnnPopoverTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PopoverTrigger asChild>{children}</PopoverTrigger>;
}
