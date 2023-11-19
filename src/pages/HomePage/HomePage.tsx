import React from "react";
import { HomePageContainer } from "components/app/Containers/HomePageContainer";
import { AppLayout } from "components/app/Layouts/AppLayout";
import { Banner } from "components/Home/Banner";
import { Summary } from "components/Home/Summary";
import { Study } from "components/Home/Study";
import { Speech } from "components/Home/Speech";


export const HomePage = () => {
    return (
        <AppLayout showFooter>
            <HomePageContainer>
                <Banner/>
                <Summary/>
                <Study/>
                <Speech/>
            </HomePageContainer>
        </AppLayout >
    )
}

export default HomePage