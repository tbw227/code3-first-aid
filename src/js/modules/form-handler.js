export function initFormHandler() {
  document.querySelectorAll('[data-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const button = form.querySelector('button[type="submit"]');
      if (!button || button.disabled) {
        return;
      }

      const originalHtml = button.innerHTML;
      button.disabled = true;
      button.innerHTML =
        '<span class="material-symbols-outlined animate-spin">progress_activity</span> Processing...';

      window.setTimeout(() => {
        button.classList.remove('bg-primary', 'bg-obsidian', 'bg-accent-red');
        button.classList.add('bg-green-700');
        button.innerHTML =
          '<span class="material-symbols-outlined">check</span> Request Sent Successfully';

        window.setTimeout(() => {
          button.classList.remove('bg-green-700');
          if (form.dataset.form === 'fire-enrollment') {
            button.classList.add('bg-primary');
          } else {
            button.classList.add('bg-obsidian');
          }
          button.innerHTML = originalHtml;
          button.disabled = false;
          form.reset();
        }, 3000);
      }, 1500);
    });
  });

  document.querySelectorAll('[data-form] input, [data-form] select, [data-form] textarea').forEach((input) => {
    input.addEventListener('focus', () => {
      const label = input.closest('.form-field')?.querySelector('label');
      label?.classList.add('text-primary');
    });

    input.addEventListener('blur', () => {
      const label = input.closest('.form-field')?.querySelector('label');
      if (label && !input.value) {
        label.classList.remove('text-primary');
      }
    });
  });
}
