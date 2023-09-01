import { AlertDialogTrigger } from '@/components/ui/alert-dialog';
import React from 'react';

export default function AlertTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AlertDialogTrigger>{children}</AlertDialogTrigger>;
}
