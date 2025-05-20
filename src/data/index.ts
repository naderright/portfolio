import ui from '../../public/ui.png';
import web from '../../public/coding_2704022.png';
import optemiz from '../../public/web-optimization_7046302.png';
import EcommerceDevelopment from '../../public/E-commerce Development.png';
import BugFix from '../../public/Bug Fixing & Code Optimization.png';
import InteractiveWebApps from '../../public/Interactive Web Apps.png';
import ProgressiveWebApps from '../../public/Progressive Web Apps (PWA).png';
import { StaticImageData } from 'next/image';

type Tlinks = {
  name_en: string,
  name_ar: string,
  to: string
}[];

export const Links: Tlinks = [
  { name_en: 'Home', name_ar: 'البيت', to: '#home' },
  { name_en: 'About', name_ar: 'من نحن', to: '#about' },
  { name_en: 'Skills', name_ar: ' المهارات', to: '#skils' },
  { name_en: 'Projects', name_ar: ' المشاريع', to: '#projects' },
  { name_en: 'Contact', name_ar: ' التواصل', to: '#contact' },
];

type Tskills = {
  name: string,
  percent: string
}[];

export const AllSkills: Tskills = [
  { name: 'Html', percent: '90%' },
  { name: 'Css', percent: '90%' },
  { name: 'Javascript', percent: '85%' },
  { name: 'TalwindCss', percent: '90%' },
  { name: 'React', percent: '85%' },
  { name: 'Bootstrap', percent: '70%' },
  { name: 'Next', percent: '80%' },
  { name: 'Redux', percent: '80%' },
  { name: 'Typescript', percent: '80%' },
];

type Tprojects = {
  name: string,
  name_ar: string,
  image: string,
  video: string,
  source: string,
  Live: string,
  desc: string,
  desc_ar: string,
  technologies: string[],
  technologies_ar: string[]
}[];

export const MyProjects: Tprojects = [
  {
    name: `Ali's Construction Group Website`,
    name_ar: 'موقع مجموعة علي للإنشاءات',
    image: '/alis constraction group.png',
    video: "",
    source: 'https://github.com/naderright/frelanceJop-one',
    Live: 'https://alisconstructiongroup.com/',
    desc: ' freelance project, a website for a construction company, deployed using Hostinger and GoDaddy',
    desc_ar: 'مشروع مستقل، موقع لشركة إنشاءات، تم نشره باستخدام Hostinger و GoDaddy',
    technologies: ['React', 'Tailwind CSS', 'Node.js'],
    technologies_ar: ['React', 'Tailwind CSS', 'Node.js']
  },
  {
    name: 'NaderShop',
    name_ar: 'متجر نادر',
    image: '/NaderShop.png',
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7292245862380965888",
    source: 'https://github.com/naderright/E-commerce',
    Live: 'https://naderecomerce.vercel.app/',
    desc: 'E-commerce website using Next.js , Redux/toolkite , redux-persist , firebaseAuth, react-hot-toast, zod, react-hook-form and stripe:',
    desc_ar: 'موقع تجارة إلكترونية باستخدام Next.js، Redux/toolkit، redux-persist، firebaseAuth، react-hot-toast، zod، react-hook-form و stripe',
    technologies: ['Next.js', 'Redux', 'Firebase', 'Stripe'],
    technologies_ar: ['Next.js', 'Redux', 'Firebase', 'Stripe']
  },
  {
    name: 'NaderMovies',
    name_ar: 'نادر موفيز',
    image: '/NaderMovies.png',
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7281731728757473280",
    source: 'https://github.com/naderright/NaderMovies',
    Live: 'https://nader-movies-mgny.vercel.app/',
    desc: 'Movies website and tv and details page using Next.js,Talwindcss,clerk-Auth',
    desc_ar: 'موقع أفلام وتلفزيون وصفحة تفاصيل باستخدام Next.js، Tailwind CSS، clerk-Auth',
    technologies: ['Next.js', 'Tailwind CSS', 'Clerk Auth'],
    technologies_ar: ['Next.js', 'Tailwind CSS', 'Clerk Auth']
  },
  {
    name: 'NaderMedia',
    name_ar: 'نادر ميديا',
    image: '/sochial.png',
    video: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7191203343304646656',
    source: 'https://github.com/naderright/SocialMedia-website-full-stack-useing-React.js-redux-node.js-mongodb',
    Live: '',
    desc: 'Social Media Full Stack Website using React , Redux and Node.js,Mongodb,Express.js',
    desc_ar: 'موقع تواصل اجتماعي كامل باستخدام React، Redux و Node.js، MongoDB، Express.js',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
    technologies_ar: ['React', 'Redux', 'Node.js', 'MongoDB']
  },
  {
    name: 'Noxe',
    name_ar: 'نوكس',
    image: '/noxe.png',
    video: '',
    source: 'https://github.com/naderright/get-trending-moves-and-tv-and-actors-using-react.js',
    Live: 'https://get-trending-moves-and-tv-and-actors-using-react-js.vercel.app/',
    desc: 'Noxe clone show movies using React ,Bootsrap , contextApi',
    desc_ar: 'نسخة من موقع Noxe لعرض الأفلام باستخدام React، Bootstrap، Context API',
    technologies: ['React', 'Bootstrap', 'Context API'],
    technologies_ar: ['React', 'Bootstrap', 'Context API']
  }
];

export type Tservices = {
  name_en: string,
  icon: StaticImageData | string,
  name_ar: string,
  description_en: string,
  description_ar: string
}[];

export const services: Tservices = [
  {
    name_en: "UI/UX Development",
    icon: ui,
    name_ar: "تصميم وتطوير واجهات المستخدم",
    description_en: "Design and develop responsive web interfaces using HTML, CSS, and JavaScript.",
    description_ar: "تصميم وتطوير واجهات ويب متجاوبة باستخدام HTML وCSS وJavaScript."
  },
  {
    name_en: "Web Development",
    icon: web,
    name_ar: "تطوير مواقع الويب",
    description_en: "Develop static and dynamic websites using React.js, Next.js, or Vue.js.",
    description_ar: "تطوير مواقع ويب ثابتة وديناميكية باستخدام React.js أو Next.js أو Vue.js."
  },
  {
    name_en: "Website Optimization",
    icon: optemiz,
    name_ar: "تحسين أداء المواقع",
    description_en: "Optimize website performance, improve loading speed, and enhance SEO.",
    description_ar: "تحسين أداء الموقع، تسريع التحميل، وتعزيز السيو (SEO)."
  },
  {
    name_en: "E-commerce Development",
    icon: EcommerceDevelopment,
    name_ar: "تطوير المتاجر الإلكترونية",
    description_en: "Build e-commerce websites using Shopify, WooCommerce, or custom React.js solutions.",
    description_ar: "إنشاء متاجر إلكترونية باستخدام Shopify أو WooCommerce أو حلول مخصصة بـ React.js."
  },
  {
    name_en: "Bug Fixing & Code Optimization",
    icon: BugFix,
    name_ar: "إصلاح الأخطاء وتحسين الكود",
    description_en: "Fix CSS and JavaScript bugs and improve cross-browser compatibility.",
    description_ar: "إصلاح أخطاء CSS وJavaScript وتحسين توافق الموقع مع المتصفحات."
  },
  {
    name_en: "Interactive Web Apps",
    icon: InteractiveWebApps,
    name_ar: "تطوير تطبيقات ويب تفاعلية",
    description_en: "Develop interactive web applications like dashboards, SaaS platforms, and chat apps.",
    description_ar: "تطوير تطبيقات ويب تفاعلية مثل لوحات التحكم، منصات SaaS، وتطبيقات الدردشة."
  },
  {
    name_en: "Progressive Web Apps (PWA)",
    icon: ProgressiveWebApps,
    name_ar: "تحويل المواقع إلى تطبيقات ويب تقدمية (PWA)",
    description_en: "Convert websites into Progressive Web Apps for offline functionality.",
    description_ar: "تحويل المواقع إلى تطبيقات ويب تقدمية (PWA) لتعمل بدون إنترنت."
  }
];

type THero = {
  title: {
    en: string,
    ar: string
  },
  description: {
    en: string,
    ar: string
  },
  buttons: {
    CV: {
      en: string,
      ar: string
    },
    contact: {
      en: string,
      ar: string
    },
  },
}

export const HeroTitle: THero = {
  title: {
    en: "Hello, I'm Nader ✨",
    ar: "مرحبًا، أنا نادر ✨"
  },
  description: {
    en: "A web developer specialized in building creative digital experiences using React, Next.js, and Node.js.",
    ar: "مطور ويب متخصص في بناء تجارب رقمية إبداعية باستخدام React, Next.js, و Node.js."
  },
  buttons: {
    CV: {
      en: "Download CV",
      ar: " تحميل CV"
    },
    contact: {
      en: "Contact Me",
      ar: "تواصل معي"
    }
  }
} 