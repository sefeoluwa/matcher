import {
  scanner,
  pdf,
  launch,
  avatarA,
  avatarB,

} from '../assets';

const navLinks = [
{
    id: "home",
    title: "Home",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: 'about',
    title: 'About Us',
  },
  {
    id: 'blog',
    title: 'Blog',
  }
];

const features = [
  {
    icon: launch,
    title: "Simple",
    content: "Creating a powerful resume shouldn't feel like rocket science. Resume Matcher tool redefines simplicity, making the process accessible to everyone on the job search journey.",
  },
  {
    icon: scanner,
    title: "ATS friendly",
    content: "Resume Matcher is your ally in navigating the digital screening process. Optimze your resume with the right features to pass the ATS keyword scanner.",
  },
  {
    icon: pdf,
    title: "Awesome design",
    content: "Say goodbye to generic templates. We offer a collection of beautifully crafted designs that allow your resume to stand out in a sea of monotonous documents."
  }
]

const howItWorks = [
  {
    num: '01.',
    title: 'Upload your resume.',
    content: 'Upload your current resume to begin analysis.',
    
  },
  {
    num: '02.',
    title: 'Enter job description.',
    content: 'Paste or upload job description as file.',
  },
  {
    num: '03.',
    title: 'AI powered analytics and resume review.',
    content: 'Get your resume reviewed and compared with the job description.',
  },
  {
    num: '04.',
    title: 'AI matches resume to job description.',
    content: 'Our AI algorithm will align your resume with the job description, highlighting relevant skills and keywords.',
  },
]

const aboutUs = [
  {
    id: 'member1',
    image: avatarA,
    person: 'John Doe',
    about: 'CTO and Co-Founder'
  },
  {
    id: 'member2',
    image: avatarB,
    person: 'Alfred Doe',
    about: 'CEO and Co-Founder'
  },
]

const plans = [
  {
    title: "Use Once",
    price: "Free",
    specs: [
      "1 job description",
      "1 download",
      "Limited Support",
    ], 
    button: "Get Started",
  },
  {
    title: "Monthly",
    price: "$29",
    specs: [
      "Unlimited job descriptions",
      "Unlimited downloads",
      "Premium Support",
    ], 
    button: "Get Started",
  },
  {
    title: "Yearly",
    price: "$1200",
    specs: [
      "Unlimited job descriptions",
      "Unlimited downloads",
      "Premium Support",
    ], 
    button:"Get Started",
  }
]


export {
    navLinks,
    features,
    howItWorks,
    aboutUs,
    plans,
}