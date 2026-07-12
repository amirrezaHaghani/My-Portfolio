import portraitUrl from '../assets/amirreza-portrait-optimized.jpg';
import pardeAbiHomeShot from '../assets/projects/pardeabi-home-user.jpg';
import pardeAbiCategoriesShot from '../assets/projects/pardeabi-categories-user.jpg';
import pardeAbiKidsShot from '../assets/projects/pardeabi-kids-user.jpg';

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
  category: 'Religious' | 'Healthcare' | 'Education' | 'Entertainment';
  company?: string;
  description: string;
  technologies: string[];
  accent: string;
  imageUrl: string;
  imageAlt: string;
  imageFocus?: 'left-half' | 'left-soft';
  preview?: 'pardeabi-tv' | 'phone-stack';
  previewImages?: {
    home: string;
    detail?: string;
    movies: string[];
  };
  phoneImages?: string[];
  stats: string[];
  websiteUrl: string;
  storeUrl?: string;
  storeLinks?: Array<{
    label: string;
    url: string;
  }>;
};

export const profile = {
  name: 'Amirreza Haghani',
  role: 'Senior Android Developer',
  location: 'Mashhad, Khorasan Razavi',
  email: 'amirrezahaghani96@gmail.com',
  phone: '+989352761079',
  tagline:
    'I build and modernize native Android products with Kotlin, clean architecture, and the release discipline needed for production apps at scale.',
  portraitUrl,
  socials: [
    { label: 'Email', href: 'mailto:amirrezahaghani96@gmail.com' },
    { label: 'Resume', href: '/resume.pdf' },
    { label: 'GitHub', href: 'https://github.com/amirrezaHaghani' },
  ],
};

export const metrics = [
  { value: '8+', label: 'Years building native Android products' },
  { value: '50M+', label: 'Installs across products I have worked on' },
  { value: '4', label: 'Freelance, startup, and product-team chapters' },
];

export const skills: Skill[] = [
  { name: 'Kotlin', level: 96, group: 'Android' },
  { name: 'Java', level: 88, group: 'Android' },
  { name: 'Jetpack Compose', level: 90, group: 'Android' },
  { name: 'Android SDK', level: 94, group: 'Android' },
  { name: 'Leanback', level: 86, group: 'Android' },
  { name: 'Material Design', level: 88, group: 'Android' },
  { name: 'XML Views', level: 86, group: 'Android' },
  { name: 'MVVM / MVI', level: 92, group: 'Architecture' },
  { name: 'Clean Architecture', level: 91, group: 'Architecture' },
  { name: 'Design Patterns', level: 86, group: 'Architecture' },
  { name: 'SOLID', level: 88, group: 'Architecture' },
  { name: 'Modularization', level: 84, group: 'Architecture' },
  { name: 'Hilt', level: 88, group: 'Platform' },
  { name: 'Kotlin Flow', level: 90, group: 'Platform' },
  { name: 'Coroutines', level: 92, group: 'Platform' },
  { name: 'RESTful APIs', level: 88, group: 'Platform' },
  { name: 'RxJava', level: 82, group: 'Platform' },
  { name: 'Retrofit / OkHttp', level: 88, group: 'Platform' },
  { name: 'Room / SQLite', level: 82, group: 'Platform' },
  { name: 'WebSocket / WebRTC', level: 82, group: 'Realtime' },
  { name: 'Audio / Video Calls', level: 82, group: 'Realtime' },
  { name: 'Push Notifications', level: 84, group: 'Realtime' },
  { name: 'Connection State', level: 82, group: 'Realtime' },
  { name: 'Team Leadership', level: 88, group: 'Workflow' },
  { name: 'Code Review', level: 90, group: 'Workflow' },
  { name: 'Documentation', level: 86, group: 'Workflow' },
  { name: 'Debugging', level: 88, group: 'Workflow' },
  { name: 'Unit Testing', level: 80, group: 'Workflow' },
  { name: 'Git / Jira', level: 87, group: 'Workflow' },
  { name: 'Release Quality', level: 86, group: 'Workflow' },
];

export const experiences: Experience[] = [
  {
    company: 'Pishgamane Moje Telephone Hamrah (BadeSaba)',
    role: 'Senior Android Developer / Team Lead',
    period: 'Jun 2021 - Present',
    summary:
      'Developing, maintaining, and modernizing large-scale native Android products across the BadeSaba ecosystem, including Badesaba, Habal Al-Matin, Bab Al-Naim, and Parde Abi VOD. I have also led the Android team since 2024.',
    highlights: [
      'Leading the Android team since 2024, coordinating delivery, code quality, and technical direction.',
      'Built and maintained several high-traffic Android products at national scale.',
      'Refactored aging codebases to reduce risk, improve readability, and make delivery steadier.',
      'Created technical documentation for new engineers and helped standardize team practices.',
      'Partnered with engineering teammates on architecture decisions, performance work, and release quality.',
    ],
  },
  {
    company: 'Hamrah Doctor',
    role: 'Android Software Engineer',
    period: 'Aug 2020 - Jun 2021',
    summary:
      'Delivered Android features for a patient-facing telemedicine product, with a focus on user experience, realtime communication, and release quality.',
    highlights: [
      'Built, released, and maintained production Kotlin code for patient-facing mobile flows.',
      'Worked on consultation, realtime communication, and medical file-sharing experiences.',
      'Applied MVVM and clean architecture to keep healthcare features testable and easier to evolve.',
      'Worked with product and engineering teammates to turn user signals into shipped product improvements.',
    ],
  },
  {
    company: 'ALN Holding (Vesam)',
    role: 'Android Software Engineer',
    period: 'Aug 2019 - Aug 2020',
    summary:
      'Developed education-focused native Android applications with Java and Kotlin, translating UI/UX, API, and product requirements into reliable mobile features.',
    highlights: [
      'Built Android applications that connected learning workflows, content, and user account features.',
      'Integrated multiple APIs into mobile product flows with attention to error states and data handling.',
      'Implemented complex UI/UX requirements for education-focused Android applications.',
      'Applied MVVM architecture to improve separation of concerns and code maintainability.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Android Developer',
    period: '2018 - Aug 2019',
    summary:
      'Started by building Android applications directly for clients, turning early product ideas into working mobile releases while developing strong ownership across UI, APIs, and delivery.',
    highlights: [
      'Built native Android applications from early requirements through delivery and iteration.',
      'Worked directly with clients to clarify features, UX needs, and release priorities.',
      'Integrated APIs and implemented maintainable Java/Kotlin mobile code.',
      'Developed the product judgment and client communication habits that later carried into larger teams.',
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
    title: 'Parde Abi VOD',
    category: 'Entertainment',
    company: 'Pishgamane Moje Telephone Hamrah (BadeSaba)',
    description:
      'A family-focused VOD platform for live streaming, football, movies, and series. I developed the native Android mobile and Android TV apps, including playback flows, content discovery, saved items, search/filter experiences, and large-screen viewing patterns.',
    accent: '#8fb9c9',
    technologies: ['Kotlin', 'Android TV', 'Media Playback', 'Search UX'],
    imageUrl: pardeAbiHomeShot,
    imageAlt: 'Parde Abi website previews',
    preview: 'pardeabi-tv',
    previewImages: {
      home: pardeAbiHomeShot,
      movies: [pardeAbiCategoriesShot, pardeAbiKidsShot],
    },
    stats: ['Android mobile + TV', '10K+ Myket downloads', '4.4 Myket rating'],
    websiteUrl: 'https://pardeabi.ir/',
    storeLinks: [
      { label: 'Myket', url: 'https://myket.ir/app/com.pardeabi.vod' },
      { label: 'Bazaar', url: 'https://cafebazaar.ir/app/com.pardeabi.vod' },
    ],
  },
  {
    title: 'Badesaba Calendar',
    category: 'Religious',
    description:
      'A high-traffic calendar and Azan app with Persian, Hijri, and Gregorian calendars, prayer times, date conversion, weather, Qibla, reminders, live content, payments, and daily services.',
    technologies: ['Kotlin', 'Coroutines', 'Location', 'Notifications'],
    accent: '#c9a66b',
    imageUrl: 'https://s.cafebazaar.ir/images/upload/screenshot/com.mobiliha.badesaba-258890932916.jpg',
    imageAlt: 'Badesaba calendar app screenshot',
    imageFocus: 'left-half',
    stats: ['39M Bazaar installs', '4.7 rating', '1300+ Iranian cities'],
    websiteUrl: 'https://badesaba.ir/',
    storeUrl: 'https://cafebazaar.ir/app/com.mobiliha.badesaba',
  },
  {
    title: 'Habal Al-Matin Quran',
    category: 'Religious',
    description:
      'A large-scale Quran audio product with recitations from dozens of Qaris, spoken tafsir, translations, Quran search, bookmarks, Tajweed training, and personal or group Khatm planning.',
    technologies: ['Kotlin', 'Android SDK', 'Audio Playback', 'Offline Content'],
    accent: '#8fb9c9',
    imageUrl: 'https://statics.myghoran.com/assets/images/intro/habl-600px.webp',
    imageAlt: 'Habal Al-Matin Quran app preview',
    stats: ['6.8M Bazaar installs', '4.7 rating', 'Audio Quran platform'],
    websiteUrl: 'https://myghoran.com/',
    storeUrl: 'https://cafebazaar.ir/app/com.mobiliha.hablolmatin',
  },
  {
    title: 'Bab Al-Naim Mafatih',
    category: 'Religious',
    description:
      'A polished audio Mafatih al-Jinan experience for prayers and Ziarat, with synchronized text, translation, 50 reciters, advanced search, daily and monthly acts, favorites, and group Khatm flows.',
    technologies: ['Kotlin', 'MVVM', 'Search', 'Media Content'],
    accent: '#8bd2bd',
    imageUrl: 'https://mymafatih.com/assets/images/png/header.png',
    imageAlt: 'Bab Al-Naim Mafatih app preview',
    imageFocus: 'left-half',
    stats: ['4.6M Bazaar installs', '4.7 rating', '50 reciters'],
    websiteUrl: 'https://mymafatih.com/',
    storeUrl: 'https://cafebazaar.ir/app/com.mobiliha.babonnaeim',
  },
  {
    title: 'Hamrah Doctor',
    category: 'Healthcare',
    description:
      'A patient-facing telemedicine app for online doctor visits, immediate consultation, secure audio/video calls, electronic prescriptions, patient profiles, and ECG or medical file sharing.',
    technologies: ['Kotlin', 'WebRTC', 'Healthcare UX', 'Analytics'],
    accent: '#a7a0c8',
    imageUrl: 'https://s.cafebazaar.ir/images/upload/screenshot/com.hamrahdoctor.patient-720714151457.jpg',
    imageAlt: 'Hamrah Doctor app screenshots from Cafe Bazaar',
    preview: 'phone-stack',
    phoneImages: [
      'https://s.cafebazaar.ir/images/upload/screenshot/com.hamrahdoctor.patient-720714151457.jpg',
      'https://s.cafebazaar.ir/images/upload/screenshot/com.hamrahdoctor.patient-674783898157.jpg',
      'https://s.cafebazaar.ir/images/upload/screenshot/com.hamrahdoctor.patient-706814767796.jpg',
    ],
    stats: ['Telemedicine platform', '4.0 Bazaar rating', 'ECG sharing'],
    websiteUrl: 'https://hamrahdoctor.com/',
    storeUrl: 'https://cafebazaar.ir/app/com.hamrahdoctor.patient',
  },
  {
    title: 'Vesam Academy Platform',
    category: 'Education',
    description:
      'An education app platform for course businesses, supporting live and offline learning, media protection, subscriptions, online exams, CRM, payments, analytics, and custom branding.',
    accent: '#c18d7d',
    technologies: ['Java', 'Kotlin', 'MVVM', 'API Integration'],
    imageUrl: 'https://vesam24.co/wp-content/uploads/2025/11/bgipad.png',
    imageAlt: 'Vesam educational app platform preview',
    imageFocus: 'left-soft',
    stats: ['60+ platform features', '160+ education brands', 'Live/offline learning'],
    websiteUrl: 'https://vesam24.co/',
  },
];
