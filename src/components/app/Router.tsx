import React, { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { useAppSelector } from "store/redux-store/libs/hooks"
import { selectIsAuth } from "store/redux-store/slices/authSlice"
import { withSuspense } from "components/libs/hocs/withSuspense"

import HomePage from "pages/HomePage/HomePage"
import NotFoundPage from "pages/ErrorsPages/NotFoundPage"
import ServerErrorPage from "pages/ErrorsPages/ServerErrorPage"

const FAQPage = lazy(() => import("pages/FAQPage/FAQPage"))
const TermsOfServisePage = lazy(() => import("pages/LegalPages/TermsOfServisePage"))
const PrivacyStatementPage = lazy(() => import("pages/LegalPages/PrivacyStatementPage"))

const RegistrationPage = lazy(() => import("pages/FormsPages/RegistrationPage"))
const ThankForRegistrationPage = lazy(() => import("pages/InformationsPages/ThankForRegistrationPage"))
const NotActivatedPage = lazy(() => import("pages/InformationsPages/NotActivatedPage"))

const LoginPage = lazy(() => import("pages/FormsPages/LoginPage"))
const ChangePasswordPage = lazy(() => import("pages/FormsPages/ChangePasswordPage"))
const ForgetPasswordPage = lazy(() => import("pages/FormsPages/ForgetPasswordPage"))
const NewPasswordPage = lazy(() => import("pages/FormsPages/NewPasswordPage"))

const PersonalAreaPage = lazy(() => import("pages/PersonalAreaPage/PersonalAreaPage"))
const AfterRemovedAccountPage = lazy(() => import("pages/InformationsPages/AfterRemoveAccountPage"))

const StartTestVideoPage = lazy(() => import("pages/RecordVideoPages/StartTestVideoPage"))
const RecordTestVideoPage = lazy(() => import("pages/RecordVideoPages/RecordTestVideoPage"))
const InfoAndStartVideoPage = lazy(() => import("pages/RecordVideoPages/InfoAndStartVideoPage"))
const RecordVideoPage = lazy(() => import("pages/RecordVideoPages/RecordVideoPage"))

const WatchVideoPage = lazy(() => import("pages/MyVideosPages/WatchVideoPage"))
const MyNotesPage = lazy(() => import("pages/MyVideosPages/MyNotesPage"))



export const AppRouter = () => {
    const isAuth = useAppSelector(selectIsAuth)

    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            
            {/* Аутентификация */}
            <Route path="/login" element={withSuspense(LoginPage)} />
            <Route path="/registration" element={withSuspense(RegistrationPage)} />
            {/* Legal Pages */}
            <Route path="/privacy" element={withSuspense(PrivacyStatementPage)} />
            <Route path="/terms" element={withSuspense(TermsOfServisePage)} />
            {/* Info Pages */}
            <Route path="/thank" element={withSuspense(ThankForRegistrationPage)} />
            <Route path="/notactivated" element={withSuspense(NotActivatedPage)} />
            <Route path="/removed" element={withSuspense(AfterRemovedAccountPage)} />
            <Route path="/faq" element={withSuspense(FAQPage)} />
            {/* Пароли */}
            <Route path="/forget_password" element={withSuspense(ForgetPasswordPage)} />
            <Route path="/new_password" element={withSuspense(NewPasswordPage)} />
            {/* Ошибки */}
            <Route path="/error" element={<ServerErrorPage />} />
            <Route path="/notfound" element={<NotFoundPage />} />

            <Route path="/lk" element={isAuth ? withSuspense(PersonalAreaPage) : <HomePage/>} />
            {/* Видео */}
            {isAuth && <Route path="/start" element={withSuspense(StartTestVideoPage)} />}
            {isAuth && <Route path="/test" element={withSuspense(RecordTestVideoPage)} />}
            {isAuth && <Route path="/info" element={withSuspense(InfoAndStartVideoPage)} />}
            {isAuth && <Route path="/record" element={withSuspense(RecordVideoPage)} />}
            {/* Записи */}
            {isAuth && <Route path="/mynotes" element={withSuspense(MyNotesPage)} />}
            {isAuth && <Route path="/watch" element={withSuspense(WatchVideoPage)} />}
            {/* Пароли */}
            {<Route path="/change_password" element={withSuspense(ChangePasswordPage)} />}

            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRouter