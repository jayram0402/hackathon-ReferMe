import Section from '../../components/Section/Section';
import { servicesStyles as styles } from './imports'

/**
 * Services component representing the Services page.
 * @returns {JSX.Element} Services JSX element
 */
const Services = () => {
  return (
    <div>
      <div className={styles.services}>
        <Section />
      </div>
    </div>
  );
};

export default Services;
