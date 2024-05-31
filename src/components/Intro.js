export default function Intro({birth, title, birthDate}) {

    return (
      
      <section className="intro-section">
    <div className="container">
      <div className="row">
        <div className="col-md-1 col-lg-2"></div>
        <div className="col-md-10 col-lg-8">
          <div className="intro">
            <div className="profile-img"><img src="../images/profile.jpg" alt="" /></div>
            <h2><b>Marcio Tadeu Oliveira Júnior, Msc.</b></h2>
            <h4 className="font-yellow">{title}</h4>
            <ul className="information margin-tb-30">
              <li><b>{birth} : </b>{birthDate}</li>
              <li><b>EMAIL : </b>marciotojr@gmail.com</li>
            </ul>
            <ul className="social-icons">
              <li><a href="https://github.com/marciotojr" target="_blank"><i className="ion-social-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/marciotojr/" target="_blank"><i className="ion-social-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
  }
