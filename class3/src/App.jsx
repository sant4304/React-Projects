import React from 'react'
import Card from './Component/Card'
import Button from './Component/Button'

const App = () => {
 const user = ["sarthak","rahul","ajay","rohit"]

  return (
    <div className='p-10 h-screen  bg-black '>
     
     {user.map(function(ele){
      return <Card user={ele} />
     })}
    
      
     {/* {Card("Rahul")}
     {Card("Ajay")} */}
     {/* <Card user="Hasrh" age="23"/>
     <Card user="Rahul" age="44"/>
     <Button text="Buy Now"/>
     <Button text="explore "/> */}
    </div>
  )
}

export default App

