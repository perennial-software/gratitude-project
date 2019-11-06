<template>
  <div>
    <div v-if="errors.length > 0" class="mb-2 pb-2 font-bold">
      <span class="text-2xl">
        Please fix before submitting
      </span>
      <ul class="pl-4">
        <li v-for="(error, index) in errors" :key="index">- {{ error }}</li>
      </ul>
    </div>
    <h2 class="text-2xl tracking-wide mb-4">
      1. Enter basic beneficiary information and video recipient contact
      information.
    </h2>
    <div class="mb-4 flex flex-wrap justify-left">
      <span class="inline-block mb-4 pr-0 md:pr-4 w-full md:w-1/3">
        <label for="beneficiary-name" class="pl-6">
          Beneficiary Name
        </label>
        <input
          type="text"
          id="beneficiary-name"
          data-cy="beneficiary-name"
          class="cta-input form-input w-full border-2 bg-transparent rounded-full py-2 px-5 outline-none font-bold text-lg"
          :value="gratitudeMessage.beneficiaryName"
          @input="updateBeneficiaryName($event.target.value)"
        />
      </span>
      <span class="inline-block mb-4 pr-0 md:pr-4 w-full md:w-1/3">
        <label for="recipient-name" class="pl-6">Recipient Name</label>
        <input
          type="text"
          id="recipient-name"
          data-cy="recipient-name"
          class="cta-input form-input w-full border-2 bg-transparent rounded-full py-2 px-5 outline-none font-bold text-lg"
          :value="gratitudeMessage.recipientName"
          @input="updateRecipientName($event.target.value)"
        />
      </span>
      <span class="inline-block mb-4 pr-0 md:pr-4 w-full md:w-1/3">
        <label for="recipient-email" class="pl-6">Recipient Email</label>
        <input
          type="text"
          id="recipient-email"
          data-cy="recipient-email"
          class="cta-input form-input w-full border-2 bg-transparent rounded-full py-2 px-5 outline-none font-bold text-lg"
          :value="gratitudeMessage.recipientEmail"
          @input="updateRecipientEmail($event.target.value)"
        />
      </span>
    </div>
    <h2 class="text-2xl tracking-wide mb-4">
      2. Upload a personalised gratitude video.
    </h2>
    <div class="mb-8">
      <span class="flex flex-wrap items-baseline">
        <span class="w-full md:w-auto flex-grow">
          <span class="w-full inline-block">
            <label for="video-link" class="pl-6 mb-2">Video Link</label>
            <input
              type="text"
              id="video-link"
              data-cy="video-link"
              class="cta-input form-input w-full border-2 bg-transparent rounded-full py-2 px-5 outline-none font-bold text-lg"
              :value="gratitudeMessage.videoUrl"
              @input="updateVideoUrl($event.target.value)"
              :disabled="isUploaded"
            />
          </span>
        </span>
        <span
          class="w-full md:w-auto mx-4 text-lg text-center font-bold md:font-normal my-4 md:my-0"
          >or</span
        >
        <span class="w-full md:w-auto">
          <!-- <button -->
          <!--   class="w-full bg-gray-100 hover:bg-gray-200 border-2 border-white text-blue-800 py-3 px-6 rounded-full shadow" -->
          <!-- > -->
          <!--   Upload from device -->
          <!-- </button> -->
          <input
            class="w-full bg-gray-100 hover:bg-gray-200 border-2 border-white text-blue-800 py-2 px-6 rounded-full shadow"
            type="file"
            id="file"
            ref="file"
            aria-label="Upload to Vimeo"
            v-on:change="uploadVideo()"
            :disabled="isUploading || isUploaded"
          />
        </span>
      </span>
    </div>
    <h2 class="text-2xl tracking-wide mb-4">
      3. Enter and describe the volunteer Call To Action (CTA) button. Maximum
      of three CTA's per video.
    </h2>
    <div
      class="w-full flex-col mb-8 border-2 border-white px-8 py-4 rounded-lg text-left"
    >
      <div
        class="flex flex-wrap items-end pt-6 pb-4"
        :class="{
          'border-gray-300': i !== gratitudeMessage.callsToAction.length - 1,
          'border-b-2': i !== gratitudeMessage.callsToAction.length - 1
        }"
        v-for="(cta, i) in gratitudeMessage.callsToAction"
        :key="i"
      >
        <div class="w-full md:w-64 pr-0 md:pr-2 py-3">
          <input
            type="text"
            :id="`cta-button-text-${i}`"
            data-cy="cta-button-text"
            :aria-label="`Title ${i + 1}`"
            :placeholder="`Title ${i + 1}`"
            class="cta-input form-input w-full bg-transparent border-b-2 font-bold text-2xl outline-none pb-2 leading-none"
            :value="cta.buttonText"
            @input="updateCtaButtonText(i, $event.target.value)"
          />
        </div>
        <div class="w-full md:w-auto flex-grow pr-0 md:pr-2 py-3 pl-0 md:pl-4">
          <input
            type="text"
            data-cy="cta-link"
            aria-label="Link or Email Address"
            placeholder="Link or Email Address"
            class="cta-input form-input w-full bg-transparent border-b-2 font-bold outline-none pb-2 leading-none"
            :value="cta.link"
            @input="updateCtaLink(i, $event.target.value)"
          />
        </div>
        <div class="w-full flex pt-3">
          <textarea
            rows="3"
            type="text"
            data-cy="cta-description"
            aria-label="CTA Description (optional)"
            placeholder="CTA Description (optional)"
            class="form-textarea flex-auto bg-transparent font-bold outline-none"
            :value="cta.description"
            @input="updateCtaDescription(i, $event.target.value)"
          />
          <span
            class="w-20 text-sm text-right text-gray-300"
            :class="{
              'font-bold': cta.description.length > descriptionMaxLength - 15
            }"
          >
            {{ cta.description.length }} / {{ descriptionMaxLength }}
          </span>
        </div>
      </div>
    </div>
    <div class="w-full text-center md:text-right mb-8">
      <!-- <button -->
      <!--   class="w-full md:w-auto mr-0 md:mr-4 mb-4 md:mb-0 bg-gray-100 text-white text-xl py-4 px-16 rounded-full shadow-lg" -->
      <!--   style="background: rgba(255, 255, 255, 0.1)" -->
      <!-- > -->
      <!--   Preview -->
      <!-- </button> -->
      <button
        data-cy="submit"
        class="w-full md:w-auto bg-gray-100 hover:bg-gray-200 text-blue-800 text-xl py-4 px-16 rounded-full shadow-lg"
        @click="submit(gratitudeMessage)"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import Vimeo from "@/services/vimeo";

export default {
  name: "GratitudeMessageForm",
  model: {
    prop: "gratitude-message"
  },
  props: {
    gratitudeMessage: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      descriptionMaxLength: 85,
      isUploading: false,
      isUploaded: false,
      errors: []
    };
  },
  methods: {
    updateBeneficiaryName(beneficiaryName) {
      this.$emit("input", {
        ...this.gratitudeMessage,
        beneficiaryName
      });
    },
    updateRecipientName(recipientName) {
      this.$emit("input", {
        ...this.gratitudeMessage,
        recipientName
      });
    },
    updateOrganizationName(organizationName) {
      this.$emit("input", {
        ...this.gratitudeMessage,
        organizationName
      });
    },
    updatePrimaryContactName(primaryContactName) {
      this.$emit("input", {
        ...this.gratitudeMessage,
        primaryContactName
      });
    },
    updateRecipientEmail(recipientEmail) {
      this.$emit("input", {
        ...this.gratitudeMessage,
        recipientEmail
      });
    },
    updateVideoUrl(videoUrl) {
      this.$emit("input", {
        ...this.gratitudeMessage,
        videoUrl
      });
    },
    updateCtaButtonText(index, buttonText) {
      let callsToAction = this.gratitudeMessage.callsToAction;
      callsToAction[index] = {
        ...this.gratitudeMessage.callsToAction[index],
        buttonText
      };
      this.$emit("input", {
        ...this.gratitudeMessage,
        callsToAction
      });
    },
    updateCtaLink(index, link) {
      let callsToAction = this.gratitudeMessage.callsToAction;
      callsToAction[index] = {
        ...this.gratitudeMessage.callsToAction[index],
        link
      };
      this.$emit("input", {
        ...this.gratitudeMessage,
        callsToAction
      });
    },
    updateCtaDescription(index, description) {
      if (description.length > this.descriptionMaxLength) {
        description = this.gratitudeMessage.callsToAction[
          index
        ].description.substring(0, this.descriptionMaxLength);
      }

      let callsToAction = this.gratitudeMessage.callsToAction;
      callsToAction[index] = {
        ...this.gratitudeMessage.callsToAction[index],
        description
      };
      this.$emit("input", {
        ...this.gratitudeMessage,
        callsToAction
      });
    },
    uploadVideo() {
      this.isUploading = true;

      let file_name = this.$refs.file.files[0];

      let client = new Vimeo(
        "5eae5ebb7bcd5ef29fd7df5c43a05ac66f9c9ce8",
        "XY45SWIYxKK6CNuTjfI5eHyybgqgLC47gnDikMHK/l20TI+M17lNQrnJUeK2Zbo+PEFCGILMAOF4gzXvPnVSFtM3VI46k6mFVyAIO2seuk1QfVe3I7Gv2AVQWbUm1dLY",
        "c0a6f79e7bae63b885083950efb3adff"
      );

      client.upload(
        file_name,
        {
          name: "The Gratitude Project",
          description: "Thank You!"
        },
        uri => {
          this.isUploaded = true;
          console.log("Your video URI is: " + uri);
          this.gratitudeMessage.videoUrl = `https://player.vimeo.com${uri}`;
        },
        (bytes_uploaded, bytes_total) => {
          var percentage = ((bytes_uploaded / bytes_total) * 100).toFixed(2);
          console.log(bytes_uploaded, bytes_total, percentage + "%");
        },
        error => {
          this.isUploading = false;
          console.log("Failed because: " + error);
        }
      );
    },
    submit(gratitudeMessage) {
      this.errors = [];

      if (gratitudeMessage.beneficiaryName.length === 0) {
        this.errors.push("Missing beneficiary name");
      }
      if (gratitudeMessage.recipientName.length === 0) {
        this.errors.push("Missing recipient name");
      }
      if (gratitudeMessage.recipientEmail.length === 0) {
        this.errors.push("Missing recipient email");
      }
      if (gratitudeMessage.videoUrl.length === 0) {
        this.errors.push("Missing video link");
      }

      if (this.errors.length > 0) {
        window.scrollTo(0, 0);
        return;
      }

      gratitudeMessage.callsToAction = gratitudeMessage.callsToAction.filter(
        cta => cta.buttonText.length > 0 && cta.link.length > 0
      );

      this.$emit("submit", this.gratitudeMessage);
    }
  }
};
</script>
<style>
.cta-input {
  @apply border-blue-200;
}
.cta-input:focus {
  @apply border-white;
}
</style>
