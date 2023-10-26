// import React from 'react';
// import './SearchResults.css';

// const SearchResults = ({result,setItems}) => {
//   const handleClick = () => {
//     setItems(result.job_title);
//   };

//   return (
//     <div className='search-result' onClick={handleClick}>
//       {/* (e)=>
//         alert(`you clicked on ${result.job_title}`) */}
//       {result.job_title}
//     </div>
//   );
// }

// export default SearchResults;







import React from 'react';
import './SearchResults.css';

const SearchResults = ({ result, setItems }) => {
  const handleClick = () => {
    setItems(result.job_title);
  };

  return (
    <div className='search-result' onClick={handleClick}>
      {result.job_title}
    </div>
  );
};

export default SearchResults;
