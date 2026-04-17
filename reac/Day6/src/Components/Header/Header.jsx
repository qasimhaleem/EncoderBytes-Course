import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between p-8 border text-xl border-white shadow-2xl'>
        <div className='font-bold'>Logo</div> 
        <ul className='flex justify-center gap-5'>
            <li> <Link to={'/'}> Home </Link></li>
            <li> <Link to={'/about'}>About  </Link></li>
            <li> <Link to={'/contact'}> Contact </Link></li>
            <li> <Link to={'/signin'}> Sign in </Link></li>
        </ul>
    </div>
  )
}

export default Header