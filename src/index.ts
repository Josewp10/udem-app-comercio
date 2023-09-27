//Import dependencies
import express from 'express';

//Rutas
import tienda from './libs/routes/tienda'

const app = express();
//Cors
var cors = require('cors')
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app.use(express.json());
app.use((err:Error, req:express.Request, res:express.Response, next:express.NextFunction)=>{
    res.status(500).json({message:err.message});
});

app.use(tienda)

//Endpoint
app.get('/', async (req,res) =>{
    res.send('SERVIDOR APLICACIÓN DE COMERCIO');
});

//routes
const port=3003;
//Levantamiento
 app.listen(port || 5000, () => {
    console.log(`Escuchando API en http://localhost:${port}`);
 });

//Begining of development elements
process.on('unhandledRejection', function(reason, promise) {
    console.log(promise);
});
//End of development elements