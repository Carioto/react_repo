import { Outlet } from 'react-router-dom';
import './components/styles/App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


function App() {

  return (
    <>
     <Header />
     <Navigation />
     <main>
      <Outlet />
     </main>
     <Footer />
    </>
  )
}

export default App;
