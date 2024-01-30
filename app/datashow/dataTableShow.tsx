import { columns } from './columns';
import DataTable from './data-table';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DataTableShow({ people }: { people: any }) {
  return (
    <div className='p-4'>
      <DataTable columns={columns} data={people} />
    </div>
  );
}
