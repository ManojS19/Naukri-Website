// import React, { useEffect, useState } from 'react';
// import './SearchResultsList.css';
// import SearchResults from './SearchResults';

// const SearchResultsList = ({results,setSearchKeyword}) => {
//   const [items, setItems]=useState('');

//   useEffect(()=>{
//     setSearchKeyword(items);
//   },[items,setSearchKeyword]);

//   return (
//     <div className='results-list'>
//         {
//             results.map((result, id)=>{
//                 return <SearchResults result={result} key={id} setItems={setItems}/>
//             })
//         }
//     </div>
//   );
// }

// export default SearchResultsList;








import React, { useEffect, useState } from 'react';
import './SearchResultsList.css';
import SearchResults from './SearchResults';

const SearchResultsList = ({ results, setSearchKeyword }) => {
  const [items, setItems] = useState('');

  useEffect(() => {
    setSearchKeyword(items);
  }, [items, setSearchKeyword]);

  return (
    <div className='results-list'>
      {results.map((result, id) => (
        <SearchResults result={result} key={id} setItems={setItems} />
      ))}
    </div>
  );
};

export default SearchResultsList;
