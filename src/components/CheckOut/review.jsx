import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));


export default function Review() {
  const classes = useStyles();
  const checkoutData = useSelector(state => state.checkout);
  const cartData = useSelector(state => state.data);
  const creditCardData = useSelector(state => state.creditCardData);
  const pixPaymentState = useSelector(state => state.pix)
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [frete, setFrete] = useState('');



  const fetchFrete = async () => {
    let count = 0

    const BASE_URL = await 'http://localhost:1337/fretes';
    await fetch(BASE_URL, {
      method: 'get' // opcional 
    })
      .then(function (response) {
        response.json().then(function (data) {
          const frete = {
            precoNormal: data[0].precoNormal,
            valorParaFreteGratis: data[0].valorParaFreteGratis
          }
          {
            cartData.map((cartData) => (
              count = (count + cartData.price * cartData.purchase) || ''
            ))
          }
          setSubTotalPrice(count)

          if (count < frete.valorParaFreteGratis) {
            setTotalPrice(count + frete.precoNormal)
            setFrete(frete.precoNormal)
          }
          else {
            setTotalPrice(count)
            setFrete(frete.precoNormal)

          }

        });
      })
      .catch(function (err) { console.error(err); });
  };

  useEffect(() => {
    fetchFrete()
  }, []);


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Revisão do pedido
      </Typography>


      <Grid container spacing={2} className={classes.title}>

        {cartData.map((cartData) => (
          <Grid container  >

            <Grid item xs={1} sm={1}>
            </Grid>
            <Grid item xs={5} sm={5} >
              <Paper elevation={0} className={classes.paper}>
                <Typography >{cartData.name}</Typography>
              </Paper>
            </Grid>

            <Grid item xs={2} sm={2} >
              <Paper elevation={0} className={classes.paper}>
                <Typography >{cartData.purchase}</Typography>
              </Paper>
            </Grid>

            <Grid item xs={3} sm={3}  >
              <Paper elevation={0} className={classes.paper}>
                <Typography >{(cartData.price * cartData.purchase).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</Typography>
              </Paper>
            </Grid>

            <Grid item xs={1} sm={1}>
            </Grid>

          </Grid>
        ))}

      </Grid>

      <Grid container spacing={2} className={classes.title} >
        <Grid item xs={12} sm={12}  >
          <Typography variant="body1" gutterBottom  >Subtotal: {subTotalPrice.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</Typography>
          {subTotalPrice !== totalPrice?
          <Typography variant="body1" gutterBottom  >Frete: {frete.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</Typography>
          :
          <Typography variant="body1" gutterBottom  >Frete: <span style={{color:'#FF0000' , textDecoration: 'line-through'}}>{frete.toLocaleString('pt-br', { minimumFractionDigits: 2 })} </span> Grátis</Typography>
        }
          <Typography variant="body1" gutterBottom  >Total: {totalPrice.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Detalhes do envio
          </Typography>
          <Typography gutterBottom>{checkoutData.address}</Typography>
          <Typography gutterBottom>{checkoutData.referency}</Typography>
          <Typography gutterBottom>{checkoutData.neighbor}</Typography>
          <Typography gutterBottom>{checkoutData.city}</Typography>
          <Typography gutterBottom>{checkoutData.stateAddress}</Typography>
          <Typography gutterBottom>{checkoutData.cep}</Typography>
        </Grid>


        {!pixPaymentState ?
          <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Detalhes do pagamento
              </Typography>
            <Grid container>
              <Grid item xs={4}>
                <Typography gutterBottom>{'Cartão'}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography gutterBottom>{'Visa'}</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <Typography gutterBottom>{'Nome'}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography gutterBottom>{creditCardData.creditCardName}</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <Typography gutterBottom>{'Número'}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography gutterBottom>{creditCardData.creditCardNumber}</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <Typography gutterBottom>{'Validade'}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography gutterBottom>{creditCardData.validate}</Typography>
              </Grid>
            </Grid>
          </Grid>
          :

          <Grid item container alignItems={'center'} xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Pagamento Pix
              </Typography>
          </Grid>

        }
      </Grid>

    </React.Fragment>
  );
}
