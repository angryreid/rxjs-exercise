// creation operator
// 下面列出常见的创建实例的方法
import {
  of,
  from,
  fromEvent,
  fromEventPattern,
  never,
  empty,
  throwError,
  interval,
  timer,
  Observable,
} from 'rxjs';

// of是在我们想要同步传几个值的时候可以用它来简介表达
// of('Jerry', 'Tom').subscribe((observer) => {
//   console.log(observer);
// });
// of('Jerry', 'Tom').subscribe({
//   next: function (value) {
//     console.log(value);
//   },
// });

// of的一个参数就是一个list，list在js中最常见的就是array，如果要把一个存在的数组当作参数用from
// from可以用来接收任何可以列举的参数
// var arr = ['Jerry', 'Tom', 2022, 'exercise'];
// from(arr).subscribe({
//   next: function (value) {
//     console.log(value);
//   },
//   complete: function () {
//     console.log('complete');
//   },
// });
// of(arr).subscribe({
//   next: function (value) {
//     console.log(value);
//   },
//   complete: function () {
//     console.log('complete');
//   },
// });
// 注意：任何可以列举的参数都可以使用，比如Set，WeakSet，Iterator
// from('还能接受字符串!').subscribe({
//   next: function (value) {
//     console.log(value);
//   },
// });
// 看看promise呢
// from(
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('看看Promise');
//     }, 3000);
//   })
// ).subscribe({
//   next: function (value) {
//     console.log(value);
//   },
// });

// 我们也可以使用event建立observable
// fromEvent(document.body, 'click').subscribe({
//   next: function (value) {
//     console.log('点击');
//   },
// });
// fromEvent第一个参数是要传入DOM, 第一个是传入监听事件的名称,上方就是监听body是否呗点击,被点击就会答应出event

// 补充一个fromEventPattern,这个是给类事件使用的,意思就是指行为和事件很像,同时有注册以及移除监听两种行为,就比如DOM有addEventListener和removeEventListener
// 请出之前的代码
// class Producer {
//   listeners: any[];
//   constructor() {
//     this.listeners = [];
//   }
//   addListener(listener) {
//     if (typeof listener === 'function') {
//       this.listeners.push(listener);
//       console.log('添加');
//     } else {
//       throw new Error('listener 必須是 function');
//     }
//   }
//   removeListener(listener) {
//     console.log('移除');
//     this.listeners.splice(this.listeners.indexOf(listener), 1);
//   }
//   notify(message) {
//     this.listeners.forEach((listener) => {
//       listener(message);
//     });
//   }
// }
// var egghead = new Producer();
// // 同时将注册监听和移除监听传入fromEventPattern建立Observable
// // fromEventPattern(
// //   (handler) => egghead.addListener(handler),
// //   (handler) => egghead.removeListener(handler)
// // ).subscribe({
// //   next: function (value) {
// //     console.log(value);
// //   },
// //   complete: function () {
// //     console.log('finish');
// //   },
// // });
// // egghead.notify('Hello! Can you hear me?');
// fromEventPattern(
//   // 注意不要直接将方法传入,避免this出错,也可以使用bind
//   egghead.addListener.bind(egghead),
//   egghead.removeListener.bind(egghead)
// ).subscribe(console.log);

