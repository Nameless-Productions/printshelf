import { getPrint } from '@/lib/prints/getPrint';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import DeleteButton from './DeleteButton';
import STLviewer from './STLviewer';

export default async function PrintViewerPage({ params }: { params: { id: number } }) {
    const {id} = await params;
    const print = await getPrint(id);
    if(!print) return redirect("/404")
  return (<>
    <h3>{print.title}</h3>
    <p><b>Description:</b> <br />{print.description}</p>
    <p><b>Info:</b> <br />{print.info}</p>
    <Link href={`/prints/${id}/gcode`}><button className='btn-green mb-3'>GCODE file</button></Link>
    <br />
    <Link href={`/prints/${id}/stl`}><button className='btn-green mb-3'>STL file</button></Link>
    <br />
    <DeleteButton id={id} />
    <br />
    <b>STL Viewer:</b>
    <STLviewer url={`/prints/${id}/stl`}/>
    <br />
    <b>Images: </b>
    <div className='not-prose flex flex-wrap gap-2 items-start'>
      {
          print.imageUrls.map((i) => (
              <Image key={i} src={i} alt='image' width={200} height={200} className='rounded w-auto h-auto shrink-0'></Image>
          ))
      }
    </div>
  </>)
}
