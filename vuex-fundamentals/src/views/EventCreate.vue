<template>
  <h1>Create an event</h1>

  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <label>Select a category: </label>
      <select v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
          >{{ option }}</option
        >
      </select>

      <h3>Name & describe your event</h3>

      <label>Title</label>
      <input v-model="event.title" type="text" placeholder="Title" />

      <label>Description</label>
      <input
        v-model="event.description"
        type="text"
        placeholder="Description"
      />

      <h3>Where is your event?</h3>

      <label>Location</label>
      <input v-model="event.location" type="text" placeholder="Location" />

      <h3>When is your event?</h3>
      <label>Date</label>
      <input v-model="event.date" type="text" placeholder="Date" />

      <label>Time</label>
      <input v-model="event.time" type="text" placeholder="Time" />

      <button type="submit">Submit</button>
    </form>
    <div>{{ $store.state.events}} </div>
  </div>
</template>

<script>
//check if dev tools are there to see log in that div above^^^
import { v4 as uuidv4 } from 'uuid'
//import EventService from '../services/EventService.js'

export default {
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        id: '',
        category: '',
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        organizer: ''
      }
    }
  },
  methods: {
    onSubmit() {
      const event = {
        ...this.event,
        id: uuidv4(),
        organizer:  this.$store.state.user
      }
      // this.event.id = uuidv4();
      // this.event.organizer = this.$store.state.user
      console.log('Event:', event)
      this.$store.dispatch('createEvent', event) //event is payload 
      .then(() => {
        this.$router.push({
          name: 'EventDetails',
          params: { id: event.id }
        })
      })
      .catch(error => {
        this.$router.push({
          name:'ErrorDisplay',
          params: { error: error}
        })
      })
    }
  }
}
</script>
