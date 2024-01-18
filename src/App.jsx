import './App.css';
// import lake from "./image/lake.JPG";
import Header from './components/HeaderSection/Header';
import GallaryFooter from './components/FooterSection/GallaryFooter.jsx';
import Body from './components/BodySection/Body.jsx';
import imageData from './components/Data/DataComponent';

function App() {
  return (
    <div>

      <Header />
      <Body data={imageData} />
      {/* adding footer component */}
      <GallaryFooter />
    </div>
  )
}

export default App;