// 断言断试方法
function assert(value, message) {
  var li = document.createElement('li');
  li.className = value ? 'pass' : 'fail';
  li.appendChild(document.createTextNode(message));
  document.getElementById('results').appendChild(li);
}

// 打印消息
function report(message) {
  assert(true, message);
}

// 方法测试
// window.onload = function() {
//   assert(true, 'pass...');
//   assert(false, 'fail...');
//   report('report message...')
// }