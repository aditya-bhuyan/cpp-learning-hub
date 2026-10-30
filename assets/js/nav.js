/**
 * C++ Learning Hub — Sidebar Navigation
 * Author : Aditya Pratap Bhuyan
 * License: GNU GPL v3
 */

(function () {
  'use strict';

  /* ── Theme ─────────────────────────────────────────── */
  const THEME_KEY = 'cpphub-theme';

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = t === 'dark' ? '☀ Light' : '☾ Dark';
    localStorage.setItem(THEME_KEY, t);
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const preferred = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(preferred);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ── Sidebar toggle ─────────────────────────────────── */
  const COLLAPSED_KEY = 'cpphub-nav-collapsed';

  function initSidebar() {
    const sidebar  = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    const isMobile = () => window.innerWidth <= 768;

    function setCollapsed(collapsed) {
      if (isMobile()) {
        sidebar.classList.toggle('open', !collapsed);
      } else {
        sidebar.classList.toggle('collapsed', collapsed);
        document.body.classList.toggle('nav-collapsed', collapsed);
      }
      localStorage.setItem(COLLAPSED_KEY, collapsed ? '1' : '0');
    }

    // Restore saved state on desktop
    if (!isMobile()) {
      const saved = localStorage.getItem(COLLAPSED_KEY);
      if (saved === '1') setCollapsed(true);
    }

    if (hamburger) {
      hamburger.addEventListener('click', () => {
        if (isMobile()) {
          const isOpen = sidebar.classList.contains('open');
          setCollapsed(isOpen);
        } else {
          const isCollapsed = sidebar.classList.contains('collapsed');
          setCollapsed(!isCollapsed);
        }
      });
    }

    // Close sidebar on mobile when a link is clicked
    if (isMobile()) {
      sidebar.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => setCollapsed(true));
      });
    }
  }

  /* ── Chapter accordion ──────────────────────────────── */
  function initAccordion() {
    const chapters = document.querySelectorAll('.nav-chapter');
    const OPEN_KEY = 'cpphub-open-chapter';
    const savedOpen = localStorage.getItem(OPEN_KEY);

    chapters.forEach(ch => {
      const header = ch.querySelector('.nav-chapter-header');
      const id = ch.dataset.chapter;

      // Restore open state
      if (id && id === savedOpen) ch.classList.add('open');

      if (header) {
        header.addEventListener('click', () => {
          const isOpen = ch.classList.contains('open');
          // Close all
          chapters.forEach(c => c.classList.remove('open'));
          if (!isOpen) {
            ch.classList.add('open');
            localStorage.setItem(OPEN_KEY, id || '');
          } else {
            localStorage.removeItem(OPEN_KEY);
          }
        });
      }
    });

    // Auto-open chapter whose link matches current URL
    autoHighlight();
  }

  /* ── Highlight active link ──────────────────────────── */
  function autoHighlight() {
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    const links = document.querySelectorAll('#sidebar a');

    links.forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      // Normalise
      const aPath = href.replace(/\/$/, '');
      if (path.endsWith(aPath) || path === aPath) {
        a.classList.add('active');
        // Open parent chapter
        const chapter = a.closest('.nav-chapter');
        if (chapter) {
          chapter.classList.add('open');
          const header = chapter.querySelector('.nav-chapter-header');
          if (header) header.classList.add('active');
        }
      }
    });
  }

  /* ── Copy buttons ───────────────────────────────────── */
  function initCopyButtons() {
    document.querySelectorAll('pre').forEach(pre => {
      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.textContent = 'Copy';
      pre.style.position = 'relative';
      pre.appendChild(btn);
      btn.addEventListener('click', () => {
        const code = pre.querySelector('code') || pre;
        navigator.clipboard.writeText(code.innerText).then(() => {
          btn.textContent = 'Copied!';
          setTimeout(() => btn.textContent = 'Copy', 2000);
        });
      });
    });
  }

  /* ── Boot ───────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSidebar();
    initAccordion();
    initCopyButtons();
  });
})();
