const wordBanks = [
  {A:["午夜甲板", "电影厅中", "船舱走廊", "休息室", "演出后的酒吧", "船尾观景台", "舱门半掩处","雨夜里","阴影里"], B:["你和主唱", "你和贝斯手", "你和鼓手", "你和朋友", "你和祂", "你们几个"], C:["好像在低声争吵", "突然拉近距离", "正在亲密地交谈", "笑着和谁在接吻", "面对面时突然跪了下来","正在交换戒指", "正在热烈拥抱","看似神秘传纸条", "好像在送礼物"], D:["引发大家猜测", "难道是爱情", "被误解为sm", "迅速成为潮流", "造成乐队紧张氛围","成为本日最大瓜", "大家说也想一起"]},
  {A:["空荡的休息室", "监控盲区", "大庭广众之下", "警报响起的船舱里", "混乱的酒吧里","阴暗的走廊里","厕所里", "浴室里", "被强行打开的房间中"], B:["主唱和你", "你和鼓手", "你和别人", "你", "贝斯和你", "你和一把吉他","你和吉他手", "你", "你", "你", "你", "你"], C:["失踪24个小时后", "被迫中断", "失控地", "在争执过程中", "浑身是血地", "到处在", "情绪激动地"], D:["手冲", "吸小白粉", "互殴中", "给别人造谣", "谋划恐怖袭击", "把周围的东西都砸烂了"]},
  {A:["在和大家排练时", "湿滑的浴室里", "楼梯上","在一阵暴风雨过后","医务室里"], B:["你", "你和队友", "你和朋友", "你", "你", "你"], C:["突然晕倒", "被不知道什么重物砸中了脑袋", "突然大感冒还流大鼻涕", "高烧不退", "脚踝扭到了", "惯用手从小臂开始喜提打石膏", "胃病大爆发", "吃了不知道谁做的小点心食物中毒"], D:[" "]},
  {A:["记者说看到你", "朋友们不小心撞见"], B:["你"], C:["偷偷地", "愉快地", "突然宣布", "邪笑着", "扭捏地", "悲伤着"], D:["珍藏着贾斯汀比伯的照片", "要购买200份一样的商品", "当海鸥", "开小号擦边恰米", "每天都穿两条裤子还看cult片", "模仿卡通动漫人物讲话", "看特朗普和马斯克的同人", "随机给别人寄签名但签的不是自己的名字", "捡东西吃", "偷穿别人衣服"]}
];

let lastResult = '';

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateSentence() {

  const checkboxes = document.querySelectorAll('#checkboxes input[type=checkbox]');
  const selectedIndexes = [];
  checkboxes.forEach(cb => { if(cb.checked) selectedIndexes.push(parseInt(cb.value)); });

  if(selectedIndexes.length === 0){
    return "请至少选择一个词库";
  }


  const bankIndex = getRandomItem(selectedIndexes);
  const bank = wordBanks[bankIndex];


  const sentence = `${getRandomItem(bank.A)} ${getRandomItem(bank.B)} ${getRandomItem(bank.C)} ${getRandomItem(bank.D)}`;

  if(sentence === lastResult) return generateSentence();
  lastResult = sentence;
  return sentence;
}

document.getElementById('generateBtn').addEventListener('click', () => {
  document.getElementById('result').textContent = generateSentence();
});