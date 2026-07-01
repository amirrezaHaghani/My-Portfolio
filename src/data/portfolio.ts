import portraitUrl from '../assets/amirreza-portrait.png';

export type Skill = {
  name: string;
  level: number;
  group: 'Android' | 'Architecture' | 'Platform' | 'Realtime' | 'Workflow';
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  title: string;
  category: 'Religious' | 'Healthcare' | 'Education';
  description: string;
  technologies: string[];
  accent: string;
  imageUrl: string;
  imageAlt: string;
  stats: string[];
  websiteUrl: string;
  storeUrl?: string;
};

export const profile = {
  name: 'Amirreza Haghani',
  role: 'Senior Android Developer',
  location: 'Mashhad, Khorasan Razavi',
  email: 'amirrezahaghani96@gmail.com',
  phone: '+989352761079',
  tagline: 'I build resilient native Android products with Kotlin, clean architecture, and product-minded engineering discipline.',
  portraitUrl,
  socials: [
    { label: 'Email', href: 'mailto:amirrezahaghani96@gmail.com' },
    { label: 'Resume', href: '/resume.pdf' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
  ],
};

export const metrics = [
  { value: '8+', label: 'Years Android engineering experience' },
  { value: '3', label: 'Large-scale Android products maintained' },
  { value: '4', label: 'Freelance and product team chapters' },
];

export const skills: Skill[] = [
  { name: 'Kotlin', level: 96, group: 'Android' },
  { name: 'Java', level: 88, group: 'Android' },
  { name: 'Jetpack Compose', level: 90, group: 'Android' },
  { name: 'Android SDK', level: 94, group: 'Android' },
  { name: 'MVVM / MVI', level: 92, group: 'Architecture' },
  { name: 'Clean Architecture', level: 91, group: 'Architecture' },
  { name: 'Design Patterns', level: 86, group: 'Architecture' },
  { name: 'Hilt', level: 88, group: 'Platform' },
  { name: 'Kotlin Flow', level: 90, group: 'Platform' },
  { name: 'Coroutines', level: 92, group: 'Platform' },
  { name: 'RESTful APIs', level: 88, group: 'Platform' },
  { name: 'WebSocket / WebRTC', level: 82, group: 'Realtime' },
  { name: 'RxJava', level: 82, group: 'Platform' },
  { name: 'Debugging', level: 88, group: 'Workflow' },
  { name: 'Unit Testing', level: 80, group: 'Workflow' },
  { name: 'Git / Jira', level: 87, group: 'Workflow' },
];

export const experiences: Experience[] = [
  {
    company: 'Pishgamane Moje Telephone Hamrah (BadeSaba)',
    role: 'Senior Android Developer',
    period: 'Jun 2021 - Present',
    summary:
      'Developing and maintaining large-scale native Android products used across BadeSaba ecosystems, with a focus on reliability, performance, and long-term maintainability.',
    highlights: [
      'Built and maintained Habal Al-Matin, Bab Al-Naim, and Bad Saba native Android products.',
      'Refactored existing codebases to improve maintainability, correctness, and feature velocity.',
      'Created technical documentation for newcomers and helped spread engineering best practices.',
      'Collaborated with other engineers on architecture decisions, performance, and release quality.',
    ],
  },
  {
    company: 'Hamrah Doctor',
    role: 'Android Software Engineer',
    period: 'Aug 2020 - Jun 2021',
    summary:
      'Delivered Android features in a product environment where analytics, experimentation, and release discipline shaped engineering decisions.',
    highlights: [
      'Analyzed production feature behavior using analytics and experiment feedback.',
      'Built, released, and maintained production mobile code with strong Kotlin expertise.',
      'Implemented MVVM with clean architecture to separate concerns and keep the codebase maintainable.',
      'Worked with product and engineering teammates to turn user signals into shipped improvements.',
    ],
  },
  {
    company: 'ALN Holding (Vesam)',
    role: 'Android Software Engineer',
    period: 'Aug 2019 - Aug 2020',
    summary:
      'Developed native Android applications using Java and Kotlin, integrating APIs and implementing product UI/UX requirements.',
    highlights: [
      'Built native Android applications with Java and Kotlin.',
      'Integrated multiple APIs into mobile product flows.',
      'Implemented complex UI/UX designs for Android applications.',
      'Applied MVVM architecture to improve separation of concerns and codebase maintainability.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Android Developer',
    period: '2018 - Aug 2019',
    summary:
      'Started by building Android applications for clients, turning product ideas into working mobile experiences while developing strong ownership across UI, APIs, and releases.',
    highlights: [
      'Built native Android applications from early requirements through delivery.',
      'Worked directly with clients to clarify features, UX needs, and release priorities.',
      'Integrated APIs and implemented maintainable Java/Kotlin mobile code.',
      'Developed the practical product judgment that later carried into larger engineering teams.',
    ],
  },
  {
    company: 'Payame Noor University of Mashhad',
    role: 'Bachelor of Software Engineering',
    period: 'Sep 2015 - Jul 2021',
    summary:
      'Built a formal foundation in software engineering, algorithms, and systems thinking before specializing in native mobile engineering.',
    highlights: ['Studied software engineering fundamentals and applied them to Android product development.'],
  },
];

export const projects: Project[] = [
  {
    title: 'Habal Al-Matin Quran',
    category: 'Religious',
    description:
      'A comprehensive Quran audio app with recitations from dozens of Qaris, spoken tafsir, translations, Quran search, bookmarks, Tajweed training, and personal or group Khatm planning.',
    technologies: ['Kotlin', 'Android SDK', 'Audio Playback', 'Offline Content'],
    accent: '#49d7ff',
    imageUrl: 'https://statics.myghoran.com/assets/images/intro/habl-600px.webp',
    imageAlt: 'Habal Al-Matin Quran app preview',
    stats: ['6.8M Bazaar installs', '4.7 rating', 'Religious app'],
    websiteUrl: 'https://myghoran.com/',
    storeUrl: 'https://cafebazaar.ir/app/com.mobiliha.hablolmatin',
  },
  {
    title: 'Bab Al-Naim Mafatih',
    category: 'Religious',
    description:
      'An audio Mafatih al-Jinan experience for prayers and Ziarat, with synchronized text and translation, 50 reciters, advanced search, daily/monthly acts, favorites, and group Khatm flows.',
    technologies: ['Kotlin', 'MVVM', 'Search', 'Media Content'],
    accent: '#4dffbf',
    imageUrl: 'https://mymafatih.com/assets/images/png/header.png',
    imageAlt: 'Bab Al-Naim Mafatih app preview',
    stats: ['4.6M Bazaar installs', '4.7 rating', '50 reciters'],
    websiteUrl: 'https://mymafatih.com/',
    storeUrl: 'https://cafebazaar.ir/app/com.mobiliha.babonnaeim',
  },
  {
    title: 'Bad Saba Calendar',
    category: 'Religious',
    description:
      'A large-scale Azan and calendar app with Persian, Hijri, and Gregorian calendars, prayer times, date conversion, weather, Qibla, reminders, live content, payments, and daily services.',
    technologies: ['Kotlin', 'Coroutines', 'Location', 'Notifications'],
    accent: '#f4b35e',
    imageUrl: 'https://s.cafebazaar.ir/images/upload/screenshot/com.mobiliha.badesaba-258890932916.jpg',
    imageAlt: 'Bad Saba calendar app screenshot',
    stats: ['39M Bazaar installs', '4.7 rating', '1300+ Iranian cities'],
    websiteUrl: 'https://badesaba.ir/',
    storeUrl: 'https://cafebazaar.ir/app/com.mobiliha.badesaba',
  },
  {
    title: 'Hamrah Doctor',
    category: 'Healthcare',
    description:
      'A telemedicine patient app for online doctor visits, immediate consultation, secure audio/video calls, electronic prescriptions, patient profiles, and sharing ECG samples or medical files.',
    technologies: ['Kotlin', 'WebRTC', 'Healthcare UX', 'Analytics'],
    accent: '#8f7bff',
    imageUrl: 'https://hamrahdoctor.com/_next/static/media/banner-app.fd4a8651.webp',
    imageAlt: 'Hamrah Doctor telemedicine product preview',
    stats: ['Telemedicine platform', '4.0 Bazaar rating', 'ECG sharing'],
    websiteUrl: 'https://hamrahdoctor.com/',
    storeUrl: 'https://cafebazaar.ir/app/com.hamrahdoctor.patient',
  },
  {
    title: 'Vesam Academy Platform',
    category: 'Education',
    description:
      'A dedicated educational app platform for course businesses, supporting live and offline learning, media protection, subscriptions, online exams, CRM, payments, analytics, and custom branding.',
    accent: '#ff7a59',
    technologies: ['Java', 'Kotlin', 'MVVM', 'API Integration'],
    imageUrl: 'https://vesam24.co/wp-content/uploads/2025/11/bgipad.png',
    imageAlt: 'Vesam educational app platform preview',
    stats: ['60+ platform features', '160+ education brands', 'Live/offline learning'],
    websiteUrl: 'https://vesam24.co/',
  },
];

export const testimonials = [
  {
    quote:
      'Amirreza brings a rare combination of architecture discipline, Android depth, and calm product judgment.',
    author: 'Engineering collaborator',
  },
  {
    quote:
      'He improves the codebase while shipping, documents what matters, and makes complex mobile work easier for the team.',
    author: 'Product teammate',
  },
];
