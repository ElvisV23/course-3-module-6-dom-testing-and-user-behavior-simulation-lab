document.addEventListener('DOMContentLoaded', () => {
    const simulateBtn = document.getElementById('simulate-click');
    const form = document.getElementById('user-form');
  
    simulateBtn?.addEventListener('click', () => {
      updateContent('dynamic-content', 'Simulated Button Click!');
    });
  
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('user-input');
      const value = input?.value.trim();
  
      if (!value) {
        showError('Input cannot be empty');
      } else {
        updateContent('dynamic-content', value);
        hideError();
        input.value = '';
      }
    });
  });
  
  function updateContent(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  
  function addElement(id, tag, attributes = {}, text = '') {
    const parent = document.getElementById(id);
    if (!parent) return;
  
    const newEl = createElement(tag, attributes);
    newEl.textContent = text;
    parent.appendChild(newEl);
  }
  
  function removeElement(id) {
    const el = document.getElementById(id);
    if (el?.parentNode) el.parentNode.removeChild(el);
  }
  
  // 🔹 Step 3: Error Handling
  function showError(message) {
    const errorDiv = document.getElementById('error-message');
    if (errorDiv) {
      errorDiv.textContent = message;
      errorDiv.classList.remove('hidden');
    }
  }
  
  function hideError() {
    const errorDiv = document.getElementById('error-message');
    if (errorDiv) {
      errorDiv.textContent = '';
      errorDiv.classList.add('hidden');
    }
  }
  
  function createElement(tag, attributes = {}) {
    const el = document.createElement(tag);
    for (const [key, value] of Object.entries(attributes)) {
      el.setAttribute(key, value);
    }
    return el;
  }
  module.exports = {
    updateContent,
    addElement,
    removeElement,
    showError,
    hideError,
    createElement,
    addElementToDOM: (id, text) => addElement(id, 'p', {}, text), // fixed here ✅
    removeElementFromDOM: removeElement,
    simulateClick: updateContent,
    handleFormSubmit: function(formId, contentId) {
      const form = document.getElementById(formId);
      const input = document.getElementById('user-input');
      const value = input?.value.trim();
  
      if (!value) {
        showError('Input cannot be empty');
      } else {
        updateContent(contentId, value);
        hideError();
        input.value = '';
      }
    }
  };
  