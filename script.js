// ============================================
// MEMORY DATA - CIKUMPAW MOMENT
// ============================================
const memoryData = [
    {
        question: "Dessert kesukaan kamu?",
        answer: "red velvet",
        media: "img/gift1.jpeg",
        caption: "Siapa yang suka red velvet blok M??",
    },
    {
        question: "Judul buku pertama yang kita beli bareng?",
        answer: "laut bercerita",
        media: "img/gift2.jpeg",
        caption: "Ini romance banget sih soalnya ada tangan kita",
    },
    {
        question: "Sarapan favorit kita?",
        answer: "bubur",
        media: "img/gift3.jpeg",
        caption: "Almost everyday kita nyari bubur tiap pagi",
    },
];

// ============================================
// BACKGROUND MUSIC + DUCKING AUDIO
// ============================================
const bgMusic = document.getElementById('bgMusic');

// Volume awal 30% (pelan sebagai backsound)
bgMusic.volume = 0.3;

// Fungsi buat autoplay (handle browser yang blokir)
function tryAutoPlay() {
    bgMusic.play().catch(() => {
        // Kalau autoplay diblokir, play pas user klik pertama kali
        document.addEventListener('click', function playOnClick() {
            bgMusic.play();
            document.removeEventListener('click', playOnClick);
        }, { once: true });
    });
}

// Jalankan autoplay pas load
setTimeout(tryAutoPlay, 1000);

// Fungsi kecilin lagu (duck)
function duckBackground() {
    bgMusic.volume = 0.08; // Lagu dikecilin ke 8%
}

// Fungsi balikin volume lagu
function unduckBackground() {
    bgMusic.volume = 0.3; // Lagu balik ke 30%
}

// ============================================
// LOVE METER DATA
// ============================================
const loveMessages = [
    "Kamu tuh kayak lukisan di museum, gak boleh disentuh tapi bikin kagum ❤️",
    "Aku rela antri 3 jam buat liat foto ini! 😍",
    "Ini mah pameran terbaik sepanjang masa! 🌟",
    "Hati aku berhenti berdetak tiap liat kamu 💕",
    "Museum tutup! Karena semua pengunjung cuma mau liat kamu 🤩",
    "Kamu tuh kayak barang antik, makin tua makin berharga 😂❤️",
    "Aku bakal jadi penjaga museum ini seumur hidup kalo kamu yang dipamerin 🥰",
    "Foto ini layak dipajang di Louvre! 🎨",
    "Kamu tuh karya seni yang gak bisa ditiru, sayang 💖",
    "Ini mah bukan foto, ini mah keajaiban! ✨",
];

// ============================================
// SURAT WISH
// ============================================
const wishLetter = `
    <p>Selamat ulang tahun, sayang.</p>
    <p>Terima kasih karena udah hadir dan jadi bagian penting dalam hidup aku. Aku selalu berusaha semaksimal mungkin agar cintaku sampai ke kamu, meskipun mungkin gak selalu lewat cara yang sempurna.</p>
    <p>Semoga di umur yang baru ini, hal-hal baik makin banyak datang ke hidup kamu, dan semoga apa yang lagi kamu perjuangin satu per satu bisa terwujud.</p>
    <p>Aku cuma mau kamu tahu, aku bangga sama kamu dan senang bisa ada di samping kamu sampai hari ini.</p>
    <p style="font-weight: bold; color: #7096D1; margin-top: 20px; font-size: 1.3rem;">Selamat ulang tahun. ❤️</p>
`;

// ============================================
// 1. WELCOME - Tombol Mulai
// ============================================
document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('beauty').scrollIntoView({ behavior: 'smooth' });
    confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.4 },
        colors: ['#7096D1', '#FEFDD0', '#A9C7E8']
    });
    if (navigator.vibrate) navigator.vibrate(10);
});

// ============================================
// 2. PROGRESS BAR - NAVIGASI
// ============================================
const sections = ['welcome', 'beauty', 'funny', 'memory', 'wish'];
const navIcons = document.querySelectorAll('.nav-icon');

function updateProgress() {
    const windowHeight = window.innerHeight;
    sections.forEach((id, index) => {
        const section = document.getElementById(id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const isActive = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
        const isDone = rect.top < 0;
        navIcons[index].classList.toggle('active', isActive);
        navIcons[index].classList.toggle('done', isDone);
    });
}

window.addEventListener('scroll', updateProgress);
window.addEventListener('load', updateProgress);

// ============================================
// 3. BEAUTY - Swiper (CARDS EFFECT)
// ============================================
const beautySwiper = new Swiper('.beauty-swiper', {
    effect: 'cards',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    cardsEffect: {
        slideShadows: true,
        rotate: 5,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// ============================================
// CAPTION FOTO PER SLIDE (TETAP ADA)
// ============================================
const photoCaptions = [
    "Cantik banget make up kamu",
    "Lagi foto sama kembaran",
    "Tanpa make up, tanpa filter, tetep sempurna",
    "Cewe galak",
    "Cewe baik",
    "Cewe suka manis",
    "Yang selalu kurang bobo walau udah bobo 9 jam",
    "Cewe ufo",
    "Cewe blok M",
    "Si pencinta ramen, suka ngidam ramen, ramen joffi masih jadi tahta tertinggi menurut beliau",
];

// Tampilkan caption saat slide berubah
beautySwiper.on('slideChange', function () {
    const activeIndex = this.activeIndex;
    // Cari elemen caption di HTML
    let captionEl = document.getElementById('slideCaption');
    if (!captionEl) {
        // Buat elemen caption jika belum ada
        captionEl = document.createElement('div');
        captionEl.id = 'slideCaption';
        captionEl.className = 'slide-caption font-second';
        // Taruh di bawah swiper
        const swiperEl = document.querySelector('.beauty-swiper');
        swiperEl.parentNode.insertBefore(captionEl, swiperEl.nextSibling);
    }
    captionEl.textContent = photoCaptions[activeIndex] || "Kamu selalu cantik ❤️";
    captionEl.classList.add('show');
});

// ============================================
// 4. LOVE METER (Minimal 8!)
// ============================================
const loveBtn = document.getElementById('loveMeterBtn');
const loveResult = document.getElementById('loveMeterResult');
const loveScore = document.getElementById('loveScore');
const loveStars = document.getElementById('loveStars');
const loveMessage = document.getElementById('loveMessage');

loveBtn.addEventListener('click', () => {
    // Generate random number 8-10 (MINIMAL 8!)
    const score = Math.floor(Math.random() * 3) + 8; // 8, 9, atau 10
    
    // Generate stars
    const fullStars = '★'.repeat(score);
    const emptyStars = '☆'.repeat(10 - score);
    const stars = fullStars + emptyStars;
    
    // Random message (semua pesan positif)
    const messages = [
        "Jangan bergerak, cuma aku yang boleh sentuh kamu ❤️",
        "Karina aja kalah! 😍",
        "Info wedding yang hari jumat buka! 🌟",
        "Ini mah aku yang ga suka manis aja, sukaa...💕",
        "Takut mochi ga manis lagi kalo ada kamu🤩",
        "Semua diam, aku aja yang boleh meluk kamu😂❤️",
        "GEMESSSSSSS🥰",
        "Mau aku jadiin inspirasi tato🎨",
        "U are my Flowers💖",
        "Infokan aja nomor shopeepay✨",
    ];
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    // Update display
    loveScore.textContent = `💕 ${score}/10`;
    loveStars.textContent = stars;
    loveMessage.textContent = message;
    
    // Warna selalu bagus (kuning/emas)
    loveResult.style.borderColor = '#ffd700';
    loveResult.style.background = '#fffde7';
    
    // Show with animation
    loveResult.classList.add('show', 'pop');
    setTimeout(() => loveResult.classList.remove('pop'), 500);
    
    // Confetti (lebih banyak)
    confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#ffd700', '#ff6b6b', '#fefdd0', '#7096D1']
    });
    
    // Falling emojis
    const emojis = ['❤️', '💕', '💖', '✨', '🌟', '🥰', '🎉', '💫'];
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.cssText = `
                position: fixed;
                left: ${Math.random() * 80 + 10}%;
                top: ${Math.random() * 30 + 20}%;
                font-size: ${Math.random() * 25 + 20}px;
                pointer-events: none;
                z-index: 999;
                animation: floatDown 1.8s ease forwards;
            `;
            document.body.appendChild(emoji);
            setTimeout(() => emoji.remove(), 1800);
        }, i * 80);
    }
    
    // Haptic
    if (navigator.vibrate) navigator.vibrate(10);
});

// ============================================
// 5. FUNNY - Play Video
// ============================================
function playVideo(card) {
    const video = card.querySelector('video');
    const overlay = card.querySelector('.video-overlay');
    if (video.paused) {
        video.play();
        card.classList.add('playing');
        overlay.textContent = '⏸️';
        confetti({
            particleCount: 15,
            spread: 40,
            origin: { y: 0.7 },
            colors: ['#FEFDD0', '#7096D1', '#A9C7E8']
        });
        if (navigator.vibrate) navigator.vibrate(8);
    } else {
        video.pause();
        card.classList.remove('playing');
        overlay.textContent = '▶';
    }
}

// ============================================
// 6. MEMORY - Kotak Pandora
// ============================================
const memoryBoxes = document.querySelectorAll('.memory-box');
const memoryReveal = document.getElementById('memoryReveal');

memoryBoxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if (box.classList.contains('unlocked')) {
            showMemoryContent(index);
            return;
        }
        const data = memoryData[index];
        const answer = prompt(data.question);
        if (answer && answer.toLowerCase().trim() === data.answer.toLowerCase().trim()) {
            box.classList.add('unlocked');
            box.querySelector('.box-icon').textContent = '🔓';
            box.querySelector('.box-label').textContent = 'Terbuka!';
            confetti({
                particleCount: 35,
                spread: 55,
                origin: { y: 0.6 },
                colors: ['#FEFDD0', '#7096D1']
            });
            if (navigator.vibrate) navigator.vibrate(15);
            showMemoryContent(index);
        } else {
            alert('❌ Hmm kurang tepat... Coba ingat lagi ya sayang! 🥰');
            box.style.animation = 'shake 0.3s ease';
            setTimeout(() => box.style.animation = '', 300);
            if (navigator.vibrate) navigator.vibrate([10, 50, 10]);
        }
    });
});

function showMemoryContent(index) {
    const data = memoryData[index];
    const isVideo = data.media.match(/\.(mp4|webm|mov)$/i);
    let mediaHTML = '';
    if (isVideo) {
        mediaHTML = `<video src="${data.media}" controls style="max-width:100%;border-radius:15px;max-height:250px;"></video>`;
    } else {
        mediaHTML = `<img src="${data.media}" alt="Kenangan" style="max-width:100%;border-radius:15px;max-height:250px;object-fit:contain;" />`;
    }
    memoryReveal.innerHTML = `
        ${mediaHTML}
        <p class="memory-caption">💬 ${data.caption}</p>
    `;
    memoryReveal.classList.add('show');
    setTimeout(() => {
        memoryReveal.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
}

// ============================================
// 6. WISH - Voice + Surat + DUCKING AUDIO
// ============================================
const voiceBtn = document.getElementById('playVoiceBtn');
const voiceAudio = document.getElementById('voiceWish');
const waveform = document.getElementById('waveform');
const progressFill = document.getElementById('audioProgressFill');
const audioTime = document.getElementById('audioTime');

document.getElementById('letterContent').innerHTML = wishLetter;

// --- VOICE BUTTON (dengan ducking) ---
voiceBtn.addEventListener('click', () => {
    if (voiceAudio.paused) {
        // Voice note diputar
        voiceAudio.play();
        voiceBtn.textContent = '⏸️ Pause';
        voiceBtn.classList.add('playing');
        waveform.classList.add('active');
        duckBackground(); // KECILIN LAGU!
        if (navigator.vibrate) navigator.vibrate(10);
    } else {
        // Voice note di-pause
        voiceAudio.pause();
        voiceBtn.textContent = '🎧 Dengerin dulu ini ya';
        voiceBtn.classList.remove('playing');
        waveform.classList.remove('active');
        unduckBackground(); // BALIKIN VOLUME LAGU!
    }
});

// --- Saat voice note selesai diputar ---
voiceAudio.addEventListener('ended', () => {
    voiceBtn.textContent = '🎧 Dengerin dulu ini ya';
    voiceBtn.classList.remove('playing');
    waveform.classList.remove('active');
    unduckBackground(); // BALIKIN VOLUME LAGU!
});

// --- Saat user play/pause manual via browser ---
voiceAudio.addEventListener('play', () => {
    duckBackground();
});

voiceAudio.addEventListener('pause', () => {
    if (!voiceAudio.ended) {
        unduckBackground();
    }
});

// --- Update progress bar ---
voiceAudio.addEventListener('timeupdate', () => {
    const progress = (voiceAudio.currentTime / voiceAudio.duration) * 100;
    progressFill.style.width = progress + '%';
    const currentMin = Math.floor(voiceAudio.currentTime / 60);
    const currentSec = Math.floor(voiceAudio.currentTime % 60);
    const totalMin = Math.floor(voiceAudio.duration / 60);
    const totalSec = Math.floor(voiceAudio.duration % 60);
    audioTime.textContent = `${currentMin}:${currentSec.toString().padStart(2, '0')} / ${totalMin}:${totalSec.toString().padStart(2, '0')}`;
});

// --- Click progress track to seek ---
document.querySelector('.progress-track').addEventListener('click', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    voiceAudio.currentTime = percent * voiceAudio.duration;
});

// ============================================
// 7. END BUTTON - KEJUTAN AKHIR
// ============================================
document.getElementById('endBtn').addEventListener('click', () => {
    document.querySelectorAll('.room:not(#finalSurprise)').forEach(el => {
        el.style.display = 'none';
    });
    
    const surpriseSection = document.getElementById('finalSurprise');
    surpriseSection.style.display = 'flex';
    
    const photoContainer = document.getElementById('surprisePhoto');
    photoContainer.innerHTML = `
        <img src="img/final.jpeg" alt="Tercantik" />
    `;
    
    // LAGU SUDAH DIPUTAR DARI AWAL, TIDAK PERLU DIPUTAR LAGI
    
    // OPSIONAL: Naikin volume lagu biar lebih meriah
    bgMusic.volume = 0.5;
    setTimeout(() => {
        bgMusic.volume = 0.3;
    }, 3000);
    
    // Confetti (tetap ada)
    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        const particleCount = 40 * (timeLeft / duration);
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
    }, 200);
    
    if (navigator.vibrate) navigator.vibrate([10, 30, 10, 30, 20]);
    
    setTimeout(() => {
        surpriseSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
});

// ============================================
// 9. GSAP Animations
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.ticket', {
        duration: 1.2,
        opacity: 0,
        y: -60,
        rotation: -8,
        ease: 'back.out(1.7)',
    });
});

// ============================================
// 10. CURSOR (Desktop only)
// ============================================
if (!('ontouchstart' in window)) {
    document.addEventListener('mousemove', (e) => {
        const cursor = document.createElement('div');
        cursor.style.cssText = `
            position: fixed;
            pointer-events: none;
            width: 12px;
            height: 12px;
            background: rgba(112, 150, 209, 0.2);
            border-radius: 50%;
            left: ${e.clientX - 6}px;
            top: ${e.clientY - 6}px;
            transition: 0.15s;
            z-index: 9999;
            border: 2px solid rgba(112, 150, 209, 0.3);
        `;
        document.body.appendChild(cursor);
        setTimeout(() => cursor.remove(), 150);
    });
}

// ============================================
// 11. OPENING CONFETTI
// ============================================
setTimeout(() => {
    confetti({
        particleCount: 12,
        spread: 40,
        origin: { y: 0.3 },
        colors: ['#FEFDD0', '#7096D1']
    });
}, 500);

// ============================================
// 11. KEYBOARD SHORTCUT (Space) + DUCKING
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Space') {
        e.preventDefault();
        if (voiceAudio.paused) {
            voiceAudio.play();
            voiceBtn.textContent = '⏸️ Pause';
            voiceBtn.classList.add('playing');
            waveform.classList.add('active');
            duckBackground(); // KECILIN LAGU!
        } else {
            voiceAudio.pause();
            voiceBtn.textContent = '🎧 Dengerin dulu ini ya';
            voiceBtn.classList.remove('playing');
            waveform.classList.remove('active');
            unduckBackground(); // BALIKIN VOLUME LAGU!
        }
    }
});

// ============================================
// 12. PROPOSE (NEMBAK) + TOMBOL KABUR
// ============================================
const proposeYes = document.getElementById('proposeYes');
const proposeNo = document.getElementById('proposeNo');
const proposeResult = document.getElementById('proposeResult');

// ---- TOMBOL "YA" ----
proposeYes.addEventListener('click', () => {
    // Efek tombol
    proposeYes.classList.add('clicked');
    setTimeout(() => proposeYes.classList.remove('clicked'), 600);
    
    // Sembunyiin tombol
    document.querySelector('.propose-buttons').style.display = 'none';
    
    // Tampilin hasil
    proposeResult.style.display = 'block';
    proposeResult.innerHTML = `
        <div class="heart-rain">💕❤️💖💕❤️💖</div>
        <h3>🎉 AKHIRNYA! 🎉</h3>
        <p style="font-size: 1.2rem; font-weight: bold; color: #7096D1;">
            Mulai hari ini, kamu resmi jadi pacarku! 💍
        </p>
        <p style="margin-top: 12px; font-size: 0.95rem; color: #2c3e50;">
            Dari semua koleksi di museum ini, kamu adalah pameran terbaik.<br>
            Makasih udah mau nemenin aku sampai sini. ❤️
        </p>
        <p style="margin-top: 15px; font-size: 2rem;">
            💑
        </p>
    `;
    
    // Confetti besar-besaran
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9998 };
    
    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        const particleCount = 60 * (timeLeft / duration);
        confetti({
            ...defaults,
            particleCount,
            origin: { x: Math.random() * 0.8 + 0.1, y: Math.random() * 0.3 + 0.1 }
        });
    }, 200);
    
    // Floating hearts
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '✨'];
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-float';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 90 + 5 + '%';
            heart.style.top = Math.random() * 60 + 20 + '%';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }, i * 120);
    }
    
    // Haptic
    if (navigator.vibrate) navigator.vibrate([10, 30, 10, 30, 20, 50, 20]);
});

// ---- TOMBOL "ENGGAK" (KABUR!) ----
let noClickCount = 0;
const noMessages = [
    "😅 Coba lagi!",
    "🤭 Jangan gitu dong!",
    "😏 Gampang banget sih!",
    "😂 Kejar dulu!",
    "😜 Gak bakal ketangkap!",
    "💪 Usahain dong!",
    "🏃‍♂️ Lari terus!",
    "😈 Kamu gak bisa!",
    "🎯 Klik aku kalo bisa!",
    "😎 Masih jauh!",
];

proposeNo.addEventListener('mouseenter', (e) => {
    // Kabur pas hover (desktop)
    if (window.innerWidth > 768) {
        fleeButton(e);
    }
});

proposeNo.addEventListener('touchstart', (e) => {
    // Kabur pas disentuh (mobile)
    if (window.innerWidth <= 768) {
        e.preventDefault();
        fleeButton(e);
    }
});

function fleeButton(e) {
    const btn = proposeNo;
    const rect = btn.getBoundingClientRect();
    
    // Hitung posisi baru (random di dalam viewport)
    const maxX = window.innerWidth - rect.width - 20;
    const maxY = window.innerHeight - rect.height - 20;
    
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;
    
    // Biar gak terlalu ke pinggir
    newX = Math.max(10, Math.min(maxX, newX));
    newY = Math.max(10, Math.min(maxY, newY));
    
    // Terapkan posisi fixed
    btn.classList.add('fleeing');
    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
    
    // Update teks tombol
    noClickCount++;
    const msgIndex = Math.min(noClickCount - 1, noMessages.length - 1);
    btn.textContent = noMessages[msgIndex] || '😅 Aduh!';
    
    // Efek confetti kecil
    confetti({
        particleCount: 5,
        spread: 20,
        origin: { x: newX / window.innerWidth, y: newY / window.innerHeight },
        colors: ['#fefdd0', '#7096D1']
    });
    
    // Haptic
    if (navigator.vibrate) navigator.vibrate(5);
}

// Reset posisi tombol NO saat layar di-resize (biar gak ilang)
window.addEventListener('resize', () => {
    if (proposeNo.classList.contains('fleeing')) {
        const rect = proposeNo.getBoundingClientRect();
        const maxX = window.innerWidth - rect.width - 20;
        const maxY = window.innerHeight - rect.height - 20;
        
        let newX = Math.min(maxX, rect.left);
        let newY = Math.min(maxY, rect.top);
        newX = Math.max(10, newX);
        newY = Math.max(10, newY);
        
        proposeNo.style.left = newX + 'px';
        proposeNo.style.top = newY + 'px';
    }
});

console.log('🎨 Museum of You - Love Meter Edition siap!');

console.log('🎨 Museum of You - Love Meter Edition siap!');