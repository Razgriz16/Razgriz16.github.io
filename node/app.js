import dotenv from 'dotenv'
import express from "express"
import cors from 'cors'
import { exec } from 'child_process';


//importa bd
import db from "./database/db.js"
import estudianteRoutes from './routes/estudianteRoutes.js'
import encargadoRoutes from './routes/encargadoRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import longinRoutes from './routes/loginRoutes.js'
import estudiante2Routes from './routes/estudiante2Routes.js'
import encargado2Routes from './routes/encargado2Routes.js'
import pythonRoutes from './routes/pythonRoutes.js'




dotenv.config();
const app = express()

app.use(cors())
app.use(express.json())
app.use('/encargado', encargadoRoutes)
app.use('/admin', adminRoutes)
app.use('/estudiante', estudianteRoutes)
app.use('/login', longinRoutes)
app.use('/estudiante2', estudiante2Routes)
app.use('/encargado2', encargado2Routes)
app.use('/generarReporte', pythonRoutes)

try {
    db.authenticate()
    console.log('Conectada la bd')
} catch (error) {
    console.log('No se conectó la bd, error: ${error}')
}

app.get('/', (req, res) =>{
    res.send('Welcome to PGAU')
})

app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/')
})