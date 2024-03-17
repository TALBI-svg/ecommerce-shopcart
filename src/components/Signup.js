import React, { useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { validate } from 'react-email-validator'

function Signup() {
  const navigate=useNavigate()
  const [isEmailValid, setIsEmailValid] = useState(false)
  const[msgerr,setMsgerr]=useState('')
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    rpassword: ''
  })

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.nom !== '' && form.prenom !== '' && validate(form.email) === true) {
      setIsEmailValid(true)
    } else {
      setMsgerr('votre informations est invalide!')
    }
  }

  const confirmSignup = (e) => {
    e.preventDefault()
    if (form.password !== '' && form.password.length>=8 && form.rpassword === form.password) {
      setMsgerr('')
      return navigate('/home')
    } else {
      setMsgerr('les mots de passe ne correspondent pas!')
    }
  }

  const signup = (
    <div>
      <p className='title-area'>Bienvenue dans la création de votre compte</p>
      <form className='form-area'>
        <div className="mb-3 mt-3">
          <input type="text" name='nom' onChange={handleInput} className="form-control" placeholder='Entrez votre Nom' />
        </div>
        <div className="mb-3">
          <input type="text" name='prenom' onChange={handleInput} className="form-control" placeholder='Entrez votre Prenom' />
        </div>
        <div className="mb-5">
          <input type="email" name='email' onChange={handleInput} className="form-control" placeholder='Entrez votre Email' />
        </div>
        {msgerr===''?(
          <span></span>
        ):(
          <div>
            <p className='alert alert-danger border-0'>{msgerr}</p>
          </div>
        )}
        <button type="submit" onClick={handleSubmit} className="w-100 mb-2">SINSCRIRE</button>
        <button type="submit" className="w-100 mb-3"><Link className='text-decoration-none text text-white' to='/'>ACCEUIL</Link></button>
      </form>
    </div>
  )

  const check_password = (
    <div>
      <p className='title-area'>Bienvenue dans la création de votre compte</p>
      <form className='form-area'>
        <div className='text text-center mt-3 area-credentials'>
          <h4>Mon Email:</h4>
          <p>{form.email}</p>
          <h4>Mon Nom:</h4>
          <p>{form.nom}</p>
          <h4>Mon Prenom:</h4>
          <p>{form.prenom}</p>
        </div>
        <div className="mb-1">
          <input type="password" name='password' onChange={handleInput} value={form.password} className="form-control" placeholder='Entrez votre Mot de Passe' />
        </div>
        <div className="mb-5">
          <input type="password" name='rpassword' onChange={handleInput} value={form.rpassword} className="form-control" placeholder='Retaptez votre Mot de Passe' />
        </div>
        {msgerr===''?(
          <span></span>
        ):(
          <div>
            <p className='alert alert-danger border-0'>{msgerr}</p>
          </div>
        )}
        <button type="submit" onClick={confirmSignup} className="w-100 mb-2">SINSCRIRE</button>
        <button type="submit" className="w-100 mb-3"><Link className='text-decoration-none text text-white' to='/'>ACCEUIL</Link></button>
      </form>
    </div>
  )

  return (
    <div className='SIGNUP d-flex justify-content-center align-items-center'>
      {isEmailValid === false ? (
        signup
      ) : (
        check_password
      )}
    </div>
  )
}

export default Signup