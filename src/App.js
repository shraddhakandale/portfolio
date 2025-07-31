import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Body from './Components/Body';
import Contact from './Components/Contact';
import MainContainer from './Components/MainContainer';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Body />  
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);


export default App;
