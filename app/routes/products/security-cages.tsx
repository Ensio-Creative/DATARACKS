import React from 'react';
import Hero from '~/components/Hero';
import type { Route } from './+types/security-cages';

export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Security Cages | Dataracks"
        },
    ];
};

const SecurityCages = () => {
    return (
        <>
            <Hero title="Security Cages" image='/images/dataracks-security-cages-header.jpg' />
        </>
    );
};

export default SecurityCages;