import logo from "../assets/image/logo.svg";
import menu from '../assets/image/menu-hamburger.png'
function Header() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center my-lg-6 my-0">
          <div className="col-1 d-lg-block d-none">
            <img src={logo} alt="Logo" />
          </div>
          <nav className="col offset-lg-3 navbar navbar-expand-lg navbar-light py-0">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto navList">
                <li className="nav-item navItem me-7">
                  <a className="nav-link navLink fs-6" href="#">首頁</a>
                  <span className="borderEffect top-left"></span>
                  <span className="borderEffect top-right"></span>
                  <span className="borderEffect bottom-left"></span>
                  <span className="borderEffect bottom-right"></span>
                </li>
                <li className="nav-item navItem me-7">
                  <a className="nav-link navLink fs-6" href="#">作品集</a>
                  <span className="borderEffect top-left"></span>
                  <span className="borderEffect top-right"></span>
                  <span className="borderEffect bottom-left"></span>
                  <span className="borderEffect bottom-right"></span>
                </li>
                <li className="nav-item navItem me-7">
                  <a className="nav-link navLink fs-6" href="#">服務項目</a>
                  <span className="borderEffect top-left"></span>
                  <span className="borderEffect top-right"></span>
                  <span className="borderEffect bottom-left"></span>
                  <span className="borderEffect bottom-right"></span>
                </li>
                <li className="nav-item navItem me-7">
                  <a className="nav-link navLink fs-6" href="#">部落格</a>
                  <span className="borderEffect top-left"></span>
                  <span className="borderEffect top-right"></span>
                  <span className="borderEffect bottom-left"></span>
                  <span className="borderEffect bottom-right"></span>
                </li>
                <li className="nav-item navItem me-7">
                  <a className="nav-link navLink fs-6" href="#">聯絡我們</a>
                  <span className="borderEffect top-left"></span>
                  <span className="borderEffect top-right"></span>
                  <span className="borderEffect bottom-left"></span>
                  <span className="borderEffect bottom-right"></span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center d-lg-none my-1 py-2 ">
        <div className="col-1 d-lg-none d-block">
              <img src={logo} alt="Logo" />
        </div>
        <button className="bg-white border-0 d-lg-none d-block">
              <img src={menu} alt="" style={{width:'30px',height:'20px'}}/>
        </button>
      </div>
    </>
  );
}

export default Header;
