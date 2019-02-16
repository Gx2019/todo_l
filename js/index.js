new Vue({
    el: '#app',
    data: {
        todos: [{
                id: 1,
                content: '阶段一',
                f: true
            },
            {
                id: 2,
                content: '阶段二',
                f: true
            },
            {
                id: 3,
                content: '阶段三',
                f: true
            }
        ],
        addItem: '',
        maskFlag: false,
        activeIndex: -1,
        type: 'A',
        tabBars: [{
                id: 1,
                text: 'A',
                style: 'success'
            },
            {
                id: 2,
                text: 'F',
                style: 'primary'
            },
            {
                id: 3,
                text: 'U',
                style: 'danger'
            }
        ]
    },
    methods: {
        add() {
            this.todos.push({
                id: this.todos.length + 1, //进行数据排序
                content: this.addItem
            })
        },
        check(index) {
            //判断我们的事情是否已完成 
            if (this.todos[index].f) {
                //已完成
                this.remove(index)

            } else {
                //未完成
                this.maskFlag = true
                this.activeIndex = index;
            }
        },
        remove(index) {
            //数组的删除  api  pop  shift  splice
            this.todos.splice(index, 1)
        },
        confirm(index) {
            this.remove(index)
        }
    },
    computed: {
        finished() {
            return this.todos.filter(function(item) {

                return item.f ? item : false
            })
        },
        unFinished() {
            return this.todos.filter(function(item) {
                return !item.f ? item : false
            })
        },
        newTodos() {
            switch (this.type) {
                case "A":
                    return this.todos
                    break;
                case "F":
                    console.log(this)
                    return this.finished
                    break;
                case "U":
                    return this.unFinished
                    break;

                default:
                    break;
            }
        }
    }
})