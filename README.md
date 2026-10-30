# C++ Learning Hub

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

A structured, hands-on C++ learning resource covering fundamentals through modern C++20 — with chapter theory, coded examples, exercises, reference solutions, and chapter quizzes. Culminates in a full-stack capstone project.

**Live site:** [cpp-learning-hub.netlify.app](https://cpp-learning-hub.netlify.app) *(deploy to set your URL)*  
**Author:** [Aditya Pratap Bhuyan](https://linkedin.com/in/adityabhuyan)  
**License:** GNU General Public License v3.0

---

## 📚 Curriculum (16 Chapters)

| # | Chapter | Topics |
|---|---------|--------|
| 01 | Introduction to C++ | History, compilation pipeline, `main()`, I/O streams |
| 02 | Variables, Types & Operators | Primitive types, casting, arithmetic, bitwise ops |
| 03 | Control Flow | if/else, switch, for, while, do-while, break/continue |
| 04 | Functions | Declaration, overloading, default args, recursion, scope |
| 05 | Arrays & Strings | 1D/2D arrays, C-strings, `std::string`, string methods |
| 06 | Pointers & References | Pointer arithmetic, `nullptr`, references, dynamic memory |
| 07 | OOP — Basics | Classes, constructors, destructors, access specifiers, `this` |
| 08 | OOP — Inheritance & Polymorphism | Virtual functions, abstract classes, `override`, `final` |
| 09 | Templates | Function/class templates, specialization, non-type params |
| 10 | STL — Containers | `vector`, `map`, `set`, `stack`, `queue`, `priority_queue` |
| 11 | STL — Algorithms & Iterators | `sort`, `find`, `transform`, `accumulate`, iterators |
| 12 | Memory Management | `new/delete`, `unique_ptr`, `shared_ptr`, `weak_ptr`, RAII |
| 13 | Exception Handling | `try/catch/throw`, custom exceptions, exception safety |
| 14 | File I/O | `fstream`, text & binary files, `std::filesystem` (C++17) |
| 15 | Modern C++ (C++11–C++20) | Lambda, `auto`, move semantics, ranges, concepts |
| 16 | **Capstone Project** 🏆 | Bank Account Management System — all concepts integrated |

Each chapter contains:
- **📖 Learning** — full theory with inline code, tables, and callouts
- **💻 Examples** — 3–4 fully compiled, explained programs
- **✏️ Exercises** — 5 graded practice problems (Easy → Hard)
- **✅ Solutions** — reference solutions with explanations
- **🧠 Quiz** — 5 multiple-choice self-assessment questions

---

## 🗂️ Project Structure

```
cpp-learning-hub/
├── index.html                          ← Landing page
├── netlify.toml                        ← Netlify deploy config
├── assets/
│   ├── css/style.css                   ← Global stylesheet (light/dark)
│   ├── js/
│   │   ├── nav.js                      ← Sidebar + theme toggle
│   │   └── quiz.js                     ← Quiz engine
│   └── partials/sidebar.html           ← Sidebar HTML fragment (reference)
└── chapters/
    ├── ch01-introduction/
    │   ├── index.html                  ← Learning
    │   ├── examples.html
    │   ├── exercises.html
    │   ├── solutions.html
    │   └── quiz.html
    ├── ch02-variables-types-operators/
    ├── ch03-control-flow/
    ├── ch04-functions/
    ├── ch05-arrays-strings/
    ├── ch06-pointers-references/
    ├── ch07-oop-basics/
    ├── ch08-oop-inheritance/
    ├── ch09-templates/
    ├── ch10-stl-containers/
    ├── ch11-stl-algorithms/
    ├── ch12-memory-management/
    ├── ch13-exception-handling/
    ├── ch14-file-io/
    ├── ch15-modern-cpp/
    └── ch16-capstone/
        ├── index.html                  ← Project brief
        ├── walkthrough.html            ← Step-by-step guide
        └── solution.html               ← Reference implementation
```

---

## 🚀 Deploying to Netlify

### Option A — Netlify Drop (instant, no account needed)
1. Zip the entire `cpp-learning-hub/` folder
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the zip

### Option B — Netlify + GitHub (recommended for ongoing updates)
1. Push this repo to GitHub: `https://github.com/aditya-bhuyan/cpp-learning-hub`
2. Log in to [app.netlify.com](https://app.netlify.com)
3. Click **"Add new site" → "Import an existing project"**
4. Connect your GitHub account → select `cpp-learning-hub`
5. Build settings:
   - **Publish directory:** `.` (root)
   - **Build command:** *(leave blank — this is a static site)*
6. Click **Deploy site**

The `netlify.toml` in the root handles SPA-style redirects automatically.

---

## 🛠️ Running Locally

No build step needed — it's pure HTML/CSS/JS.

**Option 1 — Python (zero dependencies):**
```bash
cd cpp-learning-hub
python3 -m http.server 8080
# Open http://localhost:8080
```

**Option 2 — Node.js `serve`:**
```bash
npx serve cpp-learning-hub -p 8080
```

**Option 3 — VS Code Live Server extension:**
Right-click `index.html` → "Open with Live Server"

---

## 🎨 Features

- **Left sidebar navigation** — collapsible per chapter, persists open/close state
- **Dark / Light mode** — toggle button, remembers preference
- **Syntax-highlighted code** — dark code blocks with Copy button
- **Interactive quizzes** — instant feedback per question, overall score
- **Responsive design** — works on mobile, tablet, desktop
- **No external dependencies** — no CDN, no framework, works offline

---

## 🤝 Contributing

Contributions are welcome! To add content or fix errors:

1. Fork the repository
2. Create a branch: `git checkout -b fix/ch03-typo`
3. Make your changes
4. Submit a Pull Request

Please follow the existing HTML structure for consistency. Each page should use the shared CSS classes (`callout`, `exercise-card`, `solution-card`, `quiz-question`, etc.).

---

## 📄 License

This project is licensed under the **GNU General Public License v3.0**.  
See the [LICENSE](LICENSE) file for details.

You are free to use, share, and modify this content as long as derivative works are also released under GPL v3.

---

*Made with ❤️ by [Aditya Pratap Bhuyan](https://linkedin.com/in/adityabhuyan)*
