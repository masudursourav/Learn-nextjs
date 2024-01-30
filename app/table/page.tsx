import { people } from '../people';
import { columns } from './columns';
import DataTable from './data-table';
export default function Page() {
  return (
    <div className='p-4'>
      <DataTable columns={columns} data={people} />
    </div>
  );
}
