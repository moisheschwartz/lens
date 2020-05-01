import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

//Services
import { getJobsList } from "../../../services/jobsService";
const JobsList = () => {
  const [list, setList] = useState([]);

  const loadData = async () => {
    const { data } = await getJobsList();
    setList(data);
  };

  const history = useHistory();

  function handleClick(id) {
    history.push(`/job/${id}`);
  }

  useEffect(() => {
    loadData();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "#ddd" }}>
            <TableCell>Order Id</TableCell>
            <TableCell>Order Date</TableCell>
            <TableCell>Frame Name</TableCell>
            <TableCell>Patient</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((job) => (
            <TableRow
              key={job.orderid}
              onClick={() => handleClick(job.orderid)}
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <TableCell>{job.orderid}</TableCell>
              <TableCell>{job.order_date}</TableCell>
              <TableCell>{job.frame_name}</TableCell>
              <TableCell>{job.patient}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JobsList;
