<template>
  <div>
    <div class="search-bar">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Search"
            >Search</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="SearchBox"
            type="text"
            ref="SearchBox"
            placeholder="Non-profit name, recipient name, etc."
            @input="refresh($event.target.value)"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  methods: {
    refresh: function(value) {
      this.$emit("update", value);
    }
  }
};
</script>
