const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'mualani.png'; 
const imgWidth = 250;
const imgHeight = 250;

let mouseX = canvas.width / 4;
let mouseY = canvas.height / 4;

img.onload = () => {
    draw();
};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let x = Math.min(Math.max(mouseX - imgWidth / 5, 0), canvas.width - imgWidth);
    let y = Math.min(Math.max(mouseY - imgHeight / 5, 0), canvas.height - imgHeight);

    ctx.drawImage(img, x, y, imgWidth, imgHeight);

    requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
});

canvas.addEventListener('mouseleave', () => {});