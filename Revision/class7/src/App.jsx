import React, { useState } from 'react'
import Card from './assets/componets/Card'

const App = () => {
 
  const [userName, setuserName] = useState("")
  const [imageRole, setimageRole] = useState("")
  const [userRole, setuserRole] = useState("")
  const [userDesc, setuserDesc] = useState("")

  const [allUser, setallUser] = useState([])
  
  const submitHandler = (e)=>{
   console.log(userName,imageRole,userRole,userDesc)

   const oldUser = [...allUser]
       oldUser.push({userName,imageRole,userRole,userDesc})
       console.log(oldUser)
       setallUser(oldUser)
   e.preventDefault()
   
    setuserName("")
    setimageRole("")
    setuserRole("")
    setuserDesc("")


  }

  const deleteElement = (i)=>{
    const copyuser =[...allUser]
          copyuser.splice(i,1)
          setallUser(copyuser)
  }

  return (
    <div className='h-screen bg-black text-white '>

      <form action="flex flex-wrap p-2 " onSubmit={(e)=>{
        submitHandler(e)
      }}>
          <input 
           value={userName} 
           onChange={(e)=>{
            setuserName(e.target.value)
           }}
           className='border-2 px-5 py-2 rounded m-2 w-[48%]' type="text" placeholder='Enter Your Name' />
          <input 
          value={imageRole}
          onChange={(e)=>{
            setimageRole(e.target.value)
          }}
          className='border-2 px-5 py-2 rounded m-2 w-[48%]' type="text"  placeholder='Imgae URL'/>
          <input  
          value={userRole}
          onChange={(e)=>{
            setuserRole(e.target.value)
          }}
          className='border-2 px-5 py-2 rounded m-2 w-[48%]' type="text" placeholder='Enter Your Role'/>
          <input 
          value={userDesc}
          onChange={(e)=>{
            setuserDesc(e.target.value)
          }}
          className='border-2 px-5 py-2 rounded m-2 w-[48%]' type="text" placeholder='Enter Your Description' />
           <div className="w-full flex justify-center">
    <button className="px-5 py-2 bg-emerald-700 rounded w-[80%] active:scale-95 transition-all duration-700">
      Create User
    </button>
  </div>
      </form>
    



    <div className='px-4 py-10 flex flex-wrap justify-center gap-10 bg-black'>
      {allUser.map((ele ,idx)=>{
        return(
          <div className='w-[23vw] rounded-xl p-5 px-8 bg-white flex flex-col items-center  text-black '>
             <img className='object-cover object-center h-20 w-20 rounded-full' src={ele.imageRole} alt="" />

         <h1 className='text-2xl mt-2 font-semibold'>{ele.userName}</h1>
         <h5 className='text-base text-blue-600 text-lg font-semibold my-5'>{ele.userRole}</h5>
         <p className='text-xs leading-tight font-medium text-center'>{ele.userDesc}</p>    
         <button key={idx } onClick={()=>{
          deleteElement()
         }} className='px-4 py-2 rounded-md text-xs mt-1 bg-red-600 cursor-pointer active:scale-95'>Remove</button>
      </div>
        )
      })}
      </div>
    </div>
   
  )
}

export default App