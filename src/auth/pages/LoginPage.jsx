import { useDispatch, useSelector } from "react-redux"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hook"
import { loginWithEmailAndPassword, startGoogleSignIn } from "../../store/auth/thunks"
import { Button, ButtonGoogle, Input, LinkAuth } from "../components"
import { useMemo, useState } from "react"

const formValidations = {
  email:[((value)=> value.length >=1), 'El correo electronico, es requerido!'],
  password:[((value)=>value.length >=1), 'La contrasena, es requerida!']
}

const formData = {
  email:'',
  password:''
}

export const LoginPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const {email, password, onInputChange, onReset, formState, validForm, emailValid, passwordValid} = useForm(formData, formValidations)

  const {status, errorMessage} = useSelector(state => state.auth)
  const dispatch = useDispatch()


  const isAutheticating = useMemo(() => status === 'checking', [status])

  
  const onSubmit = (e) =>{
    e.preventDefault()

    if(!validForm) return setFormSubmitted(true)
    
    dispatch(loginWithEmailAndPassword(formState))
    
    onReset()
  }
  
  const onGoogleSignin = () =>{
    
    dispatch(startGoogleSignIn())
    console.log('log with google');
  }

  
  return (
    <>
     <AuthLayout title="Login" onSubmit={onSubmit}>
     <Input name={email} nameP={'ingrese su email'} nameV={'email'} type={'email'} onChange={onInputChange} />
     <span className={`text-xs text-error ${!!emailValid && formSubmitted ? 'visible':'hidden'}`} >{emailValid}</span>
     <Input name={password} nameP={'ingrese su password'} nameV={'password'} type={'password'} onChange={onInputChange} />
     <span className={`text-xs text-error ${!!passwordValid && formSubmitted ? 'visible':'hidden'}`} >{passwordValid}</span>

     <p className={`${errorMessage?'text-center':'hidden'} py-2 bg-red-100 opacity-75`}>{errorMessage}</p>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-6 ">
      <Button type='submit' name={'LOGIN'} statusButton={isAutheticating }/>
      <Button type='button' onClick={onGoogleSignin} name={<ButtonGoogle/>} statusButton={isAutheticating}/>     
          </div>
         <LinkAuth linkName={'No tienes una cuenta?  '} enlace={'Registrate'} link={'/auth/register'}/>
     </AuthLayout>

    </>
  )
}
