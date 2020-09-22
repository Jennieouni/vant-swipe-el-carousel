var isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
var line = {
  android: 'https://bt.5li2v2.com/channel/android/AllGame_1156317_4.4.4_0902155122.apk',
  ios: 'https://downApp.92gkb6.com/channel/app/11035'
}
function down() {
  window.location.href = isIOS ? line.ios : line.android
}
export{
  down
}