import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='LOGIN d-flex justify-content-center align-items-center'>
      <div>
        <div className='mb-3'>
          <img src={"./image/tgr/logo.png"} className='img-area' alt="hero"/>
        </div>
        <form className='form-area'>
          <div className='mb-3'>
              <p className='text text-center'>Se connecter</p>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder='Entrez votre Email'/>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder='Entrez votre Mot de passe'/>
          </div>
          <div className="mb-2 form-check">
            <label className="form-check-label" htmlFor="exampleCheck1">Mémoriser mot de passe</label>
            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
          </div>
          <div className='mb-3 text text-center'>
            <Link className='text-decoration-none link-area' to='/forgotPassword'>Oublier mot de passe?</Link>
          </div>
          <button type="submit" className="w-100 mb-2">SE CONNECTER</button>
          <button type="button" className="w-100 mb-3"><Link className='text-decoration-none text text-white' to='/signup'>CRÈER UN COMPTE</Link></button>
        </form>
      </div>
      
    </div>
  )
}

export default Login