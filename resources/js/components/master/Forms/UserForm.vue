<template>
  <div>
    <b-form @submit.stop.prevent="">
      <b-form-group label="Departemen" label-cols="3" label-for="departemen">
        <b-form-select
          id="departemen"
          v-model="user.departement_id"
          :options="departement_name"
          placeholder="Pilih departemen"
          name="department"
          v-validate="{ required: true }"
          :state="validateState('department')"
          data-vv-as="Department"
        >
        </b-form-select>
        <b-form-invalid-feedback>{{ veeErrors.first('department') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="User Level" label-cols="3" label-for="level">
        <b-form-select
          id="level"
          v-model="user.level_id"
          :options="user_level"
          placeholder="Pilih user level"
          name="level"
          v-validate="{ required: true }"
          :state="validateState('level')"
          data-vv-as="Level"
        >
        </b-form-select>
        <b-form-invalid-feedback>{{ veeErrors.first('level') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="NIK" label-cols="3" label-for="nik">
        <b-form-input
          id="nik"
          type="number"
          v-model="user.nik"
          placeholder="Masukan nik"
          name="nik"
          v-validate="{ required: true, min_value: 1 }"
          :state="validateState('nik')"
          data-vv-as="Nik"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('nik') }}</b-form-invalid-feedback>
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
    this.getDepartementName();
    this.getLevel();
    this.$validator = this.validator
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("user", {
      user: (state) => state.user,
      departement_name: (state) => state.departement_name,
      user_level: (state) => state.user_level,
    }),
  },
  methods: {
    ...mapMutations("user", ["CLEAR_FORM"]),
    ...mapActions("user", ["getDepartementName", "getLevel"]),
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