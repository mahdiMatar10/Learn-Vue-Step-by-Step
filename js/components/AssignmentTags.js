export default {
  template: `
    <div class="flex gap-2">
        <button 
        @click= "$emit('change', tag)"
        v-for="tag in tags" 
        class="border rounded px-1 py-px text-xs"
        :class="{'border-blue-400 text-blue-400' : tag == currentTag}"
        >{{ tag }}</button>
    </div>
    `,

  data() {
    return{
        
        currentTags: "all"
    }
  },

  props: {
    initialTags: Array,
    currentTag: String
  },
  computed: {
    // taking the initial set and we are extending it
    tags() {
      // wrap it in a set an es6 set (set of items where each item must be unique )
      return ["all", ...new Set(this.initialTags)];
    },
  },
};
