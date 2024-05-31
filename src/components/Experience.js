export default function Experience({data, experience, experience_sub}) {

    return (
      <section className="experience-section section">
          <div className="container">
              <div className="row">
                  <div className="col-sm-4">
                      <div className="heading">
                          <h3><b>{experience}</b></h3>
                          <h6 className="font-lite-black"><b>{experience_sub}</b></h6>
                      </div>
                  </div>
                  <div className="col-sm-8">

                    {data.map((experience, index) => <IndividualExperience experience={experience} key={index} />)}
    
                  </div>
              </div>
          </div>
  
      </section>
    );
  }

  function IndividualExperience({experience}){

    return (
      <div className="experience margin-b-50">
          <h4><b>{experience.title}</b></h4>
          <h5 className="font-yellow"><b>{experience.company}</b></h5>
          <h6 className="margin-t-10">{experience.begin} - {experience.end}</h6>
          <p className="font-semi-white margin-tb-30"> 
              {experience.description}
          </p>
          <ul className="list margin-b-30">
              {experience.list.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
      </div>
    );
  }