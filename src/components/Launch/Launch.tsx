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
        <h2 className='launches-h2' >All Space X Launches </h2>
        <ol className='tilesWrap'>
            {!!data.launches && data.launches.map(
                (launch, i) => !!launch && (
                    <li
                        key={i}
                        className='tilesWrap li'
                        onClick={() => handleIdChange(launch.flight_number!)}
                    >
                        <h2>{launch.flight_number}</h2>
                        <h3>{launch.mission_name}</h3>
                        <p> The rocket was launched in {launch.launch_year}  <br />
                        success status ({JSON.stringify(launch.launch_success)})</p>
                    </li>
                ))
            }
        </ol>
    </div>
)

export default Launch;