import Story from "./Story";
import styles from "./StoryList.module.css";

const StoryList = (props) => {
    return (
        <ul className={styles.ul}>
            {props.stories.map(story => {
                return (
                    <Story key={story.id} src={story.src} username={story.username} title={story.title} date={story.date}  />
                )
            })}
        </ul>
    )
};

export default StoryList;