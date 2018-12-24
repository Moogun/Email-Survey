import React from 'react';
export default ({label, input, className, meta: {error, touched} }) => {
  console.log('className', className);
  return (
    <div>
      {input.name !== 'Email Body'
      ? <input type="text" {...input} className={className} />
      : <textarea type="text" {...input} className={className}/> }
      <div>
        {touched && error}
      </div>
    </div>
  )
}
