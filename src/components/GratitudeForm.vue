<template>
  <div>
    <h2 class="text-2xl tracking-wide mb-4">
      1. Enter basic beneficiary information and video recipient contact
      information.
    </h2>
    <div class="mb-4 flex flex-wrap justify-left">
      <span class="inline-block mb-4 pr-0 md:pr-4 w-full md:w-1/3">
        <div class="pl-6 mb-2">Beneficiary Name</div>
        <input
          type="text"
          class="w-full border-2 border-white bg-transparent rounded-full py-2 px-5 outline-none font-bold text-lg"
          :value="gratitude.beneficiaryName"
          @input="updateBeneficiaryName($event.target.value)"
        />
      </span>
      <span class="inline-block mb-4 pr-0 md:pr-4 w-full md:w-1/3">
        <div class="pl-6 mb-2">Recipient Name</div>
        <input
          type="text"
          class="w-full border-2 border-white bg-transparent rounded-full py-2 px-5 outline-none font-bold text-lg"
          :value="gratitude.recipientName"
          @input="updateRecipientName($event.target.value)"
        />
      </span>
      <span class="inline-block mb-4 pr-0 md:pr-4 w-full md:w-1/3">
        <div class="pl-6 mb-2">Recipient Email</div>
        <input
          type="text"
          class="w-full border-2 border-white bg-transparent rounded-full py-2 px-5 outline-none font-bold text-lg"
          :value="gratitude.email"
          @input="updateEmail($event.target.value)"
        />
      </span>
    </div>
    <h2 class="text-2xl tracking-wide mb-4">
      2. Upload a personalised gratitude video.
    </h2>
    <div class="mb-8">
      <span class="flex flex-wrap items-baseline">
        <span class="w-full md:w-auto">
          <span class="w-full inline-block">
            <div class="pl-6 mb-2">Link</div>
            <input
              type="text"
              class="w-full border-2 border-white bg-transparent rounded-full py-2 px-5 outline-none font-bold text-lg"
              :value="gratitude.videoUrl"
              @input="updateVideoUrl($event.target.value)"
            />
          </span>
        </span>
        <span
          class="w-full md:w-auto mx-4 text-lg text-center font-bold md:font-normal my-4 md:my-0"
          >or</span
        >
        <span class="w-full md:w-auto">
          <button
            class="w-full bg-gray-100 text-blue-800 py-3 px-6 rounded-full shadow"
          >
            Upload from device
          </button>
        </span>
      </span>
    </div>
    <h2 class="text-2xl tracking-wide mb-4">
      3. Enter and describe the volunteer Call To Action (CTA) button. Maximum
      of 3 CTAs per video.
    </h2>
    <div
      class="w-full flex-col mb-8 border-2 border-white px-8 py-4 rounded-lg text-left"
    >
      <div
        class="flex flex-wrap items-baseline pt-4"
        :class="{
          'border-white': i !== gratitude.callsToAction.length - 1,
          'border-b-2': i !== gratitude.callsToAction.length - 1
        }"
        v-for="(cta, i) in gratitude.callsToAction"
        :key="i"
      >
        <div class="w-full md:w-64 pr-0 md:pr-2 py-1">
          <input
            type="text"
            placeholder="Action"
            class="w-full bg-transparent font-bold text-2xl outline-none"
            :value="cta.name"
            @input="updateCtaName(i, $event.target.value)"
          />
        </div>
        <div class="w-full md:w-auto pr-0 md:pr-2 py-1">
          <input
            type="text"
            placeholder="Link or Email Address"
            class="w-full bg-transparent font-bold outline-none"
            :value="cta.link"
            @input="updateCtaLink(i, $event.target.value)"
          />
        </div>
        <div class="w-full flex py-1">
          <textarea
            rows="3"
            type="text"
            placeholder="Description (optional)"
            class="flex-auto bg-transparent font-bold outline-none"
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
        class="w-full md:w-auto bg-gray-100 text-blue-800 text-xl py-4 px-16 rounded-full shadow-lg"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GratitudeForm",
  model: {
    prop: "gratitude"
  },
  props: {
    gratitude: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      descriptionMaxLength: 85
    };
  },
  methods: {
    updateBeneficiaryName(beneficiaryName) {
      this.$emit("input", {
        ...this.gratitude,
        beneficiaryName
      });
    },
    updateRecipientName(recipientName) {
      this.$emit("input", {
        ...this.gratitude,
        recipientName
      });
    },
    updateOrganizationName(organizationName) {
      this.$emit("input", {
        ...this.gratitude,
        organizationName
      });
    },
    updatePrimaryContactName(primaryContactName) {
      this.$emit("input", {
        ...this.gratitude,
        primaryContactName
      });
    },
    updateEmail(email) {
      this.$emit("input", {
        ...this.gratitude,
        email
      });
    },
    updateVideoUrl(vidoeUrl) {
      this.$emit("input", {
        ...this.gratitude,
        vidoeUrl
      });
    },
    updateCtaName(index, name) {
      let callsToAction = this.gratitude.callsToAction;
      callsToAction[index] = {
        ...this.gratitude.callsToAction[index],
        name
      };
      this.$emit("input", {
        ...this.gratitude,
        callsToAction
      });
    },
    updateCtaLink(index, link) {
      let callsToAction = this.gratitude.callsToAction;
      callsToAction[index] = {
        ...this.gratitude.callsToAction[index],
        link
      };
      this.$emit("input", {
        ...this.gratitude,
        callsToAction
      });
    },
    updateCtaDescription(index, description) {
      if (description.length > this.descriptionMaxLength) {
        description = this.gratitude.callsToAction[index].description.substring(
          0,
          this.descriptionMaxLength
        );
      }

      let callsToAction = this.gratitude.callsToAction;
      callsToAction[index] = {
        ...this.gratitude.callsToAction[index],
        description
      };
      this.$emit("input", {
        ...this.gratitude,
        callsToAction
      });
    }
  }
};
</script>
