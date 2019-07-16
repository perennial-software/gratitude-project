<template>
  <div>
    <div class="block w-full py-5 px-8 border-b-2 border-white">
      <h1 class="italic font-bold text-2xl">gratitude project</h1>
    </div>
    <div
      class="w-full px-8 mx-auto justify-center mt-8"
      style="max-width: 960px;"
    >
      <h2 class="text-2xl tracking-wide mb-4">Account Information</h2>
      <div class="mb-8 flex justify-between">
        <span>
          <div class="pl-6 mb-2">Organization Name</div>
          <input
            type="text"
            class="border-2 border-white bg-transparent rounded-full py-2 px-5 outline-none font-bold text-lg"
          />
        </span>
        <span>
          <div class="pl-6 mb-2">Primary Contact Name</div>
          <input
            type="text"
            class="border-2 border-white bg-transparent rounded-full py-2 px-5 outline-none font-bold text-lg"
          />
        </span>
        <span>
          <div class="pl-6 mb-2">Email</div>
          <input
            type="text"
            class="border-2 border-white bg-transparent rounded-full py-2 px-5 outline-none font-bold text-lg"
          />
        </span>
      </div>
      <h2 class="text-2xl tracking-wide mb-4">Gratitude Project Video</h2>
      <div class="mb-8">
        <span>
          <div class="pl-6 mb-2">Link</div>
          <input
            type="text"
            class="border-2 border-white bg-transparent rounded-full py-2 px-5 outline-none font-bold text-lg"
          />
          <span class="mx-4 text-lg">or</span>
          <button
            class="bg-gray-100 text-blue-800 py-3 px-6 rounded-full shadow"
          >
            Upload from device
          </button>
        </span>
      </div>
      <h2 class="text-2xl tracking-wide mb-4">
        Enter and describe the volunteer Call To Action (CTA) button. Maximum of
        3.
      </h2>
      <div class="w-full mb-8 border-2 border-white p-2 rounded-lg"></div>
      <div class="w-full">
        <button
          class="bg-gray-100 text-blue-800 text-xl py-4 px-16 rounded-full shadow-lg"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
