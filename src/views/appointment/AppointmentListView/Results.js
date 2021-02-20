/* eslint-disable */
import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, appointments, ...rest }) => {
  const classes = useStyles();
  const [selectedAppointmentIds, setSelectedAppointmentIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedAppointmentIds;

    if (event.target.checked) {
      newSelectedAppointmentIds = appointments.map((appointment) => appointment.id);
    } else {
      newSelectedAppointmentIds = [];
    }

    setSelectedAppointmentIds(newSelectedAppointmentIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedAppointmentIds.indexOf(id);
    let newSelectedAppointmentIds = [];

    if (selectedIndex === -1) {
      newSelectedAppointmentIds = newSelectedAppointmentIds.concat(selectedAppointmentIds, id);
    } else if (selectedIndex === 0) {
      newSelectedAppointmentIds = newSelectedAppointmentIds.concat(selectedAppointmentIds.slice(1));
    } else if (selectedIndex === selectedAppointmentIds.length - 1) {
      newSelectedAppointmentIds = newSelectedAppointmentIds.concat(selectedAppointmentIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedAppointmentIds = newSelectedAppointmentIds.concat(
        selectedAppointmentIds.slice(0, selectedIndex),
        selectedAppointmentIds.slice(selectedIndex + 1)
      );
    }

    setSelectedAppointmentIds(newSelectedAppointmentIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAppointmentIds.length === appointments.length}
                    color="primary"
                    indeterminate={
                      selectedAppointmentIds.length > 0
                      && selectedAppointmentIds.length < appointments.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  Time
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.slice(0, limit).map((appointment) => (
                <TableRow
                  hover
                  key={appointment.id}
                  selected={selectedAppointmentIds.indexOf(appointment.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedAppointmentIds.indexOf(appointment.id) !== -1}
                      onChange={(event) => handleSelectOne(event, appointment.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={appointment.avatarUrl}
                      >
                        {getInitials(appointment.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {appointment.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {appointment.phone}
                  </TableCell>
                  <TableCell>
                    {appointment.date}
                  </TableCell>
                  <TableCell>
                    {appointment.time}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={appointments.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  appointments: PropTypes.array.isRequired
};

export default Results;
