
import './App.css';
import { useState, useEffect } from 'react';
function App() {

const [post, setPost] = useState([])

useEffect(() => {
  
const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url).then(response => response.json()).then(json => setPost(json))
 
}, [])


  return (
    <div className="App">
    
    </div>
  );
}

export default App;
