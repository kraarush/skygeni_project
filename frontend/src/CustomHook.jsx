import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setOpportunityData } from '../redux/opportunity.slice';
import { setAcvData } from '../redux/acvData.slice';

// custom hook for setting data globally in the redux store

const CustomHook = () => {
    const dispatch = useDispatch();
    const backend_url = import.meta.env.VITE_BACKEND_URL;
    
    useEffect(() => {
      const getData = async () => {
        try {
        console.log("here me");
        const res = await axios.get(`${backend_url}/get`);
        if (res.data.success) {
            dispatch(setOpportunityData(res.data.opportunityData));
            dispatch(setAcvData(res.data.acvData));

        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
}

export default CustomHook;