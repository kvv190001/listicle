import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import playerData from '../data/players.js'
import PlayersController from '../controllers/players.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', PlayersController.getPlayers)

router.get('/:playerId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/player.html'))
})

export default router