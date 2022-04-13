import React from "react";
import { Items } from "../../styledComponents/forecast.styled";
import SkeletonLoading from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function ForecastItemSkeleton() {

    return (
        <>
            {Array(5).fill().map((item, index) => (
                <Items key={index}>
                    <SkeletonLoading duration={2} height={`25px`} width="100%" />
                    <SkeletonLoading circle
                        height="45px"
                        width="45px"
                        containerClassName="avatar-skeleton" />
                    <SkeletonLoading duration={2} height="23px" width="230px" />
                    <SkeletonLoading duration={2} height={`23px`} width="160px" />
                </Items>
            ))
            }
        </>
    )
}