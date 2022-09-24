// import React, { useState } from "react";
// import { FaSortAlphaDown } from "react-icons/fa";

// const Sort = () => {
//     const [sort, setSort] = useState([]);
//     const [orderedAZ, setOrderedAZ] = useState(0);

//     const handleSort = () => {
//         const sortedCountries = [...sort];
//         if (orderedAZ === 0 || orderedAZ === 2) {
//           setSort(
//             sortedCountries.sort((a, b) => (a.name > b.name ? 1 : -1))
//           );
//           setOrderedAZ(1);
//         } else {
//             sortedCountries(
//             sortedCountries.sort((a, b) => (a.name > b.name ? -1 : 1))
//           );
//           setOrderedAZ(2);
//         }
//         };
     
        
//     return (
//         <div>
//             {/* Alphabetical Order */}
//             <button className='order-btn' onClick={handleSort}>
// 				{FaSortAlphaDown}
// 			</button>
//         </div>
//     );
// };

// export default Sort;