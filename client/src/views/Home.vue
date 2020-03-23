<template>
  <div class="home container">
    <button class="btn btn-primary mb-4" @click="$bvModal.show('addForm')">Add Report</button>
    <card v-for="data in reportlist" :key="data.id" :data="data" @onDelete="onDelete" />
    <h3 v-if="reportlist.length === 0">Looks like you have not made any report yet!</h3>
    <b-modal id="addForm" title="Add a Report" hide-footer>
      <b-form @submit="onSubmit">
        <b-form-group label="Cases:">
          <b-form-input v-model="form.cases" type="number" required placeholder="Cases confirmed"></b-form-input>
        </b-form-group>

        <b-form-group label="Country">
          <b-form-select id="input-3" v-model="form.CountryId" :options="countries" required></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import card from "../components/reportCard.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    card
  },
  data() {
    return {
      reportlist: [],
      form: {
        cases: 0,
        CountryId: 1
      }
    };
  },
  methods: {
    getData() {
      axios({
        baseURL: this.$store.state.url,
        url: "/reports",
        method: `get`,
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          this.reportlist = data;
        })
        .catch(err => {
          this.$store.dispatch("makeToast", {
            vm: this,
            message: err.response.data.errors.join(`, `)
          });
        });
    },

    onSubmit(event) {
      event.preventDefault();
      axios({
        baseURL: this.$store.state.url,
        url: "/reports",
        method: "post",
        headers: {
          token: localStorage.token
        },
        data: this.form
      })
        .then(({ data }) => {
          this.$bvModal.hide("addForm");
          this.reportlist.push(data);
        })
        .catch(err => {
          this.$store.dispatch("makeToast", {
            vm: this,
            message: err.response.data.errors.join(`, `)
          });
        });
    },

    onDelete(id) {
      console.log(id)
    }
  },
  created() {
    this.getData();
  },
  computed: {
    countries() {
      var countries = [];

      var data = require(`../../country`).default;

      data.forEach(i => {
        countries.push({
          text: i.name,
          value: i.id
        });
      });

      return countries;
    }
  }
};
</script>
