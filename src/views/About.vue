<template>
  <div>
    <nav-bar />
    <div
      class="flex-col px-4 md:px-8 mx-auto justify-center"
      style="max-width: 960px;"
    >
      <div class="mb-8 text-left text-gray-100">
        <h1 class="text-lg font-bold mb-8">About the Gratitude Project</h1>

        <p class="text-2xl leading-tight text-gray-200">
          The Gratitude Project is a research project by Betterplace, a social
          enterprise based in Toronto devoted to mobilizing Canadians for civic
          action. The Gratitude Project seeks to motivate Canadians to deepen
          their volunteering with non-profits organizations that advance causes
          dear to them. When volunteers receive a personalized message of thanks
          from an individual who has benefited directly from their volunteering,
          they will get to experience first-hand their meaningful impact in the
          community and then be presented with opportunities to get involved
          again.
          <br />
          <br />
          For more information about The Gratitude Project and Betterplace,
          please contact co-founder Ben Rowswell:
          <br />
          <br />
          Email:
          <a
            href="mailto:ben@better.place"
            target="_top"
            class="font-bold underline"
          >
            ben@better.place
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>
