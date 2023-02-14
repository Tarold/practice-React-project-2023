import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './RecommendedForYou.module.sass';
import needMoreHelpCards from './needMoreHelpList';

function Pricing () {
  return (
    <div>
      <Header />
      <div className={styles.header}>
        <h1>Recommended For You</h1>
        <p>Personalized recommendations based upon your browsing behavior</p>
      </div>
      <div className={styles.featuresSection}>
        {
          //map features
        }
      </div>
      <div className={styles.moreHelpSection}>
        <h2>Need More Help?</h2>
        <ul className={styles.moreHelpList}>
          {needMoreHelpCards.map((c, i) => (
            <li className={styles.moreHelpCard} key={i}>
              <img src={c.iconSrc} alt='' />
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <Link className={styles.cardButton} to={c.linkTo}>
                {c.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Pricing;
