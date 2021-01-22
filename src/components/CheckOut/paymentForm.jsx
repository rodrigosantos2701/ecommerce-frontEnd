import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors/';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';





export default function PaymentForm() {
  
  const onAddCreditCardPayment = () => {
  
    dispatch({
      type: 'ADD_CREDIT_CARD',
      creditCardName: creditCardName,
      validate: validate,
      creditCardNumber: creditCardNumber,
      CVV: CVV,
      
    })
  }

  const dispatch = useDispatch();


  const useStyles = makeStyles((theme) => ({
    

    buttons: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '10px'
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    }


  }));

  const classes = useStyles();
  const [pix, setPix] = React.useState(true);
  const [creditCardName, setCreditCardName] = React.useState(true);
  const [validate, setValidate] = React.useState('');
  const [creditCardNumber, setCreditCardNumber] = React.useState('');
  const [CVV, setCVV] = React.useState('');
  const [selected, setSelected] = React.useState('');




  const handleTypePayment = () => {
    setPix(!pix);
    setSelected(!selected);
  };


  return (
    <React.Fragment>

      <div className={classes.buttons}>


        <Button
          variant="outlined"
          onClick={handleTypePayment}
          className={classes.button}
          color={selected ? 'secondary' : ''}
          onClick={handleTypePayment}
        >PIX
      </Button>
        <Button
          variant="outlined"
          color={selected ? '' : 'secondary'}
          onClick={handleTypePayment}
          className={classes.button}
          onClick={handleTypePayment}

        >Cartão de Crédito
      </Button>

      </div>

      {pix ?
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>

          </Grid>
        </Grid>

        :
      <form onBlur={onAddCreditCardPayment} >
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Typography variant="h6" gutterBottom>
              Detalhes de Pagamento
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="cardName" label="Nome no cartão" fullWidth autoComplete="cc-name" onChange={((e)=>{setCreditCardName(e.target.value)})}
 />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Numero do cartão"
              fullWidth
              autoComplete="cc-number"
              onChange={((e)=>{setCreditCardNumber(e.target.value)})}


            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="expDate" label="Validade" fullWidth autoComplete="cc-exp" onChange={((e)=>{setValidate(e.target.value)})}
/>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Código de segurança no verso do cartão"
              fullWidth
              autoComplete="cc-csc"
              onChange={((e)=>{setCVV(e.target.value)})}

              
            />
          </Grid>
        </Grid>
      </form>
      }
    </React.Fragment>
  );
}