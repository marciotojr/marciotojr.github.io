export default function Header({STATIC, resume, resumePath, phone, neighborhood, city, handleClick}) {
    return (
      <header>
          <div className="container">
              <div className="heading-wrapper">
                  <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-4">
                          <div className="info">
                              <i className="icon ion-ios-location-outline"></i>
                              <div className="right-area">
                                  <h5>{neighborhood}</h5>
                                  <h5>{city}</h5>
                              </div>
                          </div>
                      </div>
  
                      <div className="col-sm-6 col-md-6 col-lg-3">
                          <div className="info">
                              <i className="icon ion-ios-telephone-outline"></i>
                              <div className="right-area">
                                  <h5>{phone}</h5>
                                  
                              </div>
                          </div>
                      </div>
  
                      <div className="col-sm-6 col-md-6 col-lg-4">
                          <div className="info">
                              <i className="icon ion-ios-chatboxes-outline"></i>
                              <div className="right-area">
                                  <h5><a href={"mailto:" + STATIC.email}>{STATIC.email}</a></h5>
                                  <h5><a href={STATIC.whatsapp} target="_blank" rel="noreferrer">WhatsApp messenger</a></h5>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-1 d-flex justify-content-end">
                        <button onClick={() => handleClick('pt')}>&#127463;&#127479;</button>
                        <button onClick={() => handleClick('en')}>&#127482;&#127480;</button>
                      </div>
                  </div>
              </div>
  
              <a className="downlad-btn" href={resumePath} target="_blank" rel="noreferrer"><i className="icon ion-ios-download-outline"></i> {resume}</a>
          </div>
      </header>
  
    );
  }