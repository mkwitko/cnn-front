import { AlertDialogContent } from '@/components/ui/alert-dialog';

export default function AlertContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AlertDialogContent>{children}</AlertDialogContent>;
}
