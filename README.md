# TeqVault.study

A structured, self-contained Java learning curriculum — from absolute beginner to job-ready junior developer. No sign-ups, no subscriptions, no fluff. Just the material.

## What's Inside

17 courses across 7 phases, each delivered as a standalone HTML file. No frameworks, no build step, no internet connection required once downloaded. Every course includes sidebar navigation, progress tracking, quizzes with explanations, and coding challenges.

| Phase | Focus | Courses |
|-------|-------|---------|
| 1 — Preparation | Tooling & workflow | Java Pre-Course, IntelliJ IDEA, Git & GitHub |
| 2 — Fundamentals | Core language | Java Beginner Course, Core Java Portal |
| 3 — OOP Concepts | Object-oriented design | OOP in Java, Advanced OOP |
| 4 — Data Structures | Modern type system | Enums & Records, Generics I, Generics II |
| 5 — Modern Java | Functional style | Lambdas & Streams, Optional, Concurrency |
| 6 — Architecture | Design thinking | Design Patterns |
| 7 — Enterprise | Industry frameworks | Spring Boot |

## Recommended Reading

These two books pair directly with the curriculum:

- **Head First Java** — Kathy Sierra & Bert Bates. Phases 1–3. The best beginner Java book written.
- **Modern Java in Action** — Urma, Fusco & Mycroft. Phases 4–7. Covers lambdas, streams, concurrency, and modern Java features in depth.

## Course Features

Each course is a single `.html` file with:

- Sidebar navigation with per-lesson progress tracking
- Syntax-highlighted code blocks with filename labels
- Quizzes with immediate feedback and explanations
- Coding challenges at the end of key lessons
- Responsive layout — works on desktop and mobile
- No external dependencies at runtime (fonts load from Google Fonts; everything else is inline)

Interactive tools built into specific courses include a live Git branch visualizer, condition builder, loop step visualizer, execution trace tool, shortcut trainer, and type-identification exercises.

## Structure

```
teqvault.study/
├── index.html                          ← roadmap homepage
├── css/
│   └── style.css
└── pages/
    ├── java-pre-course.html
    ├── intellij-idea-course.html
    ├── git-github-course.html
    ├── java-beginner-course.html
    ├── corejava-portal.html
    ├── oop-java-course.html
    ├── oop-java-advanced-course.html
    ├── java_enums_records_lesson.html
    ├── java_generics_lesson.html
    ├── java_generics_lesson_1.html
    ├── java_lambdas_streams_lesson.html
    ├── java_optional_lesson.html
    ├── java_concurrency_lesson.html
    ├── java_design_patterns_lesson.html
    └── springboot-course.html
```

## Hosting

The site is hosted at [teqvault.study](https://teqvault.study). All files are static — any static host works (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

## Philosophy

Every course is pitched at a genuinely challenging level. The beginner content is not dumbed down — it's scaffolded. Students who work through the full curriculum will have covered the material expected of a junior Java developer at most companies, including backend API development with Spring Boot.

The curriculum is designed to be sequential but each course is self-contained enough to work as a standalone reference.

---

*Built for students who want to get hired, not just learn.*
