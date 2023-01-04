import HotelGif from "../assets/Gifs/Hotel.gif"
import Icon2 from "../assets/Icons/icon2.svg"
import Circle from "../assets/circle.svg"
import "./Service.css"

function Hotel() {
  return (
    <section id="hotel">
      <img src={HotelGif} alt="Hotel" />
      <h3>Making accommodations easier</h3>
      <img src={Icon2} alt="icon2" />
      <h5>
        Introducing capsule hotels in places of extreme need such as examination
        centres and hospitals to provide comfortable and convenient
        accommodation at pocket friendly prices .
      </h5>
      <span>
        <button>Read More</button>
        <img src={Circle} />
      </span>
    </section>
  )
}

export default Hotel