import express, { type Application } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

console.log('hola')

export const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser())
app.use(morgan('dev'))

app.get('/', (_req, res) => res.send('Hello World!'))
