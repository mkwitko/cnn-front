import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';

export default function AlertFooter({
  confirmAction,
}: {
  confirmAction: () => void;
}) {
  return (
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={confirmAction}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  );
}
