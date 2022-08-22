import {
  concatAll,
  first,
  fromEvent,
  interval,
  map,
  of,
  take,
  takeUntil,
} from 'rxjs';
import { operate } from 'rxjs/internal/util/lift';
// operators中的take,first,takeUntil,concatAll
// take取前几个元素
// interval(1000)
//   .pipe(take(3))
//   .subscribe({
//     next: function (value) {
//       console.log(value);
//     },
//   });
// source : -----0-----1-----2-----3--..
//   take(3)
// example: -----0-----1-----2|

// first和take(1)
// interval(1000)
//   .pipe(first())
//   .subscribe({
//     next: function (value) {
//       console.log(value);
//     },
//   });
// source : -----0-----1-----2-----3--..
//   first()
// example: -----0|

// takeUntil经常使用,可以在某件事情发生时,让一个observable直到送出complete讯息
// interval(1000)
//   .pipe(takeUntil(fromEvent(document.body, 'click')))
//   .subscribe({
//     next: function (value) {
//       console.log(value);
//     },
//     complete: function () {
//       console.log('complete');
//     },
//   });
// source : -----0-----1-----2------3--
// click  : ----------------------c----
//     takeUntil(click)
// example: -----0-----1-----2----|

// concatAll 有时候observable送出的元素还是一个observable,这时候的concatAll可以解决,concatAll就是把所有元素concat起来
// var source = fromEvent(document.body, 'click').pipe(map((e) => of(1, 2, 3)));
// var example = source.pipe(concatAll());
// example.subscribe({
//   next: (value) => {
//     console.log(value);
//   },
//   error: (err) => {
//     console.log('Error: ' + err);
//   },
//   complete: () => {
//     console.log('complete');
//   },
// });

// fromEvent(document.body, 'click')
//   .pipe(map((e) => of(1, 2, 3)))
//   .pipe(concatAll())
//   .subscribe({
//     next: function (value) {
//       console.log(value);
//     },
//   });
// click  : ------c------------c--------
//     map(e => Rx.Observable.of(1,2,3))
// source : ------o------------o--------
//                 \            \
//                  (123)|       (123)|
//     concatAll()
// example: ------(123)--------(123)------------

// concatAll是永远先处理第一个,处理结束才处理下一个
// of(
//   interval(1000).pipe(take(5)),
//   interval(500).pipe(take(2)),
//   interval(2000).pipe(take(1))
// )
//   .pipe(concatAll())
//   .subscribe({
//     next: function (value) {
//       console.log(value);
//     },
//   });
// source : (o1                 o2      o3)|
//            \                  \       \
//             --0--1--2--3--4|   -0-1|   ----0|
//                 concatAll()
// example: --0--1--2--3--4-0-1----0|

// // 简易拖拉
// const dragDOM = document.getElementById('drag');
// const body = document.body;
// // 监听事件
// const mouseDown = fromEvent(dragDOM, 'mousedown');
// const mouseUp = fromEvent(body, 'mouseup');
// const mouseMove = fromEvent(body, 'mousemove');
// // 事件逻辑
// mouseDown
//   // 自己的话说就是事件的转换,当鼠标抬起的时候就发送complete完成事件
//   // source: -------e--------------e-----
//   //                 \               \
//   //                  --m-m-m-m|      --m--m-m--m-m|
//   .pipe(map((event) => mouseMove.pipe(takeUntil(mouseUp))))
//   // 两个observable合在一起
//   .pipe(concatAll())
//   // map返回x, y
//   .pipe(map((event) => ({ x: event.clientX, y: event.clientY })))
//   // left和top的坐标定位
//   .subscribe((position) => {
//     dragDOM.style.left = position.x + 'px';
//     dragDOM.style.top = position.y + 'px';
//   });

// 今日总结:
//   take
//   first
//   takeUntil
//   concatAll
