export default function Bio({bio, aboutme}) {
    return (
      <section className="about-section section">
          <div className="container">
              <div className="row">
                  <div className="col-sm-4">
                      <div className="heading">
                          <h3><b>{aboutme}</b></h3>
                          <h6 className="font-lite-black"><b>BIO</b></h6>
                      </div>
                  </div>
                  <div className="col-sm-8">
                      <p className="margin-b-50">{bio}</p>
  
                  </div>
              </div>
          </div>
      </section>
    );
  }