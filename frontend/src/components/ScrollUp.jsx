import { useEffect } from "react"
import { Link } from "react-scroll"
import { arrowUpp } from "../assets"

const ScrollUp = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scrollUp = document.querySelector('#scrollUp')
      window.scrollY > 525 ? scrollUp.classList.add('bottom-5') : scrollUp.classList.remove('bottom-5')
    })
  }, [])

  return (
    <div>
      <Link to="home" id="scrollUp" className="fixed right-5 p-4 rounded-lg z-50 cursor-pointer bg-secondary font-black text-white duration-300 ease-in-out transition-all" smooth={true} duration={500}>
        <img src={arrowUpp} alt="Arrow Up" className="w-5 h-5" />
      </Link>
    </div>
  )
}

export default ScrollUp