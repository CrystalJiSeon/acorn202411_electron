import { ipcMain } from 'electron'
import Database from 'better-sqlite3'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dbPath = path.join(__dirname, '../../database/notes.db')
fs.mkdirSync(path.dirname(dbPath), { recursive: true })

const db = new Database(dbPath)
db.exec(`CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY, text TEXT)`)

ipcMain.handle('get-notes', () => {
  const stmt = db.prepare('SELECT * FROM notes ORDER BY id DESC')
  return stmt.all()
})

ipcMain.handle('add-note', (_event, text: string) => {
  const stmt = db.prepare('INSERT INTO notes (text) VALUES (?)')
  const info = stmt.run(text)
  return { id: info.lastInsertRowid, text }
})

