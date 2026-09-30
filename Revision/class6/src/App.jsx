import React,{useState} from 'react'

const App = () => {

  const [name, setName] = useState("")
  const [alluser,setAlluser] =useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(name)
    setName('')

    const newUser = [...alluser]
          newUser.push(name)
           setAlluser(newUser)
           console.log(alluser)
  }


  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
      
      <input type="text" placeholder='Enter your name' 
        value={name}
        required
        onChange={(e)=>{setName(e.target.value)}} />
      <button>Submit</button>

      </form>

      {alluser.map((ele)=>{
        return(
          <>
          <h1>{ele}</h1>
          </>
        )
      })}
    </div>
  )
}

export default App