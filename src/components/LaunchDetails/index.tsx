import React from 'react';
import { useLaunchDetailsQuery } from '../../generated/graphql';
import LaunchDetails from './LaunchDetails';

interface Props {
    id: number
}

const LaunchDetailsContainer: React.FC<Props> = ({id}) => {
    const { data, loading, error } = useLaunchDetailsQuery({ variables: { id: `${id}` } });

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error :(</div>
    }

    if (!data) {
        return <div>  Select a mission for it's details </div>
    }

    return <LaunchDetails data={data} />
}

export default LaunchDetailsContainer;