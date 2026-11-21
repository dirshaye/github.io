import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import './styles/main.css';

import GLightbox from 'glightbox';

interface ActivateOptions {
  updateHistory?: boolean;
  instant?: boolean;
}

const SECTION_TRANSITION_MS = 350;

function select<T extends Element = HTMLElement>(selector: string): T | null {
  return document.querySelector<T>(selector.trim());
}

function selectAll<T extends Element = HTMLElement>(selector: string): T[] {
  return [...document.querySelectorAll<T>(selector.trim())];
}

function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function closeMobileNav(): void {
  const navbar = select<HTMLElement>('#navbar');
  if (!navbar?.classList.contains('navbar-mobile')) {
    return;
  }

  navbar.classList.remove('navbar-mobile');
  const toggle = select<HTMLElement>('.mobile-nav-toggle');
  if (toggle) {
    toggle.classList.toggle('bi-list');
    toggle.classList.toggle('bi-x');
  }
}

function activateSection(hash: string, options: ActivateOptions = {}): boolean {
  const { updateHistory = false, instant = false } = options;

  const header = select<HTMLElement>('#header');
  if (!header) {
    return false;
  }

  const sections = selectAll<HTMLElement>('section');
  const navLinks = selectAll<HTMLAnchorElement>('#navbar .nav-link');

  const isHome = !hash || hash === '#header';
  const targetSection = isHome ? null : select<HTMLElement>(hash);

  if (!isHome && (!targetSection || targetSection.tagName !== 'SECTION')) {
    return false;
  }

  for (const link of navLinks) {
    const href = link.getAttribute('href');
    const isActive = (isHome && href === '#header') || (!isHome && href === hash);
    link.classList.toggle('active', isActive);
  }

  closeMobileNav();

  if (updateHistory) {
    const targetUrl = isHome
      ? window.location.pathname + window.location.search
      : hash;
    if (window.location.hash !== (isHome ? '' : hash)) {
      window.history.pushState(null, '', targetUrl);
    }
  }

  if (isHome) {
    header.classList.remove('header-top');
    for (const section of sections) {
      section.classList.remove('section-show');
    }
    return true;
  }

  const showTargetSection = (): void => {
    for (const section of sections) {
      section.classList.remove('section-show');
    }
    targetSection?.classList.add('section-show');
  };

  if (!header.classList.contains('header-top')) {
    header.classList.add('header-top');
    if (instant) {
      showTargetSection();
    } else {
      window.setTimeout(showTargetSection, SECTION_TRANSITION_MS);
    }
  } else {
    showTargetSection();
  }

  scrollToTop();
  return true;
}

function initNavigation(): void {
  const mobileNavToggle = select<HTMLElement>('.mobile-nav-toggle');
  mobileNavToggle?.addEventListener('click', () => {
    const navbar = select<HTMLElement>('#navbar');
    navbar?.classList.toggle('navbar-mobile');
    mobileNavToggle.classList.toggle('bi-list');
    mobileNavToggle.classList.toggle('bi-x');
  });

  const navLinks = selectAll<HTMLAnchorElement>('#navbar .nav-link');
  for (const link of navLinks) {
    link.addEventListener('click', (event: MouseEvent) => {
      if (link.hash && select(link.hash)) {
        event.preventDefault();
        activateSection(link.hash, { updateHistory: true });
      }
    });
  }

  if (window.location.hash) {
    activateSection(window.location.hash, { instant: true });
  }

  window.addEventListener('popstate', () => {
    activateSection(window.location.hash || '#header');
  });
}

function initLightboxes(): void {
  GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh',
  });
}

function bootstrap(): void {
  initNavigation();
  initLightboxes();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
