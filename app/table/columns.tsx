'use client';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { Person } from '../people';
export const columns: ColumnDef<Person>[] = [
  {
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc');
          }}
        >
          Person ID
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    accessorKey: 'id',
  },
  {
    header: 'First Name',
    accessorKey: 'first_name',
  },
  {
    header: 'Last Name',
    accessorKey: 'last_name',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
  },
  {
    header: 'Date of Birth',
    accessorKey: 'date_of_birth',
  },
];
