import { useEffect, useState } from 'react';
import './App.css';
import Post from './components/Post';
import { db, firebaseApp } from './firebase';


function App() {

  const [posts, setPosts] = useState([
    {
      username: "volosrostik", 
      imageUrl:  "https://kaifolog.ru/uploads/posts/2014-07/thumbs/1405924592_020.jpg", 
      caption: "Hi, i'm Rostik, i'm noob in frontend",
    },
    {
      username: "osalikovskiy", 
      imageUrl:  "https://m.media-amazon.com/images/M/MV5BYzgwMWI4ZGMtOGYyMi00ZmYyLWE0MzUtYmU5MjE1NDQ5MDhmXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_FMjpg_UX1000_.jpg", 
      caption: "Hello, i'm Oleg, i love a Evelin, she's so beatiful",
    },
    {
      username:"salikovskiy", 
      imageUrl: "https://ichef.bbci.co.uk/news/976/cpsprodpb/2B87/production/_90934111_1-1.jpg", 
      caption:"Hello, i'm Sanya, and i'm frontend-developer",
    },
  ])

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
    setPosts(snapshot.docs.map((doc) => doc.data()))
  );
  }, []);




  return (
    <div className="app">
      <div className="app__header">
        <img
        className='app__headerImage'
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
        alt="" />
      </div>



      <h1>Hello</h1>

      {
        posts.map(post => (
          <Post 
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
          />
        ))
      }
    </div>
  );
}

export default App;
