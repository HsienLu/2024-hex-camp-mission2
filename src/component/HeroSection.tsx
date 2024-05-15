import quoteLeft from "@/assets/image/quote-left.png";
import quoteRight from "@/assets/image/quote-right.png";
function HeroSection() {
  return (
    <>
      <div className="background bg-primary-100" style={{paddingTop: "5rem"}}>
        <div
          className="text-center position-relative text-primary-800 widthContentFit mx-auto"
          style={{padding: "59px 71px"}}
        >
          <span className="position-absolute quoteLeftPostion">
            <img src={quoteLeft} alt="" />
          </span>
          <h4 className="mb-3 ">
            讓使用者在觀賞與使用的旅程中，發現<span className="mark">設計的價值<img src="" alt="" /></span>
          </h4>
          <h4>
            而我在設計與開發的過程中，看見<span  className="mark">自己的價值</span>
          </h4>
          <span className="position-absolute quoteRightPosition">
            <img src={quoteRight} alt="" />
          </span>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
