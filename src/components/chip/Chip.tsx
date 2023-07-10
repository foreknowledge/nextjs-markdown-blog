import styles from './chip.module.css';

interface Props {
  text: string;
  onChipClick: (text: string) => void;
}

const Chip = ({ text, onChipClick }: Props) => {
  return (
    <div className={styles.chip} onClick={() => onChipClick(text)}>
      {text}
    </div>
  );
};

export default Chip;
