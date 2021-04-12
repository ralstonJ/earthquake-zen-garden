import React, { useContext } from 'react';
import { EQZContext } from '../context/earthquake-zen-context';
import { formatTimeByMMMd } from '../utils/format';
import '../css/details.scss';

const DetailsRow = ({ label, value }) => (
  <div className="details-row">
    <div className="details-label">
      <span>{label}</span>
    </div>
    <div className="details-value">{value}</div>
  </div>
);

const Details = (props) => {
  const { featureId } = props.match.params;
  const { data } = useContext(EQZContext);

  const findFeatureId = data.data.features.find(
    (feature) => feature.id === featureId
  );

  if (!findFeatureId) {
    return props.history.push('/error');
  }

  const {
    properties: { title, place, mag, time, status, tsunami, type },
    id,
  } = findFeatureId;

  return (
    <div className="details-container">
      <div key={id}>
        <div className="details-heading">
          <span>{title}</span>
        </div>
        <div className="details-content">
          <div>
            <DetailsRow label="Place" value={place} />
            <DetailsRow label="Magnitude" value={mag} />
            <DetailsRow label="Time" value={formatTimeByMMMd(time)} />
            <DetailsRow label="Status" value={status} />
            <DetailsRow label="Tsunami" value={tsunami} />
            <DetailsRow label="Type" value={type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Details };
