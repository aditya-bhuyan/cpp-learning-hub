/**
 * C++ Learning Hub — Quiz Engine
 * Author : Aditya Pratap Bhuyan
 * License: GNU GPL v3
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quiz-form');
    const scoreBox = document.getElementById('quiz-score');
    if (!form) return;

    // Each question has data-correct="a|b|c|d" on .quiz-question
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let correct = 0;
      let total   = 0;

      document.querySelectorAll('.quiz-question').forEach(q => {
        total++;
        const rightAnswer = q.dataset.correct;
        const selected = q.querySelector('input[type="radio"]:checked');
        const feedback = q.querySelector('.quiz-feedback');

        // Reset
        if (feedback) { feedback.style.display = 'none'; feedback.className = 'quiz-feedback'; }
        q.querySelectorAll('label').forEach(l => l.style.background = '');

        if (!selected) {
          if (feedback) {
            feedback.textContent = '⚠ Please select an answer.';
            feedback.className = 'quiz-feedback wrong';
            feedback.style.display = 'block';
          }
          return;
        }

        const chosen = selected.value;
        if (chosen === rightAnswer) {
          correct++;
          if (feedback) {
            feedback.textContent = '✔ Correct!';
            feedback.className = 'quiz-feedback correct';
            feedback.style.display = 'block';
          }
          // Highlight chosen label green
          const lbl = q.querySelector(`label[data-value="${chosen}"]`);
          if (lbl) lbl.style.background = 'rgba(26,127,75,.12)';
        } else {
          if (feedback) {
            const correctLabel = q.querySelector(`label[data-value="${rightAnswer}"]`);
            const correctText  = correctLabel ? correctLabel.textContent.trim() : rightAnswer.toUpperCase();
            feedback.textContent = `✘ Incorrect. Correct answer: ${correctText}`;
            feedback.className = 'quiz-feedback wrong';
            feedback.style.display = 'block';
          }
          // Highlight chosen label red, correct label green
          const wrongLbl   = q.querySelector(`label[data-value="${chosen}"]`);
          const correctLbl = q.querySelector(`label[data-value="${rightAnswer}"]`);
          if (wrongLbl)   wrongLbl.style.background   = 'rgba(192,57,43,.1)';
          if (correctLbl) correctLbl.style.background = 'rgba(26,127,75,.12)';
        }
      });

      if (scoreBox) {
        const pct = Math.round((correct / total) * 100);
        const grade = pct >= 80 ? '🏆 Excellent!' : pct >= 60 ? '👍 Good effort!' : '📖 Keep studying!';
        scoreBox.innerHTML = `Your score: <strong>${correct} / ${total}</strong> (${pct}%) &nbsp;${grade}`;
        scoreBox.style.display = 'block';
        scoreBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    // Reset button
    const resetBtn = document.getElementById('quiz-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        form.reset();
        if (scoreBox) scoreBox.style.display = 'none';
        document.querySelectorAll('.quiz-feedback').forEach(f => f.style.display = 'none');
        document.querySelectorAll('.quiz-options label').forEach(l => l.style.background = '');
      });
    }
  });
})();
