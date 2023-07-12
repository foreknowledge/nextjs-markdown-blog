import styles from './chip.module.css';

interface Props {
  text: string;
}

const Chip = ({ text }: Props) => {
  return <div className={styles.chip}>{text}</div>;
};

export default Chip;
