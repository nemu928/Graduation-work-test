const video = document.getElementById('camera');
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  });

document.getElementById('snap').addEventListener('click', () => {
  const canvas = document.getElementById('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  const imageData = canvas.toDataURL(); // ← 撮った画像データ
  // これをimg要素で表示 or 保存
});


const img = document.createElement('img');
img.src = imageData;
document.body.appendChild(img); // ギャラリー用divに追加でもOK