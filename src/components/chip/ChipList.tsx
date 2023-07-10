import Chip from './Chip';
import styles from './chip.module.css';

interface Props {
  textList: string[];
  onChipClick?: (text: string) => void;
}

const ChipList = ({ textList, onChipClick = () => {} }: Props) => {
  return (
    <ul className={styles.chipList}>
      {textList.map((text) => (
        <Chip key={text} text={text} onChipClick={onChipClick} />
      ))}
    </ul>
  );
};

export default ChipList;
