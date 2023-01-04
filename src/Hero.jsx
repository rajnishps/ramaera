import Header from "./components/Header"
import Social from "./components/Social"
import "./Hero.css"
function Hero() {
  return (
    <main>
      <Header />
      <Social />
      <section className="textWrapper">
        <div className="heroText">
          <h1>Ramaera Industries</h1>
          <h3>
            An incredible multi-industrial approach oriented towards financial
            independence, customer focus and serving the best quality to the
            people.
          </h3>
          <a href="/">
            <button className="exploreBtn">Explore More</button>
          </a>
        </div>
      </section>
    </main>
  )
}

export default Hero
