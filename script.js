const pages = {
    home: `> Work in the Shadows. Shape the Future.`,
    manifesto: `
  > Мы не создаём миры — мы их реконструируем.
  > Мы — алхимики информации, хакеры реальности и инженеры будущего.
  > Каждый бит кода, каждый болт, каждая формула — инструмент освобождения.
  > Raven Industries существует вне шума. Мы не ищем одобрения.
  > Мы строим систему, в которой свобода и знание первичны.
  `,
    divisions: `
  > ⚙️ Core Systems — инфраструктура и протоколы
  > 🧪 Labs — инновации и исследования
  > 🧠 IntelOps — ИИ, анализ и разведка
  > 🛰️ Nexus — связь, облако и сеть
  > 👷 Field — мехи, сборка, импланты
  `,
    contact: `
  > 💬 Telegram: @ravenoffateofficial
  > 🔐 Matrix: raven@matrix.org
  > 🕳️ Пиши, если ты чувствуешь, что подходишь протоколу.
  `
  };
  
  const contentDiv = document.getElementById('content');
  
  function typeText(text, speed = 25) {
    contentDiv.classList.remove('loaded');
    contentDiv.innerHTML = '';
    let i = 0;
  
    function type() {
      if (i < text.length) {
        contentDiv.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        contentDiv.classList.add('loaded');
      }
    }
  
    type();
  }
  
  function navigate(section) {
    if (pages[section]) {
      typeText(pages[section]);
    }
  }
  
  window.onload = () => {
    navigate('home');
  };
  