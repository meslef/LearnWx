Page({
  data: {
    name: 'coderWhy',
    age:18,
    students:[
      {id: 110, name: 'kobe', age: 30},
      {id: 111, name: 'jmes',  age: 28},
      {id: 112, name: 'curry',  age: 30},
      {id: 113, name: 'why',  age: 30},


      ],
      counter: 0
  },

  handleBtnClick() {
    // 1.错误做法:界面是不会刷新的
    // console.log('按钮发生了点击')
    // this.data.counter += 1
    // console.log(this.data.counter)

    // 2.this.setData()
    this.setData({
      counter:  this.data.counter +1
    })

  },

  handleSubtraction(){
    console.log('发生减一')
    // 2.this.setData()
    this.setData({
      counter: this.data.counter - 1
    })
  }

})