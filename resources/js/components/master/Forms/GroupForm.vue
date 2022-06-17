<template>
  <div>
    <b-form @submit.stop.prevent="">
       <b-form-group label="Muhaffizh" label-cols="3" label-for="muhaffizh">
        <b-form-select
          id="muhaffizh"
          v-model="group.muhaffizh_id"
          :options="group_muhaffizh"
          placeholder="Pilih Muhaffizh"
          name="muhaffizh"
          v-validate="{ required: true }"
          :state="validateState('muhaffizh')"
          data-vv-as="Muhaffizh"
        >
        </b-form-select>
        <b-form-invalid-feedback>{{ veeErrors.first('muhaffizh') }}</b-form-invalid-feedback>
      </b-form-group>

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
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  inject: ["validator"],
  name: "GroupForm",
  created() {
    this.getMuhaffizh();
    this.$validator = this.validator
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("group", {
      group: (state) => state.group,
      group_muhaffizh: (state) => state.group_muhaffizh,
    }),
  },
  methods: {
    ...mapMutations("group", ["CLEAR_FORM"]),
    ...mapActions("group", ["getMuhaffizh"]),
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