// import React, { useState } from 'react';
// import './SearchBar.css';
// import { json } from 'react-router-dom';

// const SearchBar = ({setResults}) => {

//     const [input, setInput]=useState('');

//     const fetchData = (value)=>{
//         fetch('http://demo5284892.mockable.io/allJobDetails')
//         .then((response)=>response.json())
//         .then((json)=>{
//             const results= json.filter((user)=>{
//                 return value && user && user.job_title && user.job_title.toLowerCase().includes(value);
//             })
//             setResults(results);
//         })
//     }

//     const handleChange = (value)=>{
//         setInput(value);
//         fetchData(value);
//     }

//   return (
//     <div className='input-wrapper'>
//         <i className='fa fa-search' id='search-icon'></i>
//         <input
//         type="text"
//         placeholder="Search by Requirement Name"
//         value={input}
//         onChange={(e) => handleChange(e.target.value)}
//       />
//     </div>
//   );
// }

// export default SearchBar;





import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('');

  const fetchData = (value) => {
    fetch('http://demo5284892.mockable.io/allJobDetails')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((job) => {
          return value && job && job.job_title && job.job_title.toLowerCase().includes(value.toLowerCase());
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className='input-wrapper'>
      <i className='fa fa-search' id='search-icon'></i>
      <input
        type="text"
        placeholder="Search by Requirement Name"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

