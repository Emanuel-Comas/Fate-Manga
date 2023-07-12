import logo from './logo.svg';
import './App.css';
import Bot from "./Componentes/Boton";

function App() {
  return (
    <div className="App">

      <div className="Hero">
        <h1>TuMangaOnline</h1>
      </div>

      <div className="Manga1" >
              <p className="Titulo-manga1">Fate/Stay Night: Heaven feel (2015)</p>
            <img src="https://otakuteca.com/images/books/cover/6385349ea005b.jpg" alt="Manga1" />
            <Bot text="info" url="https://lectortmo.com/library/manga/11590/fatestay-night-heavens-feel" />
      </div>

      <div className="Manga2">
              <p className="Titulo-manga2">FGO. Mangade Wakaru! (2015)</p>
            <img src="https://otakuteca.com/images/books/cover/30396_TMOManga59a7ad0ca3603.jpg" alt="Manga2" />
            <Bot text="info" url="https://lectortmo.com/library/manga/30396/aprendiendo-con-el-manga-fategrand-order" />
            {/* <button className="Btn">Info</button> */}
      </div>

      <div className="Manga3">
              <p className="Titulo-manga3">Fate/Stay Night: Master Arturia y Servant Shirou (2019-2019) </p>
            <img src="https://otakuteca.com/images/books/cover/5c31810f446ae.jpg" alt="Manga3" />
            <Bot text="info" url="https://lectortmo.com/library/manga/42271/fatestay-night-master-arturia-y-servant-shirou" />
      </div>

      <div className="Manga4">
              <p className="Titulo-manga4">Fate/Grand Order: -Epic of Remnant- Deep Sea Cyber-Paradise SE.RA.PH (2019)</p>
            <img src="https://otakuteca.com/images/books/cover/62fdb983713e0.jpg" alt="Manga4" />
            <Bot text="info" url="https://lectortmo.com/library/manga/43015/fategrand-order-epic-of-remnant-deep-sea-cyber-paradise-seraph" />
      </div>

      <div className="Manga5">
              <p className="Titulo-manga5">Fate/Type Redline (2019)</p>
            <img src="https://otakuteca.com/images/books/cover/5e00e3c147517.jpg" alt="Manga5" />
            <Bot text="info" url="https://lectortmo.com/library/manga/47413/fatetype-redline" />
      </div>

      <div className="Manga6">
              <p className="Titulo-manga6">Fate/kaleid liner PRISMA☆ILLYA 3rei!! (2012)</p>
            <img src="https://otakuteca.com/images/books/cover/63993b5cd7ae5.jpg" alt="Manga6" />
            <Bot text="info" url="https://lectortmo.com/library/manga/8041/fatekaleid-liner-prisma-illya-3rei" />
      </div>
    </div>
  );
}

export default App;
