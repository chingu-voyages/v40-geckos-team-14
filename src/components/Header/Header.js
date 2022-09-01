import StoryButton from "./StoryButton";
import styles from "./Header.module.css";

const Header = (props) => {
    return (
     <header className={styles.header}>
        <h1>WeaveStory</h1>
        <StoryButton />
     </header>
    );
};

export default Header;