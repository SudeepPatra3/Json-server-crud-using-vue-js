new Vue({
  el: "#app",
  data() {
    return {
      con: [],
      text:'Add Data',
      btnTxt: true,
      ediObj: null,
      posts: {
        first_name: null,
        last_name: null,
        email: null,
      },
    };
  },
  created() {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        this.con = response.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    add(e) {
      axios.post("http://localhost:3000/users", this.posts);
      e.preventDefault();
    },
    remove(id) {
      axios.delete("http://localhost:3000/users/" + id);
    },
    edits(index, id) {
      var res = this.con[index];

      (this.posts.first_name = res.first_name),
        (this.posts.last_name = res.last_name),
        (this.posts.email = res.email);
      this.btnTxt = false;
      this.text='Update data';
      this.ediObj = id;
    },
    nuadata() {
      axios.patch("http://localhost:3000/users/" + this.ediObj, this.posts);
    },
  },
});
