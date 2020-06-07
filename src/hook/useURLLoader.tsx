import {useState,useEffect} from 'react';
import axios from 'axios';
const useURLLoader  = (url:string,deps:any[] = []) => {
    const [data,setData] = useState<any>(null);
    const [loading,setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        axios.get(url).then(res => {
            // if(res.data){
            //     setData(res.data);
            // }
            res.data && setData(res.data);
            setLoading(false);
        })
    },deps);
    return [data,loading];
}
export default useURLLoader;