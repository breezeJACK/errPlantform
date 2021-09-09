let lastTime = performance.now();
let frame = 0;
let lastFameTime = performance.now();
let times = 0;
const LIMIT = 3;
const BELOW = 20
const INTERVAL= 1000

let loop = function () {
  let now = performance.now();
  let fs = (now - lastFameTime);   // 距上次的时间
  lastFameTime = now;
  let fps = Math.round(1000 / fs);   // FPS
  console.log(fps)
  if (fps < BELOW) {
    times++
    if (times >= LIMIT) {
      //上报错误信息
      times=0
    }
  } else {
    times = 0
  }
  frame++;

  if (now > INTERVAL + lastTime) {    // 两次不连续，间隔时间超过1s
    let fps = Math.round((frame * 1000) / (now - lastTime));
    frame = 0;
    lastTime = now;
 
    console.log(fps, "平均fps")
  };
  window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);