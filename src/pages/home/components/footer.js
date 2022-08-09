import { images } from "../../../assets/images";

function HomeFooter() {
  return (
    <div style={{ backgroundColor: "#D7B2FC" }}>
      {/* desktop */}
      <div className="d-none d-lg-block container">
        <div className="row pt-5 pb-4 ps-5 pe-5 footer-desktop">
          <div className="col-lg-3 footer-column">
            <p className="fw-bold h5 mb-4">About us</p>
            <p>Who is the Field?</p>
            <p>Meet our founders</p>
            <p>Meet our team</p>
            <p>Work for the Field</p>
          </div>
          <div className="col-lg-3 footer-column">
            <p className="fw-bold h5 mb-4">About us</p>
            <p>Who is the Field?</p>
            <p>Meet our founders</p>
            <p>Meet our team</p>
            <p>Work for the Field</p>
          </div>
          <div className="col-lg-3 footer-column">
            <p className="fw-bold h5 mb-4">About us</p>
            <p>Who is the Field?</p>
            <p>Meet our founders</p>
            <p>Meet our team</p>
            <p>Work for the Field</p>
          </div>
          <div className="col-lg-3 footer-column">
            <p className="fw-bold h5 mb-4">Social Network</p>
            <div>
              <p>
                <a href={() => false} onClick={() => {}}>
                  <i class="fab fa-facebook me-3 fa-2x"></i>
                </a>
                <a href={() => false} onClick={() => {}}>
                  <i class="fab fa-instagram-square me-3 fa-2x"></i>
                </a>
                <a href={() => false} onClick={() => {}}>
                  <i class="fab fa-twitter me-3 fa-2x"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center pb-5 pt-4">
          <img
            src={images.footerLogo}
            alt="description of image"
            width="50%"
          ></img>
        </div>
      </div>
      {/* mobile */}
      <div className="d-block d-lg-none">
        <div className="row pt-5 pb-4">
          <div className="mx-5 mb-4 flex-shrink-1 border-bottom border-dark footer-content-desktop pb-2">
            <p className="fw-bold h5 mb-4">
              About us &nbsp;&nbsp;<i class="fas fa-angle-down"></i>
            </p>
            <p>Who is the Field?</p>
            <p>Meet our founders</p>
            <p>Meet our team</p>
            <p>Work for the Field</p>
          </div>
          <div className="mx-5 mb-4 flex-shrink-1 border-bottom border-dark footer-content-desktop pb-2">
            <p className="fw-bold h5 mb-4">
              About us &nbsp;&nbsp;<i class="fas fa-angle-down"></i>
            </p>
            <p>Who is the Field?</p>
            <p>Meet our founders</p>
            <p>Meet our team</p>
            <p>Work for the Field</p>
          </div>
          <div className="mx-5 mb-4 flex-shrink-1 border-bottom border-dark footer-content-desktop pb-2">
            <p className="fw-bold h5 mb-4">
              About us &nbsp;&nbsp;<i class="fas fa-angle-down"></i>
            </p>
            <p>Who is the Field?</p>
            <p>Meet our founders</p>
            <p>Meet our team</p>
            <p>Work for the Field</p>
          </div>
          <div className="mx-5 mb-4 flex-shrink-1 border-bottom border-dark footer-content-desktop pb-2">
            <p className="fw-bold h5 mb-4">Social Network&nbsp;&nbsp;<i class="fas fa-angle-down"></i></p>
            <div>
              <p>
                <a href={() => false} onClick={() => {}}>
                  <i class="fab fa-facebook me-3 fa-2x"></i>
                </a>
                <a href={() => false} onClick={() => {}}>
                  <i class="fab fa-instagram-square me-3 fa-2x"></i>
                </a>
                <a href={() => false} onClick={() => {}}>
                  <i class="fab fa-twitter me-3 fa-2x"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center pb-5 pt-4">
          <img
            src={images.footerLogo}
            alt="description of image"
            width="90%"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
