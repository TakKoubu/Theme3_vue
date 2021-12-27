const app = Vue.createApp({
  data(){
    return{
      number: 0
    }
  },
  watch: {
    number(){
      that = this
      setTimeout(function(){
        that.number = 0
      },5000)
    }
  },
  computed: {
    result(){
      if (this.number <= 37) {
        return 'Not there yet';
      } else {
        return 'Too much';
      }
    }
  },
  methods: {
    add(num){
      this.number = this.number + num;
    }
  }
});

app.mount('#assignment');
