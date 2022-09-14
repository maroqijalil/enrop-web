import styles from './styles.module.scss';
import { ReactNode } from 'react';
import ButtonComponent from '../../Inputs/Button/ButtonComponent';
import PencatatanIcon from '../../../Assets/PencatatanIcon';
import AnalisisIcon from '../../../Assets/AnalisisIcon';
import SupportIcon from '../../../Assets/SupportIcon';
import PrediksiIcon from '../../../Assets/PrediksiIcon';

interface Props {
  icon: ReactNode;
  title: string;
  content: string;
}

const ServiceItemComponent = (props: Props) => {
  const { icon, title, content } = props;

  return (
    <div className={styles.card}>
      {icon}

      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>

      <ButtonComponent
        text={'Pelajari lebih lanjut'}
        onClick={() => {
          console.log(`Pelajari ${title}`);
        }}
      />
    </div>
  );
};

const ServiceSectionComponent = () => {
  const services: Props[] = [
    {
      icon: <PencatatanIcon />,
      title: 'Pencatatan',
      content:
        'Kami memastikan produk dan profit perusahaan Anda tercatat dengan terstruktur dan aman'
    },
    {
      icon: <AnalisisIcon />,
      title: 'Analisis',
      content: 'Kami menganalisis perkembangan profit perusahaan Anda melalui chart'
    },
    {
      icon: <SupportIcon />,
      title: 'Support',
      content: 'Kami bersedia 7x24 jam untuk memberikann layanan terbaik untuk perusahaan Anda'
    },
    {
      icon: <PrediksiIcon />,
      title: 'Prediksi',
      content:
        'Kami menyediakan prediksi profit berbasis Artificial Intelligence sehingga lebih powerful'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h2>Layanan kami</h2>
        <p>Kami menyediakan beberapa layanan tercanggih</p>
      </div>

      <div className={styles.content}>
        {services.map((service, index) => (
          <ServiceItemComponent key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSectionComponent;
