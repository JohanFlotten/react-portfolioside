import Portfoliocss from '../components/Portfolio.module.css'

function Portfolio () {
    return (
        <div id="portfolio">
        <h2 id="title">PORTFOLIO</h2>
        <div className={Portfoliocss.imgbox}>
          <a href="https://react-pokeapi-one.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src="/pokedex.png" alt="pokedex" className={Portfoliocss.pokedex}/>
          </a>
        </div>
      </div>
    )
}

export default Portfolio;