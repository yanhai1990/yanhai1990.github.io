let isFlipping = false; // 防止连续点击

function flipCoin() {
  if (isFlipping) return; // 如果正在抛硬币，不重复执行
  isFlipping = true;

  const coin = document.getElementById('coin');
  const result = document.getElementById('result');
  
  // 随机生成0或1（0=正面，1=反面）
  const random = Math.floor(Math.random() * 2);
  
  // 添加旋转动画（模拟抛硬币过程）
  coin.style.transition = "transform 1s ease-in-out";
  coin.style.transform = "rotateY(1800deg)"; // 旋转5圈（1800度）
  
  // 动画结束后显示结果
  setTimeout(() => {
    if (random === 0) {
      // 显示正面
      coin.style.transform = "rotateY(0deg)";
      result.textContent = "结果：正面！";
    } else {
      // 显示反面
      coin.style.transform = "rotateY(180deg)";
      result.textContent = "结果：反面！";
    }
    isFlipping = false; // 允许再次点击
  }, 1000); // 1秒后显示结果（与动画时间一致）
}