import {pool} from '../config/database.js'
import '../config/dotenv.js'
import playerData from '../data/players.js'

const createPlayersTable = async() => {
    const createTableQuery = `
    DROP TABLE IF EXISTS players;

    CREATE TABLE IF NOT EXISTS players (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        number VARCHAR(10) NOT NULL,
        image VARCHAR(255) NOT NULL,
        position VARCHAR(255) NOT NULL
    )`

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 players table created successfully')
    } catch (err) {
        console.error('⚠️ error creating players table', err)
    }
}

const seedPlayersTable = async() => {
    await createPlayersTable()

    playerData.forEach((player) => {
        const insertQuery = {
            text: 'INSERT INTO players (name, number, image, position) VALUES ($1, $2, $3, $4)'
        }

        const values = [
            player.name, 
            player.number,
            player.image,
            player.position
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting player', err)
                return
            }
        
            console.log(`✅ ${player.name} added successfully`)
        })
    })
}

seedPlayersTable()