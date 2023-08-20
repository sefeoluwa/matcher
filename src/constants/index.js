import {


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
];

const features = [
  {
    icon: '',
    title: "Simple",
    content: "Creating a powerful resume shouldn't feel like rocket science. Resume Matcher tool redefines simplicity, making the process accessible to everyone on the job search journey.",
  },
  {
    icon: '',
    title: "ATS friendly",
    content: "Resume Matcher is your ally in navigating the digital screening process. Optimze your resume with the right features to pass the ATS keyword scanner.",
  },
  {
    icon: '',
    title: "Awesome design",
    content: "Say goodbye to generic templates. We offer a collection of beautifully crafted designs that allow your resume to stand out in a sea of monotonous documents."
  }
]

const howItWorks = [
  {
    icon: '',
    title: 'Step 1',
    content: 'Upload your resume.'
  },
  {
    icon: '',
    title: 'Step 2',
    content: 'Enter job description.'
  },
  {
    icon: '',
    title: 'Step 3',
    content: 'AI powered analytics and resume review.'
  },
  {
    icon: '',
    title: 'Step 4',
    content: 'Algorithm matches resume to job description.'
  },
  {
    icon: '',
    title: 'Step 5',
    content: 'Download optimized resume.'
  },
]

const aboutUs = [
  {
    id: 'member1',
    image: '',
    person: 'John Doe',
    about: 'CTO and Co-Founder'
  },
  {
    id: 'member2',
    image: '',
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