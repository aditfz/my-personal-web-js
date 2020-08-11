import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

export default function listItem({
  onClick,
  className,
  style,
  Children,
  style2,
  className2,
}) {
  return (
    <ListItem onClick={onClick} className={className} button style={style}>
      <ListItemText disableTypography={true}>
        {
          <Typography className={className2} style={style2} variant='body2'>
            {Children}
          </Typography>
        }
      </ListItemText>
      <div className='overlay' />
    </ListItem>
  );
}
