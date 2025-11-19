import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    id: 'easy',
    title: 'Mudah Digunakan',
    icon: '🎯',
    description:
      'Antarmuka intuitif yang dirancang untuk kemudahan penggunaan maksimal. Navigasi yang sederhana memastikan setiap pengguna dapat mengakses layanan dengan cepat.',
  },
  {
    id: 'secure',
    title: 'Aman & Terpercaya',
    icon: '🔒',
    description:
      'Keamanan data adalah prioritas utama kami. Sistem enkripsi tingkat enterprise melindungi informasi kesehatan Anda.',
  },
  {
    id: 'fast',
    title: 'Cepat & Responsif',
    icon: '⚡',
    description:
      'Performa optimal di semua perangkat. Aplikasi kami dioptimalkan untuk memberikan pengalaman terbaik di desktop maupun mobile.',
  },
  {
    id: 'support',
    title: 'Dukungan Pengguna',
    icon: '💬',
    description:
      'Tim dukungan kami siap membantu Anda 24/7. Kami berkomitmen untuk memberikan layanan pelanggan terbaik.',
  },
  {
    id: 'integrate',
    title: 'Integrasi Sempurna',
    icon: '🔗',
    description:
      'Terintegrasi dengan sistem labkesmas yang ada. Alur kerja yang mulus untuk efisiensi maksimal.',
  },
  {
    id: 'modern',
    title: 'Teknologi Modern',
    icon: '🚀',
    description:
      'Dibangun dengan teknologi terkini untuk skalabilitas dan performa tinggi di era digital.',
  },
];

function Feature({id, icon, title, description}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.featuresTitle}>
            Fitur Unggulan
          </Heading>
          <p className={styles.featuresSubtitle}>
            Portal Labkesmas Magelang menyediakan solusi kesehatan komprehensif dengan fitur-fitur terdepan
          </p>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
