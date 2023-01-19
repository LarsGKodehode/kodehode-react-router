import { createContext, useContext } from 'react'

// Createing the context
const MyContext = createContext(null)

function HookState() {
  return (
    // Wrap some or all of our application 
    <MyContext.Provider value={"dark"}>
      
      <Consumer />

    </MyContext.Provider>
  )
}

function Consumer() {
  const context = useContext(MyContext)

  return (
    <div className={context}>
    </div>
  )
}