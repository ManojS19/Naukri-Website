// import React from 'react';
// import './Filter.css';

// function Filter({ filters, filterOptions, handleFilterChange, applyFilters, clearFilters }) {
//   return (
//     <div className="filters">
//       <div className="filter">
//         <label>Job Title</label>
//         <select name="jobTitle" onChange={handleFilterChange} value={filters.jobTitle}>
//           <option value="">All</option>
//           {filterOptions.jobTitles.map((title) => (
//             <option key={title} value={title}>
//               {title}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="filter">
//         <label>Location</label>
//         <select name="location" onChange={handleFilterChange} value={filters.location}>
//           <option value="">All</option>
//           {filterOptions.locations.map((location) => (
//             <option key={location} value={location}>
//               {location}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="filter">
//         <label>Salary</label>
//         <select name="salary" onChange={handleFilterChange} value={filters.salary}>
//           <option value="">All</option>
//           {filterOptions.salaries.map((salary) => (
//             <option key={salary} value={salary}>
//               ₹ {salary}/-
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="filter">
//         <label>Experience</label>
//         <select name="experience" onChange={handleFilterChange} value={filters.experience}>
//           <option value="">All</option>
//           {filterOptions.experiences.map((experience) => (
//             <option key={experience} value={experience}>
//               {experience}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="filter">
//         <label>Job Type</label>
//         <select name="jobType" onChange={handleFilterChange} value={filters.jobType}>
//           <option value="">All</option>
//           {filterOptions.jobTypes.map((jobType) => (
//             <option key={jobType} value={jobType}>
//               {jobType}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="filter">
//         <button onClick={applyFilters}>Apply Filters</button>
//         <button onClick={clearFilters}>Clear Filters</button>
//       </div>
//     </div>
//   );
// }

// export default Filter;








import React from 'react';
import './Filter.css';

function Filter({ filters, filterOptions, handleFilterChange, applyFilters, clearFilters }) {
  return (
    <div className="filters">
      <div className="filter">
        <label>Job Title</label>
        <select name="jobTitle" onChange={handleFilterChange} value={filters.jobTitle}>
          <option value="">All</option>
          {filterOptions.jobTitles.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <label>Location</label>
        <select name="location" onChange={handleFilterChange} value={filters.location}>
          <option value="">All</option>
          {filterOptions.locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>



        {/* SALARY */}

      </div>
      <div className="filter">
        <label>Salary</label>
        <select name="salary" onChange={handleFilterChange} value={filters.salary}>
          <option value="">All</option>



          {/* <option value="20">10-20K</option>
          <option value="40">21-40k</option>
          <option value="60">41-60k</option>
          <option value="80">61-80k</option>
          <option value="100">81-100k</option>
          <option value="150">101-150k</option> */}



          <option value="10000-20000">10k - 20k</option>
          <option value="20001-40000">20k - 40k</option>
          <option value="40001-60000">40k - 60k</option>
          <option value="60001-80000">60k - 80k</option>
          <option value="80001-100000">80k - 1Lakh</option>
          <option value="100001-150000">1Lakh - 1.5Lakh</option>


          {/* {filterOptions.salaries.map((salary) => (
            <option key={salary} value={salary}>
              ₹ {salary}/-
            </option>
          ))} */}


        </select>


      </div>
      <div className="filter">
        <label>Experience</label>
        <select name="experience" onChange={handleFilterChange} value={filters.experience}>
          <option value="">All</option>
          <option value="0-2">0 - 2 Yrs</option>
          <option value="3-10">3 - 10 Yrs</option>
          <option value="11-20">11 - 20 Yrs</option>
          <option value="20-35">20+ Yrs</option>


          {/* {filterOptions.experiences.map((experience) => (
            <option key={experience} value={experience}>
              {experience}
            </option>
          ))} */}


        </select>
      </div>



      <div className="filter">
        <label>Job Type</label>
        <select name="jobType" onChange={handleFilterChange} value={filters.jobType}>
          <option value="">All</option>
          {filterOptions.jobTypes.map((jobType) => (
            <option key={jobType} value={jobType}>
              {jobType}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <button onClick={applyFilters}>Apply Filters</button>
        <button onClick={clearFilters}>Clear Filters</button>
      </div>
    </div>
  );
}

export default Filter;

