function showDiffDate(tYear, tMonth, tDay) {
  // 現在日時を数値に変換
  var nowDate = new Date();
  var dnumNow = nowDate.getTime();

  // 指定日時を数値に変換
  var targetDate = new Date(tYear, tMonth - 1, tDay); // 月の値は 1 を引く必要がある点に注意。(※1月は0、2月は1、……12月は11)
  var dnumTarget = targetDate.getTime();

  // 引き算して残日数を計算
  var diffMSec = dnumTarget - dnumNow;
  var diffDays = diffMSec / (1000 * 60 * 60 * 24);
  var showDays = Math.ceil(diffDays); // 小数点以下を切り上げる

  // 表示
  var Msg;
  if (showDays >= 0) {
    Msg = "指定日まであと " + showDays + "日です。";
  } else {
    Msg = "指定日は " + (showDays * -1) + "日前に過ぎました。";
  }
  return Msg;
}