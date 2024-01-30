'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
const formSchema = z.object({
  username: z.string().min(2).max(50),
});
export default function DialogForm() {
  const [open, setOpen] = useState(false);
  const [openNew, setOpenNew] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setOpen(!open);
    setOpenNew(!openNew);
  }
  function handleClick() {
    setOpenNew(!openNew);
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Open
        </DialogTrigger>
        <DialogContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>

                    {!openNew && (
                      <FormControl>
                        <Input placeholder='shadcn' {...field} />
                      </FormControl>
                    )}
                    {openNew && (
                      <FormControl>
                        <h1>{form.getValues().username}</h1>
                      </FormControl>
                    )}
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {!openNew && (
                <Button type='button' onClick={handleClick}>
                  Next
                </Button>
              )}
              {openNew && <Button type='submit'>Submit</Button>}
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* <Dialog open={openNew} onOpenChange={setOpenNew}>
        <DialogContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='username'
                render={() => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <h1>{form.getValues().username}</h1>
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit'>Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog> */}
    </>
  );
}
