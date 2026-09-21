# Case Study — Qualitative Research Methods

**Repository:** [qualitative-research-methods](https://github.com/Freddricklogan/qualitative-research-methods) · **Live demo:** [freddricklogan.github.io/qualitative-research-methods](https://freddricklogan.github.io/qualitative-research-methods/) · **Author:** Freddrick Logan

---

## 1. Who has this problem

Doctoral students in education and the social sciences, the faculty who supervise them, and the practitioner-researchers — programme evaluators, institutional-research staff, consultants — who need to defend a qualitative design to a committee, a funder or a client. I teach and advise on the education side at Illinois Tech, and the same gap appears in every cohort: students can describe the methods, but cannot yet make the decisions the methods require.

## 2. The problem, as a scenario

A student proposes a study of first-generation students' sense of belonging. The design says "semi-structured interviews, thematic analysis, twelve participants." Which paradigm are you standing in? Silence. Why twelve? "That is when saturation happens." How will a reader know your themes are more than your impressions? "I will be rigorous." The committee sends the proposal back. Nothing in it is wrong; nothing in it is decided. The textbook chapters were read; the choices were never practised.

## 3. What it costs to leave it alone

A semester lost to a returned proposal, a supervisor's hours spent re-teaching what a chapter already said, and — for the practitioner — a report whose findings a sceptical stakeholder can dismiss because the method cannot be defended. I will not attach a figure: the cost is time and credibility, and both depend on the institution. What is certain is that the decisions are learnable and that reading about them does not teach them.

## 4. The approach, and the alternative I rejected

I wrote an eighteen-section resource that puts the decisions in the reader's hands before it explains them. A design selector asks three questions about intent and suggests an approach with a rationale, flagging split answers as a sign the question needs sharpening. A coding walkthrough lifts one participant quote up four rungs — datum, code, category, theme — with a hint at each. A rigor scorer over Lincoln and Guba's four criteria turns "I will be rigorous" into a weighted checklist and a verdict. A self-quiz matches research questions to approaches. The resource then joined the shared Learning Resource Kit: an Executive Shell with live counts, collapsible sections whose progress is saved in the browser, a five-question quiz written from this page's content that records xAPI statements locally, and a print layout.

The alternative I rejected was a video course or slide deck. Both present decisions as finished; neither lets the reader make a wrong one and see why. A page that can be wrong at, and corrected by, its own widgets is closer to supervision than to lecture.

## 5. What the code does today

Real: the authored content across eighteen sections with an executive summary, glossary and FAQ; six working widgets — approach tabs, design selector, coding walkthrough, rigor scorer, self-quiz, FAQ accordion — moved from inline script to a module without rewriting; the kit layer with progress, quiz, xAPI 1.0.3 statements and print; a strict content-security policy with no inline script or style; tests that validate the quiz configuration and mount the kit against the real page.

Simulated: nothing. The page has no back end and records nothing beyond the reader's own browser; no learning record store receives the statements unless one is configured deliberately.

Worth knowing: the rigor scorer's weights and the selector's tally are pedagogical devices, not validated instruments — they make the reader commit, then explain. Reading time is words at 230 per minute, an estimate. Progress counts a section as opened, not read.

## 6. Evidence

Measured locally with the commands CI runs: 7 tests passing across two files — quiz validity, page invariants, and the vendored kit mounted on this page; coverage 79.84% of all files with `src/config.js` at 100% and the vendored kit at 78.75% from this page's smoke test; ESLint and html-validate clean. The conversion audit records 124 inline style attributes replaced by 35 classes, 26 custom properties namespaced, 27 buttons typed, 6 tables given a body and a `<main>` landmark added. Headless Chrome on the converted page: zero console errors; all six widgets exercised — the third approach tab activates grounded theory, the coding walkthrough advances to the in-vivo rung, two rigor strategies score 29% Emerging, three selector answers suggest narrative inquiry; Expand all opens 18 of 18 sections and the KPI strip follows; no horizontal scroll at 1200 or 400 pixels, with the wide comparison table scrolling inside its card.

## 7. What it would take to run this in production

As a public resource it is in production now. For adoption in a programme it needs the kit's statements sent to the institution's learning record store — an endpoint, credentials, a consent notice, an identified actor and one origin added to the content-security policy — and, if grades depend on it, questions reviewed by a second methodologist. Days of integration, not weeks, and the content does not change.

## 8. Limits and next steps

One quiz at the end rather than questions per section; a design selector with three inputs; no worked example of a full analysis beyond the excerpt; no citations linked to a reference list. Next: per-section questions, a longer coded transcript, a reference list with DOIs, and a companion page on interview practice.

## 9. Who should look at this

**Hiring manager:** evidence that I design instruction around decisions, and that I package teaching material to a standard an institution can review and adopt.
**Consulting client:** a model for turning a methods handbook into an interactive resource that records learning without a platform.
**Engineer:** read `src/page.js` for the widgets that survived conversion unchanged, and `tests/kit.test.js` for the kit mounted against this page's real markup.
