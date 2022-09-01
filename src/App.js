import { Fragment, useState, useEffect } from 'react';

import "./App.css";
import StoryList from "./components/Story/StoryList"


import Header from './components/Header/Header';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await fetch("https://weave-story-default-rtdb.firebaseio.com/story.json");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      const loadedStories = [];
      for (const key in data) {
        loadedStories.push({
          id: key,
          username: data[key].username,
          title: data[key].title,
          date: data[key].date,
          src: data[key].src
        });
      };

      setStories(loadedStories);
    }

    fetchStories();
  }, [])
  
  return (
    <Fragment>
      <Header />
      <StoryList stories={stories} />
    </Fragment>
  );
}

export default App;
