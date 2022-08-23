import {
  concat,
  interval,
  last,
  merge,
  of,
  skip,
  startWith,
  take,
  takeLast,
} from 'rxjs';

// Operators中的 skip, takeLast, last, concat, startWith, merge

// skip可以跳过几个元素,相对的take可以取出前几个元素
// interval(1000)
//   .pipe(skip(3))
//   .subscribe({
//     next: function (value) {
//       console.log(value);
//     },
//   });
// source : ----0----1----2----3----4----5--....
//   skip(3)
// example: -------------------3----4----5--...

// takeLast除了可以使用take取前几个之外,也可以取最后几个值
// interval(1000)
//   .pipe(take(6))
//   .pipe(takeLast(2))
//   .subscribe({
//     next: function (value) {
//       console.log(value);
//     },
//     complete: function () {
//       console.log('complete');
//     },
//   });
// source : ----0----1----2----3----4----5|
//                 takeLast(2)
// example: ------------------------------(45)|
// 注意:这里最后是同步输出,takelast必须等到整个observable完成才知道最后的元素有哪些

// last和takeLast(1)相同
// interval(1000)
//   .pipe(take(6))
//   .pipe(last())
//   .subscribe({
//     next: function (value) {
//       console.log(value);
//     },
//     complete: function () {
//       console.log('complete');
//     },
//   });
// source : ----0----1----2----3----4----5|
//           last()
// example: ------------------------------(5)|

// concat可以把多个observable实例合并在一起,和concat一样必须等到前一个observable完成,才会继续下一个
// concat(interval(1000).pipe(take(3)), of(3), of(4, 5, 6)).subscribe({
//   next: function (value) {
//     console.log(value);
//   },
// });
// source : ----0----1----2|
// source2: (3)|
// source3: (456)|
//          concat()
// example: ----0----1----2(3456)|

// startWith
// interval(1000)
//   .pipe(startWith(0))
//   .subscribe({
//     next: function (value) {
//       console.log(value);
//     },
//   });
// 一开始塞了一个0,让example在一开始就送出0
// source : ----0----1----2----3--...
//   startWith(0)
// example: (0)----0----1----2----3--...
// startWith的值一开始就是同步发出,这个operator经常被用来保存起始状态

// merge和concat一样都是用来合并observable的,但是和concat有很大不同
// merge(interval(500).pipe(take(3)), interval(300).pipe(take(6))).subscribe({
//   next: function (value) {
//     console.log(value);
//   },
// });
// merge是同时跑
// source : ----0----1----2|
// source2: --0--1--2--3--4--5|
//             merge()
// example: --0-01--21-3--(24)--5|

// 今日总结:
//   skip
//   takeLast
//   last
//   concat
//   startWith
//   merge