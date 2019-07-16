<template>
  <div>
    <div
      class="flex justify-between items-baseline block py-5 px-8 border-b-2 border-white mb-8"
    >
      <h1 class="italic font-bold text-2xl">gratitude project</h1>
      <a href="#" class="text-xl">about</a>
    </div>
    <div class="flex-col px-8 mx-auto justify-center" style="max-width: 960px;">
      <div class="text-left mb-8">
        <h2 class="text-2xl text-gray-100 mb-2">
          Thank you, {{ recipientName }}!
        </h2>
        <h3 class="text-md mb-10 leading-tight text-gray-200">
          {{ organizationName }} appreciates your help.
          <br />
          Watch the video made especially for you as we show our gratitude
        </h3>
      </div>

      <div class="flex justify-center mb-8">
        <iframe
          :src="videoLink"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>

      <div class="text-center mb-8">
        {{ message }}
      </div>

      <div class="flex justify-center">
        <div
          v-for="(cta, index) in callsToAction"
          :key="index"
          class="flex-1 text-center mb-8"
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
      videoLink: "https://player.vimeo.com/video/343099753",
      message:
        "MCC Toronto depends on our volunteers to keep us going. Click below to continue your work with us as a member of our community.",
      callsToAction: [
        {
          buttonText: "Volunteer",
          description: "Volunteer your time with MCC Toronto.",
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
