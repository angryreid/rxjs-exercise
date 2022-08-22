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

// Open the console in the bottom right to see results.
