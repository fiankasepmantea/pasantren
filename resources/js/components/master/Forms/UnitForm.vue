<template>
  <div>
    <b-form @submit.stop.prevent="">
      <b-form-group label="Nama Unit" label-for="nama" label-cols="3">
        <b-form-input
          id="nama"
          v-model="unit.nama"
          placeholder="Masukan Nama Unit"
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
      <b-form-group label="Keterangan" label-for="keterangan" label-cols="3">
        <b-form-textarea
          id="keterangan"
          v-model="unit.keterangan"
          placeholder="Masukan Keterangan"
          name="keterangan"
          v-validate="{ required: true }"
          :state="validateState('keterangan')"
          data-vv-as="Keterangan"
        >
        </b-form-textarea>
        <b-form-invalid-feedback>{{
          veeErrors.first("keterangan")
        }}</b-form-invalid-feedback>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  inject: ["validator"],
  name: "UnitForm",
  computed: {
    ...mapState(["errors"]),
    ...mapState("unit", {
      unit: (state) => state.unit,
    }),
  },
  created() {
    this.$validator = this.validator
  },
  methods: {
    ...mapMutations("unit", ["CLEAR_FORM"]),
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