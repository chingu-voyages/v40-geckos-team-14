import styles from "./Story.module.css";

const Story = (props) => {
    return (
     <li className={styles.list}>
         <img src={props.src} alt="story-img" />
         <div className={styles.flex}>
         <h2>{props.username}</h2>
         <h3 className={styles.date}>{props.date}</h3>
         </div>
         <h3 className={styles.title}>{props.title}</h3>
         <a href="/" className={styles.link}>Read more...</a>
     </li>
    )
 };
 
 export default Story;