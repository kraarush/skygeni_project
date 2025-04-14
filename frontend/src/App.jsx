import React from "react";
import Card from "./component/Card";
import { Button, ButtonGroup } from "@mui/material";
import CustomHook from "./CustomHook";
import { useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import TableCard from "./component/TableCard";
import Footer from "./component/Footer";


const App = () => {
  CustomHook();

  const opportunityData = useSelector((store) => store.opportunityData);
  const acvData = useSelector((store) => store.acvData);
  const loading = useSelector((store) => store.loading);
  const opportunityTableData = useSelector(
    (store) => store.opportunityTableData.tableData
  );
  const acvTableData = useSelector((store) => store.acvTableData.tableData);
  const opportunityTotalValue = useSelector(
    (store) => store.opportunityTableData.totalValue
  );
  const acvTotalData = useSelector((store) => store.acvTableData.totalValue);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader2 className="animate-spin w-10 h-10 mr-2" /> loading Data...
      </div>
    );
  }

  return (
    <div className="w-full" >
      <div className="max-w-[1400px] mx-auto flex flex-col gap-4 my-2 p-8 sm:gap-4 lg:p-4 lg:my-6">
        {/* top bar */}
        <div className="border-b-3 border-gray-300">
          <ButtonGroup
            variant="contained"
            aria-label="Basic button group"
            size="small"
          >
            <Button>Summary</Button>
            <Button variant="outline">What-if</Button>
          </ButtonGroup>
        </div>

        {/* cards for data visualization */}
        <div className="flex flex-col gap-4 lg:flex-row sm:gap-4 justify-center items-center">
          <Card key={1} data={opportunityData} heading={"opportunity count"} />
          <Card key={2} data={acvData} heading={"ACV"} />
        </div>

        {/* tables */}
        <div className="flex flex-col gap-4 lg:flex-row sm:gap-4 justify-center items-center">
          <TableCard
            key={1}
            data={opportunityTableData}
            totalValue={opportunityTotalValue}
          />
          <TableCard key={2} data={acvTableData} totalValue={acvTotalData} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
