// ============================================================
//  SHREYASH RUKE · PORTFOLIO INTERACTIONS
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Shreyash Ruke · Portfolio loaded successfully!');

  // ---- 1. SKILL TAGS CLICK FEEDBACK ----
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach(tag => {
    tag.addEventListener('click', function(e) {
      // Visual feedback
      this.style.backgroundColor = '#f5cba0';
      this.style.borderColor = '#d95c14';
      this.style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        this.style.backgroundColor = '';
        this.style.borderColor = '';
        this.style.transform = '';
      }, 250);
      
      // Optional: log the skill
      console.log(`💡 Skill clicked: ${this.textContent.trim()}`);
    });
  });

  // ---- 2. PROFILE IMAGE INTERACTION ----
  const profileImg = document.querySelector('.profile-img');
  if (profileImg) {
    profileImg.addEventListener('click', function() {
      this.style.transform = 'scale(0.92)';
      this.style.borderColor = '#bf4d0e';
      
      setTimeout(() => {
        this.style.transform = 'scale(1.03)';
      }, 150);
      
      setTimeout(() => {
        this.style.transform = '';
        this.style.borderColor = '';
      }, 400);
      
      console.log('📸 Profile image clicked!');
    });
  }

  // ---- 3. PROJECT LINKS TRACKING ----
  const projectLinks = document.querySelectorAll('.project-title a');
  projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const projectName = this.closest('.project-item').querySelector('h3')?.textContent || 'Unknown';
      console.log(`🔗 Clicked project link: "${projectName}" → ${this.href}`);
    });
  });

  // ---- 4. CERTIFICATION ITEMS HOVER EFFECT (enhanced) ----
  const certItems = document.querySelectorAll('.cert-item');
  certItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#fde8d0';
      this.style.transform = 'translateX(6px)';
    });
    item.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '';
      this.style.transform = '';
    });
  });

  // ---- 5. CARD ENTER/LEAVE (subtle) ----
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 12px 36px rgba(180, 120, 80, 0.12)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = '';
    });
  });

  // ---- 6. BUTTON CLICK FEEDBACK ----
  const buttons = document.querySelectorAll('.btn-outline');
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const text = this.textContent.trim();
      console.log(`🔘 Button clicked: ${text}`);
      
      // Visual pulse
      this.style.transform = 'scale(0.94)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
      
      // Show a friendly toast message (optional)
      showToast(`✨ ${text} — coming soon!`);
    });
  });

  // ---- 7. TOAST NOTIFICATION SYSTEM ----
  function showToast(message) {
    // Remove existing toast if any
    const oldToast = document.querySelector('.custom-toast');
    if (oldToast) oldToast.remove();

    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.textContent = message;
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#d95c14',
      color: '#fff',
      padding: '12px 28px',
      borderRadius: '50px',
      fontFamily: "'Inter', sans-serif",
      fontWeight: '600',
      fontSize: '0.95rem',
      boxShadow: '0 8px 32px rgba(217, 92, 20, 0.35)',
      zIndex: '9999',
      opacity: '0',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      transform: 'translateX(-50%) translateY(20px)',
      border: '1px solid rgba(255,255,255,0.15)',
      backdropFilter: 'blur(4px)',
      letterSpacing: '0.3px'
    });
    document.body.appendChild(toast);

    // Fade in
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    }, 50);

    // Auto remove after 3s
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(() => toast.remove(), 400);
    }, 2800);
  }

  // ---- 8. KEYBOARD ACCESSIBILITY: ESC to close any toast ----
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const toast = document.querySelector('.custom-toast');
      if (toast) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => toast.remove(), 400);
      }
    }
  });

  // ---- 9. CONSOLE WELCOME with style ----
  console.log('%c✨ Shreyash Ruke Portfolio ✨', 'font-size:20px; font-weight:bold; color:#d95c14;');
  console.log('%c👨‍💻 Aspiring Software & Cybersecurity Engineer', 'font-size:14px; color:#5a4030;');
  console.log('%c📄 Based on the latest resume', 'font-size:12px; color:#8a7a6a;');

  // ---- 10. DYNAMIC YEAR IN FOOTER (optional enhancement) ----
  const footerSmall = document.querySelector('.footer-small');
  if (footerSmall) {
    const currentYear = new Date().getFullYear();
    footerSmall.textContent = `All information based on resume · ${currentYear}`;
  }

  console.log('✅ All interactions ready!');
});
