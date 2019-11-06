<template>
  <div>
    <nav-bar />
    <div class="rounded overflow-hidden shadow-lg">
    <table-component
      :data="[
          { organization: 'Liftovers', beneficiary: 'Sonia', timestamp: '04/10/1940'},
          { organization: 'Feed the Kids', beneficiary: 'Ignas', timestamp: '18/06/1942'},
          { organization: 'Gratitude', beneficiary: 'Alex', timestamp: '25/02/1943'},
          { organization: 'Chalmers Card', beneficiary: 'Abdullah', timestamp: '07/07/1940'},
     ]"
      :show-caption="false"
      :sort-by="organization"
      :sort-order="asc"
      filter-no-results="There are no matching results"
      filter-placeholder="Search Non-Profit, Beneficiary name or Timestamp"
    >
      <table-column show="organization" label="Non-Profit"></table-column>
      <table-column show="beneficiary" label="Beneficiary"></table-column>
      <table-column show="timestamp" label="Timestamp" data-type="date:DD/MM/YYYY"></table-column>
      <table-column label="Gratitude Message"
       :sortable="false" 
       :filterable="false"
      >
        <template slot-scope="row">
          <a :href="`#${row.Timestamp}`">Link</a>
        </template>
      </table-column>
    </table-component>
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
