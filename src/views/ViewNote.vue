<script setup>
import {ref} from 'vue'
import { useStoreNotes } from '@/stores/stroeNotes';

const newNote=ref('')
const newNoteRef = ref(null)


const {addNote, notes}=useStoreNotes()



const addNote1 =()=>{
  addNote()
  const currentDate = new Date().getTime()
  const note ={
    id: currentDate.toString(),
    content:newNote.value
  }
  notes.value.unshift(note)
  newNote.value = ''
  newNoteRef.value.focus()
}

const deleteNote = id=>{notes.value=notes.value.filter(note=>note.id!==id)}


</script>

<template>
  <div class="notes">

    <div class="card has-background-primary-15 p-4 mb-5">
      <div class="field">

        <div class="control">
          <textarea 
          v-model="newNote"
          ref = newNoteRef
          class="textarea" 
          placeholder="Add a new note"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button 
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"  
          >Add New Note</button>
        </div>

      </div>

    </div>

    <Note v-for="note in notes" :key="note.id" :note="note"
    @onDelete="deleteNote"
    ></Note>


  </div>
</template>

<style lang="scss" scoped></style>