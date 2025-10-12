import React from 'react';
import Hero from '~/components/Hero';

import type { Route } from './+types/server-cabinets';
export function meta({ }: Route.MetaArgs) {
    return [
        {
            title: "Server Cabinets | Dataracks"
        },
    ];
};

const ServerCabinets = () => {
    return (
        <>
            <Hero title="Server Cabinets" image='/images/dataracks-server-cabinets-header.jpg' />
        </>
    );
};

export default ServerCabinets;