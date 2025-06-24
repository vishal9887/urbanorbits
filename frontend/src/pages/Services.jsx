// import React, { useState } from 'react';
// import RotatingText from 'react-rotating-text';
// import { Search } from 'lucide-react';

// const suggestions = [
//   'Branding & Identity Systems',
//   'Website Creation & Management',
//   'Email & Funnel Automation',
//   'Digital Marketing Strategy',
//   'E-commerce Setup & Growth',
//   'AI-Based Integrations'
// ];

// const AnimatedSearchBar = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [searchText, setSearchText] = useState('');
//   const [isHovering, setIsHovering] = useState(false);

//   const handleInputChange = (e) => setSearchText(e.target.value);
//   const handleClick = () => setIsEditing(true);
//   const handleBlur = () => setIsEditing(false);
//   const handleMouseEnter = () => setIsHovering(true);
//   const handleMouseLeave = () => setIsHovering(false);

//   return (
//     <div className="w-full max-w-3xl mx-auto mt-10 px-4">
//       <div className="relative">
//         {/* Search Icon */}
//         <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
//           <Search className="h-5 w-5" />
//         </span>

//         {/* Input Field */}
//         <input
//           type="text"
//           value={searchText}
//           onChange={handleInputChange}
//           placeholder=""
//           className="w-full pl-10 pr-4 py-4 rounded-full border border-gray-300 bg-white text-sm text-gray-700 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
//         />

//         {/* Rotating Text inside the input */}
//         <div className="absolute inset-y-0 left-10 flex items-center text-sm text-gray-700 pointer-events-none">
//           <span>
//             Search for{' '}
//             <span className="relative inline-flex">
//               <span className="before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-blue-500">
//                 “
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     value={searchText}
//                     onChange={handleInputChange}
//                     onBlur={handleBlur}
//                     className="text-black font-medium focus:outline-none bg-transparent pointer-events-auto"
//                     autoFocus
//                   />
//                 ) : (
//                   <span
//                     className="text-black font-medium cursor-pointer pointer-events-auto"
//                     onClick={handleClick}
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <RotatingText items={suggestions} play={!isHovering} />
//                   </span>
//                 )}
//                 ”
//               </span>
//             </span>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedSearchBar;


import React, { useState } from 'react';
import RotatingText from 'react-rotating-text';
import { Search } from 'lucide-react';

const suggestions = [
  'Branding & Identity Systems',
  'Website Creation & Management',
  'Email & Funnel Automation',
  'Digital Marketing Strategy',
  'E-commerce Setup & Growth',
  'AI-Based Integrations',
];

const AnimatedSearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleInputChange = (e) => setSearchText(e.target.value);
  const handleClick = () => setIsEditing(true);
  const handleBlur = () => {
    if (searchText === '') setIsEditing(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 px-4">
      <div className="relative">
        {/* Search Icon */}
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
          <Search className="h-5 w-5" />
        </span>

        {/* Input Field */}
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder=""
          onFocus={handleClick}
          className="w-full pl-10 pr-4 py-4 rounded-full border border-gray-300 bg-white text-sm text-gray-700 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
        />

        {/* Overlaid Text */}
        {!isEditing && (
          <div className="absolute inset-y-0 left-10 flex items-center text-sm text-gray-700 pointer-events-none">
            <span className="relative">
              Search for{' '}
              <span className="text-black font-medium">
                “
                <span
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="inline-block"
                >
                  {!isHovering ? (
                    <RotatingText
                      items={suggestions}
                      typingInterval={80}
                      deletingInterval={50}
                      pause={1500}
                    />
                  ) : (
                    <span>{suggestions[0]}</span>
                  )}
                </span>
                ”
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedSearchBar;

