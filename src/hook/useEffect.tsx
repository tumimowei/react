import React ,{useState,useEffect}from 'react'
const MouseTracker = () =>{
    const [position,setPosition] = useState({x:0,y:0})
    useEffect(() => {
        console.log('addEvent')
        const updateMouse = (e:MouseEvent) =>{
            console.log('inner');
            setPosition({x:e.clientX,y:e.clientY});
        }
        document.addEventListener('click',updateMouse)
        return() => {
            console.log('remove effect')
            document.removeEventListener('click',updateMouse);
        }
    });
    console.log('before render')
    return (
        <div>
            <p>x:{position.x},y:{position.y}</p>
        </div>
    );
}
export default MouseTracker;