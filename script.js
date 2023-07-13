const fireworks = document.querySelector('.fireworks');

function fireworkLaunch(event) {
  const firworkType = Math.floor(Math.random() * 6) + 1;
  const firework = document.createElement('div');
  firework.classList.add('firework');
  firework.classList.add(`firework__${firworkType}`);
  firework.style.left = `${event.x}px`;
  firework.style.top = `${event.y}px`;
  fireworks.appendChild(firework);
  setTimeout(() => {
    firework.remove();
  }, 8000);
}

fireworks.addEventListener("click", fireworkLaunch);
fireworks.addEventListener("touch", fireworkLaunch);

// document.querySelector('.details-button').addEventListener('click', function() {
//     var detailsContent = document.getElementById('detailsContent');
//     var detailsButton = document.querySelector('.details-button');
    
//     if (detailsContent.style.display === "none" || detailsContent.style.display === "") {
//         detailsContent.style.display = "block";
//         detailsContent.style.transform = "scale(1)";
//         detailsButton.textContent = "Close";
//     } else {
//         detailsContent.style.display = "none";
//         detailsContent.style.transform = "scale(0)";
//         detailsButton.textContent = "Show Details";
//     }
// });
document.querySelector('.details-button').addEventListener('click', function() {
    var detailsContent = document.getElementById('detailsContent');
    var detailsButton = document.querySelector('.details-button');
    
    if (detailsContent.style.display === "none" || detailsContent.style.display === "") {
        detailsContent.style.display = "block";
        setTimeout(function() {
            detailsContent.style.transform = "scale(1)";
            detailsButton.style.marginTop = "2vmin"; // ボタンの位置を少し下に移動
        }, 50);
        detailsButton.textContent = "Close";
    } else {
        detailsContent.style.transform = "scale(0)";
        detailsButton.style.marginTop = "0"; // ボタンの位置を元に戻す
        setTimeout(function() {
            detailsContent.style.display = "none";
        }, 500);
        detailsButton.textContent = "Open this!!";
    }
});


