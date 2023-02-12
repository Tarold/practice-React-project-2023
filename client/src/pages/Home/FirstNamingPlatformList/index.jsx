import React from 'react';
import firstNamingPlatformCards from './firstNamingPlatform';
import styles from './FirstNamingPlatformList.module.sass';

function FirstNamingPlatformList () {
  return (
    <>
      <div className={styles.namingPlatformListContainer}>
        <h2>World's #1 Naming Platform</h2>
        <ul className={styles.namingPlatformList}>
          {firstNamingPlatformCards.map((c, i) => (
            <li key={i}>
              <div className={styles.namingPlatformArticle}>
                <img src={c.iconSrc} alt={c.title} />
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FirstNamingPlatformList;
