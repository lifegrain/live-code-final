<template>
  <div class="login">
    <b-form @submit="onSubmit">
      <b-form-group label="Username:">
        <b-form-input v-model="form.username" type="text" required placeholder="Enter username"></b-form-input>
      </b-form-group>

      <b-form-group label="Password:">
        <b-form-input v-model="form.password" type="password" required placeholder="Enter Password"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios({
        baseURL: this.$store.state.url,
        url: "/login",
        method: `post`,
        data: this.form
      })
        .then(({ data }) => {
          localStorage.token = data.token;
          localStorage.id = data.id;
          localStorage.username = data.username;

          this.$router.push({ name: "main" });
        })
        .catch(err => {
          this.$store.dispatch("makeToast", {
            vm: this,
            message: err.response.data.errors.join(", ")
          });
        });
    }
  }
};
</script>