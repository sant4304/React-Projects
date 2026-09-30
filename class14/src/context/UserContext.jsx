import React, { createContext } from 'react'

export const  UserDataContext = createContext()

const UserContext = (props) => {
    console.log(props)

    const user ='Sharthak'
  return (
   <UserDataContext.Provider value={user}>

    {props.children}
   </UserDataContext.Provider>
  )
}

export default UserContext
