import React from 'react';
export default ({label, input, style, meta: {error, touched} }) => {
  return (
    <>
      {input.name !== 'body'
      ? <input type="text" {...input} className={style} />
      : <textarea type="text" {...input} className={style}/> }
      <div style={{fontSize: "1rem", color: "red"}}>
        {touched && error}
      </div>
    </>
  )
}
