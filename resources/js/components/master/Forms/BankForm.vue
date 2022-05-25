<template>
  <div>
    <b-form @submit.stop.prevent="">
      <b-form-group label="Nama Bank" label-for="nama" label-cols="3">
        <b-form-input
          id="nama"
          v-model="bank.nama"
          placeholder="Masukan nama bank"
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
      <b-form-group label="No Rekening" label-for="rekening" label-cols="3">
        <b-form-input
          id="rekening"
          type="number"
          v-model="bank.no_rekening"
          placeholder="Masukan No rekening"
          name="rekening"
          v-validate="{ required: true, min_value: 1 }"
          :state="validateState('rekening')"
          data-vv-as="Rekening"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{
          veeErrors.first("rekening")
        }}</b-form-invalid-feedback>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  inject: ["validator"],
  name: "bankForm",
  computed: {
    ...mapState(["errors"]),
    ...mapState("bank", {
      bank: (state) => state.bank,
    }),
  },
  created() {
    this.$validator = this.validator
  },
  methods: {
    ...mapMutations("bank", ["CLEAR_FORM"]),
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