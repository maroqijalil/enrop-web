import styles from './styles.module.scss';
import TextInputComponent from '../../Inputs/TextInput/TextInputComponent';
import TextAreaComponent from '../../Inputs/TextArea/TextAreaComponent';
import ButtonComponent from '../../Inputs/Button/ButtonComponent';
import { useSection } from '../../../Contexts/Section/SectionContext';

const ContactSectionComponent = () => {
  const section = useSection();

  return (
    <section ref={section.contactRef} className={styles.section}>
      <div className={styles.title}>
        <h2>Hubungi kami!</h2>
        <p>
          Jika ada yang ditanyakan,
          <br />
          bisa mengubungi kami melalui:
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.contact}>
          <div className={styles.item}>
            <h3>Email</h3>
            <p>admin@enrop.com</p>
          </div>

          <div className={styles.item}>
            <h3>Telp</h3>
            <p>111 2345-54</p>
          </div>
        </div>

        <div className={styles.msg}>
          <h3>Kirim Pesan</h3>

          <div className={styles.input1}>
            <TextInputComponent
              placeholder={'Nama'}
              onChanged={(str) => {
                console.log(str);
              }}
            />

            <TextInputComponent
              placeholder={'Email'}
              onChanged={(str) => {
                console.log(str);
              }}
            />
          </div>

          <div className={styles.input2}>
            <div className={styles.area}>
              <TextAreaComponent
                placeholder={"Pesan..."}
                onChanged={(str) => {
                  console.log(str);
                }}
              />
            </div>

            <div className={styles.btn}>
              <ButtonComponent
                text={'Kirim'}
                size={'LARGE'}
                type={'FILLED'}
                width={'100%'}
                height={'100%'}
                onClick={() => {
                  console.log(`Kirim Pesan`);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionComponent;
