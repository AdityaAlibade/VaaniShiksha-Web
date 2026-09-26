/**
 * VaaniShiksha AI - Clean Static Site Interactivity & Reliable Downloads
 * High performance, zero external libraries, fully mobile-optimized.
 */

// Download & Releases Configuration
const DOWNLOAD_CONFIG = {
  // Direct Android APK package download with exact file name
  apkUrl: 'downloads/VaaniShiksha%20AI.apk',
  fileName: 'VaaniShiksha AI.apk',
  // Official GitHub Releases portal
  releasesUrl: 'https://github.com/AdityaAlibade/VaaniShiksha-Web/releases',
  githubRepoUrl: 'https://github.com/AdityaAlibade/VaaniShiksha-Web',
  version: '1.0.0',
  size: '~550 MB'
};

document.addEventListener('DOMContentLoaded', () => {
  const siteHeader = document.getElementById('siteHeader');
  const downloadModal = document.getElementById('downloadModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDownloadBtn = document.getElementById('modalDownloadBtn');
  const modalReleasesBtn = document.getElementById('modalReleasesBtn');
  const modalDownloadBtnText = document.getElementById('modalDownloadBtnText');

  // 1. Navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Smooth scroll offset handling for anchor links (excluding modal triggers)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#' || targetId === '#downloadModal') return;
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

  // 3. Download Modal Open/Close Management
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
    // Reset modal button text if changed
    if (modalDownloadBtnText) {
      modalDownloadBtnText.textContent = `Download Official APK (v${DOWNLOAD_CONFIG.version})`;
    }
  }

  // 4. Page download buttons ONLY OPEN the modal dialog (Does NOT download at start)
  const pageDownloadButtons = document.querySelectorAll(
    '#headerDownloadBtn, #heroDownloadBtn, #finalDownloadBtn, [data-open-modal="download"]'
  );

  pageDownloadButtons.forEach(btn => {
    btn.addEventListener('click', openDownloadModal);
  });

  // 5. When clicking the download button ON THE CARD, start downloading "VaaniShiksha AI.apk"
  if (modalDownloadBtn) {
    modalDownloadBtn.setAttribute('href', DOWNLOAD_CONFIG.apkUrl);
    modalDownloadBtn.setAttribute('download', DOWNLOAD_CONFIG.fileName);

    modalDownloadBtn.addEventListener('click', () => {
      // Allow native browser download to preserve exact filename "VaaniShiksha AI.apk"
      if (modalDownloadBtnText) {
        modalDownloadBtnText.textContent = '✓ Downloading APK...';
        setTimeout(() => {
          if (modalDownloadBtnText) {
            modalDownloadBtnText.textContent = `Download Official APK (v${DOWNLOAD_CONFIG.version})`;
          }
        }, 3500);
      }
    });
  }

  // 6. When clicking the releases button ON THE CARD, take user to GitHub!
  if (modalReleasesBtn) {
    modalReleasesBtn.href = DOWNLOAD_CONFIG.releasesUrl;
    modalReleasesBtn.target = '_blank';
    modalReleasesBtn.rel = 'noopener noreferrer';
  }

  // 7. Close Modal Event Handlers
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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && downloadModal && downloadModal.classList.contains('active')) {
      closeDownloadModal();
    }
  });
});
