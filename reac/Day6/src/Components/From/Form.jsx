import React, {useState} from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [passwrod, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${name}`)
    }

    return (
    <div  className='flex justify-around items-center p-10 '>
        <form action="" onSubmit={handleSubmit} className='flex flex-col items-center justify-center border border-white shadow-2xl p-15 gap-5 rounded-2xl' >
            <h3 className='font-bold  color bg-gray-500 text-white rounded-2xl px-10 py-1'>Sign In</h3>
            <input type="text"

                name=""
                className='border border-black rounded-2xl p-2'
                id=""
                placeholder='Enter your name'
                onChange={(e)=> setName(e.target.value)}
                value={name} 
                />
            <input type="passwrod"
                name=""
                className='border border-black rounded-2xl p-2'
                id=""
                placeholder='Enter the password'
                onChange={(e)=> setPassword(e.target.value)}
                value={passwrod}
                />
            <input type="submit" className='font-bold  color bg-blue-500 text-white rounded-2xl px-10 py-1' name="" id="" />
        </form>
    </div>
  )
}

export default Form