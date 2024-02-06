import React, { useState } from 'react'

function ColorChanger() {
    const [backgroundColor, setBackgroundColor] = useState('red');
    const [colorChangeCount, setColorChangeCount] = useState(0);
        
    const handleColorChange = () => {
        let newColor = getRandomColor();
        
        setBackgroundColor(newColor);
        setColorChangeCount((prevCount) => prevCount + 1);

    }
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for(let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
  return (
    <div style={{backgroundColor ,color: 'white', padding:'50px', margin:'100px'}}>
        <h1>ColorChanger</h1>
        <p>Background Color Count: {colorChangeCount}</p>
        <button onClick={handleColorChange}>Background Changer</button>
        </div>
  )
}

export default ColorChanger






// import React, { useState } from 'react';

// const ColorChanger = () => {
//   // State variables
//   const [backgroundColor, setBackgroundColor] = useState('lightblue');
//   const [colorChangeCount, setColorChangeCount] = useState(0);

//   // Function to handle background color change
//   const handleColorChange = () => {
//     // Generate a random color for demonstration purposes
//     const newColor = getRandomColor();
    
//     // Update state variables
//     setBackgroundColor(newColor);
//     setColorChangeCount((prevCount) => prevCount + 1);
//   };

//   // Helper function to generate a random color
//   const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   return (
//     <div style={{ backgroundColor }}>
//       <h1>Color Changer</h1>
//       <p>Background color change count: {colorChangeCount}</p>
//       <button onClick={handleColorChange}>Change Background Color</button>
//     </div>
//   );
// };

// export default ColorChanger;
