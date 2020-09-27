import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {

    return (
          <div className={styles.post__item}>
            <img className={styles.post__avatar} src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
            {props.message}
            <div>
              <span>like</span> { props.likesCount }
            </div>
          </div>
    );
}

export default Post;