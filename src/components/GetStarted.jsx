import styles from "../style"
import { arrowUp } from "../assets"

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-0.5 cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-lg leading-6 mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="Arrow Up" className="w-6 h-6 object-contain" />
      </div>
      <p className="font-poppins font-medium text-lg leading-6">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
)


export default GetStarted