import { cn } from '@/lib/utils';

export default function Title({
  title,
  classes,
}: {
  title: string;
  classes?: string;
}) {
  return (
    <h1
      className={cn(
        'text-primary font-[600] uppercase mb-4 self-center sm:self-start md:text-normal md:mb-12',
        classes
      )}
    >
      {title}
    </h1>
  );
}
