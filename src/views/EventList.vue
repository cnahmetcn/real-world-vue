<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",
  components: {
    EventCard
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          category: "animal welfare",
          title: "Cat Adoption Day",
          description: "Find yout new feline friend at this event.",
          location: "Meow Town",
          date: "February 22, 2021",
          time: "12:00",
          petsAllowed: true,
          organizer: "Ahmet Can"
        },
        {
          id: 5928101,
          category: "animal welfare",
          title: "Cat Adoption Day",
          description: "Find yout new feline friend at this event.",
          location: "Meow Town",
          date: "February 22, 2021",
          time: "12:00",
          petsAllowed: true,
          organizer: "Ahmet Can"
        },
        {
          id: 5928101,
          category: "animal welfare",
          title: "Cat Adoption Day",
          description: "Find yout new feline friend at this event.",
          location: "Meow Town",
          date: "February 22, 2021",
          time: "12:00",
          petsAllowed: true,
          organizer: "Ahmet Can"
        }
      ]
    };
  }
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
