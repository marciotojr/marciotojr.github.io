export default function Education({data, education, education_sub}) {
    return (  
    <section className="education-section section">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="heading">
              <h3><b>{education}</b></h3>
              <h6 className="font-lite-black"><b>{education_sub}</b></h6>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="education-wrapper">
              {data.map((education, index) => <IndividualEducation education={education} key={index} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }

  function IndividualEducation({education}){
    return (
        <div className="education margin-b-50">
            <h4><b>{education.title}</b></h4>
            <h5 className="font-yellow"><b>{education.institution}</b></h5>
            <h6 className="font-lite-black margin-t-10">{education.begin} - {education.end}</h6>
            <p className="margin-tb-30">{education.description}</p>
        </div>
    );
}