import React from 'react';
import { LaunchesQuery } from '../../generated/graphql'
import './style.css'


export interface ownProps {
    handleIdChange: (newId: number) => void
}

interface Props extends ownProps {
    data: LaunchesQuery
};

const Launch: React.FC<Props> = ({ data, handleIdChange }) => (
    <div className="Launches">
        <h3>All Space X Launches </h3>
        <ol className='LaunchesOL'>
            {!!data.launches && data.launches.map(
                (launch, i) => !!launch && (
                    <li
                        onClick={() => handleIdChange(launch.flight_number!)}
                        key={i}
                        className='LaunchesLI'
                    >
                        {launch.flight_number} {launch.mission_name} - {launch.launch_year} ({JSON.stringify(launch.launch_success)})
                    </li>
                ))
            }
        </ol>
    </div>
)

export default Launch;