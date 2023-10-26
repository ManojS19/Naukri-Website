// // SearchWithResults.js
// import React, { useState, useEffect } from 'react';

// function SearchWithResults({ jobs }) {
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     if (searchKeyword.trim() === '') {
//         setSearchResults([]); // Clear results when search bar is empty
//       } else {
//         const filteredJobs = jobs.filter((job) =>
//           job.job_title.toLowerCase().includes(searchKeyword.toLowerCase())
//         );

//     setSearchResults(filteredJobs);

//       }
//   }, [jobs, searchKeyword]);

//   return (
//     <div className="search-bar-results-container">
//       <input
//         type="text"
//         placeholder="Search by Job Title"
//         value={searchKeyword}
//         onChange={(e) => setSearchKeyword(e.target.value)}
//       />

//       <div className="search-results">
//         {searchResults.map((job) => (
//           <div key={job.id}>{job.job_title}</div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SearchWithResults;





// SearchWithResults.js
import React, { useState, useEffect } from 'react';

function SearchWithResults({ jobs }) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]); // Initially, no results

  useEffect(() => {
    if (searchKeyword.trim() === '') {
      setSearchResults([]); // Clear results when search bar is empty
    } else {
      const filteredJobs = jobs.filter((job) =>
        job.job_title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setSearchResults(filteredJobs);
    }
  }, [jobs, searchKeyword]);

  return (
    <div className="search-bar-results-container">
      <input
        type="text"
        placeholder="Search by Job Title"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />

      <div className="search-results">
        {searchResults.map((job) => (
          <div key={job.id}>{job.job_title}</div>
        ))}
      </div>
    </div>
  );
}

export default SearchWithResults;

