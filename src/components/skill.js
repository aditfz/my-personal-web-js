import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  progressDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  progress: {
    backgroundColor: '#2e344e',
    width: '80%',
    marginLeft: 15,
  },
}));
export default function Skill({ skill, value }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (val === value) {
        return;
      }
      setVal(val + 5);
    }, 50);
  }, [val]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography varient='h6'>{skill}</Typography>
      <div className={classes.progressDiv}>
        <Typography variant='body1'>{value}%</Typography>
        <LinearProgress
          className={classes.progress}
          variant='determinate'
          value={val}
        />
      </div>
    </div>
  );
}
