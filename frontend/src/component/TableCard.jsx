import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableCard = ({ clipboardText }) => {
  const data = [
    { stage: "Suspect", came: 24, lost: 6, moved: 18, winRate: "13%" },
    { stage: "Qualify", came: 18, lost: 10, moved: 8, winRate: "17%" },
    { stage: "Demo", came: 8, lost: 4, moved: 4, winRate: "38%" },
    { stage: "Proposal", came: 4, lost: 1, moved: 3, winRate: "75%" },
    { stage: "Negotiate", came: 3, lost: 0, moved: 3, winRate: "100%" },
    { stage: "Won", came: 3, lost: "-", moved: "-", winRate: "100%" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(clipboardText).then(() => {
      toast.success("Copied to clipboard!", {
        position: "top-right",
        autoClose: 1500,
        pauseOnHover: false,
        draggable: false,
      });
    });
  };

  return (
    <div className="flex flex-col border border-gray-300 w-full shadow-xl gap-3 py-2 px-2 rounded-sm">
      {/* copy button div */}
      <div className="w-full flex justify-end text-gray-500 p-2">
        <div
          onClick={handleCopy}
          className="cursor-pointer hover:text-black transition"
        >
          <ContentCopyIcon />
        </div>
      </div>

      {/* Table div */}
      <div className="p-2">
        <TableContainer component={Paper}>
          <Table sx={{ border: "1px solid #ccc", minWidth: "600px" }} size="small">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ borderRight: "1px solid #ccc", width: "140px" }}
                  align="start"
                >
                  <b>Stage</b>
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid #ccc" }}
                  align="center"
                >
                  <b>Came to Stage</b>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#c65911",
                    color: "white",
                    borderRight: "1px solid #ccc",
                    width: "180px",
                  }}
                  align="center"
                >
                  <b>Lost / Disqualified from Stage</b>
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#70ad47",
                    color: "white",
                    borderRight: "1px solid #ccc",
                  }}
                  align="center"
                >
                  <b>Moved to next stage</b>
                </TableCell>
                <TableCell align="center">
                  <b>Win Rate %</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, idx) => (
                <TableRow
                  key={row.stage}
                  sx={{
                    backgroundColor: idx % 2 === 1 ? "#f5f5f5" : "white",
                  }}
                >
                  <TableCell sx={{ borderRight: "1px solid #ccc" }}>
                    {row.stage}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      borderRight: "1px solid #ccc",
                      backgroundColor:
                        row.stage === "Won" ? "#548236" : "inherit",
                      color: row.stage === "Won" ? "white" : "inherit",
                    }}
                  >
                    {row.came}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ borderRight: "1px solid #ccc" }}
                  >
                    {row.lost}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ borderRight: "1px solid #ccc" }}
                  >
                    {row.moved}
                  </TableCell>
                  <TableCell align="right">{row.winRate}</TableCell>
                </TableRow>
              ))}
              <TableRow sx={{ height: "10px" }}>
                <TableCell
                  sx={{
                    borderTop: "1px solid #ccc",
                    borderRight: "1px solid #ccc",
                    fontWeight: "bold",
                    paddingTop: "1px",
                    paddingBottom: "1px",
                    paddingLeft: "8px",
                    paddingRight: "8px",
                  }}
                >
                  Total
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    borderRight: "1px solid #ccc",
                    borderTop: "1px solid #ccc",
                    py: 1,
                    px: 2,
                  }}
                >
                  -
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    borderRight: "1px solid #ccc",
                    borderTop: "1px solid #ccc",
                    fontWeight: "bold",
                    py: 1,
                    px: 2,
                  }}
                >
                  21
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    borderRight: "1px solid #ccc",
                    borderTop: "1px solid #ccc",
                    py: 1,
                    px: 2,
                  }}
                >
                  -
                </TableCell>
                <TableCell align="right" sx={{ borderTop: "1px solid #ccc" }}>
                  -
                </TableCell>
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
