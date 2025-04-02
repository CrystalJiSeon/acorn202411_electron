"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("api", {
  getNotes: () => electron.ipcRenderer.invoke("get-notes"),
  addNote: (text) => electron.ipcRenderer.invoke("add-note", text)
});
