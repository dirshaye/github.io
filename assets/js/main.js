(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  let portfolioIsotope = null

  /**
   * Activate a section by hash (or return to Home if empty / '#header')
   */
  const activateSection = (hash, { updateHistory = false, instant = false } = {}) => {
    let navbar = select('#navbar')
    let header = select('#header')
    let sections = select('section', true)
    let navlinks = select('#navbar .nav-link', true)

    const isHome = !hash || hash === '#header'
    const section = isHome ? null : select(hash)

    if (!isHome && (!section || section.tagName !== 'SECTION')) {
      return false
    }

    navlinks.forEach((item) => {
      const href = item.getAttribute('href')
      if ((isHome && href === '#header') || (!isHome && href === hash)) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    })

    if (navbar.classList.contains('navbar-mobile')) {
      navbar.classList.remove('navbar-mobile')
      let navbarToggle = select('.mobile-nav-toggle')
      navbarToggle.classList.toggle('bi-list')
      navbarToggle.classList.toggle('bi-x')
    }

    if (updateHistory) {
      const targetUrl = isHome
        ? window.location.pathname + window.location.search
        : hash
      if (window.location.hash !== (isHome ? '' : hash)) {
        history.pushState(null, '', targetUrl)
      }
    }

    if (isHome) {
      header.classList.remove('header-top')
      sections.forEach((item) => {
        item.classList.remove('section-show')
      })
      return true
    }

    const showTargetSection = () => {
      sections.forEach((item) => {
        item.classList.remove('section-show')
      })
      section.classList.add('section-show')
      if (hash === '#portfolio' && portfolioIsotope) {
        portfolioIsotope.layout()
      }
    }

    if (!header.classList.contains('header-top')) {
      header.classList.add('header-top')
      if (instant) {
        showTargetSection()
      } else {
        setTimeout(showTargetSection, 350)
      }
    } else {
      showTargetSection()
    }

    scrollto(hash)
    return true
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scroll with offset on links with a class name .nav-link
   */
  on('click', '#navbar .nav-link', function(e) {
    if (this.hash && select(this.hash)) {
      e.preventDefault()
      activateSection(this.hash, { updateHistory: true })
    }
  }, true)

  /**
   * Activate/show sections on load with hash links
   */
  const initFromHash = () => {
    if (window.location.hash) {
      activateSection(window.location.hash, { instant: true })
    }
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initFromHash)
  } else {
    initFromHash()
  }

  /**
   * Support browser Back/Forward navigation between sections
   */
  window.addEventListener('popstate', () => {
    activateSection(window.location.hash || '#header')
  })

  /**
   * Portfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer && portfolioContainer.querySelectorAll('.portfolio-item').length > 1) {
      portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

})()
