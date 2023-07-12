import Chip from './Chip';
import styles from './chip.module.css';

interface Props {
  textList: string[];
}

const ChipList = ({ textList }: Props) => {
  return (
    <ul className={styles.chipList}>
      {textList.map((text) => (
        <Chip key={text} text={text} />
      ))}
    </ul>
  );
};

export default ChipList;
