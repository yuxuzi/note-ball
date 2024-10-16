<script setup>
import { node } from 'prop-types';
import { computed } from 'vue';
const props =defineProps({
  note:{
    type: Object,
    required:true
  }
})

const numCharacters= computed( ()=>props.note.content.length)
</script>

<template>


  <div class="card mb-4">

    <div class="card-content">
      <div class="content">{{ note.content }}

        <div class="has-text-right has-text-grey-light mt-2"><small>{{ numCharacters }} characters</small></div>



      </div>
      <footer class="card-footer">

        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item" @click.prevent="$emit('onDelete', note.id)">Delete</a>
      </footer>
    </div>
  </div>

</template>

<style lang="scss" scoped></style>