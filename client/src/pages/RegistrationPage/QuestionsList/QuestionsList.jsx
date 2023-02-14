import React from 'react';
import questionList from './questions.json';
import styles from './QuestionsList.module.sass';

export default function QuestionsList ({ children }) {
  return (
    <div className={styles.articlesMainContainer}>
      {questionList.map((c, i) => (
        <div key={i} className={styles.ColumnContainer}>
          {c.map((q, qi) => {
            const uswear =
              i === 1 && questionList[i].length - 1 === qi
                ? children
                : q.uswear;
            return (
              <div key={qi}>
                <div className={styles.headerArticle}>{q.questions}</div>
                <div className={styles.article}>{uswear}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
