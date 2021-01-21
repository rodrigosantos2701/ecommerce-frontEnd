import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  itemContent: {
    paddingTop: '3%',
    paddingBottom: '5%',
    minHeight: '60px',
    margin: 0,
    maxWidth: 'fit-content'
  },
 
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paperItem: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    divider: {
      background: 'gray',
    },
    buttons:{
      display: 'flex',
      justifyContent: 'center',
    }

  }));



