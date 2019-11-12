<style>
@import "../assets/css/myTable.css";
</style>

<template>
  <div>
    <nav-bar />
    <div class="container w-5/6 mx-auto">
      <v-card class="tableCard">
        <v-card-title class="tableTitle">
          Gratitude Messages
          <v-spacer></v-spacer>
          <v-text-field
            class="tableSearch v-input--is-focused"
            v-model="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-card class="tableData" :light="true">
          <v-data-table
            :items="messages"
            :headers="headers"
            :loading="true"
            :fixed-header="true"
            :light="true"
            class="tableData"
            :search="search"
            :footer-props="{
              itemsPerPageAllText: '',
              itemsPerPageOptions: [10]
            }"
          >
            <template v-slot:item.videoURL="{ item }">
              <td>
                <a :href="item.videoURL" target="_blank">Click Here to View</a>
              </td>
            </template>
          </v-data-table>
        </v-card>
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
          value: "date",
          align: "left"
          // sort: (dateA, dateB) => {
          //   let a = dateA.substring(0, 10).split("-");
          //   let b = dateB.substring(0, 10).split("-");
          //
          //   let yearDiff = parseInt(a[2]) - parseInt(b[2]);
          //   let monthDiff = parseInt(a[1]) - parseInt(b[1]);
          //   let dayDiff = parseInt(a[0]) - parseInt(b[0]);
          //
          //   if (yearDiff !== 0) return yearDiff;
          //   else if (monthDiff !== 0) return monthDiff;
          //
          //   return dayDiff;
          // }
        },
        { text: "Gratitude Message", value: "videoURL", align: "left" }
      ],
      messages: []
    };
  },
  created() {
    // api call goes here
    MessagesService.getMessages()
      .then(response => {
        console.log(response);
        this.messages = response;
        console.log(this.messages);
      })
      .catch(error => {
        console.log("Error: ", error.response);
        // at the moment- use fake data in case of error
        // this.messages = [
        //   {
        //     recipientName: "Liftovers",
        //     beneficiaryName: "Sonia",
        //     timestamp: "04/10/1940",
        //     link: "Link"
        //   },
        //   {
        //     recipientName: "Feed the Kids",
        //     beneficiaryName: "Ignas",
        //     timestamp: "18/06/1942",
        //     link: "Link"
        //   },
        //   {
        //     recipientName: "Gratitude",
        //     beneficiaryName: "Alex",
        //     timestamp: "25/02/1943",
        //     link: "Link"
        //   },
        //   {
        //     recipientName: "Chalmers Card",
        //     beneficiaryName: "Abdullah",
        //     timestamp: "07/07/1940",
        //     link: "Link"
        //   }
        // ];
      });

    // temporarily use hardcoded messages
  }
};
</script>
