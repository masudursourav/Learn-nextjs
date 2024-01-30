'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { getData } from '../lib/actions';
import DataTableShow from './dataTableShow';
const formSchema = z.object({
  start: z.coerce.number().min(1, {
    message: 'Enter a valid number',
  }),
  end: z.coerce.number().min(1, {
    message: 'Enter a valid number',
  }),
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      start: 0,
      end: 0,
    },
    mode: 'all',
  });

  // 2. Define a submit handler.

  const [state, dispatch] = useFormState(getData, { data: {} });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formData = new FormData();
    formData.append('start', values.start.toString());
    formData.append('end', values.end.toString());
    dispatch(formData);
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='start'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Page</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='shadcn' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='end'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Page</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='shadcn' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
      {state.length === undefined ? <h1>No Data</h1> : <DataTableShow people={state} />}
    </>
  );
}
