import { cn } from '@/lib/utils';
import Label from '../text/Label';

export default function InputContainer({
  label,
  children,
  mergeClass,
}: {
  label: string;
  children: React.ReactNode;
  mergeClass?: string;
}) {
  return (
    <div className={cn('flex flex-col w-full', mergeClass)}>
      <Label title={label} />
      {children}
    </div>
  );
}
