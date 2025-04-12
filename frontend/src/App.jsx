import React from "react";
import Card from "./component/Card";
import { Button, ButtonGroup } from "@mui/material";
import CustomHook from "./CustomHook";
import { useSelector } from "react-redux";

const App = () => {

  CustomHook();

  const opportunityData = useSelector((store) => store.opportunityData);
  const acvData = useSelector((store) => store.acvData);

  return (
    <div className="max-w-[1400px] mx-auto flex flex-col gap-2 my-4 p-2 sm:gap-4 sm:my-10 sm:p-4">

      {/* top bar */}
      <div className="border-b-3 border-gray-300">
        <ButtonGroup variant="contained" aria-label="Basic button group" size="small" >
          <Button>Summary</Button>
          <Button variant="outline">What-if</Button>
        </ButtonGroup>
      </div>

      {/* cards for data visualization */}
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center items-center">
        <Card key={1} data={opportunityData} heading={'opportunity count'}/>
        <Card key={2} data={acvData} heading={'ACV'}/>
      </div>

      {/* tables */}
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center items-center">

      </div>
    </div>
  );
};

export default App;
