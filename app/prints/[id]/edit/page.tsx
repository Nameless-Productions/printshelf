import { editPrintForm } from '@/lib/prints/editPrint';
import { getPrint } from '@/lib/prints/getPrint';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function EditPrintPage({ params }: { params: { id: number } }) {
    const {id} = await params;
    const print = await getPrint(id);

    if(!print) return redirect("/404")
  return (
    <form action={editPrintForm}>
        <h3>Edit Print</h3>
        
        <label htmlFor="id">ID:</label><br />
        <input type="text" name='id' id='id' className='inp-normal mb-3' defaultValue={id} readOnly required />

        <br />
        <label htmlFor="description">New Description:</label><br />
        <textarea name="description" defaultValue={print.description} className='inp-normal' id='description' placeholder='New description'></textarea>

        <br />
        <label htmlFor="info">New Info:</label><br />
        <textarea name="info" id='info' defaultValue={print.info!} className='inp-normal' placeholder='New info'></textarea>

        <br />
        <input type="submit" value="Edit" className='btn-green mt-3' />
    </form>
  )
}
