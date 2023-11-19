import React from "react";
import styled from "styled-components";


const FormLegendWrapper = styled.legend`
    margin: 0 auto;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    /* padding-bottom: 4px; */
    padding: 0;
    text-align: center;

    @media screen and (min-width: 768px) {
        /* padding-bottom: 12px; */
        font-size: 24px;
        line-height: 40px;
    }
`;

export const FormLegend = React.memo(({
    legend,
    wrapper
} : {
    legend: string
    wrapper?: string
}) => {
    return (
        <FormLegendWrapper>{legend}</FormLegendWrapper>
    )
})


export const PersonalAreaFormLegend = styled(FormLegend)`
    @media screen and (min-width: 1200px) {
        wrapper {
            /* padding-bottom: 0; */
            text-align: center;
        }
    }
    @media screen and (min-width: 1910px) {
        wrapper {
            /* padding-bottom: 12px; */
        }
    }
`;