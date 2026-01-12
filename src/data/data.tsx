import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/JadYoutube.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/RealityCheckPic.png';
import porfolioImage4 from '../images/portfolio/RealityCheckPic2.png';
import profilepic from '../images/profilepicture.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Verab Chitchyan's Portfolio",
  description: "Portfolio showcasing Verab and his projects",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Verab Chitchyan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Los Angeles based <strong className="text-stone-100"> Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Tata Consultancy Services</strong> looking for an opportunity to take the
        next step in my career and find an opportunity to grow in my field. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Beyond my professional commitments, I am an accomplished <strong className="text-stone-100">dancer</strong> with a dedication to my craft. 
      Outside of dance, I find fulfillment in pursuing activities such as <strong className="text-stone-100">snowboarding </strong>
      and striving to better myself through consistency at the <strong className="text-stone-100">gym</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://docs.google.com/document/d/16QnZ_wrSH7aC2rGUzLxxTshILw_Y-MpVxNTC0_fPV3Q/edit?tab=t.0',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I possess over four years of experience as a Software Engineer at Tata Consultancy Services, where I have been consulting for the biopharmaceutical company AMGEN. Throughout my tenure, I have acquired and mastered proficiency in Salesforce, leveraging this expertise to successfully address diverse tasks and projects assigned by AMGEN.

  Beyond my professional commitments, I am passionate about engaging in side projects, particularly in languages such as Python and Java. I draw inspiration from conceptualizing ideas and derive immense satisfaction from bringing them to fruition through code.`,
  aboutItems: [
    {label: 'Location', text: 'Los Angeles, California', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Armenian/American', Icon: FlagIcon},
    {label: 'Interests', text: 'Snowboarding, Rockclimbing, Dancing', Icon: SparklesIcon},
    {label: 'Study', text: 'California State University, Northridge', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Tata Consultancy Services', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Armenian',
        level: 10,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'AWS Lambda',
        level: 8,
      },
    ],
  },
  {
    name: 'Additional Softwares',
    skills: [
      {
        name: 'Salesforce',
        level: 9,
      },
      {
        name: 'Copado',
        level: 9,
      },
      {
        name: 'Jira',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'TzTok-Jad Prayer Flicking Game',
    description: 'Game created to simulate one aspect of the final boss in the TzHaar Fight Cave minigame from the MMORPG Old School Runescape. In this game the player practices swapping to the correct Prayer when getting attacked by the final boss of the TzHaar Fight Cave, TzTok-Jad.',
    url: 'https://github.com/VerabCh/TzTokJadPrayerFlickingGame',
    image: porfolioImage2,
  },
  {
    title: 'TzTok-Jad Prayer Flicking Game Demo',
    description: 'Here is a demo presentation of the TzTok-Jad Prayer Flicking Game.',
    url: 'https://www.youtube.com/watch?v=O67xQbBevMQ',
    image: porfolioImage1,
  },
  {
    title: 'RealityCheck',
    description: 'Logger that separates activities done on a daily basis into three categories: Mental, Physical, Emotional. The goal of RealityCheck is for users to be able to visually see what they focus on in their daily lives and have the opportunity to reflect and improve based on the information they’ve logged. ',
    url: 'https://github.com/VerabCh/RealityCheck',
    image: porfolioImage3,
  },
  {
    title: 'RealityCheck Demo',
    description: 'Here is a demo presentation of RealityCheck.',
    url: 'https://www.youtube.com/watch?v=fC6ZNCz6BQw',
    image: porfolioImage4,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2018 - May 2021',
    location: 'California State University Northridge',
    title: "B.S. in Computer Science",
    content: <p>I actively engaged in diverse school activities, including participation in the Armenian Student Association, 
      while concurrently prioritizing my academic pursuits. Through this,
      I acquired a comprehensive understanding of both theoretical principles and practical applications relevant to my field, preparing myself for future endeavors. 
      At the end of my time in university, I successfully earned my degree in Computer Science, completing a total of 164 units and achieving a GPA of 3.57. </p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2021 - Present',
    location: 'Tata Consultancy Services',
    title: 'Software Engineer',
    content: (
      <>
        <p className="text-sm mb-3">
          <strong>Client:</strong> Amgen - A global biotechnology leader focused on
          translating scientific breakthroughs into life-saving medicines.
        </p>

        {/* Project 1 */}
        <p className="font-semibold mt-4">Project 1:</p>

        <ul className="list-disc list-inside text-sm space-y-1 mt-2">
          <li>
            Lead and sole developer for a production-facing application focused on
            fulfilling business requirements.
          </li>
          <li>
            Responsible for maintaining LWC, AURA, Apex classes, and integrations to
            ensure the application’s functionality and best practices.
          </li>
        </ul>

        <p className="text-sm mt-2">
          Languages and tools used: Jira, SFDX, Copado, AWS Lambda, Databricks, JS,
          HTML, CSS, LWC, Aura, Apex, SOQL
        </p>

        {/* Project 2 */}
        <p className="font-semibold mt-4">Project 2:</p>

        <ul className="list-disc list-inside text-sm space-y-1 mt-2">
          <li>
            Support and data engineer for production-facing application utilized by
            clients across the globe.
          </li>
          <li>
            Investigate and perform data analysis on SOQL database to provide
            requested data to client within strict timeframes.
          </li>
          <li>
            Perform new and regressive QA testing during each quarterly update of
            the application for Amgen.
          </li>
        </ul>

        <p className="text-sm mt-2">
          Languages and tools used: Jira, SFDX, SOQL, SF Data Loader, Service Now
        </p>
      </>
    ),
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'George Khdryan (Co-worker)',
      text: 'Verab is a highly efficient and effective collaborator. He consistently completes assigned tasks promptly and approaches challenges with enthusiasm, demonstrating a commendable ability to overcome obstacles.',
      image: '',
    },
    
    {
      name: 'Alexander Arzoo (Associate)',
      text: 'I have had the pleasure of working closely with Verab, and I confidently recommend him. Professionally, he consistently demonstrates excellence, and as a friend, he brings reliability, positivity, and a collaborative spirit to every interaction.',
      image: '',
    }
    /*
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    */
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'VerabChitchyan@gmail.com',
      href: 'mailto:VerabChitchyan@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'VerabChitchyan',
      href: 'https://www.linkedin.com/in/verabchitchyan/',
    },
    {
      type: ContactType.Github,
      text: 'VerabCh',
      href: 'https://github.com/VerabCh',
    },
    {
      type: ContactType.Instagram,
      text: '@verab_chitchyan',
      href: 'https://www.instagram.com/verab_chitchyan/',
    }
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/VerabCh'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/verabchitchyan/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/verab_chitchyan/'}
];
