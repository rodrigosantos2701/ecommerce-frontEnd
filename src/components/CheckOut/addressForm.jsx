import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import Validators from '../../validates/validates';
import InputMask from "react-input-mask"


export default function AddressForm() {


  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')
  const [referency, setReferency] = useState('')
  const [cep, setCep] = useState('')
  const [whatsApp, setWhatsApp] = useState('')
  const [viaCep, setViaCep] = useState('')
  const [consult, setConsult] = useState(false)



  async function fetchCep() {

    if (cep) {

      const dataCep = cep.replace(/\.|\-/g, '')

      const BASE_URL = `https://viacep.com.br/ws/${dataCep}/json`;


       const response = await fetch(BASE_URL, {
        method: 'GET' // opcional 
      })
        .then(response => response.json())
        .then(data => setViaCep(data))
        .then(setConsult(true), setReferency('')
        )
    }
    
  }

  const onAddAddressCheckout = () => {

    dispatch({
      type: 'ADD_CHECKOUT',
      name: name,
      lastName: lastName,
      email: email,
      address: viaCep.logradouro,
      neighbor: viaCep.bairro,
      referency: referency,
      city: viaCep.localidade,
      stateAddress: viaCep.uf,
      cep: cep,
      whatsApp: whatsApp

    })
  }

  const onActiveButton = () => {
    dispatch({
      type: 'SET_ACTIVE_BUTTON',
      payload: false,
    })
  };

  const disableOnActiveButton = () => {
    dispatch({
      type: 'SET_ACTIVE_BUTTON',
      payload: true,
    })
  };


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
              onChange={((e) => { setName(e.target.value) })}
              value={name}

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
              onChange={((e) => { setLastName(e.target.value) })}

            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              onChange={((e) => { setEmail(e.target.value) })}
              autoComplete="email"
              error={email ? !Validators.email(email) : false}
              helperText={email && !Validators.email(email) ? 'email@email.com' : ''}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="emailConfirm"
              label="Confirmar E-mail"
              name="emailConfirm"
              onChange={((e) => { setEmailConfirm(e.target.value) })}
              autoComplete="emailConfirm"
              error={Validators.email(email) && emailConfirm ? !Validators.emailcompare(email, emailConfirm) : false}
            // helperText={email && !Validators.emailcompare(email,emailConfirm ) && Validators.email(email)? 'E-mail são diferentes' : ''}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputMask
              mask="(99) 99999-9999"
              maskChar=""
              disabled={false}
              value={whatsApp}
              onChange={((e) => { setWhatsApp(e.target.value) })}
            >
              {() =>
                <TextField
                  required
                  id="whatsapp"
                  name="whatsapp"
                  label="WhatsApp"
                  fullWidth
                  error={whatsApp ? !Validators.cellphone(whatsApp) : false}
                  helperText={whatsApp && !Validators.cellphone(whatsApp) ? '(99) 99999-9999' : ''}
                />
              }
            </InputMask>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid item xs={12}>

            </Grid>
            <Grid container>

              <Grid item xs={6}>
                <InputMask
                  mask="99999-999"
                  maskChar=""
                  disabled={false}
                  value={cep}
                  onChange={((e) => { setCep(e.target.value) })}
                >
                  {() =>

                    <TextField
                      required
                      id="zip"
                      name="zip"
                      label="Cep"
                      fullWidth
                      error={cep ? !Validators.cep(cep) : false}
                      helperText={cep && !Validators.cep(cep) ? '99999-999' : ''}
                    />
                  }
                </InputMask>
              </Grid>
              <Grid item xs={6}>
                <Button variant="outlined" color="primary" onClick={fetchCep}  >
                  {Validators.cep(cep) && consult ? 'Atualizar' : 'Consultar'}
                </Button>
              </Grid>
            </Grid>

          </Grid>


          {Validators.cep(cep) && consult?
            <>
              <Grid item xs={12}>
                {viaCep.erro ? 'Cep Inválido' :
                  <Typography variant="h6">
                    {viaCep.logradouro} - {viaCep.bairro} - {viaCep.localidade} - {viaCep.uf}
                  </Typography>
                }

              </Grid>

              <Grid item xs={12}>

                {consult ?
                  <>
                    <TextField
                      id="address2"
                      required
                      name="address2"
                      label="Complemento"
                      fullWidth
                      autoComplete="shipping address-line2"
                      onChange={((e) => { (setReferency(e.target.value)) })}
                      value={referency}
                    />
                  </>
                  : null}
              </Grid>
            </>
            : ''}

          {name && referency && lastName && Validators.email(email) && Validators.cellphone(whatsApp) && Validators.emailcompare(email, emailConfirm) ?
            onActiveButton() :
            disableOnActiveButton()
          }
        </Grid>
      </form>
    </React.Fragment>
  );
}
