import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  emptyCart:{
  },
    toolbar: theme.mixins.toolbar,
    title: {
      marginTop: '3%',
    },
  
  table: {
  },
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
  },
  subtotal: {
    padding: theme.spacing(3),
    textAlign: 'right',
    marginRight: '10%'
  },
  buttonLink: {
    textDecoration: 'none',
  },

  buttonCart: {
    padding:'10px',
    width: '200px',

    [theme.breakpoints.down('xs')]: {
      width: '200px',
    },

  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    maxWidth: '500px'

  }



}));



  