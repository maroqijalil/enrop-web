import styles from './styles.module.scss';
import ButtonComponent from '../../Inputs/Button/ButtonComponent';
import CheckIcon from '../../../Assets/CheckIcon';

interface Props {
  type: string;
  price: string;
  features: string[];
}

const PricingItemComponent = (props: Props) => {
  const { type, price, features } = props;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{type}</h3>
        <h4>
          IDR <span>{price}</span>/bulan
        </h4>
      </div>

      <div className={styles.cardContent}>
        {features.map((feature, index) => (
          <div key={index} className={styles.item}>
            <CheckIcon />
            <p>{feature}</p>
          </div>
        ))}
      </div>

      <ButtonComponent
        text={'Langganan'}
        size={'LARGE'}
        type={'FILLED'}
        width={'100%'}
        onClick={() => {
          console.log(`Langganan ${type}`);
        }}
      />
    </div>
  );
};

const PricingSectionComponent = () => {
  const services: Props[] = [
    {
      type: 'Basic',
      price: '400.000',
      features: [
        'Pencatatan Produk',
        'Pencatatan Profit',
      ]
    },
    {
      type: 'Business',
      price: '700.000',
      features: [
        'Pencatatan Produk',
        'Pencatatan Profit',
        'Analisis Profit (chart)',
        '7x24 jam support',
      ]
    },
    {
      type: 'Business',
      price: '1.000.000',
      features: [
        'Pencatatan Produk',
        'Pencatatan Profit',
        'Analisis Profit (chart)',
        '7x24 jam support',
        'Export Excel',
        'Prediksi Profit (AI)',
      ]
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h2>Harga terjangaku</h2>
        <p>Temukan penawaran menarik dari kami</p>
      </div>

      <div className={styles.content}>
        {services.map((service, index) => (
          <PricingItemComponent key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default PricingSectionComponent;
