import './App.css';
import Carousel from './components/carousel';
import './styles/navbar.css'
import Life from './components/life';
import Education from './components/education';
import Career from './components/career';
import Achievement from './components/achievements';
import Nobelprize from './components/nobelprize';
import Books from './components/books'

function App() {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid ">
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <a className="nav-link" aria-current="page" href="#life" >Life</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#education" >Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#career">Career</a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#achievements" >
                  Achievement
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#books">Books</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#nobelprize" >
                  Nobel prize
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Carousel component */}
      <Carousel />
      <div id='biographer-container'>
        {/* Life component */}
        <section id='life'>
          <Life />
        </section>
        {/* Education component */}
        <section id='education'>
          <Education />
        </section>
        {/* Career component */}
        <section id='career'>
          <Career />
        </section>
        {/* Achievement componenent */}
        <section id='achievements'>
          <Achievement />
        </section>
        {/* Nobleprize component */}
        <section id='nobelprize'>
          <Nobelprize />
        </section>
        {/* Book components */}
        <section id='books'>
          <Books />
        </section>
      </div>
    </div>
  );
}

export default App;
