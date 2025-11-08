import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <UserProvider>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
