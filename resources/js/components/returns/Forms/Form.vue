<template>
  <div>
    <b-form @submit.stop.prevent="">
      <b-form-group label="Tanggal" label-cols="3" label-size="sm">
        <b-form-input size="sm" readonly></b-form-input>
      </b-form-group>

      <b-form-group label="No. Retur" label-cols="3" label-size="sm">
        <b-form-input size="sm" readonly></b-form-input>
      </b-form-group>

      <b-form-group label="No. Refrensi" label-cols="3" label-size="sm">
        <b-form-input
          size="sm"
          :disabled="isDetail"
          v-validate="{ required: true }"
          :state="validateState('reference-number')"
          name="reference-number"
          data-vv-as="No. Refrensi"
        ></b-form-input>
        <b-form-invalid-group>{{
          veeErrors.first("reference-number")
        }}</b-form-invalid-group>
      </b-form-group>

      <b-form-group label="Pelanggan" label-cols="3" label-size="sm">
        <b-form-select
          size="sm"
          :disabled="isDetail"
          v-validate="{ required: true }"
          :state="validateState('customer-name')"
          name="customer-name"
          data-vv-as="Pelanggan"
        ></b-form-select>
        <b-form-invalid-group>{{
          veeErrors.first("customer-name")
        }}</b-form-invalid-group>
      </b-form-group>

      <b-form-group label="Sales" label-cols="3" label-size="sm">
        <b-form-input size="sm" readonly></b-form-input>
      </b-form-group>

      <b-form-group label="Keterangan" label-cols="3" label-size="sm">
        <b-form-textarea
          size="sm"
          rows="3"
          :disabled="isDetail"
          v-validate="{ required: true }"
          :state="validateState('desc')"
          name="desc"
          data-vv-as="Keterangan"
        ></b-form-textarea>
        <b-form-invalid-group>{{
          veeErrors.first("desc")
        }}</b-form-invalid-group>
      </b-form-group>

      <div class="d-flex justify-content-end mb-2">
        <b-button
          variant="primary"
          size="sm"
          @click="addItem"
          :disabled="isDetail"
          >+ Item</b-button
        >
      </div>
      <!--THE LOOPS-->
      <div v-for="item in items" :key="item.id">
        <b-form-row>
          <b-col md="2">
            <b-form-group label-size="sm" label="Motif">
              <b-form-select
                size="sm"
                :disabled="isDetail"
                v-validate="{ required: true }"
                :state="validateState('motif')"
                name="motif"
                key="motif-key"
                data-vv-as="Motif"
              ></b-form-select>
              <b-form-invalid-feedback>{{ veeErrors.first('motif') }}</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label-size="sm" label="Bahan">
              <b-form-select
                size="sm"
                :disabled="isDetail"
                v-validate="{ required: true }"
                :state="validateState('bahan')"
                name="bahan"
                key="bahan-key"
                data-vv-as="Bahan"
              ></b-form-select>
              <b-form-invalid-feedback>{{
                veeErrors.first("bahan")
              }}</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label-size="sm" label="Size">
              <b-form-select
                size="sm"
                :disabled="isDetail"
                v-validate="{ required: true }"
                :state="validateState('size')"
                name="size"
                key="size-key"
                data-vv-as="Size"
              ></b-form-select>
              <b-form-invalid-feedback>{{
                veeErrors.first("size")
              }}</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label-size="sm" label="Warna">
              <b-form-select
                size="sm"
                :disabled="isDetail"
                v-validate="{ required: true }"
                :state="validateState('color')"
                name="color"
                key="color-key"
                data-vv-as="Warna"
              ></b-form-select>
              <b-form-invalid-feedback>{{
                veeErrors.first("color")
              }}</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label-size="sm" label="Qty">
              <b-form-input
                size="sm"
                :disabled="isDetail"
                v-validate="{ required: true }"
                :state="validateState('qty')"
                name="qty"
                key="qty-key"
                data-vv-as="Quantity"
              ></b-form-input>
              <b-form-invalid-feedback>{{
                veeErrors.first("qty")
              }}</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group label-size="sm" label="Harga">
              <b-form-input
                size="sm"
                :disabled="isDetail"
                v-validate="{ required: true }"
                :state="validateState('price')"
                name="price"
                key="price-key"
                data-vv-as="Harga"
              ></b-form-input>
              <b-form-invalid-feedback>{{
                veeErrors.first("price")
              }}</b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-form-row>
      </div>
      <div class="d-flex justify-content-end">
        <b-form-group label="Grandtotal" label-size="sm" label-cols="4">
          <b-form-input
            size="sm"
            placeholder="Jumlah"
            :disabled="isDetail"
          ></b-form-input>
        </b-form-group>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  inject: ["validator"],
  props: ["isDetail"],
  data() {
    return {
      items: [
        {
          model: "",
          material: "",
          size: "",
          color: "",
          qty: "",
          price: "",
        },
      ],
    };
  },
  created() {
    this.$validator = this.validator;
  },
  methods: {
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
    addItem() {
      this.items.push({
        model: "",
        material: "",
        size: "",
        color: "",
        qty: "",
        price: "",
      });
    },
  },
};
</script>
