"use client";

import React, { useState } from 'react'
import NewPrintModal from './NewPrintModal';

export default function PrintsPage() {
    const [isOpen, setIsOpen] = useState(false);
  return (<>
    <button className='btn-green' onClick={() => setIsOpen(true)}>New print</button>

    {isOpen && <NewPrintModal closeBtnOnClick={() => setIsOpen(false)}/>}
  </>)
}
