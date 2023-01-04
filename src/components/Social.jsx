import Twitter from "../assets/twitter.svg"
import Insta from "../assets/insta.svg"
import Fb from "../assets/fb.svg"
import "./Socials.css"

function Social() {
  return (
    <div className="links">
      <a href="/">
        <img src={Twitter} alt="Twitter" />
      </a>
      <a href="/">
        <img src={Insta} alt="insta" />
      </a>
      <a href="/">
        <img src={Fb} alt="fb" />
      </a>
    </div>
  )
}

export default Social
