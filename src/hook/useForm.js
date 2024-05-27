import { useEffect, useMemo, useState } from "react"

export const useForm = (initialForm ={}, formValidations={}) => {
    const [formState, setFormState] = useState( initialForm )
    const [formValidation, setFormValidation] = useState({})

    useEffect(() => {
      createValidators()
    }, [formState])

    useEffect(()=>{
        setFormState(initialForm)
    },[initialForm])
    
    const onReset = ()=>{
        setFormState(initialForm)
    }

    const validForm = useMemo(() => {
        for (const formvalues of Object.keys(formValidation)) {
            if(formValidation[formvalues] !== null){
    
                return false
            }
        }

        return true
            
    }, [formValidation])
        



    const onInputChange = ({target}) =>{
        const {name, value,} = target
        setFormState({
            ...formState, 
            [name]: value
        })
    }

    const createValidators = () =>{

        const formCheckValues ={};
        for (const formField of Object.keys(formValidations)) {

            const [fn, errorMessage='Este campo es requerido'] = formValidations[formField]

            formCheckValues[`${formField}Valid`] = fn(formState[formField])?null:errorMessage

        }

        setFormValidation(formCheckValues)
    }
    

  return {
    ...formState,
    formState,
    onInputChange, 
    onReset,
    validForm,
    ...formValidation

  }
}