<template>
<div>
<div v-for="(item,key,idx) in getItems">
  <b-form-group :label="key.replace(/[_-]/g,' ').trim().split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ')" label-cols="3" :labelFor="key">
   <b-form-input
      :id="key.replace(/[_-]/g,'').trim()"
      :value="item"
      :plaintext="true"
    ></b-form-input>
  </b-form-group>
</div>
</div>
</template>

<script>
export default {
  name: "PropertyView",
  props: { 
    items: { 
      type: Object, 
      default(rawProps) {
        return { info: "Data is empty" }
      }
    }
  },
  computed: {
    getItems: function() {
      return this.items;
    }
  },
};
</script>