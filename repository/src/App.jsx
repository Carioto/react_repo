import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {

  return (
    <>
     <Header />
     <Navigation />
     <main>
      <Outlet />
     </main>
    </>
  )
}

export default App;
