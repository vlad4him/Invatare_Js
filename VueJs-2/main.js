var app= new Vue({
    el:'#app',
    data: {
        product: "It sure works."
    }
})

var app2= new Vue({
    el:'#app-2',
    data: {
        product2: "Well."
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })

  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'I' },
        { text: 'did' },
        { text: 'it.' }
      ]
    }
  })

  var example1 = new Vue({
    el: '#example-1',
    data: {
      counter: 0
    }
  })

  new Vue({
    el: '#example-5',
    methods: {
      say: function (message) {
        alert(message)
      }
    }
  })