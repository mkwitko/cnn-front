import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

import { LoggedContext } from '@/contexts/LoggedContext';
import { useContext } from 'react';

export default function CnnTable({
  title,
  headers,
  data,
}: {
  title: string;
  headers: string[];
  data: any[];
}) {
  return (
    <Table>
      <TableCaption>{title}</TableCaption>
      <TableHeader>
        <TableRow>
          {headers.map((e, i: number) => (
            <TableHead key={`header_${i}`}>{e}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.length > 0 &&
          data[0] &&
          data[0].length > 0 &&
          data[0].map((e: any, i: number) => (
            <TableRow key={`row_${i}`}>
              {e
                .filter((e: any, i: number) => i > 0)
                .map((each: any, i: number) => (
                  <TableCell
                    className={`${i === 1 ? 'font-semibold' : ''}`}
                    key={`cell_${i}`}
                  >
                    {each}
                  </TableCell>
                ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
