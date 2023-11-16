import { useState, useEffect } from 'react';

const Error = ({children}) => {
  return (
    
        <div>
            <p className="bg-red-800 text-center text-white uppercase font-bold p-3 rounded-md">
                {children}
            </p>
        </div>)
  
}

export default Error
