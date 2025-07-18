document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.style.right === '0px';
      navLinks.style.right = isOpen ? '-100%' : '0';
    });
  }

  const chatWidget = document.getElementById('main-chat-widget');
  const chatBody = document.getElementById('main-chat-body');
  const chatForm = document.getElementById('main-chat-form');
  const chatInput = document.getElementById('main-chat-input');
  let hasExpanded = false;

  const appendMessage = (text, type) => {
    if (!chatBody) return;
    const bubble = document.createElement('div');
    bubble.classList.add('message', type);
    bubble.textContent = text;
    chatBody.appendChild(bubble);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  setTimeout(() => {
    appendMessage(
      'Hi there! I’m Zippy, your AI DeliveryBot. Ask me anything about climate change or deliveries!',
      'bot'
    );
  }, 1000);

  if (chatForm) {
    chatForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;

      if (!hasExpanded) {
        chatWidget.classList.add('expanded');
        hasExpanded = true;
      }

      appendMessage(text, 'user');
      chatInput.value = '';

      try {
        const res = await fetch('chat.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text }),
        });
        const raw = await res.text();
        if (!res.ok) {
          appendMessage(`Error ${res.status}: ${raw}`, 'bot');
          return;
        }
        const data = JSON.parse(raw);
        appendMessage(data.reply, 'bot');
      } catch (err) {
        appendMessage('Network error: ' + err.message, 'bot');
      }
    });
  }
});

