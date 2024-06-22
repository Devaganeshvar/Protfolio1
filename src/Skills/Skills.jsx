import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../assets/checkmark-dark.svg';
import checkMarkIconLight from '../assets/checkmark-light.svg';
import SkillList from '../Common/SkillList';
import { useTheme } from '../Common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Reactjs" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="DAA" />
        <SkillList src={checkMarkIcon} skill="DSA" />
        <SkillList src={checkMarkIcon} skill="DBMS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Aws Cloud" />
        <SkillList src={checkMarkIcon} skill="selenium Testing" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="SpringBoot" />
        <SkillList src={checkMarkIcon} skill="MySql" />
      </div>
    </section>
  );
}

export default Skills;
