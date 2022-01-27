import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (

   <section className='bg-dark text-white p-5'>

        <h1>Error.Page Does Not Exist</h1>
        <Link className="btn btn-danger" to='/'>Back To Home</Link>  
   </section>
  
  
  
  
);
}

export default ErrorPage;
