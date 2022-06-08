<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="events">
      <EventCard v-for="event in events" :event="event" :key="event.id" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import events from "@/services/EventServices.js";

export default {
  name: "EventList",
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    console.log("EventList created");
    events.getEvents().then(events => {
      console.log(events);
      this.events = events.data;
    });
  }
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>
