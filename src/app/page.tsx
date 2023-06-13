import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>Next with Supabase</div>

      <div className='max-w-4xl mx-auto my-6 p-6 rounded-md bg-slate-200'>
        <h2>rendering and caching data</h2>
        <ul className='px-6'>
          <li>
            <Link href='/static' className='text-blue-800'>
              /static
            </Link>
          </li>
          <li>
            <Link href='/dynamic' className='text-blue-800'>
              /dynamic
            </Link>
          </li>
          <li>
            <Link href='/realtime' className='text-blue-800'>
              /realtime
            </Link>
          </li>
        </ul>
      </div>

      <div className='max-w-4xl mx-auto my-6 p-6 rounded-md bg-slate-200'></div>
      <div className='max-w-4xl mx-auto my-6 p-6 rounded-md bg-slate-200'></div>
    </main>
  );
}
