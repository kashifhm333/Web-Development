import React from 'react'
import Script from 'next/script'
const page = () => {
  return (
    <div>
       <Script>
        {`alert("Hello World")`}
       </Script>
      
    </div>
  )
}

export default page
