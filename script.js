document.getElementById('surpriseBtn').addEventListener('click', function() {
    const balloonContainer = document.getElementById('balloons');

    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = Math.random() * 3 + 3 + 's';
        balloonContainer.appendChild(balloon);
    }
});

function getRandomColor() {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#1dd1a1', '#f368e0'];
    return colors[Math.floor(Math.random() * colors.length)];
}
