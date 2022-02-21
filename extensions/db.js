const Database = require('better-sqlite3')
const fs = require('fs')
const data_directory = './.data'

// Create .data directory first if it does not exist
if (!fs.existsSync(data_directory)) {
    fs.mkdirSync(data_directory)
}

// Create/Open database
const db = new Database('.data/nba.db')

try {
   db.prepare("SELECT * FROM players").run()
} catch (err) {
    // Create table players
    db.prepare('CREATE TABLE IF NOT EXISTS players(name, age)').run()
    
    // Insert some data
    const insert = db.prepare('INSERT INTO players (name, age) VALUES (@name, @age)')
    insert.run({name: 'Lebron James', age: 37})
    insert.run({name: 'Kyrie Irving', age: 27})
}

getPlayers = () => {
    const players = db.prepare('SELECT * FROM players').all()
    return players
}

const nba = {
    getPlayers
}

module.exports = nba
