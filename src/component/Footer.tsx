import logo from "../assets/image/logo.svg";
function Footer() {
  return (
    <>
      <div className="footerBg mt-lg-14 mt-10">
        <div className="container">
          <div className="row ">
            <div className="col-lg-3 col-12 ps-0 pe-0 py-lg-14 py-7 ">
              <div className="imgBox text-lg-start text-center">
                <img src={logo} className="" alt="" />
              </div>
              <p className="fs-5 mt-4 text-lg-start text-center">
                若有數位產品設計和開發相關問題
                <br />
                歡迎填寫表單，或直接與我聯絡！
              </p>
              <h5 className="h5 text-primary-500 text-lg-start text-center mt-4">service@hexschool.com</h5>
            </div>
            <div className="col-lg-3 offset-lg-6 col-10 offset-1 ps-0 pe-0 pt-lg-10 pt-0 mb-7">
              <a
                className="btn btn-lg icon-link link-primary-500 w-100 px-4 mb-4 lh-base text-start fw-bold text-primary-50 bg-primary-900 "
                href="#"
              >
                <svg
                  className="bi display-4"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 13H39V43H16L16 13ZM13 13C13 11.3431 14.3431 10 16 10H39C40.6569 10 42 11.3431 42 13V43C42 44.6569 40.6569 46 39 46H16C14.3431 46 13 44.6569 13 43V13ZM22 20C22 20.8284 21.3284 21.5 20.5 21.5C19.6716 21.5 19 20.8284 19 20C19 19.1716 19.6716 18.5 20.5 18.5C21.3284 18.5 22 19.1716 22 20ZM22 27C22 27.8284 21.3284 28.5 20.5 28.5C19.6716 28.5 19 27.8284 19 27C19 26.1716 19.6716 25.5 20.5 25.5C21.3284 25.5 22 26.1716 22 27ZM20.5 35.5C21.3284 35.5 22 34.8284 22 34C22 33.1716 21.3284 32.5 20.5 32.5C19.6716 32.5 19 33.1716 19 34C19 34.8284 19.6716 35.5 20.5 35.5ZM24 20C24 19.1716 24.6716 18.5 25.5 18.5H33.5C34.3284 18.5 35 19.1716 35 20C35 20.8284 34.3284 21.5 33.5 21.5H25.5C24.6716 21.5 24 20.8284 24 20ZM25.5 25.5C24.6716 25.5 24 26.1716 24 27C24 27.8284 24.6716 28.5 25.5 28.5H33.5C34.3284 28.5 35 27.8284 35 27C35 26.1716 34.3284 25.5 33.5 25.5H25.5ZM24 34C24 33.1716 24.6716 32.5 25.5 32.5H33.5C34.3284 32.5 35 33.1716 35 34C35 34.8284 34.3284 35.5 33.5 35.5H25.5C24.6716 35.5 24 34.8284 24 34Z"
                    fill="currentcolor"
                  />
                </svg>
                填寫表單
              </a>
              <a
                className="btn btn-lg w-100 px-4 mb-4 lh-base text-start link-primary-500 text-primary-700 bg-primary-50 border boreder-primary400"
                href="#"
              >
                <i className="bi bi-instagram align-middle px-2 fs-1"></i>
                hexschool_demo
              </a>
              <a
                className="btn btn-lg w-100 px-4 lh-base text-start link-primary-500 text-primary-700 bg-primary-50 border boreder-primary400"
                href="#"
              >
                <i className="bi bi-facebook align-middle px-2 fs-1"></i>
                hexschoolTW
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
