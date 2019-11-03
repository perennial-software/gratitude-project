<template>
  <div>
    <nav-bar />
    <SearchBar :searchInput="search" @update="sync" />
    <SearchResult />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";
import SearchResult from "@/components/SearchResult.vue";

export default {
  components: {
    NavBar,
    SearchBar,
    SearchResult
  },
  data: function() {
    return {
      search: ""
    };
  },
  methods: {
    sync: function(newSearch) {
      this.search = newSearch;
      console.log(this.search);
    }
  }
};
</script>
