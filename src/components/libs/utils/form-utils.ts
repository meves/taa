import { validateComment, validateEmail, validateName, validatePassowrd } from "./validators"
import { Input, SetInputErrors } from "../types/form-types"
import { FormErrors } from "store/appText/russianText"


export const comparePasswords = (password: string, re_password: string): boolean => {
    if (Boolean(password) && Boolean(re_password)) {
        return password === re_password
    }
    return false
}

type InputErrors = {
    first_name?: string
    last_name?: string
    email?: string
    password?: string
    re_password?: string
    old_password?: string
    comment?: string
}

export const isInputErrors = (inputErrors: InputErrors) => {
    return  Boolean(inputErrors.first_name) ||
            Boolean(inputErrors.last_name) ||
            Boolean(inputErrors.email) ||
            Boolean(inputErrors.password) ||
            Boolean(inputErrors.re_password) ||
            Boolean(inputErrors.old_password) ||
            Boolean(inputErrors.comment)
}

export function validateInputsAndSetInputErrors<T>(
    input: Input,
    errors: FormErrors,
    setInputErrors: SetInputErrors<T>
) {
    const { name, value } = input
    if (!value) {
        setInputErrors((prevInputErrors: any) => ({...prevInputErrors, [name]: ""}))           
    } else {
        switch (name) {
            case "first_name":
                validateName(value)
                ? setInputErrors((prevRequiredErrors: any) => ({...prevRequiredErrors, [name]: ""}))
                : setInputErrors((prevRequiredErrors: any) => ({...prevRequiredErrors, [name]: errors.wrongFirstName}))
            break
            case "last_name":
                validateName(value)
                ? setInputErrors((prevRequiredErrors: any) => ({...prevRequiredErrors, [name]: ""})) 
                : setInputErrors((prevRequiredErrors: any) => ({...prevRequiredErrors, [name]: errors.wrongLastName}))
            break
            case "email":
                validateEmail(value)
                ? setInputErrors((prevRequiredErrors: any) => ({...prevRequiredErrors, [name]: ""})) 
                : setInputErrors((prevRequiredErrors: any) => ({...prevRequiredErrors, [name]: errors.wrongCredentials}))              
            break
            case "password":
                validatePassowrd(value) && value 
                ? setInputErrors((prevRequiredErrors: any) => ({...prevRequiredErrors, [name]: ""})) 
                : setInputErrors((prevRequiredErrors: any) => ({...prevRequiredErrors, [name]: errors.wrongCredentials}))             
            break
            case "re_password":
                validatePassowrd(value) && value
                ? setInputErrors((prevRequiredErrors: any) => ({...prevRequiredErrors, [name]: ""})) 
                : setInputErrors((prevRequiredErrors: any) => ({...prevRequiredErrors, [name]: errors.wrongCredentials}))             
            break
            case "old_password":
                validatePassowrd(value) && value
                ? setInputErrors((prevRequiredErrors: any) => ({...prevRequiredErrors, [name]: ""})) 
                : setInputErrors((prevRequiredErrors: any) => ({...prevRequiredErrors, [name]: errors.wrongCredentials}))             
            break  
            case "comment":
                validateComment(value) && value
                ? setInputErrors((prevRequiredErrors: any) => ({...prevRequiredErrors, [name]: ""}))
                : setInputErrors((prevRequiredErrors: any) => ({...prevRequiredErrors, [name]: errors.wrongComment}))      
        }
    }
}

export function setErrorsToRequiredIfInputValueIsEmpty<T>(
    input: Input,
    required: string,
    setInputErrors: SetInputErrors<T>
) {
    const { name, value } = input
    if (!value) {
        setInputErrors((prevInputErrors: any) => ({...prevInputErrors, [name]: required}))
    }
}