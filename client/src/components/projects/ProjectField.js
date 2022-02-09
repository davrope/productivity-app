// SurveyField contains logic to render a single
// label and text input
import React from 'react';
import  '../../styles/form.css'

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className = "field">
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px', color: 'red' }}>
        {touched && error}
      </div>
    </div>
  );
};

// export default({input, label, meta: {error, touched}})=>{
//   return(
//     <div className='row'>
//       <div className='col-25'>
//         <label>{label} </label>
//       </div>
//       <div className='col-75'>
//         <input {...input}/>
//       </div>
//     </div>
//   )
// }

// export default ({ input, label, meta: { error, touched } }) => {
//   return (
//     <div className = "six wide field">
//       <label>{label}</label>
//       <input {...input} style={{ marginBottom: '5px' }} />
//       <div className="red-text" style={{ marginBottom: '20px', color: 'red' }}>
//         {touched && error}
//       </div>
//     </div>
//   );
// };