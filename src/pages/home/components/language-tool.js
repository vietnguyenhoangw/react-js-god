import React from "react";
import CusButton from "../../../components/button/button";

function LanguageTool() {
  return (
    <div className="p-5">
      <div className="row">
        {/* left side */}
        <div className="col-lg-8 col-sm-12">
          <p id="lt-title">Inclusive language checker</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
          {/* language tool */}
          <div className="row mt-5 mb-5">
            <div className="col-lg-6 col-sm-12">
              <p className="fs-5 fw-bold">Text field</p>
              {/* input desktop / mobile */}
              <textarea
                rows="5"
                className="mt-3 d-none d-lg-block"
                id="input-text"
                type="text"
                placeholder="Enter text here"
              ></textarea>
              <textarea
                rows="5"
                className="mt-3 d-block d-lg-none"
                id="input-text-full"
                type="text"
                placeholder="Enter text here"
              ></textarea>
              <div className="row">
                <CusButton
                  title="Check language"
                  classNameContainer="col-lg-8 col-sm-6 col-6 col-xl-4"
                  btnStyle={{
                    backgroundColor: "#D7B2FC",
                    borderColor: "#D7B2FC",
                    fontWeight: "bold",
                    minWidth: "100%",
                  }}
                  classNameIcon={<i className="fas fa-check ms-2"></i>}
                />
                {/* clear btn desktop / mobile */}
                <CusButton
                  title="Clear"
                  classNameContainer="col-lg-12 col-sm-6 col-6 col-xl-8 d-none d-lg-block"
                  btnStyle={{
                    backgroundColor: "transparent",
                    borderColor: "black",
                    fontWeight: "bold",
                    minWidth: "50%",
                  }}
                  classNameIcon={<i class="fas fa-redo ms-2"></i>}
                />
                <CusButton
                  title="Clear"
                  classNameContainer="col-lg-6 col-sm-6 col-6 col-xl-8 d-flex justify-content-end d-block d-lg-none"
                  btnStyle={{
                    backgroundColor: "transparent",
                    borderColor: "black",
                    fontWeight: "bold",
                    minWidth: "90%",
                  }}
                  classNameIcon={<i class="fas fa-redo ms-2"></i>}
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 d-none d-lg-block">
              <p className="fs-5 fw-bold">Suggestions</p>
            </div>
          </div>
        </div>
        <div className="col-lg-1" />
        {/* right side */}
        <div className="col-lg-3 col-sm-12">
          <p id="lt-title">Play the Field</p>
          {/* img desktop / mobile */}
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
            className="img-fluid border rounded-4 mt-3 d-none d-lg-block"
            width={357}
            height={453}
            alt="..."
          ></img>
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
            className="img-fluid border rounded-4 mt-3 d-block d-lg-none"
            alt="..."
          ></img>
          {/* post job btn desktop / mobile */}
          <div className="col-sm-12 col-xl-3 d-none d-lg-block">
            <p>
              <a
                href={() => false}
                className="btn btn-warning me-2 rounded-0 btn-block btn-banner mt-4 ms-4"
              >
                Post a new job oportunity
              </a>
            </p>
          </div>
          <div className="col-sm-12 col-xl-3 d-flex justify-content-center d-block d-lg-none">
            <p>
              <a
                href={() => false}
                className="btn btn-warning me-2 rounded-0 btn-block btn-banner mt-4 ms-4 "
              >
                Post a new job oportunity
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageTool;
