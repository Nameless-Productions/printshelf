import { getPrint } from '@/lib/prints/getPrint';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function PrintViewerPage({ params }: { params: { id: number } }) {
    const {id} = await params;
    const print = await getPrint(id);
    if(!print) return redirect("/404")
  return (<>
    <h3>{print.title}</h3>
    <p><b>Description:</b> <br />{print.description}</p>
    <p><b>Info:</b> <br />{print.info}</p>
    <br />
    <b>Images: </b>
    {
        print.imageUrls.map((i) => (
            <Image key={i} src={i} alt='image' width={100} height={100}></Image>
        ))
    }
  </>)
}
