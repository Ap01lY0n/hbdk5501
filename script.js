function nextQuestion(current) {
    document.getElementById(`question${current}`).classList.remove('active');
    document.getElementById(`question${current + 1}`).classList.add('active');
}

function finishQuiz() {
    document.getElementById('questions').style.display = 'none';
    document.getElementById('message').style.display = 'block';
    startConfetti();
    resetQuiz();
}

function openModal(imageSrc, captionText) {
    const modal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    
    modalImage.src = imageSrc;
    modalCaption.textContent = captionText;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('photo-modal');
    modal.style.display = 'none';
}

function resetQuiz() {
    document.getElementById('q1').value = '';
    document.getElementById('q2').value = '';
    document.getElementById('q3').value = '';
}

function showCaption(text) {
    const caption = document.getElementById('photo-caption');
    caption.textContent = text;
    caption.classList.add('show');
    setTimeout(() => {
        caption.classList.remove('show');
    }, 10000); 
}

const confettiCanvas = document.getElementById('confetti');
const ctx = confettiCanvas.getContext('2d');
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

const particles = [];
function createParticle() {
    return {
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * confettiCanvas.height,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        size: Math.random() * 6 + 2,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
    };
}

for (let i = 0; i < 200; i++) {
    particles.push(createParticle());
}

function startConfetti() {
    function animate() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        particles.forEach((p) => {
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x > confettiCanvas.width || p.x < 0 || p.y > confettiCanvas.height || p.y < 0) {
                Object.assign(p, createParticle());
            }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}