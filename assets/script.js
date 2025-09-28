

// Fallback de equipo para contextos file:// o fetch bloqueado
const TEAM_FALLBACK = [
  {
    "nombre": "Calcina Jara, Frank Gino",
    "rol": "Líder de proyecto · Coordinación académica",
    "enfoque": [
      "Planificación",
      "Gestión de entregables",
      "Vinculación docente"
    ],
    "skills": [
      "Gestión de proyectos",
      "Documentación",
      "Comunicación"
    ],
    "bio": "Coordina el roadmap, define alcance y criterios de aceptación. Asegura la alineación con objetivos académicos y la ética de uso de IA.",
    "links": {
      "GitHub": "#",
      "LinkedIn": "#",
      "Email": ""
    }
  },
  {
    "nombre": "Condori Quilla Rudy Franklin",
    "rol": "Analista progrador de sistemas",
    "enfoque": [
      "Desarrollo Front-End",
      "Toma de requerimientos",
      "Despliegue"
    ],
    "skills": [
      "Diseño Web",
      "Maquetación",
      "Automatización"
    ],
    "bio": "Diseña modelos de datos y pipelines reproducibles. Lidera indicadores y visualizaciones con énfasis en trazabilidad y rendimiento. Como desarrollador, integra soluciones frontend con backend de datos, asegurando accesibilidad y escalabilidad.",
    "links": {
      "GitHub": "#",
      "LinkedIn": "#",
      "Email": ""
    }
  },
  {
    "nombre": "Mendoza Salluca William David",
    "rol": "Investigación · Contenidos y curaduría",
    "enfoque": [
      "Marco teórico",
      "Síntesis de fuentes",
      "Redacción"
    ],
    "skills": [
      "Revisión de literatura",
      "Citas APA/IEEE",
      "Comunicación científica"
    ],
    "bio": "Estructura el marco teórico y los contenidos ampliados. Garantiza rigor y referencias verificables.",
    "links": {
      "GitHub": "#",
      "LinkedIn": "#",
      "Email": ""
    }
  },
  {
    "nombre": "Roque Quispe Frank Jhordan",
    "rol": "DevOps · Publicación y CI/CD",
    "enfoque": [
      "GitHub Pages",
      "Automatización",
      "Observabilidad"
    ],
    "skills": [
      "GitHub Actions",
      "Build estático",
      "Monitoreo"
    ],
    "bio": "Estandariza el flujo de despliegue y versionado. Configura automatizaciones para validaciones y releases.",
    "links": {
      "GitHub": "#",
      "LinkedIn": "#",
      "Email": ""
    }
  },
  {
    "nombre": "Umasi Jayta Jhoel Josué",
    "rol": "Frontend · UX/UI",
    "enfoque": [
      "Accesibilidad",
      "Componentes",
      "Rendimiento"
    ],
    "skills": [
      "HTML/CSS/JS",
      "A11y (WCAG)",
      "Performance"
    ],
    "bio": "Desarrolla componentes accesibles, optimiza rendimiento (LCP, CLS) y asegura consistencia visual.",
    "links": {
      "GitHub": "#",
      "LinkedIn": "#",
      "Email": ""
    }
  }
];
const tools = [
  {
    "nombre": "ChatGPT",
    "url": "https://chatgpt.com/",
    "categoria": "Asistente académico y de redacción",
    "descripcion": "Genera y mejora textos, resuelve dudas, explica conceptos y apoya con programación y traducción.",
    "acceso": "Plan gratuito y de pago (Plus).",
    "uso": "Búsqueda de ideas, esquemas, corrección y preparación de presentaciones.",
    "img": "https://cdn.simpleicons.org/openai"
  },
  {
    "nombre": "Gemini",
    "url": "https://gemini.google.com/",
    "categoria": "Asistente integral (multimodal)",
    "descripcion": "Trabaja con texto, imágenes, código; se integra con Google (Docs, Drive, Gmail).",
    "acceso": "Plan gratuito y versiones de pago.",
    "uso": "Revisión de literatura, organización y programación con ecosistema Google.",
    "img": "https://cdn.simpleicons.org/google"
  },
  {
    "nombre": "Gauth",
    "url": "https://gauthai.org/",
    "categoria": "Resolución paso a paso (STEM)",
    "descripcion": "Asistente de tareas con reconocimiento de imágenes para problemas.",
    "acceso": "Versión gratuita y suscripciones.",
    "uso": "Comprensión de ejercicios y preparación de exámenes; verificar, no copiar.",
    "img": ""
  },
  {
    "nombre": "Scholarcy",
    "url": "https://scholarcy.com/",
    "categoria": "Lectura y análisis de artículos",
    "descripcion": "Resume documentos académicos y resalta elementos clave (metodología, resultados, citas).",
    "acceso": "Plan gratuito y premium.",
    "uso": "Revisión de literatura y construcción de marco teórico.",
    "img": ""
  },
  {
    "nombre": "Perplexity",
    "url": "https://www.perplexity.ai/",
    "categoria": "Búsqueda con fuentes citadas",
    "descripcion": "Responde en lenguaje natural y siempre muestra enlaces a las fuentes.",
    "acceso": "Gratuito y Pro.",
    "uso": "Búsqueda inicial de antecedentes y datos recientes.",
    "img": "https://cdn.simpleicons.org/perplexity"
  },
  {
    "nombre": "Notion AI",
    "url": "https://www.notion.so/product/ai",
    "categoria": "Organización y redacción asistida",
    "descripcion": "Espacio único para notas, planes, tablas y borradores con apoyo de IA.",
    "acceso": "Notion gratis; IA de pago.",
    "uso": "Planificación, redacción y trabajo colaborativo.",
    "img": "https://cdn.simpleicons.org/notion"
  },
  {
    "nombre": "Microsoft Copilot",
    "url": "https://copilot.microsoft.com/",
    "categoria": "Asistente con Bing y Office",
    "descripcion": "Búsqueda con contexto y generación integrada con Word, Excel y PowerPoint.",
    "acceso": "Gratuito y versiones empresariales.",
    "uso": "Redacción en Office, análisis rápido en Excel, presentaciones.",
    "img": "https://cdn.simpleicons.org/githubcopilot"
  },
  {
    "nombre": "DeepL",
    "url": "https://www.deepl.com/translator",
    "categoria": "Traducción de alta calidad",
    "descripcion": "Traducciones naturales con glosarios y corrección de estilo.",
    "acceso": "Gratis con límites y Pro.",
    "uso": "Traducción de artículos, abstracts y correos académicos.",
    "img": "https://cdn.simpleicons.org/deepl"
  },
  {
    "nombre": "Grammarly",
    "url": "https://www.grammarly.com/",
    "categoria": "Corrección y estilo",
    "descripcion": "Sugerencias gramaticales y de claridad; detector de tono y plagio (premium).",
    "acceso": "Gratis y Premium.",
    "uso": "Pulir redacción en inglés y evitar errores comunes.",
    "img": "https://cdn.simpleicons.org/grammarly"
  }
];


function initials(name) {
  return name.split(/\s+/).map(w => w[0]).join('').slice(0,2).toUpperCase();
}
function imageOrAvatar(t) {
  if (t.img) {
    return `<img class="thumb" src="${t.img}" alt="Logo de ${t.nombre}" loading="lazy" />`;
  }
  return `<div class="thumb avatar">${initials(t.nombre)}</div>`;
}
function card(t) {
  return `
    <article class="card">
      <div class="card-head">
        ${imageOrAvatar(t)}
        <div class="card-title">
          <h4>${t.nombre}</h4>
          <p class="meta">${t.categoria}</p>
        </div>
      </div>
      <p>${t.descripcion}</p>
      <p><span class="tag">Acceso</span> ${t.acceso}</p>
      <p><span class="tag">Uso</span> ${t.uso}</p>
      <p><a href="${t.url}" target="_blank" rel="noopener">Abrir</a></p>
    </article>`;
}
function render(filter = "") {
  const grid = document.getElementById("tool-grid");
  const q = filter.trim().toLowerCase();
  const items = tools.filter(t =>
    !q || [t.nombre, t.categoria, t.descripcion].join(" ").toLowerCase().includes(q)
  );
  grid.innerHTML = items.map(card).join("");
}
document.addEventListener("DOMContentLoaded", () => {
  render();
  const input = document.getElementById("search");
  input.addEventListener("input", (e) => render(e.target.value));
});





// ===== Modal "Ver más" para secciones =====
window.addEventListener('DOMContentLoaded', () => {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return; // safety

  const modal = modalRoot.querySelector('.modal');
  const modalBody = document.getElementById('modal-body');
  const modalTitle = document.getElementById('modal-title');
  const closeBtns = modalRoot.querySelectorAll('[data-close]');
  let lastFocused = null;

  function openModal(title, contentNode){
    lastFocused = document.activeElement;
    modalTitle.textContent = title || 'Detalle';
    modalBody.innerHTML = '';
    const clone = contentNode.cloneNode(true);
    clone.querySelectorAll('.more-inline').forEach(b => b.remove());
    modalBody.appendChild(clone);
    modalRoot.classList.add('open');
    modalRoot.setAttribute('aria-hidden','false');
    const closeButton = modal.querySelector('.modal-close');
    if (closeButton) closeButton.focus();
    document.addEventListener('keydown', onKey);
    document.addEventListener('focus', trapFocus, true);
  }
  function closeModal(){
    modalRoot.classList.remove('open');
    modalRoot.setAttribute('aria-hidden','true');
    document.removeEventListener('keydown', onKey);
    document.removeEventListener('focus', trapFocus, true);
    if (lastFocused) lastFocused.focus();
  }
  function onKey(e){
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab') {
      const focusables = modalRoot.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const list = Array.from(focusables).filter(el => el.offsetParent !== null);
      if (!list.length) return;
      const first = list[0], last = list[list.length-1];
      if (e.shiftKey && document.activeElement === first){ last.focus(); e.preventDefault(); }
      else if (!e.shiftKey && document.activeElement === last){ first.focus(); e.preventDefault(); }
    }
  }
  function trapFocus(e){
    if (!modalRoot.classList.contains('open')) return;
    if (!modal.contains(e.target)) {
      e.stopPropagation();
      const closeButton = modal.querySelector('.modal-close');
      if (closeButton) closeButton.focus();
    }
  }
  closeBtns.forEach(b => b.addEventListener('click', closeModal));
  modalRoot.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) closeModal();
  });

  // Inserta el botón "Ver más" si no existe
  document.querySelectorAll('section[id]').forEach(sec => {
    const h3 = sec.querySelector('h3');
    if (!h3) return;
    if (h3.querySelector('.more-inline')) return;
    const btn = document.createElement('button');
    btn.className = 'more-inline';
    btn.type = 'button';
    btn.textContent = 'Ver más';
    btn.addEventListener('click', () => openModal(h3.textContent.trim(), sec));
    h3.appendChild(btn);
  });
});


// ===== Render Equipo desde JSON =====
async function loadTeam(){
  try{
    if (location.protocol === 'file:') {
      return TEAM_FALLBACK;
    }
    const res = await fetch('assets/team.json', {cache:'no-store'});
    if(!res.ok) throw new Error('No se pudo cargar team.json');
    return await res.json();
  }catch(e){
    console.warn('[Equipo]', e);
    return TEAM_FALLBACK;
  }
}
function initials(name){ return (name||'').split(/\s+/).map(w=>w[0]).join('').slice(0,2).toUpperCase(); }
function teamCard(m){
  const chips = (m.enfoque||[]).map(x=>`<span class="chip">${x}</span>`).join('');
  const skills = (m.skills||[]).map(x=>`<span class="chip">${x}</span>`).join('');
  const links = m.links ? Object.entries(m.links).filter(([k,v])=>v && v!=='#').map(([k,v])=>`<a href="${v}" target="_blank" rel="noopener">${k}</a>`).join(' · ') : '';
  return `
    <article class="team-card">
      <div class="team-avatar" aria-hidden="true">${initials(m.nombre)}</div>
      <div class="team-main">
        <h4>${m.nombre}</h4>
        <p class="team-role">${m.rol}</p>
        <div class="chips">${chips}</div>
        <div class="chips">${skills}</div>
        <div class="team-links">${links}</div>
        <div class="team-actions"><button class="btn-ghost" data-profile='${JSON.stringify(m).replace(/'/g,"&#39;")}'>Ver perfil</button></div>
      </div>
    </article>`;
}
async function renderTeam(){
  const grid = document.getElementById('team-grid');
  if(!grid) return;
  const data = await loadTeam();
  grid.innerHTML = data.map(teamCard).join('');
  // Wire modal
  grid.querySelectorAll('[data-profile]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const m = JSON.parse(btn.getAttribute('data-profile'));
      const root = document.getElementById('modal-root'); if(!root) return;
      root.querySelector('#modal-title').textContent = m.nombre;
      root.querySelector('#modal-body').innerHTML = `
        <p class="muted">${m.rol}</p>
        <p>${m.bio||''}</p>
        <h5>Enfoque</h5><div class="chips">${(m.enfoque||[]).map(x=>`<span class="chip">${x}</span>`).join('')}</div>
        <h5>Skills</h5><div class="chips">${(m.skills||[]).map(x=>`<span class="chip">${x}</span>`).join('')}</div>
      `;
      root.classList.add('open'); root.setAttribute('aria-hidden','false');
      const closeButton = root.querySelector('.modal-close'); if(closeButton) closeButton.focus();
    });
  });
}
document.addEventListener('DOMContentLoaded', renderTeam);
