<template>
  <div>
    <b-form @submit.stop.prevent="">
      <b-form-group label="User Level" label-cols="3" label-for="level">
        <b-form-select
          id="level"
          v-model="user.level_id"
          :options="user_level"
          placeholder="Pilih User Level"
          name="level"
          v-validate="{ required: true }"
          :state="validateState('level')"
          data-vv-as="Level"
        >
        </b-form-select>
        <b-form-invalid-feedback>{{ veeErrors.first('level') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Nama" label-cols="3" label-for="nama">
        <b-form-input
          id="nama"
          v-model="user.name"
          placeholder="Masukan nama user"
          name="nama"
          v-validate="{ required: true }"
          :state="validateState('nama')"
          data-vv-as="Nama"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('nama') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Username" label-cols="3" label-for="username">
        <b-form-input
          id="username"
          v-model="user.username"
          placeholder="Masukan nama username"
          name="username"
          v-validate="{ required: true }"
          :state="validateState('username')"
          data-vv-as="Username"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('username') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Password" label-cols="3" label-for="password">
        <b-form-input
          id="password"
          v-model="user.password"
          placeholder="Masukan Password"
          type="password"
          name="password"
          v-validate="{ required: true }"
          :state="validateState('password')"
          data-vv-as="password"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('password') }}</b-form-invalid-feedback>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  inject: ['validator'],
  name: "UserForm",
  created() {
    this.getLevel();
    this.$validator = this.validator
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("user", {
      user: (state) => state.user,
      user_level: (state) => state.user_level,
    }),
  },
  methods: {
    ...mapMutations("user", ["CLEAR_FORM"]),
    ...mapActions("user", ["getLevel"]),
    validateState(ref) {
      if(
      this.veeFields[ref] &&
      (this.veeFields[ref].dirty || this.veeFields[ref].validated)
    )   {
      return !this.veeErrors.has(ref);
    }
    return null;
  },
  },
  destroyed() {
    this.CLEAR_FORM();
  },
};
</script>