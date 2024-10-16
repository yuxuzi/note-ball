import { defineStore } from "pinia";

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content: 'ffdfadsfd, gerterte rrtyhretyert yu ru y6u'
        },
        {
          id: 'id2',
          content: 'ffdfadsfd, gerterte rrtyhretyert yu ru y6u'
        },
        {
          id: 'id3',
          content: 'ffdfadsfd, gerterte rrtyhretyert yu ru y6u'
        }
      ]
    }
  },
  actions: {
    addNote(newNoteContent) {
      const currentDate = new Date().getTime()
      const note = {
        id: currentDate.toString(),
        content: newNoteContent
      }
      this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter(note => note.id !== idToDelete)
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.find(note => note.id === id)?.content || ''
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    }
  }
})
