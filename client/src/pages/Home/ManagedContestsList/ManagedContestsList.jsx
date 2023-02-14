import React from 'react';
import { Link } from 'react-router-dom';
import managedContestsCards from './managedContests';
import styles from './ManagedContestsList.module.sass';

function ManagedContestsList () {
  return (
    <div className={styles.managedContestsContainer}>
      <h2>Managed Contests</h2>
      <p className={styles.managedContestsText}>
        Better than a naming agency: Our hybrid-solution partners you with a
        trained Squadhelp branding consultant who will guide your crowdsourcing
        process step-by-step to get the best results possible.
      </p>

      <ul className={styles.managedContestsList}>
        {managedContestsCards.map((c, i) => (
          <li key={i}>
            <img src={c.iconSrc} alt='' />
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </li>
        ))}
      </ul>
      <Link to='/managed-contests' className={styles.learnMoreButton}>
        Learn More
      </Link>
    </div>
  );
}

export default ManagedContestsList;
