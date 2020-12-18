import React from 'react'
import { LaunchDetailsQuery } from '../../generated/graphql'

interface Props {
    data: LaunchDetailsQuery
}

const LaunchDetails: React.FC<Props> = ({ data }) => {

    if (!data.launch) {
        return <div> Data not available </div>
    }

    return (
        <>
            <div>
                <span>{data.launch.flight_number}</span>
            </div>
            <div>
                <h3> {data.launch.mission_name} </h3>
            </div>
        </>
    )
}

export default LaunchDetails
