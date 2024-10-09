// 禁用鼠标滚轮缩放功能
document.addEventListener('wheel', (event) => {
    if (event.ctrlKey) {
        event.preventDefault(); // 禁止缩放
    }
}, { passive: false });

// 获取元素
const welcomePage = document.getElementById('welcomePage');
const scrollL = document.getElementById('scrollL');
const scrollR = document.getElementById('scrollR');
const mainBackground = document.getElementById('mainBackground');
const mainInterface = document.getElementById('mainInterface');
const buttonContainer = document.getElementById('buttonContainer');
const popupContainer = document.getElementById('popupContainer');
const audioContainer = document.getElementById('audioContainer');
const backToMainButton = document.getElementById('backToMainButton');
// const backToWelcomeButton = document.getElementById('back-to-welcome');
// const scalingicon = document.getElementById('scaling-icon');
// 按钮、弹出框和音乐文件数组

const buttonImages = [];
const popupBackgroundImages = [];
const musicFiles = [];
const iconimg = [];
for (let i = 1; i <= 81; i++) {
  buttonImages.push(`./symbol-buttons/${i}.png`);  /*  */
  iconimg.push(`./icon-img/${i}.png`);  /*  */
  popupBackgroundImages.push(`./popup-contents/${i}.png`);
  musicFiles.push(`./music-files/${i}.mp3`);
}
// const popupBackgroundImages = [
//     'popup1.jpg', 'popup2.jpg', /* 填入对应弹出框背景 */
// ];
// const musicFiles = [
//     'music1.mp3', 'music2.mp3','music3.mp3' /* 填入对应的音乐文件 */
// ];

// 处理欢迎页面的点击事件
welcomePage.addEventListener('click', () => {
    welcomePage.style.opacity = 0; // 设置欢迎页面透明
    buttonContainer.style.display = 'none'; // 隐藏按钮
    mainInterface.style.display = 'none'; // 隐藏按钮
    backToMainButton.style.display = 'none'; // 隐藏按钮
    // scalingicon.display = 'none';

    setTimeout(() => {
        welcomePage.style.display = 'none'; // 隐藏欢迎页面
        // 滚动左侧和右侧的滚动条
        scrollL.classList.add('scroll-pan-left');
        scrollR.classList.add('scroll-pan-right');
        mainBackground.style.display = 'block';
        // buttonContainer.style.display = "none"; // 隐藏按钮
    }, 1000);
  
    setTimeout(() => {

        buttonContainer.style.display = 'grid';   
        mainInterface.style.display = 'block'; // 显示主界面

// 显示主背景
    }, 3000);
   

    // buttonContainer.style.display = 1; // 隐藏按钮
   //buttonContainer.style.display = "grid";//显示按钮无效
});

// 创建按钮和弹出框
buttonImages.forEach((buttonImage, index) => {
    // 创建按钮
    const button = document.createElement('button');
    button.className = 'image-button';
    button.innerHTML = `<img src="${buttonImage}" alt="按钮${index + 1}">`;
    buttonContainer.appendChild(button);
    //button.style.opacity = 0;
    // 创建弹出框
    const popupElement = document.createElement('div');
    popupElement.className = 'popup';
    popupElement.id = `popup${index + 1}`;
    popupElement.innerHTML = `
        <div class="popup-content" style="background-image: url(${popupBackgroundImages[index]});">
         <div class="scaling-icon" style="background-image: url(${iconimg[index]});">
 
        </div>
    `;
    // <p>按钮${index + 1}的弹出内容</p>
    popupContainer.appendChild(popupElement);
    // scalingicon.display = 1;
    // 创建音频元素
    const audioElement = document.createElement('audio');
    audioElement.src = musicFiles[index];
    audioElement.loop = true; // 自动循环
    audioContainer.appendChild(audioElement);

    // 按钮点击事件
    button.addEventListener('click', () => {
        // popupElement.classList.add('expand-from-center '); /* 打开动画 */
        buttonContainer.style.display = "none"; // 隐藏按钮
        scrollL.style.display = "none"; 
        scrollR.style.display = "none"; 
        mainBackground.style.opacity = 0;
        backToMainButton.style.display = 'block'; // 隐藏按钮
        button.style.display = "none"; 
        // backToMainButton.style.display = 'block'; // 显示主界面
        popupElement.style.display = 'flex'; // 显示弹出框
        audioElement.play(); // 播放音乐
    });
// Add event listener to close popup and stop music
backToMainButton.addEventListener('click', () => {

    popupElement.classList.add('fade-out'); // 关闭弹出框动画
    setTimeout(() => {
        popupElement.style.display = 'none'; // 隐藏弹出框
        popupElement.classList.remove('fade-out'); // 清除动画类名
    }, 1000);
    audioElement.pause(); // 停止音乐
    buttonContainer.style.display = "grid"; // 隐藏按钮
    scrollL.style.display = "block"; 
    scrollR.style.display = "block"; 
    mainBackground.style.opacity = 1;
    button.style.display = "block"; 
});

    // 弹出框外部点击事件

});


// mainInterface.addEventListener('click', () => {
//     const popup = e.target.closest('.popup');
//     const musicId = `music${popup.id.replace('popup', '')}`;
//     const music = document.getElementById(musicId);

//     // Hide the popup
//     popup.style.display = 'none';

//     // Pause and reset the music
//     music.pause();
//     music.currentTime = 0;
// });
mainInterface.addEventListener('click', () => {
    window.location.reload(); // 重新加载页面，模拟返回欢迎页面
  });
// 返回主界面的按钮点击事件
// backToMainButton.addEventListener('click', () => {
//     popup.classList.remove('show'); // 隐藏弹窗并带有淡出效果
//   });
  // 返回欢迎页面的按钮点击事件
