import express from "express"
import cors from 'cors'
//importa bd
import db from "./database/db.js"

import estudianteRoutes from './routes/estudianteRoutes.js'
import encargadoRoutes from './routes/encargadoRoutes.js'
import adminRoutes from './routes/adminRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/encargado', encargadoRoutes)
app.use('/admin', adminRoutes)
app.use('/estudiante', estudianteRoutes)

try {
    await db.authenticate()
    console.log('Conectada la bd')
} catch (error) {
    console.log('No se conectó la bd, error: ${error}')
}

app.get('/', (req, res) =>{
    res.send('Aquí debería ir el login')
})

app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/')
})