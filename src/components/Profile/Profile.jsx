import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
    return (
    <div className={styles.content}>
        <div>
          <img className={styles.profile__img} src="https://www.w3schools.com/howto/img_snow_wide.jpg"></img>
        </div>
        <div>
          ava + description
        </div>
      <MyPosts />
    </div>
    );
}

export default Profile;