import "../style.css";

function HomeBanner() {
  return (
    <div className="banner">
      <div className="jumbotron col-lg-9 col-sm-12">
        <h1 className="jumbotron-heading justify-content-start mb-4">
          Inclusive language tool
        </h1>
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely. Something short and leading about
          the collection below—its contents, the creator, etc. Make it short and
          sweet, but not too short so folks don't simply skip over it entirely.
        </p>
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely. Something short and leading about
          the collection below—its contents, the creator, etc. Make it short and
          sweet, but not too short so folks don't simply skip over it entirely.
        </p>
        <div className="row mt-5">
          <div className="col-sm-12 col-xl-3">
            <p>
              <a
                href={() => false}
                className="btn btn-dark me-2 rounded-0 btn-block btn-banner"
              >
                Post a new job oportunity &nbsp; &nbsp;
                <i className="fas fa-user-plus"></i>
              </a>
            </p>
          </div>
          <div className="col-sm col-xl-9">
            <p>
              <a
                href={() => false}
                className="btn btn-dark me-2 rounded-0 btn-block btn-banner"
              >
                Edit or manage your job posts &nbsp; &nbsp;
                <i className="fas fa-pen"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
