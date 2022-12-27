import { stats } from '../constants'
import styles from '../style'

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 md-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center m-3`}>
        <h4 className='font-poppins font-semibold xs:text-[40px] text-3xl xs:leading-[54px] leading-[43px] text-white'>{stat.value}</h4>
        <p className='font-poppins xs:text-xl text-base xs:leading-[26px] leading-5 text-gradient uppercase ml-3'>{stat.title}</p>
      </div>
    ))}
  </section>
)

export default Stats