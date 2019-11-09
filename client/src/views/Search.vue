<template>
  <div>
    <nav-bar />
    <div class="container w-2/3 mx-auto">
      <v-card>
        <v-card-title>
          Gratitude Messages
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>

        <v-data-table
          :items="messages"
          :headers="headers"
          :loading="true"
          :fixed-header="true"
          :search="search"
          :footer-props="{
            itemsPerPageAllText: '',
            itemsPerPageOptions: [10]
          }"
        >
        </v-data-table>
      </v-card>
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
      search: "",
      headers: [
        { text: "Recipient", value: "recipientName", align: "left" },
        { text: "Beneficiary", value: "beneficiaryName", align: "left" },
        {
          text: "Date",
          value: "timestamp",
          align: "left",
          sort: (dateA, dateB) => {
            let a = dateA.split("/");
            let b = dateB.split("/");

            let yearDiff = parseInt(a[2]) - parseInt(b[2]);
            let monthDiff = parseInt(a[1]) - parseInt(b[1]);
            let dayDiff = parseInt(a[0]) - parseInt(b[0]);

            if (yearDiff !== 0) return yearDiff;
            else if (monthDiff !== 0) return monthDiff;

            return dayDiff;
          }
        }
      ],
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
