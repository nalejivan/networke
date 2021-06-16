import React from 'react';

const ProfileInfo = (props) => {
  return(
    <div>
      <h2>fullName: {props.userProfile.fullName}</h2>
      <h3>aboutMe: {props.userProfile.aboutMe}</h3>
    </div>
  )
  
}
export default ProfileInfo;