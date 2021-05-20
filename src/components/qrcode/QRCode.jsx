import React, { useState } from 'react';
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import QRCode from 'qrcode';
import Default from '../../assets/img/Default.jpg'

function App() {
  const [cnpj, setCnpj] = useState('');
  const [produto, setProduto] = useState('');
  const [lote, setLote] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [telefone, setTelefone] = useState('');
  const [peso, setPeso] = useState('');

  const valores = [cnpj, produto, lote, empresa, telefone, peso];

  const [imageUrl, setImageUrl] = useState('');
  
  const classes = useStyles();
  
  const generateQRCode = async () => {
    try {
      const response = await QRCode.toDataURL(valores);
      setImageUrl(response)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container fixed className={classes.container}>
      <Card className={classes.card}>
        <h2 className={classes.title}>Gerador de QR CODE</h2>
        <CardContent>
          <Grid container spacing={10}>
            <Grid item xs={6}>
              <TextField label="CNPJ:" onChange={(event) => setCnpj(event.target.value)}></TextField>
              <TextField label="Produto:" onChange={(event) => setProduto(event.target.value)}></TextField>
              <TextField label="Lote:" onChange={(event) => setLote(event.target.value)}></TextField>
            </Grid>

            <Grid item xs={6}>
              <TextField label="Empresa:" onChange={(event) => setEmpresa(event.target.value)}></TextField>
              <TextField label="Telefone:" onChange={(event) => setTelefone(event.target.value)}></TextField>
              <TextField label="Peso:" onChange={(event) => setPeso(event.target.value)}></TextField>
            </Grid>

            <Button className={classes.btn} variant="contained" size="small" onClick={() => generateQRCode()}>Gerar QR.</Button>

            <Grid item xs={12}>
              {imageUrl 
                ? (<img width="200" height="200" src={imageUrl} alt="img"/>) 
                : (<img width="200" height="200" src={Default} />)
              }
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
    marginLeft: 200,
    marginTop: -5
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    padding: 10,
  },
  btn: {
    marginLeft: 120,
    background: '#BDE0FE'
  }
}));

export default App;
