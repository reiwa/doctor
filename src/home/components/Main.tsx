import React, { FunctionComponent } from 'react'

const Main: FunctionComponent = ({ children }) => {
  return (
    <main
      className={'h-full max-h-full w-full max-w-lg mx-auto'}
      style={{ maxHeight: 640 }}
    >
      {children}
    </main>
  )
}

export default Main
