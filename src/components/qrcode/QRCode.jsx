import React, { useState } from 'react';
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import QRCode from 'qrcode';

function App() {
  const [cnpj, setCnpj] = useState('');
  const [produto, setProduto] = useState('');
  const [lote, setLote] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [telefone, setTelefone] = useState('');
  const [peso, setPeso] = useState('');

  const [imageUrl, setImageUrl] = useState('');
  
  const classes = useStyles();
  
  const generateQRCode = async () => {
    try {
      const response = await QRCode.toDataURL(cnpj);
      setImageUrl(response)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <h2 className={classes.title}>Gerador de QR CODE</h2>
        <CardContent>
          
          <Grid container spacing={6}>

            <Grid item xs={6}>
             <TextField label="CNPJ" onChange={(event) => setCnpj(event.target.value)}></TextField>
             <TextField label="Produto" onChange={(event) => setProduto(event.target.value)}></TextField>
            </Grid>

            <Grid item xs={12} spacing={3}>
             
            </Grid>

            <Grid item xs={6}>
              <TextField label="Empresa" onChange={(event) => setEmpresa(event.target.value)}></TextField>
              <TextField label="Telefone" onChange={(event) => setTelefone(event.target.value)}></TextField>
            </Grid>

            <Grid item xs={6}>
              <TextField label="Lote" onChange={(event) => setLote(event.target.value)}></TextField>
              <TextField label="Peso" onChange={(event) => setPeso(event.target.value)}></TextField>
            </Grid>

            <Grid item xs={12}>
              <Button className={classes.btn} variant="contained" color="primary" size="small" onClick={() => generateQRCode()}>Gerar QR.</Button>
            </Grid>

            <Grid item xs={12}>
              {imageUrl ? (<img src={imageUrl} alt="img"/>) : null }
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10
  },
  card: {
    borderColor: '#000000',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 100,
    width: 800,
    height: 600,
    marginLeft: 200
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    padding: 10,
    fontSize: 16
  },
  btn: {
    marginRight: 500
  }
}));

export default App;
