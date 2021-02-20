/* eslint-disable */
import React from 'react';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));

const PatientCard = ({ className, patient, ...rest }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const pres = patient.pres;
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="center"
          mb={3}
        >
          <Avatar
            alt="Patient"
            src={patient.avatarUrl}
            variant="square"
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {patient.name}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
       <CardActions disableSpacing>
         <AccessTimeIcon
              className={classes.statsIcon}
              color="action"
            />
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              Last Met:
              {patient.lastAppt}
            </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
          <ExpandMoreIcon />
        </IconButton>
          <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              Prescription
            </Typography>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
          <List className={classes.root} subheader={<li />}>
            {pres.map((med,index) => (
              <li key={`section-${index}`} className={classes.listSection}>
                  {med}
              </li>
            ))}
          </List>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

PatientCard.propTypes = {
  className: PropTypes.string,
  patient: PropTypes.object.isRequired
};

export default PatientCard;
