import React from 'react'

export default function SectionHeaders({subHeader, mainHeader}) {
  return (
    <div>
        
      <div className="text-center mb-4">
        <h3 className="text-gray-500 font-semibold upperase leading-4">
          {subHeader}
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">{mainHeader}
            
        </h2>
      </div>


    </div>
  )
}
