import React from 'react'

const Form = ({setEmail, setPassword, setCpassword, checkAuth}) => {
  return (
    <div>
         <input onChange={event => setEmail(event.target.value)} />
          <input onChange={(event) => setPassword(event.target.value)} />
          <input onChange={(event) => setCpassword(event.target.value)} />
          <button onClick={checkAuth}>Login</button>
    </div>
  )
}

export default Form;