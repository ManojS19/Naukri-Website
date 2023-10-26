import React,{useState,useEffect} from 'react';
import "./JdSummary.css"
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import useAuth  from '../../useAuth';

function JdSummary() {
  const [jdInfo, setJdInfo]=useState([]);
  const [loading, setLoading] = useState(true);
  const {jdId}= useParams();
  const {authed} =useAuth();


  useEffect(()=>{
    axios.get(` http://demo5284892.mockable.io/allJobDetails`)
    .then((response)=> {
      setJdInfo(response.data);
      setLoading(false);
      console.log(jdId)

    })
    .catch(error=> {
      console.error('Error fetching : ', error);
      setLoading(false);
    });


  },[])


  // Function to format salary with commas for thousands and show lakh for numbers in hundreds of thousands
  const formatSalary = (salary) => {
    if (salary >= 100000) {
      return `${(salary / 100000).toFixed(2)} Lakh`;
    } else {
      return salary.toLocaleString();
    }
  };

  return (
    <>

      <div className='navbar'>
        {/* <Navbar/> */}
      </div>

      <div className='all'>
        
          {loading ? (
          <div className='load-page'><h1>Loading....</h1></div>
        ) : (
          <>
          <div className='all-cover'>
            {
            jdInfo.map(x=>
              {
                if(x.id==jdId)
                {
                  console.log(x);
                  console.log(x.id);
                  // console.log(x.clientName);
                  return(
                    
                    <div key={jdId} className='all-info'>
                      
                      <div className='main-card'>
                      <div className='companyInfo'>
                        <div className='jobComp-info'>
                          <div className='job-info'>
                            <h1>Required For {x.job_title} Position.</h1>
                            <h1>Walk-in Interview</h1>
                          </div>
                          <div className='comp-info'>
                            <div className='comp-name'>
                              <h4>{x.company_name}</h4>
                            </div>
                            <div className='job-review'>
                              <i className='fa fa-star'></i> 4.8
                            </div>
                            <div className='bar-line'>|</div>
                            <div className='job-review'>
                              6 Review
                            </div>
                          </div>
                        </div>
                        <div className='exp-pack-loc'>
                          <div className='exp-pack'>
                            <div className='job-dpl'>
                              <i className='fa fa-suitcase'></i> {x.experience_years} Yrs
                            </div>
                            <div className='bar-line'>|</div>
                            <div className='job-dpl'>
                              <i className='fa fa-indian-rupee-sign'></i> {formatSalary(x.salary)}
                            </div>
                          </div>
                          <div className='loc'>
                            <i className='fa fa-location-dot'></i> {x.location}
                          </div>
                        </div>
                        <div className='time-venue'>
                          <h3>Time and venue</h3>
                          <div className='t-v'>
                            <i className='fa fa-calendar-days'></i> {x.application_deadline}
                          </div>
                          <div className='t-v'>
                            <i className='fa fa-location-dot'></i> {x.location}
                          </div>
                          <div className='t-v'>
                            <i className='fa fa-phone'></i> Contact - HR (788xxxxxxx)
                          </div>
                        </div>
                        {
                          authed ?(

                          // <div className='applyButton'><Link to='/apply'><button >Apply</button></Link></div>

                          <div className='applyButton'>
                            <button onClick={()=>{alert("Applying Successfully")}}>Apply</button>
                          </div>
                          ):(
                        <div className='log-reg-button'>
                          <Link to='/signUp'><button className='register'>Register to apply</button></Link>
                          <Link to='/login'><button className='login'>Login to apply</button></Link>
                        </div>
                          )
                        }
                      </div>
                      </div>

                      <div className='main-card'>
                      <div className='job-discription'>
                        <h3>Job description</h3>
                        <div className='job-detail'>
                          <p>{x.job_description}</p>
                        </div>

                        <div className='key-skills'>
                          <h4>Key Skills</h4>
                          <p>{x.skills_required}</p>
                        </div>
                      </div>
                      </div>

                      
                    </div>

                  )
                }
              })
              }
              </div>
              <Footer/>
            </>
            )
            }
        
      </div>

    </>
  );
}

export default JdSummary;
