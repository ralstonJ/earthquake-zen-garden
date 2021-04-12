import React, { useContext } from 'react';
import { EQZContext } from '../context/earthquake-zen-context';

import '../css/profile.scss';

const Profile = () => {
  const { data } = useContext(EQZContext);
  const { avatarImage, firstName, lastName, email, phone, bio } = data.profile;

  const transformedData = [
    { label: 'First Name', value: firstName },
    { label: 'Last Name', value: lastName },
    { label: 'Phone', value: phone },
    { label: 'Email', value: email },
    { label: 'Bio', value: bio },
  ];
  return (
    <div className="profile-container">
      <div>
        <div className="profile-heading">
          <span>Profile</span>
        </div>
        <div className="profile-content">
          <img className="profile-image" src={avatarImage} alt="Avatar"></img>
          <div>
            {transformedData.map(({ label, value }) => (
              <div key={label} className="profile-field">
                <div className="label">{label}:</div>
                <div>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Profile };
