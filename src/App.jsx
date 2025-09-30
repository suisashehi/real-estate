import Header from './components/Header/Header'
function App() {
  return (
    <div className="App">
      <section className="h-wrapper">
        <div className="h-container">
          <img src="./logo.png" alt="logo" width={100} />

          <div className="h-menu">
            <a 
            href=""
            >
              Residencies

            </a>

            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className='button'>
            <a href="">Contact</a>
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
}


export default App;