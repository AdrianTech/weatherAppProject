import React from "react";
import SkeletonLoading from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ForecastSelectSkeleton() {

    return (
        <div key={Date.now()}>
            <SkeletonLoading height={`17px`} width="30%"/>
            <SkeletonLoading height={`23px`} width="30%" />
        </div>
    )
}