import React from 'react'
import { useLaunchesQuery } from "../../generated/graphql";
import Launch, {ownProps} from './Launch'



const LaunchContainer = (props: ownProps) => {
    const { data, loading, error } = useLaunchesQuery();

    if (loading) {
        return <div className='loader-container'>
            <div className='loader'> </div>
        </div>
    }

    if (error || !data) {
        return <div> Error :( </div>
    }

    return <Launch data={data} {...props} />
}


export default LaunchContainer;