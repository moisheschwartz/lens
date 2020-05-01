import React, { useState, useEffect } from "react";

import { Grid, Paper, Typography, Card, CardContent } from "@material-ui/core";

//Services
import { getJob } from "../../../services/jobsService";

function LineItem({ label, value }) {
  return (
    <>
      <Typography>
        <b>{label}: </b>
        {value}
      </Typography>
      <br />
    </>
  );
}

const JobDetails = (props) => {
  const [job, setJob] = useState([]);
  const { id } = props.match.params;

  const loadData = async () => {
    const { data } = await getJob(id);
    setJob(data);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <Paper style={{ padding: "24px" }}>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h5">Order ID: {id} </Typography>
          <Typography>Patient: {job.patient} </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right">Order Date: {job.order_date} </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ paddingTop: "24px" }} spacing={4}>
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                <b>Left</b>
              </Typography>
              <LineItem label="Left sphere" value={job.left_sphere} />
              <LineItem label="Left cylinder" value={job.left_cylinder} />
              <LineItem label="Left axis" value={job.left_axis} />
              <LineItem label="Left add" value={job.left_add} />
              <LineItem label="Left prism in" value={job.left_prism_in} />
              <LineItem label="Left prism up" value={job.left_prism_up} />
              <LineItem label="Left dist pd" value={job.left_dist_pd} />
              <LineItem label="Left near pd" value={job.left_near_pd} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                <b>Right</b>
              </Typography>
              <LineItem label="Right sphere" value={job.right_sphere} />
              <LineItem label="Right cylinder" value={job.right_cylinder} />
              <LineItem label="Right axis" value={job.right_axis} />
              <LineItem label="Right add" value={job.right_add} />
              <LineItem label="Right prism in" value={job.right_prism_in} />
              <LineItem label="Right prism up" value={job.right_prism_up} />
              <LineItem label="Right dist pd" value={job.right_dist_pd} />
              <LineItem label="Right near pd" value={job.right_near_pd} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                <b>Frame</b>
              </Typography>
              <LineItem label="Frame type" value={job.frame_type} />
              <LineItem label="Frame brand" value={job.frame_brand} />
              <LineItem label="Frame model" value={job.frame_model} />
              <LineItem label="Frame color" value={job.frame_color} />
              <LineItem label="Frame a" value={job.frame_a} />
              <LineItem label="Frame b" value={job.frame_b} />
              <LineItem label="Frame ed" value={job.frame_ed} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                <b>Lens</b>
              </Typography>
              <LineItem label="Lens brand" value={job.lens_brand} />
              <LineItem label="Lens style" value={job.lens_style} />
              <LineItem label="Lens material" value={job.lens_material} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                <b>Other</b>
              </Typography>
              <LineItem label="DBL" value={job.dbl} />
              <LineItem label="Bevel type" value={job.bevel_type} />
              <LineItem label="Safety bevel" value={job.safety_bevel} />
              <LineItem label="Polish" value={job.polish} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JobDetails;
