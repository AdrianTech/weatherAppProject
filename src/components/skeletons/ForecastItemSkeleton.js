import React from "react";
import { Items } from "../../styledComponents/forecast.styled";
import SkeletonLoading from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function ForecastItemSkeleton() {

    return (
        <>
            {Array(5).fill().map((item, index) => (
                <Items key={index}>
                    <SkeletonLoading duration={2} height={`15px`} width={100} />
                    <SkeletonLoading duration={2} height={`15px`} width="75%" />
                    <SkeletonLoading duration={2} height={`15px`} width={100} />
                    <SkeletonLoading circle
                        height="40px"
                        width="40px"
                        containerClassName="avatar-skeleton" />
                </Items>
            ))
            }
            </>
    )
}