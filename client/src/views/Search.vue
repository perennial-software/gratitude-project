<style>
  @import '../assets/css/myTable.css';
</style>

<template>
  <div>
    <nav-bar />
    <div class="container w-5/6 mx-auto">
      <v-card >
        <div class="myCard">
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
        </div>

        <div class="myTable">

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
          class="myTable"
        >
        <template slot=”items” slot-scope="props">
           <td>{{ props.item.recipientName }}</td>
           <td>{{ props.item.beneficiaryName }}</td>
           <td>{{ props.item.timestamp }}</td>
           <td>{{ props.item.link }}</td>
        </template>
        </v-data-table>
        </div>

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
        },
        { text: "Gratitude Message", value: "link", align: "left"}
      ],
      messages: []
    };
  },
  created() {
    // api call goes here
    MessagesService.getMessages()
      .then(response => {
        console.log(response)
        this.messages = response.data;
      })
      .catch(error => {
        console.log("Error: ", error.response);
        // at the moment- use fake data in case of error
        this.messages = [
          {
            recipientName: "Liftovers",
            beneficiaryName: "Sonia",
            timestamp: "04/10/1940",
            link: "Link"
          },
          {
            recipientName: "Feed the Kids",
            beneficiaryName: "Ignas",
            timestamp: "18/06/1942", 
            link: "Link"
          },
          {
            recipientName: "Gratitude",
            beneficiaryName: "Alex",
            timestamp: "25/02/1943", 
            link: "Link"
          },
          {
            recipientName: "Chalmers Card",
            beneficiaryName: "Abdullah",
            timestamp: "07/07/1940", 
            link: "Link"
          }
        ];
      });

    // temporarily use hardcoded messages
  }
};
</script>
