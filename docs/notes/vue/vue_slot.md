# Vue 插槽理解

## 作用域插槽

父组件 :

```js
 <!-- add是插槽的名字，testprops是自己定义的插槽props 用来接收传递过来的值-->
 <!-- 插槽props的名字自己定，喜欢什么名字就起什么名字 --!>
 <!-- v-slot:add 可以缩写为#add -->
 <template v-slot:add='testprops'>
      {{testprops.test.name}}
      {{testprops.hello}}
 </template>
```

子组件：

```js
<template>
 //插槽名字叫add
<slot name='add' :test='test' :hello = 'hello'></slot>
</template>

<script>
export default Vue.extend({
data : {
    test : {
        name : 'czw'
    },
    hello : [1,2,3,4,5,6]
}
 
  })
</script>
```

## 解构插槽

父组件 :

```js
<!-- v-slot:add='{test,hello}' 为解构插槽，不需要用插槽props来接收 ，直接解构接收 -->
//这边解构的意思其实是把身为插槽props的testprops直接解构赋值成{test,hello}
<template v-slot:add='{test,hello}'>
      {{test.name}}
      {{hello}}
</template>
```

子组件：

```js
//跟上面的一致
<template>
<slot name='add' :test='test' :hello = 'hello'></slot>
</template>

<script>
export default Vue.extend({
data : {
    test : {
        name : 'czw'
    },
    hello : [1,2,3,4,5,6]
}
    
})
</script>
```

## 看不懂看这里

- **`忘记了去Vue官网查看 官网的很好理解`**
- **`多看几遍就清楚了`**
- **`其他的插槽没啥难度，忘了复习一下就好`**

