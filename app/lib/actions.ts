'use server';
export async function getData(PrevState, formData: FormData) {
  const start = formData.get('start');
  const end = formData.get('end');

  const res = await fetch(`http://localhost:3001/data?_start=${start}&_end=${end}`);
  const data = await res.json();
  return data;
}
