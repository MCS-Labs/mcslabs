import logo from './logo_transparent.png';
import logoNotext from './logo_transparent_NoText.png';
import './App.css';

function Topbar() {
  return (
    <nav className='Topbar'>
      <img src={logoNotext}></img>
      <div>Something</div>
      <div><a>Somthing</a></div>
    </nav>
  )
}

function App() {
  return (
    <body>
      <Topbar />
      <div className='App-header'>
        <img src={logo} className='App-logo'></img>
      </div>
    </body>
  );
}

export default App;
