'use client';

import * as React from 'react';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  date: Date;
  setDate?: (e: Date | null) => void;
}

export function CnnDatePicker({ className, date, setDate }: Props) {
  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn('w-full justify-start text-left text-small')}
          >
            {date ? format(date, 'MM/dd/yyyy') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-full p-0"
          align="start"
        >
          <Calendar
            initialFocus
            mode="single"
            selected={date || new Date()}
            defaultMonth={date || new Date()}
            onSelect={(e: any) => {
              if (setDate) setDate(e);
            }}
            numberOfMonths={1}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
