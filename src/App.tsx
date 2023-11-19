import React, { useCallback, useEffect, useState } from "react"
import { useAppDispatch } from "store/redux-store/libs/hooks"
import { activatedThunk, checkRecoveredPasswordThunk } from "store/redux-store/slices/authSlice"
import { AppPreloader } from "components/common/Preloader/Preloader"
import ErrorBoundary from "components/app/ErrorBoundary/ErrorBoundary"
import AppRouter from "components/app/Router"
import { AfterPasswordRecoveryModal } from "components/common/Modals/Parents/Modals"
import { Cookie } from "components/common/Modals/Parents/Cookie"
import { useNavigate } from "react-router-dom"
import { HAS_TO_LOGIN, HAS_TO_REGISTER, NOT_ACTIVATED } from "store/redux-store/libs/constants"
import { checkCookiesAcceptedThunk } from "store/redux-store/slices/cookieSlice"
import { setInitialLanguageThunk } from "store/redux-store/slices/langSlice"
import styled from "styled-components"


const AppWrapper = styled.div`
  width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1192px;
  }
  @media screen and (min-width: 1440px) {
    width: 1432px;
  }
  @media screen and (min-width: 1910px) {
    width: 1902px;
  }
`;

const App = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()  

  const initializeApp = useCallback(async () => {  
    dispatch(checkRecoveredPasswordThunk())
    dispatch(setInitialLanguageThunk())      
    dispatch(checkCookiesAcceptedThunk())
    dispatch(activatedThunk())
      .then(message => {
        switch (message) {
          case NOT_ACTIVATED:
            navigate("/notactivated")
            return
          case HAS_TO_LOGIN:
            navigate("/login")
            return
          case HAS_TO_REGISTER:
            navigate("/registration")
            return
          default:
            return
        }
      })
      .catch((error) => {
        navigate("/error")
        return
      })
      .finally(() => {
        setLoading(false)
      })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    initializeApp()
  }, [initializeApp])
  
  if (loading) {
    return <AppPreloader />
  }

  return (
    <AppWrapper>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>

      <Cookie />
      <AfterPasswordRecoveryModal />
    </AppWrapper>
  );
}

export default App