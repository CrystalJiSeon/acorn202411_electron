import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
  getNotes: () => ipcRenderer.invoke('get-notes'),
  addNote: (text: string) => ipcRenderer.invoke('add-note', text),
})