import React, { useState } from 'react';
import clsx from 'clsx';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/pic1.jpg',
    name: 'Margaret M Kennard',
    phone: '+91-9588274374',
    date: '24-02-2021',
    time: '17:00'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/pic2.jpg',
    name: 'David Balke',
    phone: '+91-9588592812',
    date: '24-02-2021',
    time: '18:00'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/pic3.jpg',
    name: 'Fidel Garrett',
    phone: '+91-9192552812',
    date: '25-02-2021',
    time: '14:00'
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/pic5.jpg',
    name: 'Henry Alanis',
    phone: '+91-1757328412',
    date: '27-02-2021',
    time: '09:00'
  }
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const UpcomingAppts = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Upcoming Appointments" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Patient
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Time
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {order.name}
                  </TableCell>
                  <TableCell>
                    {order.date}
                  </TableCell>
                  <TableCell>
                    {order.time}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

UpcomingAppts.propTypes = {
  className: PropTypes.string
};

export default UpcomingAppts;
