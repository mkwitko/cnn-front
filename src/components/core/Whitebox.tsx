import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

interface WhiteBoxProps extends ComponentProps<'div'> {
  children: React.ReactNode;
  classes?: string;
}

export default function WhiteBox({ children, classes }: WhiteBoxProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-start rounded-normal border border-borderColor/20 bg-white w-full gap-8 lg:gap-10 relative p-6',
        classes
      )}
    >
      {children}
    </div>
  );
}
