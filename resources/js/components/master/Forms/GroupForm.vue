<template>
  <div>
    <b-form @submit.stop.prevent="">
       <b-form-group label="Unit" label-cols="3" label-for="unit">
        <b-form-select
          id="unit"
          v-model="group.unit_id"
          :options="group_unit"
          placeholder="Pilih Unit"
          name="unit"
          v-validate="{ required: true }"
          :state="validateState('unit')"
          data-vv-as="Unit"
        >
        </b-form-select>
        <b-form-invalid-feedback>{{ veeErrors.first('unit') }}</b-form-invalid-feedback>
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
    this.getUnit();
    this.$validator = this.validator
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("group", {
      group: (state) => state.group,
      group_unit: (state) => state.group_unit,
    }),
  },
  methods: {
    ...mapMutations("group", ["CLEAR_FORM"]),
    ...mapActions("group", ["getUnit"]),
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