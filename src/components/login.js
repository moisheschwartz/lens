import React from "react";
import { FormControl, TextField, Grid, Button } from "@material-ui/core";

import { login } from "../services/loginService";

export default function () {
  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const loginStatus = await login(formData);
    console.log("ls", loginStatus);
    if (loginStatus.status === 200) {
      localStorage.setItem("loggedin", true);
      window.location.href = "/jobs";
    } else {
      alert("Invalid User password Combination");
      return;
    }
  };

  return (
    <main>
      <Grid
        style={{ minHeight: "100vh", width: "100vw" }}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xl={3} xs={9}>
          <form onSubmit={handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <TextField
                name="user"
                type="text"
                required
                variant="outlined"
                label="user"
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <TextField
                name="password"
                type="password"
                required
                variant="outlined"
                label="password"
              />
            </FormControl>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign in
            </Button>
          </form>
        </Grid>
      </Grid>
    </main>
  );
}
