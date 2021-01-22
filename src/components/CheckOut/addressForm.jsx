import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export default function AddressForm() {


  const dispatch = useDispatch();
  const [name,setName] = useState('');
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [address,setAddress] = useState('')
  const [referency,setReferency] = useState('')
  const [city,setCity] = useState('')
  const [stateAddress,setStateAddress] = useState('')
  const [cep,setCep] = useState('')
  const [whatsApp,setWhatsApp] = useState('')


   const onAddAddressCheckout = () => {

      dispatch({
        type: 'ADD_CHECKOUT',
        name: name,
        lastName: lastName,
        email: email,
        address: address,
        referency: referency,
        city: city,
        stateAddress: stateAddress,
        cep: cep,
        whatsApp: whatsApp
        
      })
    }
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Endereço de envio
      </Typography>
      <form onBlur={onAddAddressCheckout} >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nome"
            fullWidth
            autoComplete="given-name"
            onChange={((e)=>{setName(e.target.value)})}
            
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Sobrenome"
            fullWidth
            autoComplete="family-name"
            onChange={((e)=>{setLastName(e.target.value)})}

            />
        </Grid>
        <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={((e)=>{setEmail(e.target.value)})}

                />
            </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Endereço linha 1"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={((e)=>{setAddress(e.target.value)})}
            />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Ponto de referência"
            fullWidth
            autoComplete="shipping address-line2"
            onChange={((e)=>{setReferency(e.target.value)})}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Cidade"
            fullWidth
            autoComplete="shipping address-level2"
            onChange={((e)=>{setCity(e.target.value)})}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="Estado" fullWidth onChange={((e)=>{setStateAddress(e.target.value)})}
/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Cep"
            fullWidth
            autoComplete="shipping postal-code"
            onChange={((e)=>{setCep(e.target.value)})}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="whatsapp"
            name="whatsapp"
            label="WhatsApp"
            fullWidth
            autoComplete="WhatsApp"
            onChange={((e)=>{setWhatsApp(e.target.value)})}
            />
        </Grid>
      </Grid>
      </form>
    </React.Fragment>
  );
}
