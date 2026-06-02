import React from 'react'

function Button(props) {
  return (
    <div>
        <button  className='w-[150px] mt-5 h-[50px] bg-orange-500 px-8 rounded-3xl py-3 hove:bg-orange-400'>
            
        {props.contant}
        </button>
    </div>
  )
}

export default Button