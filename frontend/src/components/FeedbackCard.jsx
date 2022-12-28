import { quotes } from "../assets"

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-3xl max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="Double Qoutes" className="w-11 h-7 object-contain" />
      <p className="font-poppins text-lg leading-8 text-white my-10">{content}</p>

      <div className="flex">
        <img src={img} alt={name} className="w-12 h-12 rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-xl leading-8 text-white">{name}</h4>
          <p className="font-poppins text-base leading-6 text-dimWhite">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard