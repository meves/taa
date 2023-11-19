import { ChangeEvent, FocusEvent, useCallback, useMemo, useState } from "react"
import { SetInputErrors, SetInputVisited } from "../types/form-types"
import { validateInputsAndSetInputErrors } from "../utils/form-utils"
import { FormErrors } from "store/appText/russianText"


export const useCheckbox = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const handleCheckedOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked((prevIsChecked: boolean) => !prevIsChecked)
    }, [])

    return { isChecked, handleCheckedOnChange }
}

export function useHandleInputOnBlur<T, P>(
    required: string, 
    setInputErrors: SetInputErrors<T>, 
    setInputVisited: SetInputVisited<P>
) {
    const handleInputOnBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        if (!value) {
            setInputErrors((prevInputErrors: any) => ({...prevInputErrors, [name]: required}))
        }
        setInputVisited((prevInputVisited: any) => ({...prevInputVisited, [name]: true}))       
    }, [setInputErrors, setInputVisited, required])

    return handleInputOnBlur
}

export function useHandleInputOnFocus<T>(errors: FormErrors, setInputErrors: SetInputErrors<T>) {
    const handleInputOnFocus = useCallback((event: FocusEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        validateInputsAndSetInputErrors<T>({name, value}, errors, setInputErrors)        
    }, [setInputErrors, errors])
    
    return handleInputOnFocus
}

export const useRegistrationFormInitialState = (required: string) => {
    const initialInputState = useMemo(() => ({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        re_password: ""
    }), [])

    const initialVisited = useMemo(() => ({
        first_name: false,
        last_name: false,
        email: false,
        password: false,
        re_password: false
    }), [])

    const initialInputErrors = useMemo(() => ({
        first_name: "",
        last_name: "",
        email: required,
        password: required,
        re_password: required
    }), [required])

    return { initialInputState, initialVisited, initialInputErrors } 
}

export const useLoginFormInitialState = (required: string) => {
    const initialInputState = useMemo(() => ({
        email: "",
        password: ""
    }), [])

    const initialVisited = useMemo(() => ({
        email: false,
        password: false
    }), [])

    const initialInputErrors = useMemo(() => ({
        email: required,
        password: required
    }), [required])

    return { initialInputState, initialVisited, initialInputErrors } 
}

export const useChangePasswordFormInitialState = (required: string) => {
    const initialInputState = useMemo(() => ({
        old_password: "",
        password: "",
        re_password: ""
    }), [])

    const initialVisited = useMemo(() => ({
        old_password: false,
        password: false,
        re_password: false
    }), [])

    const initialInputErrors = useMemo(() => ({
        old_password: required,
        password: required,
        re_password: required
    }), [required])

    return { initialInputState, initialVisited, initialInputErrors } 
}

export const useForgetPasswordFormInitialState = (required: string) => {
    const initialInputState = useMemo(() => ({
        email: ""
    }), [])

    const initialVisited = useMemo(() => ({
        email: false
    }), [])

    const initialInputErrors = useMemo(() => ({
        email: required
    }), [required])

    return { initialInputState, initialVisited, initialInputErrors } 
}

export const useNewPasswordFormInitialState = (required: string) => {
    const initialInputState = useMemo(() => ({
        password: "",
        re_password: ""
    }), [])

    const initialVisited = useMemo(() => ({
        password: false,
        re_password: false
    }), [])

    const initialInputErrors = useMemo(() => ({
        password: required,
        re_password: required
    }), [required])

    return { initialInputState, initialVisited, initialInputErrors } 
}

export const usePersonalAreaFormInitialState = () => {
    const initialInputState = useMemo(() => ({
        first_name: "",
        last_name: "",
        email: ""
    }), [])

    const initialVisited = useMemo(() => ({
        first_name: false,
        last_name: false,
        email: false
    }), [])

    const initialInputErrors = useMemo(() => ({
        first_name: "",
        last_name: "",
        email: ""
    }), [])

    return { initialInputState, initialVisited, initialInputErrors } 
}

export const useSubmitEmailFormInitialState = (required: string) => {
    const initialInputState = useMemo(() => ({
        email: ""
    }), [])

    const initialVisited = useMemo(() => ({
        email: false
    }), [])

    const initialInputErrors = useMemo(() => ({
        email: required
    }), [required])

    return { initialInputState, initialVisited, initialInputErrors } 
}

export const useCommentInitialState = () => {
    const initialVisited = useMemo(() => ({
        comment: false
    }), [])

    const initialInputErrors = useMemo(() => ({
        comment: ""
    }), [])

    return { initialVisited, initialInputErrors } 
}