  import React from "react";
  import ContentCopyIcon from "@mui/icons-material/ContentCopy";
  import { toast, ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import Table from "@mui/material/Table";
  import TableBody from "@mui/material/TableBody";
  import TableCell from "@mui/material/TableCell";
  import TableContainer from "@mui/material/TableContainer";
  import TableHead from "@mui/material/TableHead";
  import TableRow from "@mui/material/TableRow";
  import Paper from "@mui/material/Paper";

  const TableCard = ({ data , totalValue}) => {

    // function to handle the copy functionality
    const handleCopyClick = () => {
      navigator.clipboard.writeText(JSON.stringify(data,null,2))
      .then(() => {
        toast.success("Copied to clipboard!", {
          position: "top-right",
          autoClose: 1500,
          pauseOnHover: false,
          draggable: false,
        });
      });
    };

    return (
      <div className="flex flex-col border border-gray-300 w-full shadow-xl gap-2 py-5 px-2 rounded-sm">

        {/* copy button div */}
        <div className="w-full flex justify-end text-gray-500 p-2">
          <div onClick={handleCopyClick} className="cursor-pointer hover:text-black transition" >
            <ContentCopyIcon />
          </div>
        </div>

        {/* Table div using mui dense table since the normal table row height was large */}
        <div className="px-3">
          <TableContainer component={Paper}>
            <Table sx={{ border: "1px solid #ccc" }} size="small" >

              <TableHead>
                <TableRow>
                  <TableCell sx={{ borderRight: "1px solid #ccc", width: "135px" }} align="start" >
                    <b>Stage</b>
                  </TableCell>

                  <TableCell sx={{ borderRight: "1px solid #ccc", width: "110px" }} align="center" >
                    <b>Came to Stage</b>
                  </TableCell>

                  <TableCell sx={{ backgroundColor: "#c65911", color: "white", borderRight: "1px solid #ccc", width: "157px", }} align="center" >
                    <b>Lost / Disqualified from Stage</b>
                  </TableCell>

                  <TableCell sx={{ backgroundColor: "#70ad47", color: "white", borderRight: "1px solid #ccc",width: "110px" }} align="center">
                    <b>Moved to next stage</b>
                  </TableCell>

                  <TableCell align="center" sx={{width: "110px"}}>
                    <b>Win Rate %</b>
                  </TableCell>
                </TableRow>
              </TableHead>

              {/* main table body mapping through the data sent by backend*/}
              <TableBody>
                {data.map((row, i) => (
                  <TableRow key={row.stage} sx={{ backgroundColor: i % 2 == 1 ? "#f5f5f5" : "white", }} >

                    <TableCell sx={{ borderRight: "1px solid #ccc" }}>
                      {row.stage}
                    </TableCell>

                    <TableCell
                      align="right"
                      sx={{
                        borderRight: "1px solid #ccc",
                        backgroundColor: row.stage === "Won" ? "#548236" : null,
                        color: row.stage === "Won" ? "white" : null,
                    }}
                    >
                      {row.came}
                    </TableCell>

                    <TableCell align="right" sx={{ borderRight: "1px solid #ccc" }}>
                      {row.lost}
                    </TableCell>

                    <TableCell align="right" sx={{ borderRight: "1px solid #ccc" }}>
                      {row.moved}
                    </TableCell>

                    <TableCell align="right">{row.winRate}</TableCell>
                  </TableRow>
                ))}



                {/* last row of the table */}
                <TableRow sx={{ height: "10px"}}>

                  <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #ccc" }} > Total </TableCell>

                  <TableCell align="right" sx={{ fontWeight: "bold", borderRight: "1px solid #ccc" }}> - </TableCell>

                  <TableCell align="right" sx={{ fontWeight: "bold", borderRight: "1px solid #ccc" }}> {totalValue} </TableCell>

                  <TableCell align="right" sx={{ fontWeight: "bold", borderRight: "1px solid #ccc" }}> - </TableCell>

                  <TableCell align="right" sx={{ fontWeight: "bold", borderRight: "1px solid #ccc" }}> - </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <ToastContainer />
      </div>
    );
  };

  export default TableCard;
