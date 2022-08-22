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
