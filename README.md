# TeqVault.study / TeqStudy

TeqStudy is a static, self-contained developer learning site built around one idea:

> Pick a track. Build things. Get hired.

The site started as a Java-focused curriculum and has grown into a multi-track learning platform covering software development, AI, DevOps, game development, networking, cybersecurity, embedded systems, trading fundamentals, and developer tools.

No app server is required. Courses are delivered as standalone HTML pages with supporting CSS/JS assets.

---

## Current Site Snapshot

- **Homepage:** `index.html`
- **Published site:** `https://teqvault.study`
- **Format:** static HTML, CSS, and JavaScript
- **Tracks shown on the homepage:** 11
- **Courses / resources shown on the homepage:** 42+
- **New major addition:** full **Embedded Systems & IoT** track with 8 course pages

---

## Main Tracks

| Track | Focus |
|---|---|
| Java Mastery Roadmap | Java fundamentals through Spring Boot backend development |
| Python Mastery Roadmap | Python fundamentals, automation, APIs, AI integration, and quality practices |
| AI & Prompt Engineering | Prompting, AI workflows, agents, RAG, and practical AI usage |
| DevOps | Docker, Kubernetes, deployment workflows, and CKAD-style skills |
| Game Development | Unity mobile game development, VFX, Android Studio, and game production |
| Embedded Systems & IoT | Raspberry Pi, Arduino, ESP32, Linux devices, robotics, sensors, and edge AI |
| Networking | IP addressing, routing, wireless, troubleshooting, monitoring, and job-ready networking |
| Trading & Investing | Market fundamentals, forex, risk management, paper trading, and discipline |
| Dev Tools & Environments | CLion, Bash, PowerShell, terminals, and workflow tooling |
| Cybersecurity | Beginner-friendly digital safety, threat awareness, and defensive habits |

---

## Embedded Systems & IoT Track

The Embedded Systems & IoT track is now a full 8-course hardware-builder pathway.

| Course | File | Status |
|---|---|---|
| 01 — Raspberry Pi for Complete Beginners | `pages/raspberry-pi-course.html` | Live |
| 02 — Arduino & Electronics Fundamentals | `pages/arduino-electronics-course.html` | Live |
| 03 — ESP32 & Internet of Things | `pages/esp32-iot-course.html` | Live |
| 04 — Raspberry Pi Intermediate Projects | `pages/raspberry-pi-intermediate-course.html` | Live |
| 05 — Embedded Linux & Device Services | `pages/embedded-linux-device-services-course.html` | Live |
| 06 — Robotics with Sensors & Motors | `pages/robotics-sensors-motors-course.html` | Live |
| 07 — Edge AI & Computer Vision | `pages/edge-ai-computer-vision-course.html` | Live |
| 08 — Build & Ship an Embedded Product | `pages/build-ship-embedded-product-course.html` | Live |

Track portal:

```text
pages/embedded-systems-track.html
```

Supporting CSS:

```text
css/embedded-systems-track.css
css/raspberry-pi-course.css
css/arduino-electronics-course.css
css/esp32-iot-course.css
css/raspberry-pi-intermediate-course.css
css/embedded-linux-device-services-course.css
css/robotics-sensors-motors-course.css
css/edge-ai-computer-vision-course.css
css/build-ship-embedded-product-course.css
```

---

## Course Features

Most course pages use the same learning pattern:

- Sidebar or module navigation
- Mobile-friendly lesson selector where supported
- Progress tracking with browser storage
- Quizzes with immediate feedback
- Code blocks and command examples
- Labs, projects, and capstones
- Responsive layouts for desktop and mobile
- Static pages that can be hosted anywhere

Interactive tools across the site include practice trainers, quiz blocks, visualizers, paper trading simulation, subnetting practice, and course-specific exercises.

---

## Recommended Project Structure

```text
teqvault.study/
├── index.html
├── README.md
├── css/
│   ├── index.css
│   ├── mobile-fixes.css
│   ├── oop-java-course.css
│   ├── embedded-systems-track.css
│   ├── raspberry-pi-course.css
│   ├── arduino-electronics-course.css
│   ├── esp32-iot-course.css
│   ├── raspberry-pi-intermediate-course.css
│   ├── embedded-linux-device-services-course.css
│   ├── robotics-sensors-motors-course.css
│   ├── edge-ai-computer-vision-course.css
│   └── build-ship-embedded-product-course.css
├── js/
│   └── optional shared scripts
├── images/
│   └── course images and diagrams
└── pages/
    ├── embedded-systems-track.html
    ├── raspberry-pi-course.html
    ├── arduino-electronics-course.html
    ├── esp32-iot-course.html
    ├── raspberry-pi-intermediate-course.html
    ├── embedded-linux-device-services-course.html
    ├── robotics-sensors-motors-course.html
    ├── edge-ai-computer-vision-course.html
    ├── build-ship-embedded-product-course.html
    ├── java-pre-course.html
    ├── intellij-idea-course.html
    ├── git-github-course.html
    ├── java-beginner-course.html
    ├── corejava-portal.html
    ├── loops-course.html
    ├── arrays-course.html
    ├── oop-java-course.html
    ├── oop-java-advanced-course.html
    ├── java_enums_records_lesson.html
    ├── java_generics_lesson.html
    ├── java_lambdas_streams_lesson.html
    ├── java_optional_lesson.html
    ├── java_concurrency_lesson.html
    ├── java_design_patterns_lesson.html
    ├── springboot-course.html
    └── other track pages...
```

Do not delete existing `pages/`, `css/`, `images/`, or shared style files when applying a track update. The generated Embedded Systems & IoT files assume the rest of the TeqStudy site is already present.

---

## Applying the Embedded Systems & IoT Update

Copy the update package contents into the matching locations in the site root:

```text
index.html
README.md
css/*.css
pages/*.html
```

Then verify:

1. Open `index.html`.
2. Click **Embedded Systems & IoT**.
3. Confirm `pages/embedded-systems-track.html` opens.
4. Open all 8 embedded course pages.
5. Test progress bars, quizzes, sidebar navigation, and mobile layout.
6. Confirm all shared styles still load correctly.
7. Deploy to your static host.

---

## Hosting

The site is static, so it can be hosted on:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Any traditional web host
- Any static file server

The live production domain is:

```text
https://teqvault.study
```

Fonts and AdSense load externally where included. Course content, layout, and scripts are otherwise static files.

---

## Content Philosophy

TeqStudy is designed for learners who want to build real things, not just collect definitions.

The goal is to make each course feel practical, structured, and portfolio-oriented:

- Learn the concept.
- Build a small thing.
- Combine those skills into a bigger thing.
- Finish with a capstone that can be shown, shipped, or expanded.

The original Java curriculum remains the flagship software-development path, but the platform now supports a broader builder ecosystem: code, cloud, games, networks, hardware, AI, and career-focused practice.

---

## Latest Update

**Embedded Systems & IoT full track added.**

This update adds a complete 8-course embedded pathway and updates the homepage so Embedded Systems opens a dedicated track portal instead of pointing directly to a single Raspberry Pi course.

---

*Built for students who want to get hired — and for builders who want to ship.*


## Capstone navigation fix

The Embedded Systems & IoT track pages now route final capstone/finish actions forward through the course sequence instead of sending learners back to Course 01. The track portal capstone CTA opens Course 08, the final product-shipping capstone course.
