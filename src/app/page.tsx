'use client';

import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from 'next';
import Link from 'next/link';
import { WavyBackground } from "@/components/ui/wavy-background";
import { HeroHeading } from "@/components/ui/hero-heading";
import { CustomHoverButton } from "@/components/ui/custom-hover-button";
import { BentoGridItem } from "@/components/ui/bento-grid";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { PageWrapper } from "@/components/ui/page-wrapper";

// Generate Open Graph metadata
export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "Accelerate Your Medical Research with DataMaster";
  const ogImageUrl = `/api/og?title=${encodeURIComponent(pageTitle)}`;
  
  let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    baseUrl = process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000' 
      : 'https://datamaster.vercel.app';
  }

  return {
    title: "DataMaster - Medical Research Platform",
    description: "Access high-quality healthcare data to accelerate your research, analytics, and ML projects.",
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: "DataMaster - Advancing Medical Research",
      description: "High-quality healthcare data, analytics, and ML projects.",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'DataMaster Social Card',
        },
      ],
      type: 'website',
      siteName: 'DataMaster',
    },
    twitter: {
      card: 'summary_large_image',
      title: "DataMaster - Advancing Medical Research",
      description: "High-quality healthcare data, analytics, and ML projects.",
      images: [ogImageUrl],
    },
    other: {
      'preconnect': 'https://images.unsplash.com',
    }
  };
}

// Dynamically import components
const AnimatedTestimonials = dynamic(() => import("@/components/ui/animated-testimonials").then(mod => mod.AnimatedTestimonials), {
  loading: () => <p>Loading testimonials...</p>,
});
const InfiniteLogoSlider = dynamic(() => import("@/components/ui/infinite-logo-slider").then(mod => mod.InfiniteLogoSlider), {
  loading: () => <p>Loading logos...</p>,
});
const FAQ = dynamic(() => import("@/components/ui/faq"), {
  loading: () => <p>Loading FAQ...</p>,
});
const PinContainer = dynamic(() => import("@/components/ui/3d-pin").then(mod => mod.PinContainer), {
  loading: () => <p>Loading pin...</p>,
});
const LinkPreview = dynamic(() => import("@/components/ui/link-preview").then(mod => mod.LinkPreview), {
  loading: () => <p>Loading preview...</p>,
});

const BentoGrid = dynamic(() => import("@/components/ui/bento-grid").then(mod => mod.BentoGrid), {
  loading: () => <p>Loading grid...</p>,
});
const StickyScroll = dynamic(() => import("@/components/ui/sticky-scroll-reveal").then(mod => mod.StickyScroll), {
  loading: () => <p>Loading scroll content...</p>,
});

// Sample testimonials data for the AnimatedTestimonials component
const testimonials = [
  {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    name: "Dr. Sarah Johnson",
    designation: "Medical Researcher at Stanford University",
    quote: "DataMaster has revolutionized our research workflow. The quality of healthcare datasets and the analytical tools have significantly accelerated our discoveries in cardiovascular disease treatment.",
  },
  {
    src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
    name: "James Wilson",
    designation: "Data Scientist at Mayo Clinic",
    quote: "DataMaster has made clinical data analysis accessible to our entire team. It's now an essential part of our daily workflow.",
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    name: "Dr. Maria Rodriguez",
    designation: "Head of Oncology Research",
    quote: "Access to high-quality medical datasets has been instrumental in our cancer research. DataMaster's HIPAA compliance and data security features give us confidence that we're working with protected information.",
  },
];

// Sample logos for the InfiniteLogoSlider
const partnerLogos = [
  {
    src: "/logos/mayo-clinic.svg",
    alt: "Mayo Clinic",
    width: 150,
    height: 60
  },
  {
    src: "/logos/stanford-medicine.svg",
    alt: "Stanford Medicine",
    width: 180,
    height: 60
  },
  {
    src: "/logos/cleveland-clinic.svg",
    alt: "Cleveland Clinic",
    width: 160,
    height: 60
  },
  {
    src: "/logos/mount-sinai.svg",
    alt: "Mount Sinai",
    width: 140,
    height: 60
  },
  {
    src: "/logos/john-hopkins.svg",
    alt: "Johns Hopkins Medicine",
    width: 180,
    height: 60
  },
  {
    src: "/logos/nih.svg",
    alt: "National Institutes of Health",
    width: 140,
    height: 60
  },
  {
    src: "/logos/mass-general.svg",
    alt: "Massachusetts General Hospital",
    width: 170,
    height: 60
  },
];

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-400" />,
  },
];

const stickyScrollContent = [
  {
    title: "Comprehensive Data Collection",
    description: "Access our extensive library of healthcare datasets, carefully curated and maintained for research and analysis.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white p-4">
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span className="text-lg font-medium">Data Library</span>
        </div>
      </div>
    ),
  },
  {
    title: "Advanced Visualization Tools",
    description: "Transform complex medical data into intuitive visualizations that reveal patterns and insights at a glance.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white p-4">
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
          <span className="text-lg font-medium">Visual Analytics</span>
        </div>
      </div>
    ),
  },
  {
    title: "Research Collaboration",
    description: "Connect with experts and collaborate on groundbreaking research projects using our secure data-sharing features.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white p-4">
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span className="text-lg font-medium">Collaboration Network</span>
        </div>
      </div>
    ),
  },
];

const cardItems = [
  {
    title: "Data Analytics",
    description: "Our advanced analytics tools help you transform raw data into actionable insights for better healthcare outcomes.",
    link: "#analytics",
  },
  {
    title: "Machine Learning Models",
    description: "Leverage our pre-trained healthcare ML models to predict patient outcomes and optimize treatment plans.",
    link: "#ml-models",
  },
  {
    title: "HIPAA Compliance",
    description: "All our data processing and storage solutions meet strict healthcare industry security standards.",
    link: "#compliance",
  },
  {
    title: "Research Collaboration",
    description: "Connect with leading medical researchers and institutions through our secure collaboration platform.",
    link: "#research",
  },
  {
    title: "Data Visualization",
    description: "Create stunning visual representations of complex medical data for easier interpretation.",
    link: "#visualization",
  },
  {
    title: "Custom Solutions",
    description: "Our team can build tailored data solutions to meet your specific healthcare organization needs.",
    link: "#custom",
  },
];

export default function Home() {
  return (
    <PageWrapper>
      <div className="bg-black overflow-hidden">
        {/* Previous sections remain unchanged */}
        
        {/* Modified Simple Card Section to use Next.js Link */}
        <section className="bg-black pt-0 -mt-1">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <h2 className="text-4xl font-medium text-center mb-12 text-white">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto py-10">
              {cardItems.map((item, idx) => (
                <Link 
                  key={`service-card-${idx}`}
                  href={item.link}
                  className="rounded-2xl h-full w-full p-8 overflow-hidden bg-black border border-neutral-800 hover:border-neutral-700 transition-all duration-200 cursor-pointer"
                >
                  <h4 className="text-xl font-semibold text-white mb-4">{item.title}</h4>
                  <p className="text-neutral-400 leading-relaxed">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Modified Link Preview Section */}
        <div className="bg-black flex justify-center">
          <div className="text-center">
            <p className="text-white/60 text-sm mb-2">Developed by</p>
            <div className="inline-block">
              <LinkPreview 
                url="https://github.com/yourusername"
                width={300}
                height={150}
              >
                <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  DataMaster Development Team
                </button>
              </LinkPreview>
            </div>
          </div>
        </div>

        {/* Rest of the component remains unchanged */}
        
        {/* Footer section and other components remain the same */}
      </div>
    </PageWrapper>
  );
}