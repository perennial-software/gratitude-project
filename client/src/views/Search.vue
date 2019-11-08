<template>
  <div>
    <nav-bar />

    <div class="container w-2/3 mx-auto">
      <table-component
        :data="messages"
        :show-caption="false"
        :sort-by="organization"
        :sort-order="asc"
        filter-no-results="There are no matching results"
        filter-placeholder="Search Beneficiary Name, Recipient Name or timestamp"
        filter-input-class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        table-class="w-full rounded-lg overflow-hidden sm:shadow-lg my-5"
      >
        <table-column
          show="recipientName"
          label="Recipient"
          header-class="py-4 px-6 bg-grey-lightest font-bold border-b border-grey-light"
          cell-class="py-4 px-6 bg-grey-lightest border-b border-grey-light"
        />
        <table-column
          show="beneficiaryName"
          label="Beneficiary"
          header-class="py-4 px-6 bg-grey-lightest font-bold border-b border-grey-light"
          cell-class="py-4 px-6 bg-grey-lightest border-b border-grey-light"
        />
        <table-column
          show="timestamp"
          label="Timestamp"
          data-type="date:DD/MM/YYYY"
          header-class="py-4 px-6 bg-grey-lightest font-bold border-b border-grey-light"
          cell-class="py-4 px-6 bg-grey-lightest border-b border-grey-light"
        />
        <table-column
          label="Gratitude Message"
          :sortable="false"
          :filterable="false"
          header-class="py-4 px-6 bg-grey-lightest font-bold border-b border-grey-light"
          cell-class="py-4 px-6 bg-grey-lightest border-b border-grey-light"
        >
          <template slot-scope="row">
            <a :href="`#${row.organization}`">Link</a>
          </template>
        </table-column>
      </table-component>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MessagesService from "../services/MessageService";

export default {
  components: {
    NavBar
  },
  data() {
    return {
      messages: []
    };
  },
  created() {
    // api call goes here
    MessagesService.getMessages()
      .then(response => {
        this.messages = response.data;
      })
      .catch(error => {
        console.log("Error: ", error.response);
        // at the moment- use fake data in case of error
        this.messages = [
          {
            recipientName: "Liftovers",
            beneficiaryName: "Sonia",
            timestamp: "04/10/1940"
          },
          {
            recipientName: "Feed the Kids",
            beneficiaryName: "Ignas",
            timestamp: "18/06/1942"
          },
          {
            recipientName: "Gratitude",
            beneficiaryName: "Alex",
            timestamp: "25/02/1943"
          },
          {
            recipientName: "Chalmers Card",
            beneficiaryName: "Abdullah",
            timestamp: "07/07/1940"
          }
        ];
      });

    // temporarily use hardcoded messages
  }
};
</script>
