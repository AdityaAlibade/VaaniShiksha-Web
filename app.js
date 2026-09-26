/**
 * VaaniShiksha AI - Clean Static Site Interactivity
 * Zero dependencies, ultra lightweight, fast loading, deployment-ready.
 */

// Download Configuration
const DOWNLOAD_CONFIG = {
  // Official release direct download link
  latestApkUrl: 'https://github.com/AdityaAlibade/VaaniShiksha-Web/releases/latest/download/VaaniShikshaAI.apk',
  // GitHub Releases overview & mirrors
  releasesUrl: 'https://github.com/AdityaAlibade/VaaniShiksha-Web/releases',
  version: '1.0.0',
  size: '~550 MB'
};

document.addEventListener('DOMContentLoaded', () => {
  const siteHeader = document.getElementById('siteHeader');
  const downloadModal = document.getElementById('downloadModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDownloadBtn = document.getElementById('modalDownloadBtn');
  const modalReleasesBtn = document.getElementById('modalReleasesBtn');

  // 1. Navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Smooth scroll offset handling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#downloadModal') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 3. Download Modal Management
  function openDownloadModal(e) {
    if (e) e.preventDefault();
    if (!downloadModal) return;
    downloadModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDownloadModal() {
    if (!downloadModal) return;
    downloadModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Bind all download buttons to trigger modal
  document.querySelectorAll('[data-open-modal="download"], .btn-nav-download, .btn-hero-cta, .btn-download-mega').forEach(btn => {
    btn.addEventListener('click', openDownloadModal);
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeDownloadModal);
  }

  if (downloadModal) {
    downloadModal.addEventListener('click', (e) => {
      if (e.target === downloadModal) {
        closeDownloadModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && downloadModal && downloadModal.classList.contains('active')) {
      closeDownloadModal();
    }
  });

  // Set modal download targets
  if (modalDownloadBtn) {
    modalDownloadBtn.href = DOWNLOAD_CONFIG.latestApkUrl;
  }
  if (modalReleasesBtn) {
    modalReleasesBtn.href = DOWNLOAD_CONFIG.releasesUrl;
  }
});
