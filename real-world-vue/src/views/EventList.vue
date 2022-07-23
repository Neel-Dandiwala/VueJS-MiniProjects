<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import EventCard from '../components/EventCard.vue'
import EventService from '../services/EventService'
import { defineComponent } from 'vue'
// eslint-disable-next-line no-unused-vars
import { EventItem } from '../types'

export default defineComponent({
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard
  },
  data() {
    return {
      //events: {} as Array<EventItem>
      events: [] as EventItem[]
    }
  },
  computed: {
    firstEvent(): EventItem {
      return this.events[0]
    }
  },
  created() {
    EventService.getEvents(2, this.page)
      .then(response => {
        this.events = response.data
        // console.log(this.events)
      })
      .catch(error => {
        console.log(error)
      })
  }
})
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
