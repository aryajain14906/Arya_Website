document.addEventListener("DOMContentLoaded", () => {

  /* ---------- boot screen terminal typing ---------- */
  const introBody = document.getElementById("introTermBody");
  const introOverlay = document.getElementById("introOverlay");
  if (introBody && introOverlay) {
    document.body.style.overflow = "hidden";
    const lines = [
      { prompt: "$ ", text: "whoami" },
      { text: "arya_jain — CS + Econ, BITS Pilani Goa" },
      { prompt: "$ ", text: "status --current" },
      { text: "captain:  team-grease-monkeys · learning AI systems" },
      { prompt: "$ ", text: "./launch_portfolio.sh" },
      { text: "done. welcome ✨" },
    ];
    let li = 0, ci = 0;
    const typeLine = () => {
      if (li >= lines.length) {
        const cur = document.createElement("span");
        cur.className = "term-cursor";
        introBody.appendChild(cur);
        setTimeout(() => {
          introOverlay.classList.add("done");
          document.body.style.overflow = "";
        }, 550);
        return;
      }
      const { prompt, text } = lines[li];
      if (ci === 0) {
        const div = document.createElement("div");
        div.className = "term-line";
        if (prompt) {
          const p = document.createElement("span");
          p.className = "prompt";
          p.textContent = prompt;
          div.appendChild(p);
        }
        div.appendChild(document.createTextNode(""));
        introBody.appendChild(div);
      }
      const div = introBody.lastElementChild;
      if (ci < text.length) {
        div.lastChild.textContent += text[ci];
        ci++;
        setTimeout(typeLine, prompt ? 34 : 12);
      } else {
        li++; ci = 0;
        setTimeout(typeLine, 200);
      }
    };
    setTimeout(typeLine, 300);

    introOverlay.addEventListener("click", () => {
      introOverlay.classList.add("done");
      document.body.style.overflow = "";
    });
  }

  /* ---------- project data: what I learned building each one ---------- */
  const projects = {
    "rag-company": {
      title: "Company RAG System",
      badge: "live", badgeClass: "live",
      desc: "An AI chatbot that answers employee questions on company policy — leave, benefits, HR rules — by retrieving straight from the source documents instead of guessing.",
      learned: ["RAG architecture", "Vector embeddings", "LLM prompting", "API integration", "Deployment / hosting"],
      link: "https://github.com/aryajain14906/Company-Rag-System"
    },
    "worldcup": {
      title: "World Cup Predictor",
      badge: "live", badgeClass: "live",
      desc: "A prediction platform for the 48-team, 104-match FIFA World Cup 2026 — bracket predictions, powerups, and a live global leaderboard.",
      learned: ["Full-stack web dev", "Database design", "Ranking / leaderboard logic", "Real-time updates", "Team collaboration"],
      link: "https://github.com/akshitchess-lab/World-cup-Website"
    },
    "resume-rag": {
      title: "Resume RAG System",
      badge: "done", badgeClass: "done",
      desc: "Built for HR teams drowning in resumes — ask any question in plain language and it retrieves whichever resume matches best, ranked by relevance.",
      learned: ["Document retrieval", "Ranking algorithms", "Python", "HR-tech domain research"],
      // TODO: replace with your real repo URL once one exists
      link: "https://github.com/aryajain14906/Resume_Rag"
    },
    "jarvis": {
      title: "Jarvis",
      badge: "in progress", badgeClass: "wip",
      desc: "speech-to-speech AI assistant — say something, it understands, it talks back.",
      learned: ["Speech-to-text", "Text-to-speech", "Real-time audio pipelines", "Python"],
      // TODO: replace with your real repo URL once one exists
      link: "https://github.com/aryajain14906/Jarvis"
    },
    "hydration": {
      title: "World Hydration Day Website",
      badge: "completed · 1,300+ participants", badgeClass: "live",
      desc: "Website and competition platform built during my internship — now complete, with over 1,300 participants across the event.",
      learned: ["Web development", "Event ops coordination", "Stakeholder management", "Shipping under a deadline"],
      // TODO: replace with your real repo URL once one exists
      link: "https://github.com/aryajain14906/Website-1"
    },
    "snakepong": {
      title: "BlackJack",
      badge: "done", badgeClass: "live",
      desc: "Functional Game featuring betting, card dealing, player actions, dealer AI, and an interactive UI with animations and sound effects.",
      learned: ["Game loop design", "Dealer AI & Decision Logic", "State management", "Unity / C#"],
      // TODO: replace with your real repo URL once one exists
      link: "https://github.com/aryajain14906/Preinduction-Game-2026"
    },
    "pacman": {
      title: "Pacman Clone",
      badge: "done", badgeClass: "live",
      desc: "A functional Pacman clone with enemy AI behavior, pathfinding logic, score tracking, and level progression.",
      learned: ["Pathfinding", "Enemy AI behavior", "Unity", "Level design systems"],
      // TODO: replace with your real repo URL once one exists
      link: "https://github.com/aryajain14906/Pacman"
    },
    "slither": {
      title: "Slither.io Recreation",
      badge: "done", badgeClass: "live",
      desc: "A multiplayer Slither.io-inspired game with real-time player interactions, collision handling, and dynamic growth mechanics.",
      learned: ["Real-time multiplayer networking", "WebSockets", "Game state sync", "Collision at scale"],
      // TODO: replace with your real repo URL once one exists
      link: "https://github.com/aryajain14906/Slither-io"
    },
    "compplatform": {
      title: "Competition Platform",
      badge: "ongoing", badgeClass: "wip",
      desc: "Designed and engineered a dynamic competition platform for a tech startup, working directly with stakeholders end-to-end.",
      learned: ["Requirements gathering", "Stakeholder communication", "Full-stack development", "Iterating on feedback"],
      // TODO: replace with your real repo URL once one exists
      link: "https://github.com/aryajain14906/competition-platform"
    },
    "gmsite": {
      title: "Grease Monkeys Site",
      badge: "in progress", badgeClass: "wip",
      desc: "The website for our SAE ATV racing team — in development alongside the startup competition site.",
      learned: ["Web development", "Working under real deadlines", "Team coordination"],
      // TODO: replace with your real repo URL once one exists
      link: "https://github.com/aryajain14906/team-gm"
    }
  };

  const overlay = document.getElementById("modalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalBadge = document.getElementById("modalBadge");
  const modalLearned = document.getElementById("modalLearned");
  const modalLink = document.getElementById("modalLink");

  const openModal = (key) => {
    const p = projects[key];
    if (!p) return;
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.desc;
    modalBadge.textContent = p.badge;
    modalBadge.className = "modal-badge " + p.badgeClass;
    modalLearned.innerHTML = "";
    p.learned.forEach(skill => {
      const chip = document.createElement("span");
      chip.className = "learned-chip";
      chip.textContent = skill;
      modalLearned.appendChild(chip);
    });
    if (p.link) {
      modalLink.href = p.link;
      modalLink.textContent = "view on github ↗";
      modalLink.classList.remove("disabled");
    } else {
      modalLink.href = "#";
      modalLink.textContent = "repo pending";
      modalLink.classList.add("disabled");
    }
    overlay.classList.add("open");
  };

  const closeModal = () => overlay.classList.remove("open");

  document.querySelectorAll(".proj-card").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.project));
  });
  document.getElementById("modalClose").addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  /* ---------- show more / show less projects ----------
     Extra cards keep a permanent ".proj-extra" marker so we can
     always find them again, even after ".proj-hidden" has been
     removed — that's what broke the old toggle (it only ever
     looked for ".proj-hidden", so the second click found nothing). */
  const showMoreBtn = document.getElementById("showMoreBtn");
  if (showMoreBtn) {
    let expanded = false;
    showMoreBtn.addEventListener("click", () => {
      expanded = !expanded;
      document.querySelectorAll(".proj-card.proj-extra").forEach(card => {
        card.classList.toggle("proj-hidden", !expanded);
      });
      showMoreBtn.textContent = expanded ? "show less ↑" : "show more ↓";
    });
  }

  /* ---------- cursor-follow glow blob (hero only) ---------- */
  const blob = document.getElementById("blob");
  if (blob) {
    document.addEventListener("mousemove", (e) => {
      blob.style.transform = `translate(${e.clientX - 260}px, ${e.clientY - 260}px)`;
    });
  }

  /* ---------- mobile burger menu ---------- */
  const burger = document.getElementById("tbBurger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      burger.textContent = mobileMenu.classList.contains("open") ? "✕" : "☰";
    });
    mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      burger.textContent = "☰";
    }));
  }

  /* ---------- scrollspy for nav links ---------- */
  const navLinks = document.querySelectorAll(".tb-nav a, .mobile-menu a");
  const sections = [...new Set([...navLinks].map(a => a.getAttribute("href")))]
    .map(id => document.querySelector(id))
    .filter(Boolean);

  if (sections.length) {
    const setActive = (id) => {
      navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });
    sections.forEach(s => observer.observe(s));
  }
});