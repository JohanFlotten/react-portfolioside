import React from 'react';
import styles from './Testresults.module.css'; 

function Testresults() {
  return (
    <div className={styles.mainbox}>
      <div className={styles.resultside}>
        <h3 className={styles.result}>Your Result</h3>
        <div className={styles.circle}>
          <p className={styles.number}>76</p>
          <p className={styles.of}>of 100</p>
        </div>
        <h4 className={styles.great}>Great</h4>
        <p className={styles.scoretext}>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className={styles.summarybox}>
        <div className={styles.summaryContainer}>
          <h3 className={styles.summary}>Summary</h3>
        </div>
        <div className={styles.flex}>
          <div className={styles.scoretitle}>
            <div className={styles.titles}>
              <div className={styles.scoreRow}>
                <p className={styles.red}>
                  <img src="/icon-reaction.svg" alt="" />Reaction
                </p>
              </div>
              <div className={styles.scoreRow}>
                <p className={styles.yellow}>
                  <img src="/icon-memory.svg" alt="" />Memory
                </p>
              </div>
              <div className={styles.scoreRow}>
                <p className={styles.green}>
                  <img src="/icon-verbal.svg" alt="" />Verbal
                </p>
              </div>
              <div className={styles.scoreRow}>
                <p className={styles.darkblue}>
                  <img src="/icon-visual.svg" alt="" />Visual
                </p>
              </div>
            </div>
            <div className={styles.scores}>
              <p className={styles.scorenumber}>80 / 100</p>
              <p className={styles.scorenumber}>92 / 100</p>
              <p className={styles.scorenumber}>61 / 100</p>
              <p className={styles.scorenumber}>72 / 100</p>
            </div>
          </div>
          <button className={styles.continue}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Testresults;
