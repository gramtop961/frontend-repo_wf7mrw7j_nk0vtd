import Header from './components/Header.jsx';
import Greeting from './components/Greeting.jsx';
import Background from './components/Background.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-white to-sky-50">
      <Background />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-6">
          <Greeting />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
