import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import PatientCard from './PatientCard';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  patientCard: {
    height: '100%'
  }
}));

const PatientList = () => {
  const classes = useStyles();
  const [patients] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Patients"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {patients.map((patient) => (
              <Grid
                item
                key={patient.id}
                lg={4}
                md={6}
                xs={12}
              >
                <PatientCard
                  className={classes.patientCard}
                  patient={patient}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={1}
            size="small"
          />
        </Box>
      </Container>
    </Page>
  );
};

export default PatientList;
