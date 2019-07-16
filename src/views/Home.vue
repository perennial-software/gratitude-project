<template>
  <div>
    <div
      class="flex justify-between items-baseline block py-5 px-8 border-b-2 border-white mb-8"
    >
      <h1 class="italic font-bold text-2xl">gratitude project</h1>
      <a href="#" class="text-xl">about</a>
    </div>
    <div class="flex-col px-8 mx-auto justify-center" style="max-width: 960px;">
      <div class="text-center mb-8">
        <h2 class="text-lg font-bold text-gray-100">
          Thank you, {{ recipientName }}!
        </h2>
        <h3 class="text-2xl leading-tight text-gray-200">
          You had a meaningful impact.
          <br />
          {{ beneficiaryName }} wants to tell you about it.
        </h3>
      </div>

      <div
        class="flex relative justify-center mb-8"
        style="padding-top: 56.25%;"
      >
        <iframe
          class="absolute inset-0 w-full h-full"
          :src="videoLink"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>

      <div class="text-enter mb-8 text-center">
        It makes a big difference to have you as part of our community. Want to
        have more impact?
        <span v-if="callsToAction.length === 1">
          Here is one opportunity:
        </span>
        <span v-if="callsToAction.length === 2"
          >Here are two opportunities:
        </span>
        <span v-if="callsToAction.length === 3"
          >Here are three opportunities:
        </span>
      </div>

      <div class="flex justify-center">
        <div
          v-for="(cta, index) in callsToAction"
          :key="index"
          class="flex-1 text-center mb-8 px-2"
        >
          <button
            class="py-8 px-16 mb-4 bg-gray-100 hover:bg-gray-200 text-xl text-gray-800 shadow-lg rounded-full"
          >
            {{ cta.buttonText }}
          </button>
          <div>
            {{ cta.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      recipientName: "Margie",
      organizationName: "MCC Toronto",
      beneficiaryName: "Josie",
      videoLink: "https://player.vimeo.com/video/343099753",
      message:
        "It makes a big difference to have you as part of our community. Want to have more impact?",
      callsToAction: [
        {
          buttonText: "Volunteer",
          description:
            "There are so many other ways to belong to our community.",
          type: "LINK",
          url: "https://google.ca"
        },
        {
          buttonText: "Advocate",
          description:
            "Advocate for issues concerning MCC Toronto, including LGBTQ and refugee rights.",
          type: "LINK",
          url: "https://google.ca"
        }
      ]
    };
  }
};
</script>
