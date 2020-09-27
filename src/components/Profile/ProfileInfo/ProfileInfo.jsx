import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt="background" className={styles.profile__img}
                     src="https://www.w3schools.com/howto/img_snow_wide.jpg"></img>
            </div>
            <div className={styles.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;