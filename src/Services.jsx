import Tech from "./assets/Gifs/Tech.gif"
import HotelGif from "./assets/Gifs/Hotel.gif"
import PackingGif from "./assets/Gifs/Packing.gif"
import FmcgGif from "./assets/Gifs/Fmcg.gif"
import Agri from "./assets/Gifs/Agri.gif"
import Ecom from "./assets/Gifs/Ecom.gif"
import RightPenta from "./assets/penta.svg"
import LeftPenta from "./assets/leftpenta.svg"
import Icon1 from "./assets/Icons/icon1.svg"
import Icon2 from "./assets/Icons/icon2.svg"
import Icon3 from "./assets/Icons/icon3.svg"
import Icon4 from "./assets/Icons/icon4.svg"
import Icon5 from "./assets/Icons/icon5.svg"
import Icon6 from "./assets/Icons/icon6.svg"
import Circle from "./assets/circle.svg"
import "./Services.css"

function Info() {
  return (
    <section className="infoSec">
      <img className="left-penta" src={LeftPenta} />
      <div id="info">
        <h2>The Ramaera Expansion</h2>
        <h4>
          We are aiming to be a part of the major industrialisation drive in
          India and embarking our presence in every significant industrial
          domain including IT.
        </h4>
      </div>
    </section>
  )
}

function Technology() {
  return (
    <section id="tech">
      <img src={Tech} alt="tech" />
      <div>
        <h3>
          Unleashing the strength of
          <br />
          Technology
        </h3>
        <img src={Icon1} alt="icon1" />
        <h5>
          We believe in innovation and excellence hence , our approach in the
          field of technology is focused to relish incredible customer
          experience and stabilising business models for tomorrow.
        </h5>
        <span>
          <button>Read More</button>
          <img src={Circle} />
        </span>
      </div>
    </section>
  )
}

function Hotel() {
  return (
    <section id="hotel">
      <img src={HotelGif} alt="Hotel" />
      <div>
        <h3>
          Making
          <br />
          accommodations easier
        </h3>
        <img src={Icon2} alt="icon2" />
        <h5>
          Introducing capsule hotels in places of extreme need such as
          examination centres and hospitals to provide comfortable and
          convenient accommodation at pocket friendly prices .
        </h5>
        <span>
          <button>Read More</button>
          <img src={Circle} />
        </span>
      </div>
    </section>
  )
}

function Packing() {
  return (
    <section id="packing">
      <img src={PackingGif} alt="Packing" />
      <div>
        <h3>
          Packaging industry for
          <br />
          business growth
        </h3>
        <img src={Icon3} alt="icon3" />
        <h5>
          We provide packaging solutions to help your business flourish with
          boosted outreach. Ensuring the protection, containment, and
          communication of packaged projects is our foremost priority.
        </h5>
        <span>
          <button>Read More</button>
          <img src={Circle} />
        </span>
      </div>
    </section>
  )
}

function Fmcg() {
  return (
    <section id="fmcg">
      <img src={FmcgGif} alt="Packing" />
      <div>
        <h3>
          Offering the best with
          <br />
          FMCG industry
        </h3>
        <img src={Icon4} alt="icon4" />
        <h5>
          Ramaera FMCG industry has commenced an extensive range of FMCG to make
          your days more than ordinary. We plan to offer you nothing less than
          the best.
        </h5>
        <span>
          <button>Read More</button>
          <img src={Circle} />
        </span>
      </div>
    </section>
  )
}

function Agriculture() {
  return (
    <section id="agri">
      <img src={Agri} alt="Agri" />
      <div>
        <h3>
          Agri-business to bestow
          <br />
          Nature's Love
        </h3>
        <img src={Icon5} alt="Icon5" />
        <h5>
          Our Agri-business industry is established to get you fresh and organic
          fruits and vegetables with the blessed with the touch of nature
        </h5>
        <span>
          <button>Read More</button>
          <img src={Circle} />
        </span>
      </div>
    </section>
  )
}

function Ecommerce() {
  return (
    <section id="ecom">
      <img src={Ecom} alt="Ecom" />
      <div>
        <h3>
          Get all your essentials in
          <br />
          one place
        </h3>
        <img src={Icon6} alt="Icon6" />
        <h5>
          Ramaera Supermart is an online customer oriented marketplace to
          motivated to provide everything you need right at one place under the
          comfort of your homes.
        </h5>
        <span>
          <button>Read More</button>
          <img src={Circle} />
        </span>
      </div>
    </section>
  )
}

function End() {
  return (
    <section id="end">
      <img className="right-penta" src={RightPenta} alt="rightPenta" />
    </section>
  )
}
function Services() {
  return (
    <>
      <Info />
      <Technology />
      <Hotel />
      <Packing />
      <Fmcg />
      <Agriculture />
      <Ecommerce />
      <End />
    </>
  )
}

export default Services
