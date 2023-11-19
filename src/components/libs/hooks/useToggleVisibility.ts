import { useCallback, useLayoutEffect, useState } from "react"


export const useToggleVisibilityState = (BreakPoint: number) => {
    const [open, setOpen] = useState<boolean>(() => {
        return window.innerWidth <= BreakPoint ? false : true
    })
    const [mobileWidth, setMobileWidth] = useState<boolean>(() => {
        return window.innerWidth <= BreakPoint ? true : false
    })

    const handleOpenCloseDescriptionOnClick = useCallback(() => {
        setOpen((prevOpen: boolean) => !prevOpen)        
    }, [])    
        
    const handleResizeScreen = useCallback(() => {
        const screenWidth = window.innerWidth
        if (screenWidth <= BreakPoint && !mobileWidth) {
            setMobileWidth(true)
            setOpen(false)
            
        } else if (screenWidth > BreakPoint && mobileWidth) {
            setMobileWidth(false)
            setOpen(true)         
        }
    }, [mobileWidth, BreakPoint])

    useLayoutEffect(() => {
        window.onresize = handleResizeScreen
        
        return () => {
            window.onresize = null
        }
    }, [handleResizeScreen, BreakPoint])

    return { open, mobileWidth, handleOpenCloseDescriptionOnClick }
}

export const useTogglePersonalAreaFormVisibilityState = (BreakPoint: number) => {
    const [ showForm, setShowForm] = useState(() => {
        return window.innerWidth <= BreakPoint ? false : true
    })
    
    const handleShowFormOnChange = useCallback(() => {
        setShowForm((prevShowForm: boolean) => !prevShowForm)
    }, [])

    const handleResize = useCallback(() => {
        const screenWidth = window.innerWidth
        if (screenWidth > BreakPoint && !showForm) {
            setShowForm(true)
        } else if (screenWidth <= BreakPoint && showForm) {
            setShowForm(false)
        } 
    }, [showForm, BreakPoint])

    useLayoutEffect(() => {
        window.onresize = handleResize
        
        return () => {
            window.onresize = null
        }
    }, [handleResize])

    return { showForm, handleShowFormOnChange }
}