<template>
<div>
<template v-if="getFoto">
  <CRow alignHorizontal="center" style="margin-bottom:8px;">
    <b-avatar :src="getFoto" size="10rem" rounded="lg"></b-avatar>
  </CRow>
</template>
<div v-for="item in getItems">
  <b-form-group :label="item.label" label-cols="3" :labelFor="item.id">
   <b-form-input
      :id="item.id"
      :value="item.value"
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
      let items = [];
      for(const key in this.items) {
        if(key=='id' || key=='foto') continue;
        let val = this.items[key];
        if(typeof val === 'string' && val.substr(0,10).split('-').length == 3) {
          // Anggep aja tanggal..
          let tgl = new Date(val);
          if(tgl) val = tgl.toLocaleDateString();
        }
        items.push({
          id: key.replace(/[_-]/g,'').trim(),
          label: key.replace(/[_-]/g,' ').trim().split(' ')
            .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
            .join(' '),
          value: val
        });
      }
      return items;
    },
    getFoto: function() {
      if(this.items.hasOwnProperty('foto')) {
        if(this.items.foto != '') {
          return this.items.foto;
        }
      }
      return false;
    }
  },
};
</script>