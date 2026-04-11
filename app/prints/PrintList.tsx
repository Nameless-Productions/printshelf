import { getPrints } from '@/lib/prints/getPrints'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function PrintList() {
  const prints = await getPrints();
  return (
    <div>
      {prints.map((p) => (
        <div key={p.id} className='border p-3 m-5 rounded-xl'>
          <h3>{p.title}</h3>
          <b>{p.description}</b>
          <p>{p.info}</p>
          <Link href={`/prints/${p.id}`}><button className='btn-green'>View</button></Link>
        </div>
      ))}
    </div>
  )
}
