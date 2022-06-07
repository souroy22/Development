import React from 'react';

const App = () => {

  const onSubmit = () => {
    console.log("Click");
  }
  
  return (
    <div>
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default App;