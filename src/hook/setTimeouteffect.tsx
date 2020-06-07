import React,{useState,useEffect} from 'react';

const SetTimeoutEffect:React.FC = () => {
    const [state,setState] = useState<number>(0);
    console.log('before');
    useEffect(() => {
        
        console.log(3)
        if(state > 1){
            console.log(4)
        }
        // setTimeout(() => {
        //     setState(state+1);
        // },1000)
    },[state])
    return (
        <div>
            {console.log('rendering')}
            <button onClick={() => setState(state+1)}>点我</button>
        </div>
    );
}
export default SetTimeoutEffect;