import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <Counter />
      <UserProfile 
        name="Clebert Sabin Ganza" 
        age={28} 
        bio="A passionate traveler who loves exploring new cities." 
      />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
