import React from 'react'

function Jewellary() {
  return (
    <div>
      <h2>JEWELLARY PRODUCTS</h2>
      <img src="data:image/jpeg;base64,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"
       height="200px" width="200px" alt="NO IMAGE"/>
    </div>
  )
}

export default Jewellary