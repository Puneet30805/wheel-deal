import { Button } from '@/components/ui/button'
import React, { useState }  from 'react'
import Modal from './Modal'

const GoogleSearch = () => {
const [showmodal , setshowmodal] = useState(false);
  return (
    <div className=' bg-gray  rounded-2xl'  >
      <Button onClick={()=>setshowmodal(true)}  >   CITY
      </Button>
   { showmodal && <Modal onClose={()=>setshowmodal(false)}/>}
   
    </div>
  )
}

export default GoogleSearch
