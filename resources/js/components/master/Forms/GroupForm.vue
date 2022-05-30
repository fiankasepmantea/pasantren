<template>
  <div>
    <b-form @submit.stop.prevent="">
      <b-form-group label="Nama Grup" label-for="nama" label-cols="3">
        <b-form-input
          id="nama"
          v-model="group.nama"
          placeholder="Masukan Nama Grup"
          name="nama"
          v-validate="{ required: true }"
          :state="validateState('nama')"
          data-vv-as="Nama"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{
          veeErrors.first("nama")
        }}</b-form-invalid-feedback>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  inject: ["validator"],
  name: "GroupForm",
  computed: {
    ...mapState(["errors"]),
    ...mapState("group", {
      group: (state) => state.group,
    }),
  },
  created() {
    this.$validator = this.validator
  },
  methods: {
    ...mapMutations("group", ["CLEAR_FORM"]),
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
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