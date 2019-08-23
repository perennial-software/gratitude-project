<template>
  <div
    class="flex-col px-0 md:px-8 mx-auto justify-center"
    style="max-width: 960px;"
  >
    <div class="text-center mb-4 px-2 md:px-0">
      <h2 class="text-2xl font-bold text-gray-100">
        Thank you, {{ gratitudeMessage.recipientName }}!
      </h2>
      <h3 class="text-3xl leading-tight text-gray-200">
        You had a meaningful impact.
        <br />
        {{ gratitudeMessage.beneficiaryName }} wants to tell you about it.
      </h3>
    </div>

    <div class="flex relative justify-center mb-4" style="padding-top: 56.25%;">
      <iframe
        class="absolute inset-0 w-full h-full"
        :src="gratitudeMessage.videoUrl"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>

    <div class="text-enter mb-4 text-center px-2 md:px-0">
      It makes a big difference to have you as part of our community. Want to
      have more impact?
      <span v-if="gratitudeMessage.callsToAction.length === 1">
        Here is one opportunity:
      </span>
      <span v-if="gratitudeMessage.callsToAction.length === 2"
        >Here are two opportunities:
      </span>
      <span v-if="gratitudeMessage.callsToAction.length === 3"
        >Here are three opportunities:
      </span>
    </div>

    <div class="flex flex-wrap justify-center px-2 md:px-0">
      <div
        v-for="(cta, index) in gratitudeMessage.callsToAction"
        :key="index"
        class="flex-1 text-center mb-8 px-2"
      >
        <button
          class="cta-button py-8 px-16 mb-4 bg-blue-100 text-xl text-gray-800 shadow-xl rounded-full"
        >
          {{ cta.buttonText }}
        </button>
        <div>
          {{ cta.description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GratitudeDetail",
  props: {
    gratitudeMessage: {
      type: Object,
      required: true
    }
  }
};
</script>
<style>
.cta-button:hover {
  @apply shadow-xl;
  @apply bg-white;
}
</style>
