import React from 'react'
import { useLaunchesQuery } from "../../generated/graphql";
import Launch, {ownProps} from './Launch'



const LaunchContainer = (props: ownProps) => {
    const { data, loading, error } = useLaunchesQuery();

    if (loading) {
        return <div> loading the data... </div>
    }

    if (error || !data) {
        return <div> Error :( </div>
    }

    return <Launch data={data} {...props} />
}


export default LaunchContainer;