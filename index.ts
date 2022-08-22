import './style.css';

import { of, map, Observable } from 'rxjs';

// 初次建立
// var observable = new Observable(function (observer) {
//   observer.next('Jerry');
//   observer.next('Tom');
// });
// observable.subscribe(function (value) {
//   console.log(value);
// });

// 这部分代码证明上述代码是同步执行
// var observable = new Observable(function (observer) {
//   observer.next('Jerry');
//   observer.next('Tom');
// });
// console.log('start');
// observable.subscribe(function (value) {
//   console.log(value);
// });
// console.log('end');

// 此部分代码证明rxjs可以异步处理
// var observable = new Observable(function (observer) {
//   observer.next('Jerry');
//   observer.next('Tom');
//   setTimeout(() => {
//     console.log('成功异步');
//   }, 2000);
// });
// console.log('start');
// observable.subscribe(function (value) {
//   console.log(value);
// });
// console.log('end');

// 观察者
// var observable = new Observable(function (observer) {
//   observer.next('Jerry');
//   observer.complete();
//   observer.error();
// 此处的next没有执行, 说明complete之后不会再执行next
//   observer.next('看看是否执行');
// });
// var observer = {
//   next: function (value) {
//     console.log(value);
//   },
//   complete: function () {
//     console.log('finish');
//   },
//   error: function (error) {
//     console.log(error);
//   },
// };
// observable.subscribe(observer);

// 送出错误的案例
// var observable = new Observable(function (observer) {
//   try {
//     observer.next('Jerry');
//     observer.next('Tom');
//     throw '错误';
//     observer.next('看看是否执行');
//   } catch (e) {
//     console.log('报错信息:', Error);
//   }
// });
// var observer = {
//   next: function (value) {
//     console.log(value);
//   },
//   error: function (error) {
//     console.log('Error: ', error);
//   },
// };
// observable.subscribe(observer);

// 直接传入三个function
// var observable = new Observable(function (observer) {
//   observer.next('Jerry');
//   observer.next('Tom');
//   observer.complete();
// });
// observable.subscribe(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log('Error: ', error);
//   },
//   () => {
//     console.log('complete');
//   }
// );

// Open the console in the bottom right to see results.
