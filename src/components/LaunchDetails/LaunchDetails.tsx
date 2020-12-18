import React from 'react'
import './style.css'
import { LaunchDetailsQuery } from '../../generated/graphql'

interface Props {
    data: LaunchDetailsQuery
}

const LaunchDetails: React.FC<Props> = ({ data }) => {

    if (!data.launch) {
        return <div> Data not available </div>
    }

    let { launch } = data;
    return (
        <div className='LaunchDetails'>
            <div>
                <h3>Flight no: {launch.flight_number}</h3>
            </div>
            <div>
                <h2>Mission: {launch.mission_name}
                    <br />
                    Rocket: {launch.rocket?.rocket_name}
                </h2>
                <h2>Launched in {launch.launch_year} from {launch.launch_site?.site_name}</h2>
                <p>Rocket type: {launch.rocket?.rocket_type}, Success status: {JSON.stringify(launch.launch_success)}</p>
                <p>{launch.details}</p>
                <p></p>
                <div className='image-div'>
                    {!!launch.links && !!launch.links?.flickr_images && (
                        <div>
                            {launch.links.flickr_images.map((image, i) =>
                                image ? < img src={image} key={i} alt={image} /> : null
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LaunchDetails
