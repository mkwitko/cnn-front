'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '../ui/scroll-area';

export function CnnCombobox({
  options,
  value,
  setValue,
  labelTag = 'label',
  valueTag = 'value',
  disabled = false,
}: {
  options: any;
  value: string;
  setValue?: (value: string) => void;
  labelTag?: string;
  valueTag?: string;
  disabled?: boolean;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover
      open={open}
      onOpenChange={() => {
        setOpen(!open);
      }}
    >
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between truncate"
        >
          <p className="w-11/12 truncate text-start text-[0.75rem] capitalize">
            {value
              ? options
                  .find((e: any) => {
                    return e[valueTag].toString() === value.toString();
                  })
                  ?.[labelTag].toLowerCase()
              : 'Pick one'}
          </p>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="PopoverContent p-0">
        <Command>
          <CommandEmpty>No options found</CommandEmpty>
          <ScrollArea className="max-h-[400px] w-full overflow-y-auto">
            <CommandGroup>
              {options &&
                options.length > 0 &&
                options
                  .map((each: any, index: number) => (
                    <CommandItem
                      className="text-start text-small"
                      value={each[valueTag].toString()}
                      key={each[valueTag] + '_' + index}
                      onSelect={(currentValue: any) => {
                        if (setValue) {
                          setValue(
                            currentValue.toString() === value.toString()
                              ? ''
                              : currentValue
                          );
                        }
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          value === each[valueTag] ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                      {each[labelTag]}
                    </CommandItem>
                  ))
                  .slice(0, 50)}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
