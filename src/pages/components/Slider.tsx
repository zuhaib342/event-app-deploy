import styles from "src/styles/landingPage.module.css"
const LandingPage = () => {
    return (
      <div className={styles.landingPage}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.box}>
                <h2 className={styles.h2} >Div 1</h2 >
                <p className={styles.p}>This is the content for div 1.</p>
              </div>
              <div className={styles.box}>
                <h2 className={styles.h2}>Div 2</h2>
                <p className={styles.p}>This is the content for div 2.</p>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.box}>
                <h2 className={styles.h2}>Div 3</h2>
                <p className={styles.p}>This is the content for div 3.</p>
              </div>
              <div className={styles.box}>
                <h2 className={styles.h2}>Div 4</h2>
                <p className={styles.p}>This is the content for div 4.</p>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    );
  };
  
  export default LandingPage;
  