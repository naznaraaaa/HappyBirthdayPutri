/* ============================================
   GLOBAL - MOBILE FIRST
   ============================================ */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'CatSong', sans-serif;
    background: #D1E8FC;
    color: #2c3e50;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
}

/* ============================================
   PROGRESS BAR - NAVIGASI
   ============================================ */
.progress-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(209, 232, 252, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 10px 15px;
    box-shadow: 0 2px 20px rgba(112, 150, 209, 0.15);
}

.progress-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
    position: relative;
}

.progress-bar::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 10%;
    right: 10%;
    height: 3px;
    background: #A9C7E8;
    transform: translateY(-50%);
    z-index: 0;
    border-radius: 10px;
}

.nav-icon {
    position: relative;
    z-index: 1;
    background: #D1E8FC;
    padding: 3px;
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 0.3;
    cursor: default;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid transparent;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.nav-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.nav-icon.active {
    opacity: 1;
    transform: scale(1.15);
    border-color: #7096D1;
    box-shadow: 0 0 30px rgba(112, 150, 209, 0.3);
}

.nav-icon.done {
    opacity: 1;
    border-color: #7096D1;
    background: #FEFDD0;
}

/* ============================================
   ROOM
   ============================================ */
.room {
    min-height: 100vh;
    padding: 80px 16px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    margin: 0 auto;
}

.section-title {
    font-family: 'DailyPeace', cursive;
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 8px;
    text-align: center;
}

.section-sub {
    font-family: 'CatSong', sans-serif;
    font-size: 1rem;
    color: #7096D1;
    margin-bottom: 30px;
    text-align: center;
    max-width: 400px;
}

/* ============================================
   SECTION 1: WELCOME
   ============================================ */
#welcome .ticket {
    background: white;
    padding: 35px 25px;
    border-radius: 30px;
    box-shadow: 0 20px 60px rgba(112, 150, 209, 0.15);
    text-align: center;
    max-width: 400px;
    width: 100%;
    border: 3px solid #A9C7E8;
    transform: rotate(-0.5deg);
    transition: 0.3s;
}

#welcome .ticket:hover {
    transform: rotate(0.5deg) scale(1.01);
}

.name-display {
    font-size: 3.5rem;
    color: #7096D1;
    margin-bottom: 8px;
    word-break: break-word;
}

.ticket-stamp {
    margin: 25px 0;
    padding: 18px;
    border: 2px dashed #A9C7E8;
    border-radius: 15px;
    background: #FEFDD0;
}

.ticket-stamp p {
    font-size: 1.1rem;
}

.btn-start {
    background: #7096D1;
    color: white;
    border: none;
    padding: 16px 40px;
    border-radius: 50px;
    font-size: 1.3rem;
    font-family: 'DailyPeace', cursive;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 12px;
    box-shadow: 0 5px 25px rgba(112, 150, 209, 0.35);
    width: 100%;
    max-width: 280px;
    touch-action: manipulation;
}

.btn-start:active {
    transform: scale(0.95);
}

/* ============================================
   SECTION 2: BEAUTY - SWIPER (CARDS EFFECT)
   ============================================ */
.beauty-swiper {
    width: 100%;
    max-width: 400px;
    height: 480px;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 15px 50px rgba(112, 150, 209, 0.2);
}

.beauty-swiper .swiper-slide {
    position: relative;
    background: #C8D9E6;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    overflow: hidden;
}

.slide-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.slide-content img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #C8D9E6;
}

.swiper-pagination-bullet {
    background: #7096D1 !important;
    width: 10px !important;
    height: 10px !important;
}

.swiper-pagination-bullet-active {
    background: #FEFDD0 !important;
    box-shadow: 0 0 20px rgba(112, 150, 209, 0.5);
    width: 14px !important;
    border-radius: 10px !important;
}

/* ============================================
   SLIDE CAPTION (Caption per Foto)
   ============================================ */
.slide-caption {
    margin-top: 15px;
    padding: 12px 20px;
    background: white;
    border-radius: 15px;
    font-family: 'CatSong', sans-serif;
    font-size: 1rem;
    color: #2c3e50;
    text-align: center;
    max-width: 400px;
    width: 100%;
    border-left: 4px solid #7096D1;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.5s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.slide-caption.show {
    opacity: 1;
    transform: translateY(0);
}

/* ============================================
   LOVE METER
   ============================================ */
.btn-lovemeter {
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    color: white;
    border: none;
    padding: 16px 35px;
    border-radius: 50px;
    font-size: 1.2rem;
    font-family: 'DailyPeace', cursive;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 5px 30px rgba(238, 90, 36, 0.35);
    margin-top: 25px;
    touch-action: manipulation;
    width: 100%;
    max-width: 320px;
}

.btn-lovemeter:active {
    transform: scale(0.95);
}

.btn-lovemeter:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 40px rgba(238, 90, 36, 0.5);
}

.lovemeter-result {
    margin-top: 20px;
    padding: 20px 25px;
    background: white;
    border-radius: 20px;
    max-width: 400px;
    width: 100%;
    text-align: center;
    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
    border: 2px solid #fefdd0;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.5s ease;
}

.lovemeter-result.show {
    opacity: 1;
    transform: translateY(0);
}

.lovemeter-score {
    font-family: 'DailyPeace', cursive;
    font-size: 2.2rem;
    color: #2c3e50;
    margin-bottom: 5px;
}

.lovemeter-stars {
    font-size: 1.8rem;
    letter-spacing: 3px;
    margin-bottom: 8px;
}

.lovemeter-message {
    font-family: 'CatSong', sans-serif;
    font-size: 1rem;
    color: #7096D1;
    line-height: 1.5;
}

@keyframes lovePop {
    0% { transform: scale(0.5); opacity: 0; }
    70% { transform: scale(1.1); }
    100% { transform: scale(1); opacity: 1; }
}

.lovemeter-result.pop {
    animation: lovePop 0.5s ease forwards;
}

@keyframes floatDown {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(80px) rotate(360deg); opacity: 0; }
}

/* ============================================
   SECTION 3: FUNNY - VIDEO GRID
   ============================================ */
.video-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    width: 100%;
    max-width: 400px;
}

.video-card {
    position: relative;
    border-radius: 18px;
    overflow: hidden;
    background: #C8D9E6;
    aspect-ratio: 9/16;
    cursor: pointer;
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
    transition: all 0.3s;
    touch-action: manipulation;
}

.video-card:active {
    transform: scale(0.96);
}

.video-card video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.video-overlay {
    position: absolute;
    inset: 0;
    background: rgba(44, 62, 80, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.8rem;
    transition: 0.3s;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    font-family: 'CatSong', sans-serif;
}

.video-card.playing .video-overlay {
    opacity: 0;
}

.video-label {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.75));
    color: white;
    padding: 25px 12px 12px;
    font-size: 0.75rem;
    font-family: 'CatSong', sans-serif;
    text-align: center;
    line-height: 1.3;
}

/* ============================================
   SECTION 4: MEMORY
   ============================================ */
.memory-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    width: 100%;
    max-width: 360px;
    margin-bottom: 25px;
}

.memory-box {
    background: #C8D9E6;
    border-radius: 18px;
    padding: 30px 10px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 8px 25px rgba(0,0,0,0.06);
    border: 3px solid #A9C7E8;
    touch-action: manipulation;
}

.memory-box:active {
    transform: scale(0.95);
}

.memory-box .box-icon {
    font-size: 2.5rem;
    display: block;
    margin-bottom: 6px;
}

.memory-box .box-label {
    font-family: 'CatSong', sans-serif;
    font-size: 0.8rem;
    color: #2c3e50;
}

.memory-box.unlocked {
    background: #FEFDD0;
    border-color: #7096D1;
}

.memory-box.unlocked .box-icon {
    animation: bounce 0.5s ease;
}

@keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.3); }
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}

.memory-reveal {
    width: 100%;
    max-width: 400px;
    min-height: 80px;
    padding: 18px;
    background: white;
    border-radius: 18px;
    border-left: 4px solid #7096D1;
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.memory-reveal.show {
    display: flex;
}

.memory-reveal img,
.memory-reveal video {
    max-width: 100%;
    border-radius: 15px;
    max-height: 250px;
    object-fit: contain;
    background: #D1E8FC;
}

.memory-reveal .memory-caption {
    font-family: 'CatSong', sans-serif;
    color: #2c3e50;
    text-align: center;
    font-size: 0.95rem;
}

/* ============================================
   SECTION 5: WISH
   ============================================ */
.wish-container {
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.voice-section {
    background: white;
    border-radius: 25px;
    padding: 28px 20px;
    box-shadow: 0 10px 40px rgba(112, 150, 209, 0.1);
}

.audio-player {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

.btn-voice {
    background: #7096D1;
    color: white;
    border: none;
    padding: 16px 35px;
    border-radius: 50px;
    font-size: 1.2rem;
    font-family: 'DailyPeace', cursive;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 5px 25px rgba(112, 150, 209, 0.3);
    width: 100%;
    max-width: 280px;
    touch-action: manipulation;
}

.btn-voice:active {
    transform: scale(0.95);
}

.btn-voice.playing {
    background: #ff6b6b;
    animation: pulse 1.2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.03); }
}

.waveform {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    height: 40px;
    width: 100%;
    max-width: 280px;
    opacity: 0.3;
    transition: 0.5s;
}

.waveform.active {
    opacity: 1;
}

.waveform span {
    display: block;
    width: 4px;
    background: #7096D1;
    border-radius: 10px;
    animation: waveAnim 0.8s ease-in-out infinite;
    height: 12px;
}

.waveform span:nth-child(1) { animation-delay: 0.0s; }
.waveform span:nth-child(2) { animation-delay: 0.05s; }
.waveform span:nth-child(3) { animation-delay: 0.1s; }
.waveform span:nth-child(4) { animation-delay: 0.15s; }
.waveform span:nth-child(5) { animation-delay: 0.2s; }
.waveform span:nth-child(6) { animation-delay: 0.25s; }
.waveform span:nth-child(7) { animation-delay: 0.3s; }
.waveform span:nth-child(8) { animation-delay: 0.35s; }
.waveform span:nth-child(9) { animation-delay: 0.4s; }
.waveform span:nth-child(10) { animation-delay: 0.45s; }
.waveform span:nth-child(11) { animation-delay: 0.5s; }
.waveform span:nth-child(12) { animation-delay: 0.55s; }

.waveform.active span {
    animation: waveAnim 0.8s ease-in-out infinite;
}

@keyframes waveAnim {
    0%, 100% { height: 12px; }
    50% { height: 35px; background: #FEFDD0; }
}

.audio-progress {
    width: 100%;
    max-width: 280px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.progress-track {
    width: 100%;
    height: 6px;
    background: #A9C7E8;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    touch-action: manipulation;
}

.progress-fill {
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, #7096D1, #FEFDD0);
    border-radius: 10px;
    transition: width 0.1s linear;
}

#audioTime {
    font-family: 'CatSong', sans-serif;
    font-size: 0.8rem;
    color: #7096D1;
    text-align: center;
}

.letter-section {
    background: white;
    border-radius: 25px;
    padding: 30px 22px;
    box-shadow: 0 10px 40px rgba(112, 150, 209, 0.1);
}

.letter h3 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 16px;
    text-align: center;
}

.letter-content {
    font-family: 'CatSong', sans-serif;
    font-size: 1rem;
    line-height: 1.8;
    color: #2c3e50;
    max-height: 250px;
    overflow-y: auto;
    padding-right: 8px;
}

.letter-content::-webkit-scrollbar {
    width: 4px;
}

.letter-content::-webkit-scrollbar-track {
    background: #A9C7E8;
    border-radius: 10px;
}

.letter-content::-webkit-scrollbar-thumb {
    background: #7096D1;
    border-radius: 10px;
}

.btn-end {
    background: #FEFDD0;
    color: #2c3e50;
    border: 3px solid #7096D1;
    padding: 16px 40px;
    border-radius: 50px;
    font-size: 1.2rem;
    font-family: 'DailyPeace', cursive;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 35px;
    touch-action: manipulation;
    width: 100%;
    max-width: 320px;
}

.btn-end:active {
    transform: scale(0.95);
}

/* ============================================
   SURPRISE SECTION
   ============================================ */
#finalSurprise .surprise-container {
    animation: fadeInUp 1.2s ease;
}

#finalSurprise .surprise-container img {
    width: 100%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 30px;
    background: #C8D9E6;
}

@keyframes fadeInUp {
    0% { opacity: 0; transform: scale(0.9) translateY(30px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
}

/* Animasi pulse buat tombol nembak */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); box-shadow: 0 10px 50px rgba(238, 90, 36, 0.6); }
}

/* Animasi lovePop (udah ada dari sebelumnya) */
@keyframes lovePop {
    0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
    60% { transform: scale(1.2) rotate(5deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); }
}

/* ============================================
   FOOTER
   ============================================ */
footer {
    text-align: center;
    padding: 30px 20px;
    background: #D1E8FC;
    border-top: 2px solid #A9C7E8;
    color: #7096D1;
}

footer p:first-child {
    font-family: 'DailyPeace', cursive;
    font-size: 1.1rem;
    color: #2c3e50;
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (min-width: 600px) {
    .room {
        padding: 100px 30px 80px;
        max-width: 700px;
    }
    
    .section-title {
        font-size: 2.5rem;
    }
    
    .name-display {
        font-size: 4rem;
    }
    
    .beauty-swiper {
        height: 550px;
        max-width: 450px;
    }
    
    .video-grid {
        max-width: 450px;
    }
    
    .memory-grid {
        max-width: 400px;
    }
    
    .wish-container {
        max-width: 500px;
    }
    
    .nav-icon {
        width: 48px;
        height: 48px;
    }
}

/* ============================================
   PROPOSE SECTION (NEMBAK)
   ============================================ */
.propose-section {
    margin-top: 25px;
    text-align: center;
    width: 100%;
    max-width: 450px;
    padding: 10px;
}

.propose-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    min-height: 70px;
}

.btn-yes {
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    color: white;
    border: none;
    padding: 16px 40px;
    border-radius: 50px;
    font-size: 1.3rem;
    font-family: 'DailyPeace', cursive;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 5px 30px rgba(238, 90, 36, 0.4);
    touch-action: manipulation;
    min-width: 160px;
}

.btn-yes:hover {
    transform: scale(1.08);
    box-shadow: 0 8px 50px rgba(238, 90, 36, 0.6);
}

.btn-yes:active {
    transform: scale(0.95);
}

.btn-yes.clicked {
    animation: yesPulse 0.6s ease;
}

@keyframes yesPulse {
    0% { transform: scale(1); }
    30% { transform: scale(1.3); background: #ffd700; color: #2c3e50; }
    60% { transform: scale(0.95); }
    100% { transform: scale(1); }
}

.btn-no {
    background: rgba(255,255,255,0.2);
    color: white;
    border: 2px solid rgba(255,255,255,0.3);
    padding: 14px 30px;
    border-radius: 50px;
    font-size: 1.1rem;
    font-family: 'CatSong', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
    touch-action: manipulation;
    min-width: 140px;
    position: relative;
    backdrop-filter: blur(5px);
}

.btn-no:hover {
    background: rgba(255,255,255,0.3);
    border-color: rgba(255,255,255,0.5);
}

/* Tombol NO yang kabur */
.btn-no.fleeing {
    position: fixed !important;
    z-index: 9999;
    transition: all 0.15s ease-out;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
}

.propose-result {
    margin-top: 25px;
    padding: 25px 30px;
    background: white;
    border-radius: 25px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    animation: lovePop 0.8s ease forwards;
    max-width: 400px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.propose-result h3 {
    font-family: 'DailyPeace', cursive;
    font-size: 2rem;
    color: #ff6b6b;
    margin-bottom: 8px;
}

.propose-result p {
    font-family: 'CatSong', sans-serif;
    font-size: 1.05rem;
    color: #2c3e50;
    line-height: 1.6;
}

.propose-result .heart-rain {
    font-size: 2rem;
    letter-spacing: 5px;
    margin: 10px 0;
}

/* Floating hearts di hasil nembak */
.heart-float {
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    font-size: 2rem;
    animation: heartFloatUp 2.5s ease forwards;
}

@keyframes heartFloatUp {
    0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
    100% { transform: translateY(-200px) scale(1.5) rotate(30deg); opacity: 0; }
}

@media (max-width: 480px) {
    .video-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px; /* DARI 10px JADI 16px */
    }
}
    
    .beauty-swiper {
        height: 600px;
        max-width: 500px;
    }
    
    .video-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 18px; /* DARI 12px JADI 18px (LEBIH LONGGAR) */
        width: 100%;
        max-width: 420px; /* DARI 400px JADI 420px */
    }
    
    .video-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 40px rgba(112, 150, 209, 0.25);
    }
    
    .btn-start:hover,
    .btn-lovemeter:hover,
    .btn-voice:hover,
    .btn-end:hover {
        transform: scale(1.05);
    }
    
    .memory-box:hover {
        transform: translateY(-5px) scale(1.02);
    }
