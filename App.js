import React, { useState } from 'react'
import LoginPage from './loginPage/Index'
import Home from './component/Home'
import vp from './component/vp'

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      {
        visible ? (
          <LoginPage setVisible={setVisible} />
        )
          : (
            <Home />
          )
      }
    </>
  )
}

export default App