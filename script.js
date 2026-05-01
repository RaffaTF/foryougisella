let page = "p1";

/* ================= STOP VIDEO ================= */
function stopAllVideos() {
  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });
}

/* ================= NAVIGATION ================= */
function show(id) {
  // stop semua video
  stopAllVideos();

  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active");
    p.classList.add("hidden");
  });

  const pageEl = document.getElementById(id);
  pageEl.classList.remove("hidden");
  pageEl.classList.add("active");

  page = id;


  /* PAGE 7 TEXT (TIDAK DIUBAH) */
  if (id === "p7") {
    const el = document.getElementById("typewriter-text");

    const sentences = finalMessage.split("\n");

    let formatted = "";
    let temp = [];

    sentences.forEach((line) => {
      const clean = line.trim();
      if (!clean) return;

      temp.push(clean);

      if (temp.length >= 3) {
        formatted += `<p>${temp.join(" ")}</p>`;
        temp = [];
      }
    });

    if (temp.length > 0) {
      formatted += `<p>${temp.join(" ")}</p>`;
    }

    el.innerHTML = formatted;

    // reset scroll
    document.getElementById("p7").scrollTop = 0;
  }
}

/* ================= NEXT FLOW ================= */
function nextPage() {
  const flow = {
    p1: "p2",
    p2: "p2a",
    p2a: "p3",
    p3: "p4",
    p4: "p5",
    p5: "p6",
    p6: "p6a",
    p6a: "p7",
  };

  const next = flow[page];
  if (!next) return;

  show(next);

  if (page === "p2") {
    startConfetti();
  }
}

/* ================= FINAL MESSAGE (ASLI) ================= */
const finalMessage = `halooo gisell, gisel gimanaa kabarnyaa??? baikk kannn... wihh ada yang ulang tahun niihh
sekarang gabisa bilang raffa tua lagii dongg kan gisel juga umurnya bertambahh heheee :) hmmm
 mungkin ini jadi bagian terakhir dari semua yang raffa buat disini.
sebenarnya banyak banget hal yang pengen raffa sampaikan tapi mungkin dilain waktu saja.
jujuur dari awal sampai sekarang, raffa ngerasa sangat beruntung
bisa kenal gisel, banyak melalui hari hari yang menyenangkan sama gisel mulai dari mabar ml awalnya gisel minta ditemenin buat event dm kuning, gisel ingat tidaaa?? terus kita bikin beberapa trend juga sampai kita samaan nick dan pp,
habis itu roblox kita pertama main mendaki itu kan tapi masih belum bisa on mic jadi akhirnya jalannya berhenti berhenti karena ngetik wkwkw akhirnya besokannya pake dc dehh,
terus mancingg raffa nyariin gisel ikan ikan yang lucu lucuu ngasih gisel secret juga walaupun talon kikirnya minta ampunnn, main vd jugaa raffa nub banget sii disitu tapi ada gisel yang nge gendong jadi banyak menangnya jugaa, banyak
juga anime yang sudah kita tonton dan film film horror yang sampai sekarang gaberani raffa lanjutin sendiri
sampai main ke tempat tempat yang baru pertama raffa datengin sama gisel, untung aja raffa waktu itu mengiyakan ajakan gisel
buat mabar karena dari situ semuanya berawal, kalau diliat lagi memang dah banyak yaaa yang kita lewatin bareng dan rasanya menyenangkan sekali, 
sebelumnya juga raffa ngga sama sekali nyangka bisa melwati itu semua sama gisel,
raffa kira setelahh event dm kuningnya selesai waktu itu yaaa raffa bakal sendirii lagi ehh ternyataa kitaa bisa bareng terus dari situ.
walaupun mungkin sekarang terasa sedikit berbeda.
gisel mungkin ngga sadar, tapi kehadiran gisel itu
salah satu hal yang bikin hari hari raffa terasa lebih ringan,
lebih berwarna, dan lebih berarti dari biasanya.
hal hal kecil yang mungkin terlihat biasa aja,
tapi buat raffa itu sangat sangat berarti dan berharga,
cerita cerita gisel, cara gisel respon sesuatu,
bahkan hal hal random yang gisel kasih tau ke raffa semuanya sangat berarti.
dan raffa juga sadar, mungkin sekarang semuanya udah ngga sehangat dulu,
mungkin masih ada jarak, ada hal hal yang berubah,
dan mungkin juga masih ada rasa kecewa yang belum sepenuhnya hilang.
tapi gapapaa raffa paham...
raffa juga ngga mau maksa apapun,
ngga mau bikin gisel ngerasa harus balik seperti dulu, atau ngerespon dengan cara tertentu.
gisel cukup tau aja,
kalau di sini masih ada seseorang yang akan tetap ada dan peduli sama gisel, tetap berharap yang terbaik buat gisel
walaupun dari jarak yang cukup terasa jauh sekarang.
kalau suatu saat nanti gisel ngerasa capek, ngerasa sendiri, ngerasa semuanya berat
semoga gisel inget kalau gisel itu memang sekuat itu dan sudah sejauh ini sampai sekarang.
dan kalaupun semuanya sedang tidak berjalan dengan baik,
semoga selalu ada hal kecil yang bisa bikin gisel tetap tersenyum.
dan…
raffa ngga tau ke depannya bakal gimana raffa cuma bisa berharap yang terbaik buat gisel raffa juga seneng liat
gisel kayanya sudah lebih happy sekarang.
dan apapun itu nantinya,
raffa tetap bersyukur pernah punya cerita sama gisel, semua momen yang itu ngga akan pernah jadi hal yang sia sia.
jadi untuk sekarang,
raffa cuma mau bilang terima kasih... terimakasih untuk setiap momen, setiap cerita, dan setiap hal hal kecil yang kita lewatin, i will never forget that.
dan di hari spesial gisel ini,
raffa cuma berharap satu hal sederhana…
semoga gisel benar benar bahagia.
bukan cuma hari ini,
tapi juga di hari hari setelah ini.
once again, happy birthday yaa gisel 🎂✨
gisel baik baik teruuss yaaa…
dan kalau semuanya udah terasa lebih baik,
mungkin kita bisa banyak menghabiskan banyak waktu bareng lagi dan melalui banyak hal yang menyenangkan lagii.
tapi kalaupun tidak bisa,
semoga gisel tetap baik baik saja nantinyaa,
walaupun pasti berat buat raffa tapi raffa akan tetap menghargai itu.
karena pada akhirnya,
hal yang paling penting adalah gisel bahagia.
itu aja dari raffa kaya e kepanjangan yaa hehee.. dan mau gimanapun nantinya gisel tetep selalu jadi orang yang spesial buat raffa💖`;

/* ================= CANDLE ================= */
function blowCandle(event) {
  event.stopPropagation();

  const candle = event.currentTarget;
  candle.classList.add("blown");

  startConfetti();

  setTimeout(() => {
    nextPage();
  }, 900);
}

/* ================= FADE MUSIC ================= */
function fadeOutMusic(music, duration = 800) {
  return new Promise((resolve) => {
    if (!music) return resolve();

    let startVolume = music.volume;
    let startTime = performance.now();

    function fade(now) {
      let progress = (now - startTime) / duration;

      if (progress < 1) {
        music.volume = startVolume * (1 - progress);
        requestAnimationFrame(fade);
      } else {
        music.volume = 0;
        music.pause();
        music.currentTime = 0;
        music.volume = startVolume;
        resolve();
      }
    }

    requestAnimationFrame(fade);
  });
}

/* ================= RESTART ================= */
async function restartDiary(event) {
  event.stopPropagation();

  const music = document.getElementById("bgm");
  const btn = document.getElementById("music-btn");
  const icon = document.getElementById("music-icon");

  await fadeOutMusic(music, 800);

  if (btn) btn.classList.remove("playing");
  if (icon) icon.textContent = "▶";

  // reset posisi tombol
  if (btn) {
    btn.classList.remove("music-top-right");
    btn.classList.add("music-bottom");
  }

  stopAllVideos();

  document.querySelectorAll(".candle").forEach((c) => {
    c.classList.remove("blown");
  });

  if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti = [];

  const text = document.getElementById("typewriter-text");
  if (text) text.innerHTML = "";

  const confirmText = document.getElementById("confirm-text");
  if (confirmText) {
    confirmText.innerHTML = "ada pesan terakhir dari raffa mau bacaa???";
  }

  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active");
    p.classList.add("hidden");
  });

  page = "p1";
  document.getElementById("p1").classList.remove("hidden");
  document.getElementById("p1").classList.add("active");
}

/* ================= CONFIRM ================= */
function confirmYes() {
  const text = document.getElementById("confirm-text");
  text.innerHTML = "bacaa pelan pelan yaaa 😁😁";

  setTimeout(() => {
    show("p7");
  }, 1500);
}

function confirmNo() {
  const text = document.getElementById("confirm-text");
  text.innerHTML = "yahhh raffa sedih kalau ngga dibaca 😔";
}

/* ================= CONFETTI ================= */
let canvas, ctx;
let confetti = [];

window.onload = () => {
  canvas = document.getElementById("confetti");
  ctx = canvas.getContext("2d");

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // 🔥 posisi awal tombol musik (FIX BAWAH TENGAH)
  const btn = document.getElementById("music-btn");
  if (btn) {
    btn.style.top = "auto";
    btn.style.bottom = "20px";
    btn.style.left = "50%";
    btn.style.right = "auto";
    btn.style.transform = "translateX(-50%)";
  }
};

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createConfetti(count = 100) {
  confetti = [];

  for (let i = 0; i < count; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 6 + 4,
      speed: Math.random() * 3 + 2,
      drift: Math.random() * 2 - 1,
      color: `hsl(${Math.random() * 360},100%,70%)`,
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((c) => {
    ctx.fillStyle = c.color;
    ctx.fillRect(c.x, c.y, c.size, c.size);

    c.y += c.speed;
    c.x += c.drift;

    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
}

function startConfetti() {
  createConfetti();

  let duration = 2000;
  let start = Date.now();

  function animate() {
    drawConfetti();

    if (Date.now() - start < duration) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confetti = [];
    }
  }

  animate();
}

/* ================= MUSIC ================= */
function toggleMusic() {
  const music = document.getElementById("bgm");
  const btn = document.getElementById("music-btn");

  const playIcon = document.getElementById("icon-play");
  const pauseIcon = document.getElementById("icon-pause");

  if (music.paused) {
    music.volume = 0.5;
    music.play();

    btn.classList.add("playing");

    playIcon.style.display = "none";
    pauseIcon.style.display = "block";

    // posisi kanan atas
    btn.style.top = "20px";
    btn.style.right = "20px";
    btn.style.left = "auto";
    btn.style.bottom = "auto";
    btn.style.transform = "none";

  } else {
    music.pause();

    btn.classList.remove("playing");

    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
}
/* ================= VIDEO SYNC ================= */
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("video");
  const music = document.getElementById("bgm");
  const btn = document.getElementById("music-btn");
  const icon = document.getElementById("music-icon");

  if (!video || !music) return;

  video.addEventListener("play", async () => {
    await fadeOutMusic(music, 800);
    icon.textContent = "▶";
    btn.classList.remove("playing");
  });

  video.addEventListener("pause", () => {
    music.play().catch(()=>{});
    icon.textContent = "⏸";
    btn.classList.add("playing");
  });

  video.addEventListener("ended", () => {
    music.play().catch(()=>{});
    icon.textContent = "⏸";
    btn.classList.add("playing");
  });
});