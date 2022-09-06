import { useEffect, useState } from 'react';
import Story from './Story';
import styles from './StoryList.module.css';

const StoryList = () => {
  console.log('loremmm');
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const fetchStories = async () => {
      const response = await fetch(
        'https://weave-story-default-rtdb.firebaseio.com/story.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      const loadedStories = [];
      for (const key in data) {
        loadedStories.push({
          id: key,
          username: data[key].username,
          title: data[key].title,
          date: data[key].date,
          src: data[key].src,
        });
      }

      setStories(loadedStories);
    };

    fetchStories();
  }, []);
  return (
    <ul className={styles.ul}>
      {stories &&
        stories.map((story) => {
          return (
            <Story
              key={story.id}
              src={story.src}
              username={story.username}
              title={story.title}
              date={story.date}
            />
          );
        })}
    </ul>
  );
};

export default StoryList;
