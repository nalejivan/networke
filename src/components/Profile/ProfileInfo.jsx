import React from 'react';
import Prelouder from '../common/prelouder/prelouder';
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileInfo = (props) => {
  if(!props.userProfile){
    return <Prelouder isFetching={true}/>
  } 
  return(
    <div>
      <ProfileStatus 
      status={props.status} 
      putStatus={props.putStatus}
      setStatus={props.setStatus}/>
      <h2>fullName: {props.userProfile.fullName}</h2>
      <h3>aboutMe: {props.userProfile.aboutMe}</h3>
    </div>
  )
  
}
export default ProfileInfo;