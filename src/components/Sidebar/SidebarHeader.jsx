import React from 'react'

export default function SidebarHeader({ id }) {
  return (
    <div className='client'>
      <div className='client__icon icon icon--male'></div>
      <form className='client__form'>
        <input type='text' placeholder='Search or start new chat' className='client__search search'/>
      </form>
    </div>
  )
}
