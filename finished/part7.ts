import { filter, interval, map, mapTo, Observable, of } from 'rxjs';
// Observable Operators & Marble Diagrams

// 什么是Operator
// Operator就是像map,filter,contactAll这些,所有函式拿到原本的observable并回传一个新的observable

// map
// var people = of('Jerry', 'Tom');
// function map(source, callback) {
//   return new Observable((observer) => {
//     return source.subscribe(
//       (value) => {
//         try {
//           // 此处我对于callback的理解是指已经处理完的值,有点类似于异步
//           observer.next(callback(value));
//         } catch (e) {
//           observer.error(e);
//         }
//       },
//       (err) => {
//         observer.error(err);
//       },
//       () => {
//         observer.complete();
//       }
//     );
//   });
// }
// var helloPeople = map(people, (item) => item + ' Hello~');
// helloPeople.subscribe({
//   next: function (value) {
//     console.log(value);
//   },
// });
// 直接把map塞到Observable.property
// function map(callback) {
//   return new Observable((observer) => {
//     return (
//       this.subscribe((value) => {
//         try {
//           observer.next(callback(value));
//         } catch (e) {
//           observer.error(e);
//         }
//       }),
//       (err) => {
//         observer.error(err);
//       },
//       () => {
//         observer.complete();
//       }
//     );
//   });
// }
// Observable.prototype.map = map;
// of('Jerry', 'Anna')
//   .map((item) => item + ' Hello~')
//   .subscribe(console.log);
// 个人写法
// of('Jerry', 'Tom')
//   .pipe(map((value) => value + ' Hello'))
//   .subscribe({
//     next: function (value) {
//       console.log(value);
//     },
//   });
// 此处有两个重点,一个重点是每个operator都会回传一个新的observable,另一个重点是我们可以通过create的方法建立各种operator

// Some Operators
// map
// interval(1000)
//   .pipe(map((x) => x + 2))
//   .subscribe({
//     next: function (value) {
//       console.log(value);
//     },
//   });
// source: -----0-----1-----2-----3--...
//   map(x => x + 1)
// newest: -----1-----2-----3-----4--...

// 和map很像的mapTo
// interval(1000)
//   .pipe(mapTo(2))
//   .subscribe({
//     next: function (value) {
//       console.log(value);
//     },
//   });
// source: -----0-----1-----2-----3--...
//   map(x => x + 1)
// newest: -----1-----2-----3-----4--...

// filter
// interval(1000)
//   .pipe(filter((x) => x % 2 === 0))
//   .subscribe({
//     next: function (value) {
//       console.log(value);
//     },
//   });
// source: -----0-----1-----2-----3-----4-...
//   filter(x => x % 2 === 0)
// newest: -----0-----------2-----------4-...
// 此篇总结:
//   讲述了 Operators
//   如何建立 Operator
//   讲述了 Marble diagrams
//   讲述了三个Operators
//     map
//     mapTo
//     filter
