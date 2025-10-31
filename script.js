let isFlipping = false; // ��ֹ�������

function flipCoin() {
  if (isFlipping) return; // ���������Ӳ�ң����ظ�ִ��
  isFlipping = true;

  const coin = document.getElementById('coin');
  const result = document.getElementById('result');
  
  // �������0��1��0=���棬1=���棩
  const random = Math.floor(Math.random() * 2);
  
  // �����ת������ģ����Ӳ�ҹ��̣�
  coin.style.transition = "transform 1s ease-in-out";
  coin.style.transform = "rotateY(1800deg)"; // ��ת5Ȧ��1800�ȣ�
  
  // ������������ʾ���
  setTimeout(() => {
    if (random === 0) {
      // ��ʾ����
      coin.style.transform = "rotateY(0deg)";
      result.textContent = "��������棡";
    } else {
      // ��ʾ����
      coin.style.transform = "rotateY(180deg)";
      result.textContent = "��������棡";
    }
    isFlipping = false; // �����ٴε��
  }, 1000); // 1�����ʾ������붯��ʱ��һ�£�
}