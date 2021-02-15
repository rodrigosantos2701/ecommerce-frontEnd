import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';





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


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Revisão do pedido
      </Typography>
      <List disablePadding>
        {cartData.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Envio
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
