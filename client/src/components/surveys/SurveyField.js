import React from 'react';

export default ({label, input, meta: {error, touched} }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="text" {...input}/>
      <div>
        {touched && error}
      </div>
    </div>
  )
}
