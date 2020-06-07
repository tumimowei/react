import React ,{useState,useEffect}from 'react';
const useMousePosition = () => {
    const [positions,setPositions] = useState({x:0,y:0});
    useEffect(()=>{ 
        console.log('执行几次');
        const setPositionway = (e:MouseEvent) => {
            setPositions({x:e.clientX,y:e.clientY});
        }
        document.addEventListener('mousemove',setPositionway);

        return () => {
            document.removeEventListener('mousemove',setPositionway);
        }
    },[])
    return positions
}
export default useMousePosition;

// import React, { useState, useEffect } from 'react'

// const useMousePosition = () => {
//   const [ positions, setPositions ] = useState({x: 0, y: 0})
//   useEffect(() => {
//     console.log('add effect', positions.x)
//     const updateMouse= (e: MouseEvent) => {
//       setPositions({ x: e.clientX, y: e.clientY })
//     }
//     document.addEventListener('mousemove', updateMouse)
//     return () => {
//       console.log('remove effect', positions.x)
//       document.removeEventListener('mousemove', updateMouse)
//     }
//   }, [positions.x])
//   return positions
// }

// export default useMousePosition