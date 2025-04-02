import { useEffect, useState } from 'react'

declare global {
  interface Window {
    api: {
      getNotes: () => Promise<{ id: number; text: string }[]>
      addNote: (text: string) => Promise<{ id: number; text: string }>
    }
  }
}

function App() {
  const [notes, setNotes] = useState<{ id: number; text: string }[]>([])
  const [text, setText] = useState('')

  useEffect(() => {
    window.api.getNotes().then(setNotes)
  }, [])

  const add = async () => {
    if (text.trim()) {
      const newNote = await window.api.addNote(text)
      setNotes([newNote, ...notes])
      setText('')
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>📝 메모 앱</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="메모 입력..."
      />
      <button onClick={add}>추가</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
