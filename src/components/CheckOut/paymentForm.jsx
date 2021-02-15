import React, { useEffect, useState } from 'react';
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
import InputMask from "react-input-mask"
import Validators from '../../validates/validates';









export default function PaymentForm() {

  const activeButtonDisable = useSelector(state => state.activeButtonDisable)
  const pixPaymentState = useSelector(state => state.pix)


  const onAddCreditCardPayment = () => {

    dispatch({
      type: 'ADD_CREDIT_CARD',
      creditCardName: creditCardName,
      validate: validate,
      creditCardNumber: creditCardNumber,
      CVV: CVV,

    })
  }

  const onActiveButton = () => {
    dispatch({
      type: 'SET_ACTIVE_BUTTON',
      payload: false,
    })
  };

  const pixPayment = () => {
    dispatch({
      type: 'SET_PIX',
      payload: true,
    })
  };

  const pixPaymentDisable = () => {
    dispatch({
      type: 'SET_PIX',
      payload: false,
    })
  };

  const disableOnActiveButton = () => {
    dispatch({
      type: 'SET_ACTIVE_BUTTON',
      payload: true,
    })
  };

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
  const [creditCardName, setCreditCardName] = React.useState(true);
  const [validate, setValidate] = React.useState('');
  const [creditCardNumber, setCreditCardNumber] = React.useState('');
  const [CVV, setCVV] = React.useState();
  const [selectedPix, setSelectedPix] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const [validaCvv, setValidaCvv] = useState(false);


  const handleTypePaymentPix = () => {
    setSelectedPix(true);
    onActiveButton();
    pixPayment();
  };

  const handleTypePaymentCard = () => {
    disableOnActiveButton();
    pixPaymentDisable();
  };

  const pixPaymentButton = () => {
    onActiveButton();
    pixPayment();
  }

  return (
    <React.Fragment>

      <div className={classes.buttons}>
        <Button
          variant="outlined"
          className={classes.button}
          color={pixPaymentState ? 'secondary' : ''}
          onClick={pixPaymentButton}
        >PIX
      </Button>
        <Button
          variant="outlined"
          color={pixPaymentState ? '' : 'secondary'}
          className={classes.button}
          onClick={pixPaymentDisable}
        >Cartão de Crédito
      </Button>

      </div>

      {pixPaymentState ?
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
              <TextField
                required
                id="cardName"
                label="Nome do cartão"
                fullWidth
                autoComplete="cc-name"
                onChange={((e) => { setCreditCardName(e.target.value) })}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputMask
                mask="9999-9999-9999-9999"
                maskChar=""
                disabled={false}
                value={creditCardNumber}
                onChange={((e) => { setCreditCardNumber(e.target.value) })}
              >
                {() =>
                  <TextField required id="cardName" label="Numero do cartão" fullWidth autoComplete="cc-number" />
                }
              </InputMask>
            </Grid>

            <Grid item xs={12} md={6}>
              <InputMask
                mask="99-9999"
                maskChar=""
                disabled={false}
                value={validate}
                onChange={((e) => { setValidate(e.target.value) })}
              >
                {() =>
                  <TextField required id="expDate" label="Validade" fullWidth autoComplete="cc-exp"
                  />
                }
              </InputMask>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputMask
                mask="999"
                maskChar=""
                disabled={false}
                value={CVV}
                onChange={(e) => setCVV((e.target.value))}
              >
                {() =>
                  <TextField
                    required
                    id="cvv"
                    label="CVV"
                    fullWidth
                  />
                }
              </InputMask>
            </Grid>

            {creditCardName && Validators.validate(validate) && creditCardNumber && Validators.cvv(CVV) ?
              onActiveButton() :
              disableOnActiveButton()
            }

          </Grid>
        </form>
      }
    </React.Fragment>
  );
}