/** Resource configuration: the kit reads this; tests/config.test.js validates it. */
export const config = {
  title: 'Qualitative Research Methods',
  tagline: 'A graduate-level guide to qualitative inquiry: paradigms, the five approaches, purposeful sampling, data collection, coding and trustworthiness, with a design selector, a coding walkthrough and a rigor self-check.',
  repo: 'https://github.com/Freddricklogan/qualitative-research-methods',
  pagesUrl: 'https://freddricklogan.github.io/qualitative-research-methods/',
  quizTitle: 'Five questions on qualitative research',
  quiz: [
    {
      id: 'paradigm',
      prompt: 'A researcher holds that reality is socially constructed and that meaning is made together with participants. Which paradigm is that?',
      options: ['Post-positivist', 'Constructivist', 'Transformative', 'Pragmatic'],
      answer: 1,
      explanation: 'Constructivism assumes multiple, co-created realities; it underpins phenomenology, grounded theory and case study. Post-positivism assumes one reality imperfectly known, transformative work centres power and justice, and pragmatism asks what works for the question.'
    },
    {
      id: 'sampling',
      prompt: 'Which purposeful sampling strategy follows the logic “if it happens here, it happens anywhere”?',
      options: ['Maximum variation', 'Typical case', 'Critical case', 'Snowball'],
      answer: 2,
      explanation: 'In Patton’s typology the critical case supports logical generalisation. Maximum variation seeks patterns across deliberately diverse cases; typical case illustrates the common; snowball reaches hard-to-reach populations through referrals.'
    },
    {
      id: 'saturation',
      prompt: 'What does the resource say about claiming saturation?',
      options: ['It is reached automatically at twelve interviews', 'It must be justified with evidence of when new data stopped yielding new codes', 'It applies only to grounded theory', 'It is a reviewer’s judgement, not the researcher’s'],
      answer: 1,
      explanation: 'Saturation is the point at which new data stop yielding new codes or insight, and the resource treats it as a claim to be documented and justified rather than asserted or tied to a fixed sample size.'
    },
    {
      id: 'trust',
      prompt: 'In Lincoln and Guba’s criteria, which one is the interpretive counterpart of reliability, and which strategy supports it?',
      options: ['Credibility, via member checking', 'Transferability, via thick description', 'Dependability, via an audit trail', 'Confirmability, via reflexivity'],
      answer: 2,
      explanation: 'Dependability asks whether the process is consistent and traceable, which an audit trail and inquiry audit make possible. Credibility parallels internal validity, transferability external validity, and confirmability objectivity.'
    },
    {
      id: 'coding',
      prompt: 'In the coding ladder the resource walks through, what sits between a code and a theme?',
      options: ['A memo', 'A category', 'A transcript', 'A paradigm'],
      answer: 1,
      explanation: 'Analysis climbs from the raw datum to codes, to a category that names the pattern across quotes, to a theme that makes an analytic claim answering the research question. Memos support the climb but are not a rung.'
    }
  ]
};
