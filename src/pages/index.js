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
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
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
          <svg viewBox="0 0 300 300" className={styles.heroSvg}>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#059669', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <circle cx="150" cy="150" r="140" fill="url(#grad1)" opacity="0.1" />
            <circle cx="150" cy="150" r="100" fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.3" />
            <g transform="translate(150, 150)">
              <circle cx="0" cy="0" r="50" fill="url(#grad1)" />
              <path d="M -15,-15 L 15,-15 L 15,5 L -15,5 Z" fill="white" />
              <path d="M -15,10 L 15,10 L 15,30 L -15,30 Z" fill="white" />
            </g>
          </svg>
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
