import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../ui/alert-dialog';

import React from 'react';

export default function Alert({ children }: { children: React.ReactNode }) {
  return <AlertDialog>{children}</AlertDialog>;
}
