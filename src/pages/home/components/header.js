import "../style.css";

function HomeHeader() {
  return (
    <div>
      {/* desktop platform */}
      <div className="d-none d-lg-block row home-header">
        {/* header */}
        <div className="flex-row header">
          <div class="d-flex row-12 justify-content-around">
            {/* logo */}
            <div class="col-xl-2">
              <p className="header-title">TheField.jobs</p>
            </div>
            {/* link button */}
            <div class="d-flex flex-row col-xl-5 justify-content-around">
              <div class="p-2 d-flex align-items-start">
                <a href="#" id="a-header">
                  <p>Candidates</p>
                </a>
              </div>
              <div class="p-2 d-flex align-items-start">
                <a href="#" id="a-header">
                  <p>Organizations</p>
                </a>
              </div>
              <div class="p-2 d-flex align-items-start">
                <a href="#" id="a-header">
                  <p>Why play the Field?</p>
                </a>
              </div>
            </div>
            {/* button */}
            <div class="d-flex flex-row justify-content-center col-xl-3">
              <div>
                <button
                  type="button"
                  class="btn btn-dark me-3 rounded-0 btn-block btn-header"
                >
                  Sign In
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-dark rounded-0 btn-block btn-header"
                >
                  Register
                </button>
              </div>
            </div>
            {/* check box */}
            <div class="d-flex align-items-start col-xl-1">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label"
                  for="flexSwitchCheckDefault"
                ></label>
              </div>
            </div>
            {/* check box */}
            <div class="col-xl-1 d-flex align-items-start text-center">
              <p>Accessible language options</p>
            </div>
          </div>
        </div>
        {/* header */}
        <div className="home-patch row-12">
          <p>Home &gt; Inclusive language tool</p>
        </div>
      </div>
      {/* mobile platform */}
      <div className="d-block d-lg-none">
        {/* header */}
        <div className="d-flex row-12 justify-content-between align-items-center header-mobile">
          <a href="#" id="a-header">
            <p>
              <i class="fas fa-search fa-lg"></i>
            </p>
          </a>
          <a href="#" id="a-header">
            <p className="header-title">
              <i class="fas fa-bars fa-sm"></i>
            </p>
          </a>
          <a href="#" id="a-header">
            <div className="d-flex row-12 align-items-center">
              <p className="header-menu-title">Menu</p>
              <i class="fas fa-caret-down pb-3 ps-2 fa-lg"></i>
            </div>
          </a>
        </div>
        {/* path */}
        <div className="home-patch-mobile">
          <p className="path-title-mobile">Home &gt; Inclusive language tool</p>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
