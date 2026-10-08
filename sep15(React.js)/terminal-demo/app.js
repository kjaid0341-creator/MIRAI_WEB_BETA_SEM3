/* app.js — Terminal Demo
   Three.js scene + JS tilt cards
   ============================================================ */

"use strict";

/* ── Reduced motion check ────────────────────────────────── */
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============================================================
   1. THREE.JS HERO SCENE
   ============================================================ */

(function initThreeScene() {
  const wrapper = document.getElementById("canvas-wrapper");
  const canvas  = document.getElementById("hero-canvas");
  if (!wrapper || !canvas) return;

  /* Bail to a static placeholder if Three.js didn't load */
  if (typeof THREE === "undefined") {
    canvas.style.display = "none";
    const msg = document.createElement("p");
    msg.textContent = "// three.js unavailable";
    msg.style.cssText = "color:var(--ink-dim);font-size:12px;text-align:center;padding:40px 0;";
    wrapper.appendChild(msg);
    return;
  }

  /* ── Renderer ───────────────────────────────────────────── */
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  function resize() {
    const w = wrapper.clientWidth;
    const h = wrapper.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  /* ── Scene & Camera ─────────────────────────────────────── */
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200);
  camera.position.set(0, 0, 5.5);

  /* ── Determine ink color from CSS var ───────────────────── */
  const rootStyle = getComputedStyle(document.documentElement);
  const isLight   = window.matchMedia("(prefers-color-scheme: light)").matches;
  const inkHex    = isLight ? 0x0a0a0a : 0xf0f0f0;

  /* ── Starfield ──────────────────────────────────────────── */
  const starGeo = new THREE.BufferGeometry();
  const starCount = 280;
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    starPos[i * 3]     = (Math.random() - 0.5) * 28;
    starPos[i * 3 + 1] = (Math.random() - 0.5) * 28;
    starPos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 2;
  }
  starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({
    color: inkHex,
    size: 0.045,
    transparent: true,
    opacity: 0.35,
    sizeAttenuation: true,
  });
  scene.add(new THREE.Points(starGeo, starMat));

  /* ── Icosahedron — solid (faint depth mesh) ─────────────── */
  const icoGeo = new THREE.IcosahedronGeometry(1.6, 1);
  const solidMat = new THREE.MeshBasicMaterial({
    color: inkHex,
    transparent: true,
    opacity: isLight ? 0.04 : 0.06,
    side: THREE.BackSide,
  });
  const solidMesh = new THREE.Mesh(icoGeo, solidMat);
  scene.add(solidMesh);

  /* ── Icosahedron — wireframe ────────────────────────────── */
  const wireMat = new THREE.MeshBasicMaterial({
    color: inkHex,
    wireframe: true,
    transparent: true,
    opacity: 0.55,
  });
  const wireMesh = new THREE.Mesh(icoGeo, wireMat);
  scene.add(wireMesh);

  /* ── Outer edge ring for interest ──────────────────────── */
  const ringGeo = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.1, 0));
  const ringMat = new THREE.LineBasicMaterial({
    color: inkHex,
    transparent: true,
    opacity: 0.12,
  });
  const ring = new THREE.LineSegments(ringGeo, ringMat);
  scene.add(ring);

  /* ── Mouse parallax tracking ────────────────────────────── */
  const mouse = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };

  document.addEventListener("mousemove", (e) => {
    if (REDUCED) return;
    mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  /* ── Animation loop ─────────────────────────────────────── */
  let frame;
  let t = 0;

  function animate() {
    frame = requestAnimationFrame(animate);
    t += 0.004;

    if (!REDUCED) {
      /* Auto-rotate */
      wireMesh.rotation.x  = t * 0.55;
      wireMesh.rotation.y  = t * 0.82;
      solidMesh.rotation.x = t * 0.55;
      solidMesh.rotation.y = t * 0.82;
      ring.rotation.x      = -t * 0.3;
      ring.rotation.z      =  t * 0.45;

      /* Smooth parallax */
      target.x += (mouse.x - target.x) * 0.04;
      target.y += (mouse.y - target.y) * 0.04;
      camera.position.x = target.x * 0.6;
      camera.position.y = -target.y * 0.4;
      camera.lookAt(0, 0, 0);
    }

    renderer.render(scene, camera);
  }

  /* ── Start ──────────────────────────────────────────────── */
  resize();
  window.addEventListener("resize", resize);

  if (!REDUCED) {
    animate();
  } else {
    /* Static render in reduced-motion mode */
    renderer.render(scene, camera);
  }
})();

/* ============================================================
   2. 3D TILT CARDS
   ============================================================ */

(function initTiltCards() {
  if (REDUCED) return;

  const cards = document.querySelectorAll(".feat-card");

  cards.forEach((card) => {
    const MAX  = 10;   /* max tilt degrees */
    const DAMPEN = 0.8;

    function onMove(e) {
      const rect = card.getBoundingClientRect();
      /* Normalise cursor to [-1, 1] within card */
      const nx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
      const ny = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;

      const rx =  ny * MAX * DAMPEN;   /* tilt up/down   */
      const ry = -nx * MAX * DAMPEN;   /* tilt left/right — negated for natural feel */

      card.style.transition = "transform 60ms linear, box-shadow 240ms ease, border-color 240ms ease";
      card.style.transform  = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    }

    function onLeave() {
      card.style.transition = "transform 400ms cubic-bezier(0.4,0,0.2,1), box-shadow 240ms ease, border-color 240ms ease";
      card.style.transform  = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
  });
})();

/* ============================================================
   3. TYPED PROMPT ANIMATION (terminal output)
   ============================================================ */

(function initTyped() {
  const outputEl = document.getElementById("term-output");
  if (!outputEl) return;

  const lines = [
    { text: '$ node --version',               cls: "term-dim",    delay: 0    },
    { text: 'v22.4.1',                         cls: "",            delay: 180  },
    { text: '$ npm run build',                 cls: "term-dim",    delay: 420  },
    { text: '',                                cls: "",            delay: 600  },
    { text: '  ▶  Building for production…',  cls: "term-bright", delay: 700  },
    { text: '  ✔  Compiled in 1.24s',         cls: "term-bright", delay: 1100 },
    { text: '',                                cls: "",            delay: 1200 },
    { text: '  dist/index.html       1.4 kB',  cls: "",            delay: 1300 },
    { text: '  dist/app.css         18.2 kB',  cls: "",            delay: 1380 },
    { text: '  dist/app.js          62.7 kB',  cls: "",            delay: 1460 },
    { text: '',                                cls: "",            delay: 1540 },
    { text: '  Total gzip:          14.1 kB',  cls: "",            delay: 1620 },
    { text: '',                                cls: "",            delay: 1700 },
    { text: '$ _',                             cls: "term-dim",    delay: 1800 },
  ];

  if (REDUCED) {
    /* Render all at once, no typewriter */
    outputEl.innerHTML = lines.map(l =>
      `<span class="${l.cls}">${escHtml(l.text)}</span>`
    ).join("\n");
    return;
  }

  outputEl.innerHTML = "";

  /* Only run if element is in viewport */
  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    observer.disconnect();
    runTyped();
  }, { threshold: 0.3 });

  observer.observe(outputEl);

  function runTyped() {
    lines.forEach(({ text, cls, delay }) => {
      setTimeout(() => {
        const span = document.createElement("span");
        if (cls) span.className = cls;
        span.textContent = text;
        outputEl.appendChild(span);
        outputEl.appendChild(document.createTextNode("\n"));
        outputEl.scrollTop = outputEl.scrollHeight;
      }, delay);
    });
  }

  function escHtml(str) {
    return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  }
})();

/* ============================================================
   4. COUNT-UP STATS
   ============================================================ */

(function initStats() {
  const stats = document.querySelectorAll("[data-count]");
  if (!stats.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      animateCount(entry.target);
    });
  }, { threshold: 0.5 });

  stats.forEach(el => observer.observe(el));

  function animateCount(el) {
    const target   = parseFloat(el.dataset.count);
    const suffix   = el.dataset.suffix || "";
    const duration = REDUCED ? 0 : 1200;
    const start    = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);  /* ease-out cubic */
      const value    = target * eased;
      el.textContent = (Number.isInteger(target) ? Math.round(value) : value.toFixed(1)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }

    if (duration === 0) {
      el.textContent = target + suffix;
    } else {
      requestAnimationFrame(step);
    }
  }
})();
