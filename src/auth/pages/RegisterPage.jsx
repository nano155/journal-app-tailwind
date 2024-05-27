import { useMemo, useState } from "react"
import { useForm } from "../../hook/useForm"
import { Button, Input, LinkAuth } from "../components"

import { AuthLayout } from "../layout/AuthLayout"
import { useDispatch, useSelector } from "react-redux"
import { registerWithEmailAndPassword } from "../../store/auth/thunks"

const formData = {
  email:'',
  password:'',
  displayName:''
}

const formValidations = {
  email:[(value)=> value.includes('@'), 'El correo debe tener una @'],
  password:[(value)=> value.length >= 6, 'El password debe tener mas de 5 letras'],
  displayName:[(value)=> value.length >= 1, 'El nombre es obligatorio']
}
export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)

  const {status, errorMessage} =useSelector(state => state.auth)

  const {email, password, displayName, onInputChange, onReset, formState, emailValid, displayNameValid, passwordValid, validForm } = useForm(formData, formValidations)

  const dispatch = useDispatch()

  const isChecking = useMemo(() => status === 'checking', [status])
  
  

 
  const onSubmit = (e) =>{
    e.preventDefault()
    setFormSubmitted(true)
    if(!validForm) return
    dispatch(registerWithEmailAndPassword(formState))
    onReset()
  }
  
  return (
    <AuthLayout title={'Register'} onSubmit={onSubmit}>
      <Input name={displayName} type={'text'} nameV={'displayName'} nameP={'nombre completo'} valid={displayNameValid} onChange={onInputChange}/>
      <span className={`text-xs  ${!displayNameValid ?'hidden':'visible'} ${!!displayNameValid && formSubmitted ? 'text-error':'text-gray-500'}`} >{displayNameValid}</span>
      <Input name={email} valid={emailValid} type={'email'} nameV={'email'} nameP={'email'} onChange={onInputChange}/>
      <span className={`text-xs  ${!emailValid?'hidden':'visible'} ${!!emailValid && formSubmitted ? 'text-error':'text-gray-500'}`} >{emailValid}</span>
     <Input name={password} valid={passwordValid} type={'password'} nameV={'password'} nameP={'password'} onChange={onInputChange}/>
      <span className={`text-xs ${!passwordValid ?'hidden':'visible'} 
      ${!!passwordValid && formSubmitted ? 'text-error':'text-gray-500'} `} >{passwordValid}</span>
         <span className={`${errorMessage?'text-center':'hidden'} py-2 bg-red-100 opacity-75`}>{errorMessage}</span>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-6 ">
      <Button name={'CREAR CUENTA'} type={'submit'} statusButton={isChecking}/>   
          </div>
         <LinkAuth linkName={'Ya tienes una cuenta?  '} enlace={'Ingresar'} link={'/auth/login'}/>

    </AuthLayout>
  )
}
