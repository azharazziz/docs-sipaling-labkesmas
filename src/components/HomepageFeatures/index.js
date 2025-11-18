import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mudah Digunakan',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Portal Labkesmas didesain untuk kemudahan penggunaan. Mulailah dengan
        dokumentasi kami dan buatlah situs web yang menakjubkan dalam waktu
        singkat.
      </>
    ),
  },
  {
    title: 'Fokus pada Hal yang Penting',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Portal Labkesmas difokuskan pada hal penting untuk memberikan layanan yang terbaik bagi pengguna.
      </>
    ),
  },
  {
    title: 'Dikembangkan dengan Cinta',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Portal Labkesmas dibangun oleh tim yang peduli dengan pengalaman pengembang dan dokumentasi yang hebat.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
