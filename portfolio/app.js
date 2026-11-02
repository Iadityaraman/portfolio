/**
 * ============================================================================
 * ADITYA.OS v1.0.4 | DEVELOPER UNIVERSE ENGINE
 * Interactive 3D Canvas, Terminal Emulator, Contribution Grid, Cyber Cursor
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initBootSequence();
  initCyberCursor();
  initUniverseCanvas();
  initPolyhedronCanvas();
  initInteractiveTerminal();
  initContributionHeatmap();
  init3DCardTilt();
  initLiveClock();
  initAudioSynthesizer();
  initHUDToast();
});

/* ==========================================================================
   1. BOOT SEQUENCE (CINEMATIC OPENING)
   ========================================================================== */
function initBootSequence() {
  const bootScreen = document.getElementById('boot-screen');
  const progressFill = document.getElementById('boot-progress-fill');
  const btnContainer = document.getElementById('boot-btn-container');
  const enterBtn = document.getElementById('btn-enter-world');

  const logLines = [
    { text: "INITIALIZING ADITYA.OS v1.0.4", isHeader: true },
    { text: "Loading developer environment...", delay: 400 },
    { text: "Initializing curiosity...", status: "OK", delay: 750 },
    { text: "Loading consistency...", status: "OK", delay: 1100 },
    { text: "Compiling ambitions...", status: "OK", delay: 1450 },
    { text: "Verifying: Newton School of Technology @ Rishihood", status: "VERIFIED", delay: 1800 },
    { text: "100% COMPLETE. SYSTEM READY.", isFinal: true, delay: 2200 }
  ];

  const logContainer = document.getElementById('boot-log');
  if (!logContainer) return;

  let currentLine = 0;
  function processLogs() {
    if (currentLine >= logLines.length) {
      if (progressFill) progressFill.style.width = '100%';
      if (btnContainer) btnContainer.classList.add('ready');
      return;
    }

    const item = logLines[currentLine];
    const lineElem = document.createElement('div');
    lineElem.className = 'boot-log-line';

    if (item.isHeader) {
      lineElem.innerHTML = `<span class="boot-log-prompt">></span> <strong>${item.text}</strong>`;
    } else {
      lineElem.innerHTML = `
        <span class="boot-log-prompt">></span>
        <span>${item.text}</span>
        ${item.status ? `<span class="boot-log-ok">[ ${item.status} ]</span>` : ''}
      `;
    }

    logContainer.appendChild(lineElem);
    requestAnimationFrame(() => lineElem.classList.add('visible'));

    // Progress bar interpolation
    const percent = Math.min(100, Math.round(((currentLine + 1) / logLines.length) * 100));
    if (progressFill) progressFill.style.width = `${percent}%`;

    // Sound effect
    playCyberTone(240 + currentLine * 40, 'sine', 0.04);

    currentLine++;
    setTimeout(processLogs, item.delay ? 350 : 250);
  }

  setTimeout(processLogs, 300);

  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      playCyberTone(660, 'triangle', 0.15);
      setTimeout(() => playCyberTone(880, 'sine', 0.2), 80);

      if (bootScreen) {
        bootScreen.classList.add('unlocked');
        setTimeout(() => {
          bootScreen.style.display = 'none';
        }, 800);
      }
    });
  }
}

/* ==========================================================================
   2. CUSTOM CYBER CURSOR
   ========================================================================== */
function initCyberCursor() {
  const cursor = document.getElementById('custom-cursor');
  const follower = document.getElementById('custom-cursor-follower');
  if (!cursor || !follower) return;

  let mouseX = -100, mouseY = -100;
  let followerX = -100, followerY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  // Follower smooth interpolation
  function renderFollower() {
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;
    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
    requestAnimationFrame(renderFollower);
  }
  requestAnimationFrame(renderFollower);

  // Hover detection
  const interactiveTargets = 'a, button, input, .quick-cmd-btn, .heat-cell, .skill-hud-card, .project-universe-card';
  document.querySelectorAll(interactiveTargets).forEach(elem => {
    elem.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
      playCyberTone(440, 'sine', 0.02);
    });
    elem.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });
}

/* ==========================================================================
   3. BACKGROUND UNIVERSE CANVAS (PARTICLE CONSTELLATION)
   ========================================================================== */
function initUniverseCanvas() {
  const canvas = document.getElementById('universe-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  const particleCount = 65;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.size = Math.random() * 1.6 + 0.6;
      this.alpha = Math.random() * 0.5 + 0.15;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 255, 102, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);

    // Draw connection lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 255, 102, ${(1 - dist / 110) * 0.12})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

/* ==========================================================================
   4. 3D INTERACTIVE POLYHEDRON (CYBER CORE)
   ========================================================================== */
function initPolyhedronCanvas() {
  const canvas = document.getElementById('polyhedron-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = 440;
  let height = canvas.height = 440;

  // 3D Vertices for an Icosahedron
  const phi = (1 + Math.sqrt(5)) / 2;
  const scale = 110;
  const rawVertices = [
    [-1,  phi, 0], [ 1,  phi, 0], [-1, -phi, 0], [ 1, -phi, 0],
    [ 0, -1,  phi], [ 0,  1,  phi], [ 0, -1, -phi], [ 0,  1, -phi],
    [ phi, 0, -1], [ phi, 0,  1], [-phi, 0, -1], [-phi, 0,  1]
  ].map(v => ({ x: v[0] * (scale / phi), y: v[1] * (scale / phi), z: v[2] * (scale / phi) }));

  // Edges connecting vertices
  const edges = [
    [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
    [1, 5], [1, 9], [1, 8], [1, 7],
    [2, 11], [2, 4], [2, 3], [2, 6], [2, 10],
    [3, 4], [3, 9], [3, 8], [3, 6],
    [4, 5], [4, 9], [4, 11],
    [5, 9], [6, 7], [6, 8], [6, 10],
    [7, 8], [8, 9], [10, 11]
  ];

  let rotX = 0.01;
  let rotY = 0.015;
  let targetRotX = 0.01;
  let targetRotY = 0.015;

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    targetRotY = (e.clientX - centerX) * 0.00008;
    targetRotX = (e.clientY - centerY) * 0.00008;
  });

  let angleX = 0;
  let angleY = 0;

  function render() {
    ctx.clearRect(0, 0, width, height);

    rotX += (targetRotX - rotX) * 0.05;
    rotY += (targetRotY - rotY) * 0.05;
    angleX += rotX + 0.008;
    angleY += rotY + 0.012;

    const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
    const cosY = Math.cos(angleY), sinY = Math.sin(angleY);

    // Projected vertices
    const projected = rawVertices.map(v => {
      // Rotate around Y
      let x1 = v.x * cosY - v.z * sinY;
      let z1 = v.z * cosY + v.x * sinY;
      // Rotate around X
      let y2 = v.y * cosX - z1 * sinX;
      let z2 = z1 * cosX + v.y * sinX;

      // Perspective projection
      const distance = 380;
      const fov = distance / (distance + z2);
      return {
        x: width / 2 + x1 * fov,
        y: height / 2 + y2 * fov,
        z: z2,
        fov: fov
      };
    });

    // Draw Edges
    edges.forEach(([i, j]) => {
      const p1 = projected[i];
      const p2 = projected[j];
      const avgZ = (p1.z + p2.z) / 2;
      const alpha = Math.max(0.12, Math.min(0.85, (avgZ + 150) / 300));

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(0, 255, 102, ${alpha * 0.8})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });

    // Draw Glowing Vertices
    projected.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3 * p.fov, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#00ff66';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

/* ==========================================================================
   5. FUNCTIONAL LEARNING TERMINAL (CLI)
   ========================================================================== */
function initInteractiveTerminal() {
  const inputField = document.getElementById('terminal-input');
  const historyContainer = document.getElementById('terminal-history');
  const quickButtons = document.querySelectorAll('.quick-cmd-btn');
  if (!inputField || !historyContainer) return;

  const commandHistory = [];
  let historyIndex = -1;

  // Command Registry
  const commands = {
    help: () => `
AVAILABLE SYSTEM COMMANDS:
  help       - Display this command index
  about      - Background at Newton School of Technology, Rishihood University
  skills     - Interactive skill tree & current exploration
  journey    - Recent learning milestones & daily breakthroughs
  projects   - Active experiments and repository status
  philosophy - Core developer mindset & "1% Better Every Day" rule
  clear      - Clear terminal screen
  whoami     - Current user session details
  contact    - Connect via LinkedIn, GitHub, or Email
  matrix     - Wake up, Neo...
    `.trim(),

    about: () => `
ADITYA RAMAN // SYSTEM IDENTITY:
  Role:       First-Year B.Tech Computer Science Student
  Institute:  Newton School of Technology, Rishihood University
  Location:   New Delhi, India
  Focus:      Programming Logic, Command-Line Mastery, System Fundamentals
  Passion:    Crafting robust code & exploring high-altitude mountain trails
    `.trim(),

    skills: () => `
CURRENT ACTIVE SKILL MAP:
  [🐍 PYTHON]    STATUS: CURRENTLY LEARNING (Data Structures, OOP, Argparse)
  [⌨️ TERMINAL]  STATUS: DAILY DRIVER (Zsh, Grep/Sed, POSIX, Shell Scripts)
  [🌿 GIT]       STATUS: FOUNDATIONS (Branching, Merges, Commit Trees)
  [🐙 GITHUB]    STATUS: EXPLORING (Remote Repos, Workflows, Documentation)
    `.trim(),

    journey: () => `
RECENT LEARNING CHANGELOG:
  • Day 28: Version control branching strategies & clean commit conventions
  • Day 24: Object-oriented concepts in Python & CLI note-taking tool
  • Day 19: Advanced command-line piping, redirections, & POSIX navigation
  • Day 14: Algorithmic problem solving on data structures
  • Day 01: Initialized First-Year CSE & committed to the 1% daily rule
    `.trim(),

    projects: () => `
PROJECT REPOSITORY STATUS:
  [!] "Every great developer starts somewhere. Projects are loading..."
  • CLI Dev Note Keeper (Python / Terminal) - Status: Active Project
  • Number Systems & Base Converter (Python / CS) - Status: Completed v1.0
  • Git Workflow Assistant (Bash / Git) - Status: Building
    `.trim(),

    philosophy: () => `
THE 1% RULE:
  "Small progress every day leads to remarkable results."
  Like ascending a mountain peak, software mastery is reached not through
  reckless sprints, but through persistent, deliberate steps.
    `.trim(),

    whoami: () => `visitor@aditya.universe [ACCESS: GUEST_DEVELOPER_PRIVILEGES]`,

    contact: () => `
COMMUNICATION CHANNELS:
  • LinkedIn: https://www.linkedin.com/in/iadityaraman
  • GitHub:   https://github.com/iadityaraman
  • Email:    iadityaraman@outlook.com
    `.trim(),

    matrix: () => `
Wake up, Neo...
The Matrix has you.
Follow the white rabbit.
Knock, knock, Aditya.
    `.trim(),

    clear: () => {
      historyContainer.innerHTML = '';
      return null;
    }
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    commandHistory.push(rawCmd);
    historyIndex = commandHistory.length;

    // Create command log
    const entry = document.createElement('div');
    entry.className = 'terminal-entry';
    entry.innerHTML = `
      <div class="terminal-cmd-row">
        <span class="terminal-user-badge">aditya@portfolio:~$</span>
        <span>${escapeHTML(rawCmd)}</span>
      </div>
    `;

    if (cmd === 'clear') {
      commands.clear();
      inputField.value = '';
      return;
    }

    let outputText = '';
    if (commands[cmd]) {
      outputText = commands[cmd]();
    } else {
      outputText = `zsh: command not found: ${escapeHTML(rawCmd)}. Type 'help' for available commands.`;
    }

    if (outputText) {
      const outputElem = document.createElement('div');
      outputElem.className = 'terminal-output';
      outputElem.textContent = outputText;
      entry.appendChild(outputElem);
    }

    historyContainer.appendChild(entry);
    inputField.value = '';

    // Auto scroll to bottom
    const terminalBody = document.querySelector('.terminal-body');
    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    playCyberTone(520, 'sine', 0.05);
  }

  inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputField.value);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        inputField.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        inputField.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        inputField.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const val = inputField.value.trim().toLowerCase();
      const match = Object.keys(commands).find(c => c.startsWith(val));
      if (match) inputField.value = match;
    }
  });

  quickButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) executeCommand(cmd);
    });
  });

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[tag] || tag));
  }
}

/* ==========================================================================
   6. 1% BETTER EVERY DAY (CONTRIBUTION HEATMAP)
   ========================================================================== */
function initContributionHeatmap() {
  const grid = document.getElementById('heatmap-grid');
  const tooltip = document.getElementById('calendar-tooltip');
  if (!grid || !tooltip) return;

  const totalCells = 52 * 7; // 364 days
  const activeDaysIndices = new Set([
    // Active Semester 1 indices (simulated realistic CSE learning density)
    12, 13, 14, 18, 19, 20, 21, 26, 27, 28, 30, 31,
    45, 46, 47, 48, 52, 53, 54, 55, 60, 61, 62, 63,
    80, 81, 82, 85, 86, 87, 88, 92, 93, 94, 99, 100,
    115, 116, 117, 120, 121, 122, 125, 126, 130, 131,
    150, 151, 152, 155, 156, 157, 160, 161, 162, 165,
    180, 181, 182, 185, 186, 187, 190, 191, 195, 196,
    210, 211, 212, 215, 216, 220, 221, 225, 226, 230,
    260, 261, 262, 265, 266, 270, 271, 275, 280, 285,
    310, 311, 312, 315, 316, 320, 321, 325, 330, 335,
    345, 346, 347, 348, 350, 351, 352, 355, 356, 357, 358, 360, 361
  ]);

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.className = 'heat-cell';

    let level = 0;
    let detail = "Rest / Study Day";

    if (activeDaysIndices.has(i)) {
      const rand = (i * 17) % 4;
      level = rand + 1;
      const details = [
        "1.5 hrs coded • Python functions & logic",
        "2 hrs coded • Terminal POSIX pipes & scripts",
        "3.5 hrs coded • Git branching & merge resolutions",
        "4 hrs coded • Data structures & milestone build"
      ];
      detail = details[rand];
    }

    cell.classList.add(`lvl-${level}`);
    cell.setAttribute('data-info', detail);
    cell.setAttribute('data-day', `Day index: #${i + 1}`);

    cell.addEventListener('mouseenter', (e) => {
      const info = cell.getAttribute('data-info');
      const day = cell.getAttribute('data-day');
      tooltip.innerHTML = `<strong>${day}</strong><br><span style="color:#00ff66;">${info}</span>`;
      tooltip.classList.add('active');
    });

    cell.addEventListener('mousemove', (e) => {
      tooltip.style.left = `${e.clientX + 14}px`;
      tooltip.style.top = `${e.clientY + 14}px`;
    });

    cell.addEventListener('mouseleave', () => {
      tooltip.classList.remove('active');
    });

    fragment.appendChild(cell);
  }

  grid.appendChild(fragment);
}

/* ==========================================================================
   7. 3D CARD TILT ON HOVER
   ========================================================================== */
function init3DCardTilt() {
  const cards = document.querySelectorAll('.project-universe-card, .skill-hud-card, .specs-grid');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* ==========================================================================
   8. WEB AUDIO API SYNTHESIZER (CYBER UI SOUNDS)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initAudioSynthesizer() {
  const toggleBtn = document.getElementById('sound-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      toggleBtn.innerHTML = soundEnabled ? '🔊' : '🔇';
      toggleBtn.title = soundEnabled ? 'Mute Cyber Audio' : 'Unmute Cyber Audio';
      showHUDToast(soundEnabled ? 'SYSTEM AUDIO: ENABLED' : 'SYSTEM AUDIO: MUTED');
    });
  }
}

function playCyberTone(freq = 440, type = 'sine', duration = 0.08) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    // Audio context silently ignored if blocked by browser policy
  }
}

/* ==========================================================================
   9. LIVE IST DIGITAL CLOCK
   ========================================================================== */
function initLiveClock() {
  const clockElement = document.getElementById('live-time');
  if (!clockElement) return;

  function update() {
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const formatter = new Intl.DateTimeFormat([], options);
    clockElement.textContent = formatter.format(new Date()) + " IST";
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   10. HUD TOAST NOTIFICATION
   ========================================================================== */
let toastTimeout;
function showHUDToast(message) {
  const toast = document.getElementById('hud-toast');
  if (!toast) return;

  toast.innerHTML = `<span style="color:#00ff66;">[!]</span> <span>${message}</span>`;
  toast.classList.add('active');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 3000);
}

function initHUDToast() {
  const copyEmailButtons = document.querySelectorAll('.copy-email-trigger');
  copyEmailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'iadityaraman@outlook.com';
      navigator.clipboard.writeText(email).then(() => {
        showHUDToast(`EMAIL COPIED: ${email}`);
        playCyberTone(880, 'sine', 0.1);
      }).catch(() => {
        showHUDToast(`CONTACT: ${email}`);
      });
    });
  });
}
