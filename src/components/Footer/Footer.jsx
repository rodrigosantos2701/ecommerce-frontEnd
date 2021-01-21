import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import PlaceIcon from '@material-ui/icons/Place';
import CallIcon from '@material-ui/icons/Call';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#FFF',
    display:'flex',
    position: 'relative',
    bottom: '0',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 'none',
      position: 'unset',


    },

    
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5,
    alignItems: 'center'

  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'left',
    },
    
  },
  text: {
    paddingLeft: 10,
    paddingRight: 30,
    alignItems: 'center',
    display: 'flex'
  },
  color: {
    backgroundColor: '#F50057',
    opacity: 0.9,
    
  },
}));


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = ({ footer }) => {

  const classes = useStyles();

  return (
    <List className={classes.root}>

      <ListItem className={classes.list}>

        <div className={classes.box}>

        {footer.line1 !== ''?
          <ListItemAvatar className={classes.item}>
            <Avatar className={classes.color} >
              <EmailIcon />
            </Avatar>
            <ListItemText className={classes.text} primary={footer.line1} />
          </ListItemAvatar>
                        : null}


          {footer.line2 !== ''?
          <ListItemAvatar className={classes.item}>
            <Avatar className={classes.color}>
              <PlaceIcon />
            </Avatar>
            <ListItemText className={classes.text} primary={footer.line2} />
          </ListItemAvatar>
                      : null}


            {footer.line3 !== ''?
                <ListItemAvatar className={classes.item}>
                  <Avatar className={classes.color}>
                    <CallIcon />
                  </Avatar>
                  <ListItemText className={classes.text} primary={footer.line3} />
                </ListItemAvatar>
                        : null}
        </div>
        <br />
        <Copyright />
      </ListItem>

    </List>
  );
}

export default Footer;
