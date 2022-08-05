import { images } from "../../../assets/images";

function HomeFooter() {
  return (
    <div style={{ backgroundColor: "#D7B2FC" }}>
      {/* desktop */}
      <div className="d-none d-lg-block">
        <div className="row pt-5 pb-4">desktop</div>
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
        <div className="row pt-5 pb-4">mobile</div>
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
