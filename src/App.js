import './App.css';
import Navbar from './layout/navbar';
import Hero from './components/Home/Hero';
import Bio from './components/Home/Bio';
import Ministries from './components/Home/Ministries';
import Call from './components/Home/Call';

function App() {
  return (
    <div className="App">
        {/* INSERT NAVBAR SECTION BELOW HERE */}
        <Navbar />
        {/* INSERT HERO SECTION BELOW HERE */}
        <Hero />
        {/* INSERT BIO SECTION BELOW HERE */}
        <Bio />
        {/* INSERT MINISTRIES SECTION BELOW HERE */}
        <Ministries />
        {/* INSERT CALL SECTION BELOW HERE */}
        <Call />
    </div>
  );
}

export default App;
