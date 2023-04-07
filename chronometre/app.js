var sp, btnStart, btnStop, t, h, mn, s, ms;

window.onload = function () {
  sp = document.getElementsByTagName("span");
  btnStart = document.getElementById("start");
  t;
  (h = 0), (mn = 0), (s = 0), (ms = 0);
};
function update() {
  ms += 1;
  if (ms == 10) {
    ms = 1;
    s += 1;
  }
  if (s == 60) {
    s = 0;
    mn += 1;
  }
  if (mn == 60) {
    mn = 0;
    h += 1;
  }
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}
function start() {
  t = setInterval(update, 100);
  btnStart.disabled = true;
}
function stop() {
  clearInterval(t);
  btnStart.disabled = false;
}
function reset() {
  clearInterval(t);
  btnStart.disabled = false;
  (ms = 0), (s = 0), (mn = 0), (h = 0);
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}
