/* ============================================
   ONYX CODE — JavaScript principal
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  // ---------- INTRO SEQUENCE ----------
  const intro = document.getElementById("intro");
  // Total intro duration ~4.8s then fade out
  setTimeout(() => {
    intro.classList.add("hidden");
  }, 4800);

  // Optional: allow skip on click / key
  const skipIntro = () => {
    if (!intro.classList.contains("hidden")) {
      intro.classList.add("hidden");
    }
  };
  intro.addEventListener("click", skipIntro);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") skipIntro();
  });

  // ---------- FLOATING CUBES ----------
  const scene = document.getElementById("cubesScene");
  if (scene) {
    const cubeCount = window.innerWidth < 768 ? 22 : 40;
    const sizes = [22, 30, 38, 48, 58, 72, 88, 110];

    for (let i = 0; i < cubeCount; i++) {
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const cube = document.createElement("div");
      // Mix of wireframe-looking and more solid cubes like the reference
      cube.className = `cube${Math.random() > 0.4 ? " solid" : ""}`;

      // Bias more cubes toward the right / center for depth
      const left = 15 + Math.random() * 85;
      const top = Math.random() * 100;
      const duration = 16 + Math.random() * 22;
      const delay = -Math.random() * 25;

      // Prefer isometric-ish starting angles
      const rx = 20 + Math.random() * 50;
      const ry = 30 + Math.random() * 50;
      const rz = Math.random() * 30 - 15;

      const range = 50 + Math.random() * 70;
      const tx1 = (Math.random() - 0.5) * range;
      const ty1 = (Math.random() - 0.5) * range * 0.6;
      const tz1 = (Math.random() - 0.3) * 120;
      const tx2 = (Math.random() - 0.5) * range;
      const ty2 = (Math.random() - 0.5) * range * 0.6;
      const tz2 = (Math.random() - 0.3) * 120;
      const tx3 = (Math.random() - 0.5) * range;
      const ty3 = (Math.random() - 0.5) * range * 0.6;
      const tz3 = (Math.random() - 0.3) * 120;

      cube.style.cssText = `
        --size: ${size}px;
        --duration: ${duration}s;
        --delay: ${delay}s;
        --rx: ${rx}deg;
        --ry: ${ry}deg;
        --rz: ${rz}deg;
        --tx1: ${tx1}px; --ty1: ${ty1}px; --tz1: ${tz1}px;
        --tx2: ${tx2}px; --ty2: ${ty2}px; --tz2: ${tz2}px;
        --tx3: ${tx3}px; --ty3: ${ty3}px; --tz3: ${tz3}px;
        left: ${left}%;
        top: ${top}%;
        margin-left: -${size / 2}px;
        margin-top: -${size / 2}px;
      `;

      const faces = ["front", "back", "right", "left", "top", "bottom"];
      faces.forEach((face) => {
        const el = document.createElement("div");
        el.className = `cube-face ${face}`;
        cube.appendChild(el);
      });

      scene.appendChild(cube);
    }
  }

  // ---------- NAVBAR SCROLL ----------
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // ---------- MOBILE MENU ----------
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  // Cerrar menú al hacer clic en un enlace
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });

  // ---------- HERO PHRASE (animación letra por letra + glow) ----------
  const phrase = "Make your ideas come to reality";
  const phraseEl = document.getElementById("heroPhrase");

  phrase.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.className = "letter";
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${0.35 + i * 0.032}s`;
    phraseEl.appendChild(span);
  });

  // Enable continuous subtle glow after entrance finishes
  setTimeout(() => {
    phraseEl.classList.add("animated");
  }, 2800);

  // ---------- SKILL SHOWCASE (carrusel) ----------
  const skills = [
    {
      title: "Frontend Excellence",
      subtitle: "React · Next.js · TypeScript",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    },
    {
      title: "Backend Expertise",
      subtitle: "Node · Python · APIs",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    },
    {
      title: "UI / UX Design",
      subtitle: "Figma · Motion · Systems",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>`,
    },
    {
      title: "Cloud & DevOps",
      subtitle: "AWS · Docker · CI/CD",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    },
    {
      title: "Mobile Apps",
      subtitle: "React Native · Flutter",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
    },
  ];

  const showcase = document.getElementById("skillShowcase");
  let currentSlide = 0;

  // Crear slides
  skills.forEach((skill, index) => {
    const slide = document.createElement("div");
    slide.className = `skill-slide${index === 0 ? " active" : ""}`;
    slide.innerHTML = `
      <div class="skill-slide-icon">${skill.icon}</div>
      <h3>${skill.title}</h3>
      <p>${skill.subtitle}</p>
    `;
    showcase.appendChild(slide);
  });

  // Indicadores
  const indicators = document.createElement("div");
  indicators.className = "slide-indicators";
  skills.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = `slide-dot${i === 0 ? " active" : ""}`;
    dot.setAttribute("aria-label", `Slide ${i + 1}`);
    dot.addEventListener("click", () => goToSlide(i));
    indicators.appendChild(dot);
  });
  showcase.appendChild(indicators);

  function goToSlide(index) {
    const slides = showcase.querySelectorAll(".skill-slide");
    const dots = showcase.querySelectorAll(".slide-dot");

    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  // Auto-rotate
  setInterval(() => {
    goToSlide((currentSlide + 1) % skills.length);
  }, 3200);

  // ---------- AÑO EN FOOTER ----------
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------- FORMULARIO (solo previene envío) ----------
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado! (demo — aquí conectarías tu backend)");
    form.reset();
  });

  // ---------- SCROLL REVEAL SUAVE (opcional) ----------
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Aplicar a tarjetas
  document
    .querySelectorAll(".skill-card, .team-card, .process-step")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

  // ---------- CURSOR-FOLLOWING CUBES ----------
  const isTouch = matchMedia("(pointer: coarse)").matches;
  if (!isTouch) {
    // Small trail cubes (global)
    const container = document.createElement("div");
    container.className = "cursor-cubes";
    document.body.appendChild(container);

    const cubeCount = 5;
    const cubes = [];
    const sizes = [14, 18, 22, 16, 20];
    const lags = [0.12, 0.18, 0.26, 0.34, 0.42];

    for (let i = 0; i < cubeCount; i++) {
      const size = sizes[i];
      const el = document.createElement("div");
      el.className = "cursor-cube";
      el.style.setProperty("--csize", size + "px");
      el.style.marginLeft = -size / 2 + "px";
      el.style.marginTop = -size / 2 + "px";

      ["f", "b", "r", "l", "t", "bo"].forEach((face) => {
        const faceEl = document.createElement("div");
        faceEl.className = `cface ${face}`;
        el.appendChild(faceEl);
      });

      container.appendChild(el);
      cubes.push({
        el,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        lag: lags[i],
        rotX: Math.random() * 360,
        rotY: Math.random() * 360,
        rotSpeedX: 0.4 + Math.random() * 0.6,
        rotSpeedY: 0.3 + Math.random() * 0.5,
      });
    }

    // ===== Process wireframe Rubik cube — rotate with mouse =====
    const processCube = document.getElementById("processCube");
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let visible = false;

    let rotX = -32;
    let rotY = 38;
    let targetX = -32;
    let targetY = 38;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        visible = true;
        container.style.opacity = "1";
      }

      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      targetY = 38 + nx * 60;
      targetX = -32 + ny * -45;
    });

    document.addEventListener("mouseleave", () => {
      visible = false;
      container.style.opacity = "0";
    });

    function animateCubes() {
      // Small trail cubes
      cubes.forEach((c) => {
        c.x += (mouseX - c.x) * c.lag;
        c.y += (mouseY - c.y) * c.lag;
        c.rotX += c.rotSpeedX;
        c.rotY += c.rotSpeedY;

        c.el.style.transform = `
          translate3d(${c.x}px, ${c.y}px, 0)
          rotateX(${c.rotX}deg)
          rotateY(${c.rotY}deg)
        `;
      });

      // Process Rubik cube
      if (processCube) {
        rotX += (targetX - rotX) * 0.055;
        rotY += (targetY - rotY) * 0.055;
        rotY += 0.18;
        processCube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }

      requestAnimationFrame(animateCubes);
    }
    animateCubes();
  }
});
