import React from 'react';
import Hero from '~/components/Hero';
import type { Route } from './+types/server-cabinets';

export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Aisle Containment | Dataracks"
        },
    ];
};

const AisleContainment = () => {
    return (
        <>
            <Hero title="Aisle Containment" image='/images/dataracks-aisle-header.jpg' />
        </>
    );
};

export default AisleContainment;