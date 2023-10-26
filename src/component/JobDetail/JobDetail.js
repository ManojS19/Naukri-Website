// import React, { useEffect, useState } from 'react';
// import "./JobDetail.css";
// import Navbar from '../Navbar/Navbar';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Footer from '../Footer/Footer';

// function JobDetail() {
//   const [jdInfo, setJdInfo]=useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(()=>{
//     axios.get('http://192.168.10.13:9292/other-api/jobs/allJobs')
//     .then((response)=> {
//       setJdInfo(response.data);
//       setIsLoading(false);
      
//     })
//     .catch(error=> {
//       console.error('Error fetching : ', error);
//       setIsLoading(false);
//     });
//     // console.log(jdInfo)
     

//   },[])
//   return (
//     <>
//       <div className='navbar'>
//         {/* <Navbar/> */}
//       </div>
      
//       <div className='all'>
//         {/* {JSON.stringify(jdInfo)}; */}
        
//         {isLoading ? (<div className='load-page'><h1>Loading....</h1></div>
//         ):(
//         <>
//         <div className='all-jobInfo'>
//         {
//           jdInfo.map((list)=>{
//             const { id, skills, requirementName, workLocation, offeringCtcRange, createdAt }=list.job;
//             return(

//               <div className='jds' key={id}>
//               <Link to={`/getJd/${id}`}>
          
              // <div className='jobInfo'>

              //   <div className='all-jobName' >
              //     <h2>{requirementName}</h2>
              //   </div>

              //   <div className='comp-review'>
              //     <div className='comp-name'>
              //       <h4>{list.clientName}</h4>
              //     </div>
              //     <div className='job-review'>
              //       <i className='fa fa-star'></i> 4.8
              //     </div>
              //     <div className='bar-line'>|</div>
              //     <div className='job-review'>
              //       6 Review
              //     </div>
              //   </div>

              //   <div className='date-pack-loc'>
              //     <div className='job-dpl'>
              //       <i className='fa fa-calendar-days'></i> {createdAt}
              //     </div>
              //     <div className='bar-line'>|</div>
              //     <div className='job-dpl'>
              //       <i className='fa fa-indian-rupee-sign'></i> {offeringCtcRange}
              //     </div>
              //     <div className='bar-line'>|</div>
              //     <div className='job-dpl'>
              //     <i className='fa fa-location-dot'></i> {workLocation}
              //     </div>
              //   </div>

              //   <div className='job-skills'>
              //     <i className='fa fa-clipboard'></i> {skills}
              //   </div>
              //  </div>
//               </Link>
//               </div>
//             )
//           })
//         }
//         </div>
//         <Footer/>
//         </>
//       )
//       }
//       </div>
      
//     </>
//   );
// }

// export default JobDetail;










// import React, { useEffect, useState } from 'react';
// import './JobDetail.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Footer from '../Footer/Footer';
// import SearchBar from '../SearchBar/SearchBar';
// import SearchResultsList from '../SearchResultsList/SearchResultsList';

// function JobDetail() {
//   const [jdInfo, setJdInfo] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchKeyword, setSearchKeyword] = useState(''); // State for search keyword
//   const [results, setResults]=useState([]);

//   useEffect(() => {
//     axios
//       .get('http://demo5284892.mockable.io/allJobDetails')
//       .then((response) => {
//         setJdInfo(response.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching: ', error);
//         setIsLoading(false);
//       });
//   }, []);

//   // Filter job listings based on search keyword
//   const filteredJobListings = jdInfo.filter((jobs) =>
//     jobs.job_title.toLowerCase().includes(searchKeyword.toLowerCase())
//   );


//   return (
//     <>
//       {/* ... (Previous JSX) */}




//       <div className='navbar'>
//          {/* <Navbar/> */}
//        </div>
      
//        <div className='all'>
//          {/* {JSON.stringify(jdInfo)}; */}
        
//          {isLoading ? (<div className='load-page'><h1>Loading....</h1></div>
//          ):(
//          <>


//       {/* Add search input field */}
//       <div className='search-bar-all'>
//         <div className='search-bar-container'>


//       {/* <input
//         className='search-input'
//         type="text"
//         placeholder="Search by Requirement Name"
//         value={searchKeyword}
//         onChange={(e) => setSearchKeyword(e.target.value)}
//       /> */}


//           <SearchBar setResults={setResults}/>
//           <SearchResultsList results={results} setSearchKeyword={setSearchKeyword}/>
//         </div>
//       </div>

//       <div className="all-jobInfo">
//         {/* Map and display filtered job listings */}
//         {filteredJobListings.map((list,id) => {
//           const {  skills_required, job_title, location, salary, application_deadline,company_name } = list;
//           return (
//             <div className="jds" key={id}>
//               <Link to={`/getJd/${list.id}`}>
//                 <div className="jobInfo">
//                   {/* ... (Previous JSX for job details) */}




//                   <div className='all-jobName' >
//                   <h2>{job_title}</h2>
//                 </div>

//                 <div className='comp-review'>
//                   <div className='comp-name'>
//                     <h4>{company_name}</h4>
//                   </div>
//                   <div className='job-review'>
//                     <i className='fa fa-star'></i> 4.8
//                   </div>
//                   <div className='bar-line'>|</div>
//                   <div className='job-review'>
//                     6 Review
//                   </div>
//                 </div>

//                 <div className='date-pack-loc'>
//                   <div className='job-dpl'>
//                     <i className='fa fa-calendar-days'></i> {application_deadline}
//                   </div>
//                   <div className='bar-line'>|</div>
//                   <div className='job-dpl'>
//                     <i className='fa fa-indian-rupee-sign'></i> {salary}
//                   </div>
//                   <div className='bar-line'>|</div>
//                   <div className='job-dpl'>
//                   <i className='fa fa-location-dot'></i> {location}
//                   </div>
//                 </div>

//                 <div className='job-skills'>
//                   <i className='fa fa-clipboard'></i> {skills_required}
//                 </div>




//                 </div>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
      
//       {/* ... (Rest of the JSX) */}



//       <Footer/>
//          </>
//        )
//        }
//        </div>



//     </>
//   );
// }

// export default JobDetail;








// import React, { useEffect, useState } from 'react';
// import './JobDetail.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Footer from '../Footer/Footer';
// import SearchBar from '../SearchBar/SearchBar';
// import SearchResultsList from '../SearchResultsList/SearchResultsList';

// function JobDetail() {
//   const [jdInfo, setJdInfo] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [results, setResults] = useState([]);
//   const [filters, setFilters] = useState({
//     jobTitle: '',
//     location: '',
//     salary: '',
//     experienceYears: '',
//     jobType: '',
//   });

//   useEffect(() => {
//     axios
//       .get('http://demo5284892.mockable.io/allJobDetails')
//       .then((response) => {
//         setJdInfo(response.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching: ', error);
//         setIsLoading(false);
//       });
//   }, []);

//   // Filter job listings based on search keyword
//   const filteredJobListings = jdInfo.filter((job) =>
//     job.job_title.toLowerCase().includes(searchKeyword.toLowerCase())
//   );

//   // Function to handle filter changes
//   const handleFilterChange = (event) => {
//     const { name, value } = event.target;
//     setFilters({
//       ...filters,
//       [name]: value,
//     });
//   };

//   // Function to filter job listings based on selected filters
//   const filterJobs = () => {
//     let filteredJobs = [...jdInfo];

//     if (filters.jobTitle) {
//       filteredJobs = filteredJobs.filter((job) =>
//         job.job_title.toLowerCase().includes(filters.jobTitle.toLowerCase())
//       );
//     }

//     if (filters.location) {
//       filteredJobs = filteredJobs.filter((job) =>
//         job.location.toLowerCase().includes(filters.location.toLowerCase())
//       );
//     }

//     if (filters.salary) {
//       filteredJobs = filteredJobs.filter(
//         (job) => parseFloat(job.salary) >= parseFloat(filters.salary)
//       );
//     }

//     if (filters.experienceYears) {
//       filteredJobs = filteredJobs.filter(
//         (job) => parseFloat(job.experience_years) >= parseFloat(filters.experienceYears)
//       );
//     }

//     if (filters.jobType) {
//       filteredJobs = filteredJobs.filter((job) =>
//         job.job_type.toLowerCase() === filters.jobType.toLowerCase()
//       );
//     }

//     return filteredJobs;
//   };

//   return (
//     <>
//       <div className='navbar'>
//         {/* <Navbar/> */}
//       </div>

//       <div className='all'>
//         {isLoading ? (
//           <div className='load-page'><h1>Loading....</h1></div>
//         ) : (
//           <>
//             <div className='search-bar-all'>
//               <div className='search-bar-container'>
//                 <SearchBar setResults={setResults} />
//                 <SearchResultsList results={results} setSearchKeyword={setSearchKeyword} />
//               </div>
//             </div>

//             <div className="filter-container">
//               <div className="filter-select">
//                 <label>Job Title:</label>
//                 <select name="jobTitle" onChange={handleFilterChange}>
//                   <option value="">All</option>
//                   {/* Add options for job titles */}
//                 </select>
//               </div>

//               <div className="filter-select">
//                 <label>Location:</label>
//                 <select name="location" onChange={handleFilterChange}>
//                   <option value="">All</option>
//                   {/* Add options for locations */}
//                 </select>
//               </div>

//               <div className="filter-select">
//                 <label>Salary:</label>
//                 <input
//                   type="number"
//                   name="salary"
//                   placeholder="Enter minimum salary"
//                   value={filters.salary}
//                   onChange={handleFilterChange}
//                 />
//               </div>

//               <div className="filter-select">
//                 <label>Experience (Years):</label>
//                 <input
//                   type="number"
//                   name="experienceYears"
//                   placeholder="Enter minimum experience"
//                   value={filters.experienceYears}
//                   onChange={handleFilterChange}
//                 />
//               </div>

//               <div className="filter-select">
//                 <label>Job Type:</label>
//                 <select name="jobType" onChange={handleFilterChange}>
//                   <option value="">All</option>
//                   {/* Add options for job types */}
//                 </select>
//               </div>
//             </div>

//             <div className="all-jobInfo">
//               {/* Map and display filtered job listings */}
//               {filterJobs().map((list, id) => {
//                 const {
//                   skills_required,
//                   job_title,
//                   location,
//                   salary,
//                   application_deadline,
//                   company_name,
//                   job_type,
//                 } = list;
//                 return (
//                   <div className="jds" key={id}>
//                     <Link to={`/getJd/${list.id}`}>
//                       <div className="jobInfo">
//                         {/* ... (Previous JSX for job details) */}




                        
//                    <div className='all-jobName' >
//                    <h2>{job_title}</h2>
//                  </div>
//                  <div className='comp-review'>
//                    <div className='comp-name'>
//                      <h4>{company_name}</h4>
//                    </div>
//                    <div className='job-review'>
//                      <i className='fa fa-star'></i> 4.8
//                    </div>
//                    <div className='bar-line'>|</div>
//                    <div className='job-review'>
//                      6 Review
//                    </div>
//                  </div>
//                  <div className='date-pack-loc'>
//                    <div className='job-dpl'>
//                      <i className='fa fa-calendar-days'></i> {application_deadline}
//                    </div>
//                    <div className='bar-line'>|</div>
//                    <div className='job-dpl'>
//                      <i className='fa fa-indian-rupee-sign'></i> {salary}
//                    </div>
//                    <div className='bar-line'>|</div>
//                    <div className='job-dpl'>
//                    <i className='fa fa-location-dot'></i> {location}
//                    </div>
//                  </div>
//                  <div className='job-skills'>
//                    <i className='fa fa-clipboard'></i> {skills_required}
//                  </div>




//                       </div>
//                     </Link>
//                   </div>
//                 );
//               })}
//             </div>
//             <Footer />
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default JobDetail;







// import React, { useState, useEffect } from 'react';
// import './JobDetail.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Footer from '../Footer/Footer';
// import SearchBar from '../SearchBar/SearchBar';
// import SearchResultsList from '../SearchResultsList/SearchResultsList';

// function App() {
//   const [jdInfo, setJdInfo] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchKeyword, setSearchKeyword] = useState(''); // State for search keyword
//   const [results, setResults] = useState([]);
//   const [jobs, setJobs] = useState([]); // Store job data
//   const [filteredJobs, setFilteredJobs] = useState([]); // Filtered job listings
//   const [filters, setFilters] = useState({
//     jobTitle: '',
//     location: '',
//     salary: '',
//     experience: '',
//     jobType: '',
//   });

//   // Define filterOptions state
//   const [filterOptions, setFilterOptions] = useState({
//     jobTitles: [],
//     locations: [],
//     salaries: [],
//     experiences: [],
//     jobTypes: [],
//   });

//   useEffect(() => {
//     // Fetch job data from your API
//     axios
//       .get('http://demo5284892.mockable.io/allJobDetails')
//       .then((response) => {
//         setJdInfo(response.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching: ', error);
//         setIsLoading(false);
//       });

//     fetchJobsFromAPI()
//       .then((data) => {
//         setJobs(data);
//         setFilteredJobs(data); // Initially, display all jobs
//         // Extract unique values for each filter category
//         const uniqueJobTitles = [...new Set(data.map((job) => job.job_title))];
//         const uniqueLocations = [...new Set(data.map((job) => job.location))];
//         const uniqueSalaries = [...new Set(data.map((job) => job.salary))];
//         const uniqueExperiences = [...new Set(data.map((job) => job.experience_years))];
//         const uniqueJobTypes = [...new Set(data.map((job) => job.job_type))];

//         // Store the unique values for filters
//         setFilterOptions({
//           jobTitles: uniqueJobTitles,
//           locations: uniqueLocations,
//           salaries: uniqueSalaries,
//           experiences: uniqueExperiences,
//           jobTypes: uniqueJobTypes,
//         });
//       })
//       .catch((error) => {
//         console.error('Error fetching job data: ', error);
//       });
//   }, []);

//   // Filter job listings based on search keyword
//   const filteredJobListings = jdInfo.filter((job) =>
//     job.job_title.toLowerCase().includes(searchKeyword.toLowerCase())
//   );

//   const fetchJobsFromAPI = async () => {
//     // Make API request to fetch job data
//     try {
//       const response = await fetch('http://demo5284892.mockable.io/allJobDetails'); // Replace with your API URL
//       if (response.ok) {
//         const data = await response.json();
//         return data;
//       } else {
//         throw new Error('Unable to fetch job data');
//       }
//     } catch (error) {
//       console.error('Error fetching job data: ', error);
//       return [];
//     }
//   };

//   const handleFilterChange = (event) => {
//     const { name, value } = event.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   const applyFilters = () => {
//     // Filter jobs based on selected filter options
//     let filtered = [...jobs];

//     if (filters.jobTitle) {
//       filtered = filtered.filter((job) => job.job_title === filters.jobTitle);
//     }
//     if (filters.location) {
//       filtered = filtered.filter((job) => job.location === filters.location);
//     }
//     if (filters.salary) {
//       filtered = filtered.filter((job) => job.salary == filters.salary);
//     }
//     if (filters.experience) {
//       filtered = filtered.filter((job) => job.experience_years == filters.experience);
//     }
//     if (filters.jobType) {
//       filtered = filtered.filter((job) => job.job_type === filters.jobType);
//     }

//     setFilteredJobs(filtered);
//   };

//   const clearFilters = () => {
//     // Clear all filter options
//     setFilters({
//       jobTitle: '',
//       location: '',
//       salary: '',
//       experience: '',
//       jobType: '',
//     });

//     // Display all jobs again
//     setFilteredJobs(jobs);
//   };

//   return (
//     <>
//       <div className='navbar'>
//         {/* <Navbar/> */}
//       </div>

//       <div className='all'>
//         {isLoading ? (
//           <div className='load-page'>
//             <h1>Loading....</h1>
//           </div>
//         ) : (
//           <>
//             <div className='search-bar-all'>
//               <div className='search-bar-container'>
//                 <SearchBar setResults={setResults} />
//                 <SearchResultsList results={results} setSearchKeyword={setSearchKeyword} />
//               </div>
//             </div>

//             {/* Filter options */}
//             <div className="filters">
//               <div className="filter">
//                 <label>Job Title</label>
//                 <select name="jobTitle" onChange={handleFilterChange} value={filters.jobTitle}>
//                   <option value="">All</option>
//                   {filterOptions.jobTitles.map((title) => (
//                     <option key={title} value={title}>
//                       {title}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="filter">
//                 <label>Location</label>
//                 <select name="location" onChange={handleFilterChange} value={filters.location}>
//                   <option value="">All</option>
//                   {filterOptions.locations.map((location) => (
//                     <option key={location} value={location}>
//                       {location}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="filter">
//                 <label>Salary</label>
//                 <select name="salary" onChange={handleFilterChange} value={filters.salary}>
//                   <option value="">All</option>
//                   {filterOptions.salaries.map((salary) => (
//                     <option key={salary} value={salary}>
//                       {salary}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="filter">
//                 <label>Experience</label>
//                 <select name="experience" onChange={handleFilterChange} value={filters.experience}>
//                   <option value="">All</option>
//                   {filterOptions.experiences.map((experience) => (
//                     <option key={experience} value={experience}>
//                       {experience}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="filter">
//                 <label>Job Type</label>
//                 <select name="jobType" onChange={handleFilterChange} value={filters.jobType}>
//                   <option value="">All</option>
//                   {filterOptions.jobTypes.map((jobType) => (
//                     <option key={jobType} value={jobType}>
//                       {jobType}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="filter">
//                 <button onClick={applyFilters}>Apply Filters</button>
//                 <button onClick={clearFilters}>Clear Filters</button>
//               </div>
//             </div>

//             <div className="all-jobInfo">
//               {/* Map and display filtered job listings */}
//               {filteredJobs.map((list, id) => {
//                 const {
//                   skills_required,
//                   job_title,
//                   location,
//                   salary,
//                   application_deadline,
//                   company_name,
//                   job_type,
//                 } = list;
//                 return (
//                   <div className="jds" key={id}>
//                     <Link to={`/getJd/${list.id}`}>
//                       <div className="jobInfo">
//                         {/* ... (Previous JSX for job details) */}





                        
                        
//                     <div className='all-jobName' >
//                     <h2>{job_title}</h2>
//                   </div>
//                   <div className='comp-review'>
//                     <div className='comp-name'>
//                       <h4>{company_name}</h4>
//                     </div>
//                     <div className='job-review'>
//                       <i className='fa fa-star'></i> 4.8
//                     </div>
//                     <div className='bar-line'>|</div>
//                     <div className='job-review'>
//                       6 Review
//                     </div>
//                   </div>
//                   <div className='date-pack-loc'>
//                     <div className='job-dpl'>
//                       <i className='fa fa-calendar-days'></i> {application_deadline}
//                     </div>
//                     <div className='bar-line'>|</div>
//                     <div className='job-dpl'>
//                       <i className='fa fa-indian-rupee-sign'></i> {salary}
//                     </div>
//                     <div className='bar-line'>|</div>
//                     <div className='job-dpl'>
//                     <i className='fa fa-location-dot'></i> {location}
//                     </div>
//                   </div>
//                   <div className='job-skills'>
//                     <i className='fa fa-clipboard'></i> {skills_required}
//                   </div>







//                       </div>
//                     </Link>
//                   </div>
//                 );
//               })}
//             </div>
//             <Footer />
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;





// import React, { useState, useEffect } from 'react';
// import './JobDetail.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Footer from '../Footer/Footer';
// import SearchBar from '../SearchBar/SearchBar';
// import SearchResultsList from '../SearchResultsList/SearchResultsList';
// import Filter from '../Filters/Filter';
// import SearchWithResults from '../SearchWithResults/SearchWithResults';

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   // const [searchKeyword, setSearchKeyword] = useState(''); // State for search keyword
//   // const [results, setResults] = useState([]);
//   const [jobs, setJobs] = useState([]); // Store job data
//   const [filteredJobs, setFilteredJobs] = useState([]); // Filtered job listings
//   const [filters, setFilters] = useState({
//     jobTitle: '',
//     location: '',
//     salary: '',
//     experience: '',
//     jobType: '',
//   });

//   // Define filterOptions state
//   const [filterOptions, setFilterOptions] = useState({
//     jobTitles: [],
//     locations: [],
//     salaries: [],
//     experiences: [],
//     jobTypes: [],
//   });

//   useEffect(() => {

//     fetchJobsFromAPI()
//       .then((data) => {
//         setJobs(data);
//         setFilteredJobs(data); // Initially, display all jobs
//         setIsLoading(false);

//         // Extract unique values for each filter category
//         const uniqueJobTitles = [...new Set(data.map((job) => job.job_title))];
//         const uniqueLocations = [...new Set(data.map((job) => job.location))];
//         const uniqueSalaries = [...new Set(data.map((job) => job.salary))];
//         const uniqueExperiences = [...new Set(data.map((job) => job.experience_years))];
//         const uniqueJobTypes = [...new Set(data.map((job) => job.job_type))];

//         // Store the unique values for filters
//         setFilterOptions({
//           jobTitles: uniqueJobTitles,
//           locations: uniqueLocations,
//           salaries: uniqueSalaries,
//           experiences: uniqueExperiences,
//           jobTypes: uniqueJobTypes,
//         });
//       })
//       .catch((error) => {
//         console.error('Error fetching job data: ', error);
//         setIsLoading(false);

//       });
//   }, []);

//   // Filter job listings based on search keyword
//   // const filteredJobListings = jobs.filter((job) =>
//   //   job.job_title.toLowerCase().includes(searchKeyword.toLowerCase())
//   // );

//   const fetchJobsFromAPI = async () => {
//     // Make API request to fetch job data
//     try {
//       const response = await fetch('http://demo5284892.mockable.io/allJobDetails'); // Replace with your API URL
//       if (response.ok) {
//         const data = await response.json();
//         return data;
//       } else {
//         throw new Error('Unable to fetch job data');
//       }
//     } catch (error) {
//       console.error('Error fetching job data: ', error);
//       return [];
//     }
//   };

//   const handleFilterChange = (event) => {
//     const { name, value } = event.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   const applyFilters = () => {
//     // Filter jobs based on selected filter options
//     let filtered = [...jobs];

//     if (filters.jobTitle) {
//       filtered = filtered.filter((job) => job.job_title === filters.jobTitle);
//     }
//     if (filters.location) {
//       filtered = filtered.filter((job) => job.location === filters.location);
//     }
//     if (filters.salary) {
//       filtered = filtered.filter((job) => job.salary == filters.salary);
//     }
//     if (filters.experience) {
//       filtered = filtered.filter((job) => job.experience_years == filters.experience);
//     }
//     if (filters.jobType) {
//       filtered = filtered.filter((job) => job.job_type === filters.jobType);
//     }

//     setFilteredJobs(filtered);
//   };

//   const clearFilters = () => {
//     // Clear all filter options
//     setFilters({
//       jobTitle: '',
//       location: '',
//       salary: '',
//       experience: '',
//       jobType: '',
//     });

//     // Display all jobs again
//     setFilteredJobs(jobs);
//   };


//   // const handleSearch = (searchKeyword) => {
//   //   const filtered = jobs.filter((job) =>
//   //     job.job_title.toLowerCase().includes(searchKeyword.toLowerCase())
//   //   );
//   //   setFilteredJobs(filtered);
//   // };



//   return (
//     <>
//       <div className='navbar'>
//         {/* <Navbar/> */}
//       </div>

//       <div className='all'>
//         {isLoading ? (
//           <div className='load-page'>
//             <h1>Loading....</h1>
//           </div>
//         ) : (
//           <>
//             {/* <div className='search-bar-all'>
//               <div className='search-bar-container'>
//                 <SearchBar setResults={setResults} />
//                 <SearchResultsList results={results} setSearchKeyword={setSearchKeyword} />
//               </div>
//             </div> */}
            
//             {/* search with results */}
//             {/* <SearchWithResults jobs={jobs} onSearch={handleSearch} /> */}

//             <Filter
//             filters={filters}
//             filterOptions={filterOptions}
//             handleFilterChange={handleFilterChange}
//             applyFilters={applyFilters}
//             clearFilters={clearFilters}
//             />

//             <div className="all-jobInfo">
//               {/* Map and display filtered job listings */}
//               {filteredJobs.map((list, id) => {
//                 const {
//                   skills_required,
//                   job_title,
//                   location,
//                   salary,
//                   application_deadline,
//                   company_name,
//                   job_type,
//                 } = list;
//                 return (
//                   <div className="jds" key={id}>
//                     <Link to={`/getJd/${list.id}`}>
//                       <div className="jobInfo">
//                         {/* ... (Previous JSX for job details) */}





                        
                        
//                     <div className='all-jobName' >
//                     <h2>{job_title}</h2>
//                   </div>
//                   <div className='comp-review'>
//                     <div className='comp-name'>
//                       <h4>{company_name}</h4>
//                     </div>
//                     <div className='job-review'>
//                       <i className='fa fa-star'></i> 4.8
//                     </div>
//                     <div className='bar-line'>|</div>
//                     <div className='job-review'>
//                       6 Review
//                     </div>
//                   </div>
//                   <div className='date-pack-loc'>
//                     <div className='job-dpl'>
//                       <i className='fa fa-calendar-days'></i> {application_deadline}
//                     </div>
//                     <div className='bar-line'>|</div>
//                     <div className='job-dpl'>
//                       <i className='fa fa-indian-rupee-sign'></i> {salary}
//                     </div>
//                     <div className='bar-line'>|</div>
//                     <div className='job-dpl'>
//                     <i className='fa fa-location-dot'></i> {location}
//                     </div>
//                   </div>
//                   <div className='job-skills'>
//                     <i className='fa fa-clipboard'></i> {skills_required}
//                   </div>

//                   <div className='jobType'>
//                     {job_type}
//                   </div>







//                       </div>
//                     </Link>
//                   </div>
//                 );
//               })}
//             </div>
//             <Footer />
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;









import React, { useState, useEffect } from 'react';
import './JobDetail.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import SearchBar from '../SearchBar/SearchBar';
import SearchResultsList from '../SearchResultsList/SearchResultsList';
import Filter from '../Filters/Filter';
import SearchWithResults from '../SearchWithResults/SearchWithResults';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [searchKeyword, setSearchKeyword] = useState(''); // State for search keyword
  // const [results, setResults] = useState([]);
  const [jobs, setJobs] = useState([]); // Store job data
  const [filteredJobs, setFilteredJobs] = useState([]); // Filtered job listings
  const [filters, setFilters] = useState({
    jobTitle: '',
    location: '',
    salary: '',
    experience: '',
    jobType: '',
  });

  // Define filterOptions state
  const [filterOptions, setFilterOptions] = useState({
    jobTitles: [],
    locations: [],
    salaries: [],
    experiences: [],
    jobTypes: [],
  });

  useEffect(() => {

    fetchJobsFromAPI()
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data); // Initially, display all jobs
        setIsLoading(false);

        // Extract unique values for each filter category
        const uniqueJobTitles = [...new Set(data.map((job) => job.job_title))];
        const uniqueLocations = [...new Set(data.map((job) => job.location))];
        const uniqueSalaries = [...new Set(data.map((job) => job.salary))];
        const uniqueExperiences = [...new Set(data.map((job) => job.experience_years))];
        const uniqueJobTypes = [...new Set(data.map((job) => job.job_type))];

        // Store the unique values for filters
        setFilterOptions({
          jobTitles: uniqueJobTitles,
          locations: uniqueLocations,
          salaries: uniqueSalaries,
          experiences: uniqueExperiences,
          jobTypes: uniqueJobTypes,
        });
      })
      .catch((error) => {
        console.error('Error fetching job data: ', error);
        setIsLoading(false);

      });
  }, []);

  // Filter job listings based on search keyword
  // const filteredJobListings = jobs.filter((job) =>
  //   job.job_title.toLowerCase().includes(searchKeyword.toLowerCase())
  // );

  const fetchJobsFromAPI = async () => {
    // Make API request to fetch job data
    try {
      const response = await fetch('http://demo5284892.mockable.io/allJobDetails'); // Replace with your API URL
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Unable to fetch job data');
      }
    } catch (error) {
      console.error('Error fetching job data: ', error);
      return [];
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    // Filter jobs based on selected filter options
    let filtered = [...jobs];


    //JOB TITLE

    if (filters.jobTitle) {
      filtered = filtered.filter((job) => job.job_title === filters.jobTitle);
    }

    //LOCATION

    if (filters.location) {
      filtered = filtered.filter((job) => job.location === filters.location);
    }


    //SALARY

    // if (filters.salary) {
    //   if (filters.salary === "20") {
    //     filtered = filtered.filter((job) => job.salary >= 10000 && job.salary <= 20000);
    //   }
    //   if (filters.salary === "40") {
    //     filtered = filtered.filter((job) => job.salary >= 21000 && job.salary <= 40000);
    //   }
    //   if (filters.salary === "60") {
    //     filtered = filtered.filter((job) => job.salary >= 41000 && job.salary <= 60000);
    //   }
    //   if (filters.salary === "80") {
    //     filtered = filtered.filter((job) => job.salary >= 61000 && job.salary <= 80000);
    //   }
    //   if (filters.salary === "100") {
    //     filtered = filtered.filter((job) => job.salary >= 81000 && job.salary <= 100000);
    //   }
    //   if (filters.salary === "150") {
    //     filtered = filtered.filter((job) => job.salary >= 101000 && job.salary <= 150000);
    //   }
    // }


    if (filters.salary) {
      const [minSalary, maxSalary] = filters.salary.split('-').map(Number);
      filtered = filtered.filter((job) => job.salary >= minSalary && job.salary <= maxSalary);
    }


    //EXPERIENCE

    // if (filters.experience) {
    //   filtered = filtered.filter((job) => job.experience_years == filters.experience);
    // }



    if (filters.experience) {
      const [minExperience, maxExperience] = filters.experience.split('-').map(Number);
      filtered = filtered.filter(
        (job) => job.experience_years >= minExperience && job.experience_years <= maxExperience
      );
    }




    //JOB TYPES

    if (filters.jobType) {
      filtered = filtered.filter((job) => job.job_type === filters.jobType);
    }

    setFilteredJobs(filtered);
  };

  const clearFilters = () => {
    // Clear all filter options
    setFilters({
      jobTitle: '',
      location: '',
      salary: '',
      experience: '',
      jobType: '',
    });

    // Display all jobs again
    setFilteredJobs(jobs);
  };


  // const handleSearch = (searchKeyword) => {
  //   const filtered = jobs.filter((job) =>
  //     job.job_title.toLowerCase().includes(searchKeyword.toLowerCase())
  //   );
  //   setFilteredJobs(filtered);
  // };


  const formatSalary = (salary) => {
    if (salary >= 100000) {
      // return salary;
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
        {isLoading ? (
          <div className='load-page'>
            <h1>Loading....</h1>
          </div>
        ) : (
          <>
            {/* <div className='search-bar-all'>
              <div className='search-bar-container'>
                <SearchBar setResults={setResults} />
                <SearchResultsList results={results} setSearchKeyword={setSearchKeyword} />
              </div>
            </div> */}
            
            {/* search with results */}
            {/* <SearchWithResults jobs={jobs} onSearch={handleSearch} /> */}

            <Filter
            className='filterTag'
            filters={filters}
            filterOptions={filterOptions}
            handleFilterChange={handleFilterChange}
            applyFilters={applyFilters}
            clearFilters={clearFilters}
            />

            <div className="all-jobInfo">
              {/* Map and display filtered job listings */}
              {filteredJobs.map((list, id) => {
                const {
                  skills_required,
                  job_title,
                  location,
                  salary,
                  application_deadline,
                  company_name,
                  job_type,
                  experience_years,
                } = list;
                return (
                  <div className="jds" key={id}>
                    <Link to={`/getJd/${list.id}`}>
                      <div className="jobInfo">
                        {/* ... (Previous JSX for job details) */}





                        
                        
                    <div className='all-jobName' >
                        <h2>{job_title}</h2>
                    </div>
                  <div className='comp-review'>
                    <div className='comp-name'>
                      <h4>{company_name}</h4>
                    </div>
                    <div className='job-review'>
                      <i className='fa fa-star'></i> 4.8
                    </div>
                    <div className='bar-line'>|</div>
                    <div className='job-review'>
                      6 Review
                    </div>
                  </div>
                  <div className='date-pack-loc'>
                    <div className='job-dpl'>
                      <i className='fa fa-calendar-days'></i>
                       {application_deadline}
                    </div>
                    <div className='bar-line'>|</div>
                    <div className='job-dpl'>
                      <i className='fa fa-indian-rupee-sign'></i>
                       {formatSalary(salary)}
                    </div>
                    <div className='bar-line'>|</div>
                    <div className='job-dpl'>
                    <i className='fa fa-location-dot'></i>
                     {location}
                    </div>
                  </div>
                  <div className='job-skills'>
                    <i className='fa fa-clipboard'></i>
                     {skills_required}
                  </div>
                  <div className='job-experience'>
                    <i className='fa fa-suitcase'></i>
                    {experience_years} Yrs
                  </div>

                  <div className='jobType'>
                    {job_type}
                  </div>







                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;

