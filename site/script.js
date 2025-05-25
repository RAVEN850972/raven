function navigate(page) {
  const main = document.getElementById('content');
  switch (page) {
    case 'home':
      main.innerHTML = getHomeHTML();
      break;
    case 'manifesto':
      main.innerHTML = getManifestoHTML();
      break;
    case 'divisions':
      main.innerHTML = getDivisionsHTML();
      break;
    case 'contact':
      main.innerHTML = getContactHTML();
      break;
    case 'projects':
      main.innerHTML = getProjectsHTML();
      break;
    default:
      main.innerHTML = '<p>404 — Page not found</p>';
  }
}

function getHomeHTML() {
  return `
    <section>
      <h1>Raven Industries</h1>
      <p>Cutting through the noise. Building what matters.</p>
    </section>
  `;
}

function getManifestoHTML() {
  return `
    <section>
      <h2>MANIFESTO</h2>
      <p>Мы не ждём одобрения. Мы создаём.</p>
      <p>Raven Industries — не корпорация. Это ячейка. Узел. Нерв технологического будущего.</p>
      <p>Мы развиваем искусственный интеллект, биоинженерию, нейросети, автономные системы и всё, что выходит за рамки обыденного.</p>
      <p>Мы не продаём идеи. Мы живём ими.</p>
    </section>
  `;
}

function getDivisionsHTML() {
  return `
    <section>
      <h2>DIVISIONS</h2>
      <ul>
        <li>⚙️ Artificial Intelligence</li>
        <li>🧬 Biotech & Neural Engineering</li>
        <li>💻 Cyber Infrastructure</li>
        <li>🔐 IntelOps & Autonomous Security</li>
        <li>🚀 Aerospace & Systems Design</li>
      </ul>
    </section>
  `;
}

function getContactHTML() {
  return `
    <section>
      <h2>CONTACT</h2>
      <p>Связаться можно через:</p>
      <ul>
        <li>Email: <a href="mailto:contact@ravenindustries.io">contact@ravenindustries.io</a></li>
        <li>Telegram: <a href="https://t.me/raven_industries" target="_blank">@raven_industries</a></li>
      </ul>
    </section>
  `;
}

function getProjectsHTML() {
  const projects = [
    {
      title: 'ChronosMini',
      description: 'Модульная система ИИ-памяти с графовой архитектурой и адаптивным контекстом.',
      status: 'Стадия: Alpha'
    },
    {
      title: 'RavenCRM',
      description: 'Минималистичная CRM-система для сервисного бизнеса. Функции учёта, аналитики и расчёта ЗП.',
      status: 'Стадия: MVP'
    },
    {
      title: 'RavenLab',
      description: 'Web-интерфейс мастерской в стиле Iron Man. Django + чистый фронт без фреймворков.',
      status: 'Разработка'
    },
    {
      title: 'Telegram Bots',
      description: 'Боты для автоматизации бизнеса: Avito, магазин карт, ассистент, аналитик.',
      status: 'В активной разработке'
    }
  ];

  return `
    <section>
      <h2>PROJECTS</h2>
      <div class="projects-container">
        ${projects.map(p => `
          <div class="project-card">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="status">${p.status}</div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}
