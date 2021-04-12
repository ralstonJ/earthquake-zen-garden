import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EQZContext } from '../context/earthquake-zen-context';
import { formatTimeByMMMd } from '../utils/format';

import '../css/home.scss';

const Home = () => {
  const { data } = useContext(EQZContext);

  return (
    <div className="home-container">
      <div className="home-container-center">
        <div className="home-table-header">
          <div className="title-header">Title</div>
          <div className="magnitude-header">Magnitude</div>
          <div className="time-header">Time</div>
        </div>
        <div>
          {data.data.features.map(
            ({ id, properties: { mag, time, place } }) => (
              <div key={id} className="home-table-row">
                <Link
                  className="title-cell"
                  to={{
                    pathname: `/details/${id}`,
                  }}
                >
                  {place}
                </Link>

                <div className="magnitude-cell">{mag}</div>
                <div className="time-cell">{formatTimeByMMMd(time)}</div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export { Home };
