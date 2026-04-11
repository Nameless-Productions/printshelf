"use client";

import { deletePrint } from '@/lib/prints/deletePrint';
import React from 'react'

export default function DeleteButton({id}: {id: number}) {
  return (
    <button className='btn-red' onClick={async () => {
        await deletePrint(id)
        location.href = "/prints"
    }}>Delete</button>
  )
}
