import React from 'react';

export default ({label, input, meta: {error, touched} }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      {input.name !== 'body' ? <input type="text" {...input}/> : <textarea rows="5" {...input}/>}
      <div>
        {touched && error}
      </div>
    </div>
  )
}
