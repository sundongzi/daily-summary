[参考链接](https://juejin.cn/post/7352785768094203913)

```css
.wrap{
  width: 300px;
  display: flex;
  align-items: center;
  padding: 15px;
  outline: 2px solid #9747FF;
  gap: 5px;
  overflow: hidden;
}
.con{
  position: relative;
  display: flex;
  gap: 5px;
  padding: 5px;
  overflow: hidden;
  counter-reset: num;
  animation: check;
  animation-timeline: scroll(x self);
  margin-right: -46px;
}
@keyframes check{
  from,to {
    margin-right: 0;
    -webkit-mask: linear-gradient(to right, #fff calc(100% - 30px), transparent);
  }
}
.wrap::after{
  content: "+"counter(num);
  padding: .2em .5em;
  background-color: #FFE8A3;
  color: #191919;
  border-radius: 4px;
}
.tag{
  padding: .2em .5em;
  background-color: #9747FF;
  color: #fff;
  border-radius: 4px;
  counter-increment: num 1;
  animation: appear;
  animation-timeline: view(inline);
  animation-range: contain;
}
@keyframes appear{
  from,to {
    counter-increment: num 0;
  }
}
```

