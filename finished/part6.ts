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
// // 注意不要直接将方法传入,避免this出错,也可以使用bind
// fromEventPattern(
//   egghead.addListener.bind(egghead),
//   egghead.removeListener.bind(egghead)
// ).subscribe(console.log);

// 有点类似于0,好像没什么用,但是有些时候很重要
// empty会给一个空的Observable,订阅之后立刻传出complete
// empty().subscribe({
//   next: function (value) {
//     console.log(value);
//   },
//   complete: function () {
//     console.log('complete!');
//   },
//   error: function (error) {
//     console.log(error);
//   },
// });

// never会给一个无穷的observable,永远等不到他结束
// never().subscribe({
//   next: function (value) {
//     console.log(value);
//   },
//   complete: function () {
//     console.log('complete');
//   },
// });

// 抛出错误
// throwError('Error').subscribe({
//   next: function (value) {
//     console.log(value);
//   },
//   complete: function () {
//     console.log('complete!');
//   },
//   error: function (error) {
//     console.log('Throw Error: ' + error);
//   },
// });

// interval持续方出一个数
// interval(1000).subscribe({
//   next: function (value) {
//     console.log(value);
//   },
// });

// timer有两个参数参与,第一个代表第一个值等待的时间,第二个代表第一次之后发送的值的间隔时间
// timer(1000, 5000).subscribe({
//   next: function (value) {
//     console.log(value);
//   },
//   complete: function () {
//     console.log('complete');
//   },
// });

// timer的第一个参数除了是Number之外,也可以是日期,等到指定的时间再发送第一个值
// timer也可以只接受一个参数,等待一秒送出0的时候同时结束
// timer(1000).subscribe({
//   next: function (value) {
//     console.log(value);
//   },
//   complete: function () {
//     console.log('complete');
//   },
// });

// var subscription = timer(1000, 1000).subscribe({
//   next: function (value) {
//     console.log(value);
//   },
//   complete: function () {
//     console.log('complete!');
//   },
//   error: function (error) {
//     console.log('Throw Error: ' + error);
//   },
// });
// setTimeout(() => {
//   subscription.unsubscribe(); // 停止訂閱(退訂)， RxJS 4.x 以前的版本用 dispose()
//   console.log('unsubscrible退订,释放资源');
// }, 5000);
