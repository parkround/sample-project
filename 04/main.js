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
  mounted() {
    this.todos = JSON.parse(localStorage.getItem("items")) || [];
  },
  methods: {
    addItem: function() {
        console.log(this.newItem)
        if (this.newItem == "") return;
        var todo = {
            item: this.newItem
        };
        console.log(todo)
        
        this.todos.push(todo);
        console.log(this.todos)
        this.newItem = "";
        //   this.setItems();
        localStorage.setItem("items",JSON.stringify(this.todos))
    },
    deleteItem: function(index) {
        console.log(index)
        //←とりあえず動くかどうかテストのためにアラートを表示させている
        // alert(index);
      this.todos.splice(index, 1);
      localStorage.setItem("items",JSON.stringify(this.todos))
    },
    deleteAll: function() {
      this.todos = [];
      localStorage.setItem("items",JSON.stringify(this.todos))
    },
    setItems() {
      localStorage.setItem("items", JSON.stringify(this.items));
    }
  }
});
