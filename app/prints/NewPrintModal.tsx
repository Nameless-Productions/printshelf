import newPrintForm from '@/lib/prints/newPrintForm'
import Image from 'next/image'
import React from 'react'

export default function NewPrintModal({ closeBtnOnClick }: { closeBtnOnClick: () => void }) {
  return (<div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
    <div className='border rounded-xl p-5 w-96 bg-neutral-700'>
        <button onClick={closeBtnOnClick} className='cursor-pointer'><Image src="/svgs/close.svg" alt='close' height={30} width={30}></Image></button>
        <h3>New Print</h3>
        <form action={newPrintForm}>
            <input type="text" name='title' placeholder='Title' className='inp-normal w-full mb-3' required />
            <textarea name="description" placeholder='Description (Ex.: Print parameters, what it does)' className='inp-normal mb-3 w-full' required></textarea>
            <label htmlFor="stl">STL file:</label>
            <input type="file" className='inp-normal cursor-pointer mb-3' name='stl' accept='.stl' id='stl' required />

            <label htmlFor="gcode">GCODE file:</label>
            <input type="file" className='inp-normal cursor-pointer mb-3' name='gcode' accept='.gcode' id='gcode' required />

            <label htmlFor="photos">Photos: (optional)</label>
            <input type="file" multiple className='inp-normal cursor-pointer mb-3 w-full' name='photos' accept='image/*' id='photos' />

            <textarea name="info" placeholder='How the printing went (optional, can set later)' className='inp-normal w-full'></textarea>
            <br />
            <input type="submit" value="Create Print" className='btn-green' />
        </form>
    </div>
  </div>)
}
