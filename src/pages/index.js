import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.particlesContainer}>
        <div className={styles.particle + ' ' + styles.particle1}></div>
        <div className={styles.particle + ' ' + styles.particle2}></div>
        <div className={styles.particle + ' ' + styles.particle3}></div>
        <div className={styles.particle + ' ' + styles.particle4}></div>
        <div className={styles.particle + ' ' + styles.particle5}></div>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
            <sup className={styles.versionBadge}>{siteConfig.customFields.version}</sup>
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(styles.buttonPrimary, styles.buttonLarge)}
              to="/docs/intro">
              Mulai Sekarang
            </Link>
            <Link
              className={clsx(styles.buttonSecondary, styles.buttonLarge)}
              to="/docs/overview">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
        <div className={styles.heroIllustration}>
          <div className={styles.logoContainer}>
            <div className={styles.circleDecoration}></div>
            <img src="/img/logo.svg" alt="Logo" className={styles.heroLogo} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Portal kesehatan modern dan responsif untuk Labkesmas Magelang">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
