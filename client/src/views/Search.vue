<template>
  <div>
    <nav-bar />

    <div class="container w-2/3 mx-auto">
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
          filter-placeholder="Search Non-Profit, Beneficiary name or timestamp"
          filter-input-class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          table-class="w-full rounded-lg overflow-hidden sm:shadow-lg my-5"
        >
          <table-column show="organization" label="Non-Profit" header-class="py-4 px-6 bg-grey-lightest font-bold border-b border-grey-light" cell-class="py-4 px-6 bg-grey-lightest border-b border-grey-light"/>
          <table-column show="beneficiary" label="Beneficiary" header-class="py-4 px-6 bg-grey-lightest font-bold border-b border-grey-light" cell-class="py-4 px-6 bg-grey-lightest border-b border-grey-light"/>
          <table-column show="timestamp" label="Timestamp" data-type="date:DD/MM/YYYY" header-class="py-4 px-6 bg-grey-lightest font-bold border-b border-grey-light" cell-class="py-4 px-6 bg-grey-lightest border-b border-grey-light"/>
          <table-column label="Gratitude Message" :sortable="false" :filterable="false" header-class="py-4 px-6 bg-grey-lightest font-bold border-b border-grey-light" cell-class="py-4 px-6 bg-grey-lightest border-b border-grey-light">
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


