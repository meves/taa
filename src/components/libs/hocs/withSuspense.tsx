import React, { Suspense, ComponentType } from "react";
import { AppPreloader } from "../../common/Preloader/Preloader";


type InjectedProps = {};

export function withSuspense<PropsType extends JSX.IntrinsicAttributes>(Component: ComponentType<PropsType>) {
    function SuspenseComponent(props: InjectedProps) {
        return (
            <Suspense fallback={<AppPreloader />}>
                <Component {...props as PropsType} />
            </Suspense>
        )
    }
    return <SuspenseComponent />
}