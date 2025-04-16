import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOpportunityData } from "../redux/opportunity.slice";
import { setAcvData } from "../redux/acvData.slice";
import { setLoading } from "../redux/loading.slice";
import { setAcvTableData, setAcvTotalValue } from "../redux/acvTable.slice";
import { setOpportunityTableData, setOpportunityTotalValue } from "../redux/opportunityTable.slice";

// A chart of the redux store is attached in the repo readme file along with website screenshots

// custom hook for setting data in the redux store
const CustomHook = () => {
  const dispatch = useDispatch();
  const backend_url = import.meta.env.VITE_BACKEND_URL;
 
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${backend_url}/get`);
        if (res.data.success) {
          dispatch(setOpportunityData(res.data.opportunityData));
          dispatch(setAcvData(res.data.acvData));
          dispatch(setAcvTableData(res.data.acvTableData));
          dispatch(setOpportunityTableData(res.data.opportunityTableData));
          dispatch(setOpportunityTotalValue(res.data.totalOpportunityValue));
          dispatch(setAcvTotalValue(res.data.totalAcvValue))
        }
      } catch (error) {
        console.log(error); 
      } finally {
        dispatch(setLoading(false));  
      }
    };

    getData();
  }, []);
};

export default CustomHook;
