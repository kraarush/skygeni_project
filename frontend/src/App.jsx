import React from "react";
import Card from "./component/Card";
import { Button, ButtonGroup } from "@mui/material";
import CustomHook from "./CustomHook";
import { useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import TableCard from "./component/tableCard";

const App = () => {
  CustomHook();

  const opportunityData = useSelector((store) => store.opportunityData);
  const acvData = useSelector((store) => store.acvData);
  const loading = useSelector((store) => store.loading);

  let totalAcvValue = 0;
  let totalOpportunityValue = 0;


  // setting the table data
  const opportunityTableData = opportunityData.map((item,index,arr) => {
    const came = item.count || 0;
    const bottom = item.bottomValue ?? 0;
    const moved = item.label === "Won" ? "-" : Math.ceil(came * (bottom / 100));
    const lost = item.label === "Won" ? "-" : came - moved;
    const winRate = `${item.rightPercentage}%`;
    if (typeof lost === "number") totalOpportunityValue += lost;
  
    return {
      stage: item.label,
      came,
      lost,
      moved,
      winRate,
    };
  });
  

  // setting the acv table data
  const acvTableData = acvData.map((item, index) => {
    const came = item.acv || 0;
    const nextItem = acvData[index + 1];
    const moved = item.label === "Won" || !nextItem ? "-" : Math.round(nextItem.acv) || 0;
    const lost = item.label === "Won" ? "-" : came - moved;
    const winRate = `${item.rightPercentage}%`;
    if (typeof lost === "number") totalAcvValue += lost;
  
    return {
      stage: item.label,
      came,
      lost,
      moved,
      winRate,
    };
  });

  
  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader2 className="animate-spin w-10 h-10 mr-2" /> loading Data
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto flex flex-col gap-4 my-4 p-2 sm:gap-4 sm:my-10 sm:p-4">
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
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center items-center">
        <Card key={1} data={opportunityData} heading={"opportunity count"} />
        <Card key={2} data={acvData} heading={"ACV"} />
      </div>

      {/* tables */}
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center items-center">
        <TableCard key={1} data={opportunityTableData} totalValue={totalOpportunityValue}/>
        <TableCard key={2} data={acvTableData} totalValue={totalAcvValue}/>
      </div>
    </div>
  );
};

export default App;
