import quoteLeft from "@/assets/image/quote-left.png";
import quoteRight from "@/assets/image/quote-right.png";
interface HeroSectionCardProps {
  contentText: {
    title: string;
    text: string;
  };
}
const contentText = [
  {
    title: "2B經驗",
    text: "內部監控系統、庫存系統、採購系統、行銷整合系統",
  },
  {
    title: "2C經驗",
    text: "跨國美妝保養電商、個人品牌網站、醫美網站、電子商務",
  },
];
function HeroSection() {
  return (
    <>
      <div
        className="background bg-primary-100 mb-lg-14 mb-10 pt-13 pt-lg-10"
      >
        <div
          className="text-center position-relative text-primary-800 widthContentFit mx-auto HeroSectoinWidth"
          
        >
          <span className="position-absolute quoteLeftPostion d-lg-inline d-none">
            <img src={quoteLeft} alt="" />
          </span>
          <span className="position-absolute quoteLeftPostionRWD d-inline d-lg-none">
            <img src={quoteLeft} alt="" />
          </span>
          <h4 className="mb-lg-3 mb-2 fs-5 fs-lg-4 ">
            讓使用者在觀賞與使用的旅程中，
            <br className="d-block d-lg-none" />
            發現
            <span className="mark">
              設計的價值
              <img src="" alt="" />
            </span>
          </h4>
          <h4 className=" fs-5 fs-lg-4 ">
            而我在設計與開發的過程中，
            <br className="d-block d-lg-none" />
            看見<span className="mark">自己的價值</span>
          </h4>
          <span className="position-absolute quoteRightPosition d-lg-inline d-none">
            <img src={quoteRight} alt="" />
          </span>
        </div>
        <div className="container mt-lg-4 mt-7 pb-10 d-lg-block d-none">
          <div className="row">
            <div className="col-3 offset-3 ">
              <HeroSectionCard contentText={contentText[0]}></HeroSectionCard>
            </div>
            <div className="col-3 ">
              <HeroSectionCard contentText={contentText[1]}></HeroSectionCard>
            </div>
          </div>
        </div>
        <div className="d-block d-lg-none mt-7 pb-9">
            <div className="HeroSectoinCardWidth mx-auto">
              <HeroSectionCard contentText={contentText[0]}></HeroSectionCard>
            </div>
            <div className="HeroSectoinCardWidth mx-auto">
              <HeroSectionCard contentText={contentText[1]}></HeroSectionCard>
            </div>
        </div>
      </div>
    </>
  );
}
function HeroSectionCard({contentText}: HeroSectionCardProps) {
  return (
    <>
      <div className="text-center pb-1">
        <p className="fs-6 position-relative text-primary-600 mb-2">
          {contentText.title}
          <span
            className="d-inline-block position-absolute positionMiddle bottom-0 border-bottom border-primary-400 border-2"
            style={{width: "24px"}}
          ></span>
        </p>
        <p className="fs-6 text-primary-700">{contentText.text}</p>
      </div>
    </>
  );
}

export default HeroSection;
