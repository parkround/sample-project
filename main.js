// // Vue インスタンスの生成
// var vm = new Vue({
//   el: "#Vue", //データバインディングの対象となる、DOM要素を指定
//   data: {
//       todos:[]
//   },
//   mounted() {},
//   methods: {
//     clickhandle(){
//         this.input = text;
//         document.write(text);
//     }
//   }
// });

var app = new Vue({
  el: "#app",
  data: {
    newItem: "",
    todos: [] // ←ここね
  },
  methods: {
    addItem: function() {
      // alert();
      if (this.newItem == "") return; 
      var todo = {
        item: this.newItem
      };

      this.todos.push(todo);
      this.newItem = "";
    },
    deleteItem: function(index) {
      //←とりあえず動くかどうかテストのためにアラートを表示させている
      // alert(index);
      this.todos.splice(index, 1);
    },
    deleteAll: function() {
      this.todos = [];
    }
  }
});
