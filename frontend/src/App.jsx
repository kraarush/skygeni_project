import React from "react";
import Card from "./component/Card";
import { Button, ButtonGroup } from "@mui/material";
import CustomHook from "./CustomHook";
import { useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import TableCard from "./component/TableCard";
import Footer from "./component/Footer";


const App = () => {
  
  // custom hook or simply a function which fetches data from the backend and loads them into the redux store
  CustomHook();

  const loading = useSelector((store) => store.loading);

  // chart data
  const opportunityData = useSelector((store) => store.opportunityData);
  const acvData = useSelector((store) => store.acvData);

  // table data
  const opportunityTableData = useSelector((store) => store.opportunityTableData.tableData);
  const opportunityTotalValue = useSelector((store) => store.opportunityTableData.totalValue);

  const acvTableData = useSelector((store) => store.acvTableData.tableData);
  const acvTotalData = useSelector((store) => store.acvTableData.totalValue);


  // loading animation while the data is fetched from the backend (loading time is more for the deployed website)
  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader2 className="animate-spin w-10 h-10 mr-2" /> loading Data from backend ...
      </div>
    );
  }

  return (
    <div className="lg:min-h-screen lg:flex lg:flex-col w-full" >  
      <div className="lg:flex-grow max-w-[1400px] mx-auto flex flex-col gap-4 my-2 p-8 sm:gap-4 lg:p-4 lg:my-6 justify-center">
        
        {/* top button bar */}
        <div className="border-b-3 border-gray-300">
          <ButtonGroup variant="contained" aria-label="Basic button group" size="small" >
            <Button>Summary</Button>
            <Button variant="outline">What-if</Button>
          </ButtonGroup>  
        </div>

        {/* charts for json data visualization using custom card and not mui card component*/}
        <div className="flex flex-col gap-4 lg:flex-row sm:gap-4 justify-center items-center">
          <Card key={1} data={opportunityData} heading={"opportunity count"} />
          <Card key={2} data={acvData} heading={"Acv"} />
        </div>

        {/* tables for tabular visualization of data */}
        <div className="flex flex-col gap-4 lg:flex-row sm:gap-4 justify-center items-center">
          <TableCard key={1} data={opportunityTableData} totalValue={opportunityTotalValue} />
          <TableCard key={2} data={acvTableData} totalValue={acvTotalData} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
