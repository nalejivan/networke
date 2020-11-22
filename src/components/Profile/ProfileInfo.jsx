import React from 'react';
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileInfo = (props) => {
  return(
    //! НЕПРАВИЛЬНАЯ ПЕРЕРЕСОВКА ПРОФИЛЬ СТАТУС ПРИ НАВЕДЕНИИ НА ПОЛЕ
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