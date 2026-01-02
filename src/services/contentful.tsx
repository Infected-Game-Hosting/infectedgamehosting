import {
  createClient,
  ContentfulClientApi,
  EntrySkeletonType,
} from "contentful";

// Contentful types following EntrySkeletonType structure
interface HeroContentSkeleton extends EntrySkeletonType {
  contentTypeId: "heroContent";
  fields: {
    headline: string;
    subheadline: string;
    backgroundImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    backgroundImages: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    }[];
    ctaButtons: {
      text: string;
      action: string;
      variant: "primary" | "secondary" | "outline";
    }[];
  };
}

interface CaseStudyItemSkeleton extends EntrySkeletonType {
  contentTypeId: "caseStudyItem";
  fields: {
    title: string;
    description: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

interface AboutUsContentSkeleton extends EntrySkeletonType {
  contentTypeId: "aboutUsContent";
  fields: {
    story: string;
    mission: string;
    vision: string;
    coreValues: string[];
    problemOverview: string;
    sdgs: string[];
    facilityImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    logo: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

interface MachineSkeleton extends EntrySkeletonType {
  contentTypeId: "machine";
  fields: {
    name: string;
    description: string;
    images: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    }[];
    features: string[];
  };
}

interface ServiceSkeleton extends EntrySkeletonType {
  contentTypeId: "service";
  fields: {
    title: string;
    description: string;
    icon: string;
  };
}

interface UseCaseSkeleton extends EntrySkeletonType {
  contentTypeId: "useCase";
  fields: {
    title: string;
    description: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

interface ImpactMetricsSkeleton extends EntrySkeletonType {
  contentTypeId: "impactMetrics";
  fields: {
    stats: {
      icon: string;
      value: string;
      label: string;
    }[];
    environmentalImpact: string[];
    socialImpact: string[];
  };
}

interface ProductSkeleton extends EntrySkeletonType {
  contentTypeId: "product";
  fields: {
    name: string;
    description: string;
    contents: any;
    slug: string;

    images: {
      fields: {
        file: {
          url: string;
        };
      };
    }[];
    features: string[];
    pricing: string;
    brochureUrl?: string;
  };
}

interface FilamentSkeleton extends EntrySkeletonType {
  contentTypeId: "filament";
  fields: {
    name: string;
    description: string;
    slug: string;
    category: string;
    contents: any;
    images: {
      fields: {
        file: {
          url: string;
        };
      };
    }[];
    features: string[];
    pricing: string;
    brochureUrl?: string;
  };
}

interface PartnerSkeleton extends EntrySkeletonType {
  contentTypeId: "partner";
  fields: {
    name: string;
    logo: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

interface TestimonialSkeleton extends EntrySkeletonType {
  contentTypeId: "testimonial";
  fields: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: "blogPost";
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    publishDate: string;
    author: string;
    tags?: string[];
    category?: string;
    readingTime?: string;
    content: any; // Rich text document from Contentful
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
        title?: string;
      };
    };
  };
}

interface ContactInfoSkeleton extends EntrySkeletonType {
  contentTypeId: "contactInfo";
  fields: {
    email: string;
    phone: string;
    whatsappNumber: string;
    address: string;
    socialLinks: {
      platform: string;
      url: string;
    }[];
  };
}

// Mock data
const mockHeroContent = {
  sys: { id: "hero-1" },
  fields: {
    headline: "Democratizing Manufacturing in Africa",
    subheadline:
      "We accelerate idea, prototype and production time through industry proven practices.",
    backgroundImages: [
      {
        fields: {
          file: {
            url: "/lovable-uploads/first-section/one.png",
          },
          title: "Micro Molding Machine",
        },
      },
      {
        fields: {
          file: {
            url: "/lovable-uploads/first-section/two.png",
          },
          title: "Complete Setup",
        },
      },
      {
        fields: {
          file: {
            url: "/lovable-uploads/first-section/three.png",
          },
          title: "Manufacturing Process",
        },
      },
      {
        fields: {
          file: {
            url: "/lovable-uploads/first-section/four.png",
          },
          title: "CNC Machining",
        },
      },
      {
        fields: {
          file: {
            url: "/lovable-uploads/first-section/five.png",
          },
          title: "Product Design Process",
        },
      },
    ],
    // backgroundImages: [
    //   {
    //     fields: {
    //       file: {
    //         url: "/lovable-uploads/306c2a7d-4f69-426d-80e5-d429dcd8fa07.png",
    //       },
    //       title: "Micro Molding Machine",
    //     },
    //   },
    //   {
    //     fields: {
    //       file: {
    //         url: "/lovable-uploads/87c80f81-022e-4e27-971e-e25732dde860.png",
    //       },
    //       title: "Complete Setup",
    //     },
    //   },
    //   {
    //     fields: {
    //       file: {
    //         url: "/lovable-uploads/05f53308-3736-4d71-96a0-47c3eca90eea.png",
    //       },
    //       title: "Manufacturing Process",
    //     },
    //   },
    //   {
    //     fields: {
    //       file: {
    //         url: "/lovable-uploads/defc0b01-db23-4f48-9e04-0f1765701904.png",
    //       },
    //       title: "CNC Machining",
    //     },
    //   },
    //   {
    //     fields: {
    //       file: {
    //         url: "/lovable-uploads/e6f89dad-460e-47d7-a05c-657847176f93.png",
    //       },
    //       title: "Product Design Process",
    //     },
    //   },
    // ],
    ctaButtons: [
      { text: "Learn More", action: "#about", variant: "secondary" },
      { text: "Request a Demo", action: "#contact", variant: "primary" },
      { text: "Partner with Us", action: "#getInvolved", variant: "default" },
    ],
  },
};

const mockCaseStudyItems = [
  {
    sys: { id: "case-study-1" },
    fields: {
      title: "Custom Enclosures",
      description:
        "Designed and manufactured custom enclosures for electronic devices.",
      image: {
        fields: {
          file: {
            url: "/lovable-uploads/306c2a7d-4f69-426d-80e5-d429dcd8fa07.png",
          },
          title: "Custom Enclosures",
        },
      },
    },
  },
  {
    sys: { id: "case-study-2" },
    fields: {
      title: "Medical Device Components",
      description:
        "Precision-engineered components for medical devices, ensuring high accuracy and reliability.",
      image: {
        fields: {
          file: {
            url: "/lovable-uploads/87c80f81-022e-4e27-971e-e25732dde860.png",
          },
          title: "Medical Device Components",
        },
      },
    },
  },
  {
    sys: { id: "case-study-3" },
    fields: {
      title: "Robotics Parts",
      description:
        "Durable and lightweight parts for robotics applications, enhancing performance and efficiency.",
      image: {
        fields: {
          file: {
            url: "/lovable-uploads/05f53308-3736-4d71-96a0-47c3eca90eea.png",
          },
          title: "Robotics Parts",
        },
      },
    },
  },
];

const mockAboutContent = {
  sys: { id: "about-1" },
  fields: {
    story: `Make Maker began with a simple idea: empowering local innovators to take control of their product development. Frustrated by the long lead times and high costs associated with importing hardware components, we set out on a mission to democratize manufacturing in Nigeria—making it accessible, affordable, and efficient for small-scale businesses and entrepreneurs.

What started as a passion project on a workbench has grown into a catalyst for change—accelerating product development, reducing costs, and bringing production closer to home. Along the way, we've partnered with local tech hubs, launched pilot programs, and engaged directly with customers to refine our solutions and expand our impact.

Today, Make Maker is more than a company—it's a movement. We're empowering businesses across various sectors, building a vibrant community of makers, and driving a new era of local innovation and sustainable manufacturing in Nigeria.`,
    mission: "Our mission is to democratize manufacturing in Nigeria.",
    vision:
      "Our Vision is to become Nigeria's foremost advanced manufacturing facility",
    coreValues: ["Innovation", "Accessibility", "Sustainability", "Community"],
    problemOverview:
      "Make Maker democratizes manufacturing through micro molding and rapid tooling services for MSMEs and engineers. We provide MSMEs and Engineers with product design and development, Product and Mechanical CAD designs, 2D Drafting, Rapid Prototyping, Rapid Tooling, and low to medium production.",
    sdgs: [
      "7: Affordable and clean energy",
      "9: Industry, Innovation, and Infrastructure",
      "11: Sustainable cities and communities",
      "12: Responsible Consumption and Production",
    ],
    facilityImage: {
      fields: {
        file: {
          url: "/lovable-uploads/87c80f81-022e-4e27-971e-e25732dde860.png",
        },
        title: "Make Maker Facility",
      },
    },
    logo: {
      fields: {
        file: {
          // url: "/lovable-uploads/6385dcfc-42d2-4955-a1be-01db36dc6f62.png",
          url: "/lovable-uploads/logotwo.jpg",
        },
        title: "Make Maker Logo",
      },
    },
  },
};

const mockMachines = [
  {
    sys: { id: "machine-1" },
    fields: {
      name: "Micro Molding Machine",
      description: "High-precision micro molding machine for small components.",
      images: [
        {
          fields: {
            file: {
              url: "/lovable-uploads/306c2a7d-4f69-426d-80e5-d429dcd8fa07.png",
            },
            title: "Micro Molding Machine",
          },
        },
        {
          fields: {
            file: {
              url: "/lovable-uploads/87c80f81-022e-4e27-971e-e25732dde860.png",
            },
            title: "Machine Detail",
          },
        },
      ],
      features: [
        "High precision molding",
        "Automated controls",
        "Energy efficient",
        "Easy maintenance",
      ],
    },
  },
  {
    sys: { id: "machine-2" },
    fields: {
      name: "3D Printer",
      description:
        "Advanced 3D printer for rapid prototyping and custom parts.",
      images: [
        {
          fields: {
            file: {
              url: "/lovable-uploads/87c80f81-022e-4e27-971e-e25732dde860.png",
            },
            title: "3D Printer",
          },
        },
        {
          fields: {
            file: {
              url: "/lovable-uploads/05f53308-3736-4d71-96a0-47c3eca90eea.png",
            },
            title: "Printer Setup",
          },
        },
      ],
      features: [
        "Multiple material support",
        "High resolution printing",
        "Large build volume",
        "User-friendly interface",
      ],
    },
  },
];

const mockServices = [
  {
    sys: { id: "service-1" },
    fields: {
      title: "CAD Design",
      description:
        "We offer product design services like CAD modeling, PCB design, 2D Drafting, Rendering, & Animation.",
      icon: "Design",
    },
  },
  {
    sys: { id: "service-2" },
    fields: {
      title: "3D Printing",
      description:
        "We offer 3D printing services. We print the following materials PLA, ABS, TPU, ASA, and FLEX.",
      icon: "Printer",
    },
  },
  {
    sys: { id: "service-3" },
    fields: {
      title: "Laser Cutting",
      description:
        "We offer laser-cutting services for paper, acrylic sheets, and wood. We do this with latest technologies.",
      icon: "Laser",
    },
  },
  {
    sys: { id: "service-4" },
    fields: {
      title: "CNC Milling",
      description: "We offer CNC milling services on wood and aluminum.",
      icon: "Mill",
    },
  },
  {
    sys: { id: "service-5" },
    fields: {
      title: "Micro Molding",
      description:
        "We offer Micro molding Services utilizing injection molding machines for low medium manufacturing.",
      icon: "Molding",
    },
  },
  {
    sys: { id: "service-6" },
    fields: {
      title: "Rapid Tooling",
      description:
        "We offer Rapid Tooling services prototyping and low-volume production.",
      icon: "Tool",
    },
  },
];

const mockUseCases = [
  {
    sys: { id: "use-case-1" },
    fields: {
      title: "Electronics Manufacturing",
      description:
        "Precision manufacturing for electronic components and devices.",
      image: {
        fields: {
          file: {
            url: "/lovable-uploads/306c2a7d-4f69-426d-80e5-d429dcd8fa07.png",
          },
          title: "Electronics Manufacturing",
        },
      },
    },
  },
  {
    sys: { id: "use-case-2" },
    fields: {
      title: "Medical Device Manufacturing",
      description:
        "High-quality manufacturing for medical devices and components.",
      image: {
        fields: {
          file: {
            url: "/lovable-uploads/87c80f81-022e-4e27-971e-e25732dde860.png",
          },
          title: "Medical Device Manufacturing",
        },
      },
    },
  },
];

const mockImpactMetrics = {
  sys: { id: "impact-1" },
  fields: {
    stats: [
      { icon: "🏭", value: "10+", label: "Businesses Empowered" },
      { icon: "💰", value: "$1M+", label: "Cost Savings" },
      { icon: "🚀", value: "10X", label: "Faster Production" },
      { icon: "🌍", value: "20%", label: "Reduced Waste" },
    ],
    environmentalImpact: [
      "Reduced carbon footprint through local manufacturing",
      "Sustainable material sourcing and waste reduction",
      "Eco-friendly production processes",
    ],
    socialImpact: [
      "Job creation and skills development in local communities",
      "Empowering entrepreneurs and small businesses",
      "Supporting UN Sustainable Development Goals",
    ],
  },
};

const mockProducts = [
  {
    sys: { id: "product-1" },
    fields: {
      name: "Modular Stool System",
      slug: "modular-stool-system",
      description:
        "Customizable modular stool system with interchangeable components and durable metal frame construction.",
      images: [
        {
          fields: {
            file: {
              url: "/lovable-uploads/1092dee7-c23b-4a47-a099-0a8303a63739.png",
            },
            title: "Brown Top Stool",
          },
        },
        {
          fields: {
            file: {
              url: "/lovable-uploads/d2f509e4-cfb8-478d-8314-4e97f52c7187.png",
            },
            title: "Wood Top Stool",
          },
        },
        {
          fields: {
            file: {
              url: "/lovable-uploads/d5d0e29e-3cbc-4849-a7be-148e23942202.png",
            },
            title: "White Frame Stool",
          },
        },
      ],
      features: [
        "Modular design",
        "Durable metal frame",
        "Multiple top options",
        "Easy assembly",
      ],
      pricing: "$150-200",
      brochureUrl: "https://example.com/modular-stool-brochure.pdf",
    },
  },
  {
    sys: { id: "product-2" },
    fields: {
      name: "Industrial Bar Stools",
      slug: "industrial-bar-stools",
      description:
        "Professional-grade bar stools featuring chrome legs and comfortable seating for commercial use.",
      images: [
        {
          fields: {
            file: {
              url: "/lovable-uploads/1ec476d3-c773-4033-b93f-6b294fee02a1.png",
            },
            title: "Single Bar Stool",
          },
        },
        {
          fields: {
            file: {
              url: "/lovable-uploads/e62c8c56-9e42-41ff-a095-d87a92665c1b.png",
            },
            title: "Pair of Bar Stools",
          },
        },
        {
          fields: {
            file: {
              url: "/lovable-uploads/acecaa19-37f4-4ba4-b897-7ad252399b91.png",
            },
            title: "Multiple Bar Stools",
          },
        },
      ],
      features: [
        "Chrome finish",
        "Commercial grade",
        "Stackable design",
        "Non-slip feet",
      ],
      pricing: "$100-150",
      brochureUrl: "https://example.com/industrial-bar-stools-brochure.pdf",
    },
  },
  {
    sys: { id: "product-3" },
    fields: {
      name: "Modular Storage System",
      slug: "modular-storage-system",
      description:
        "Versatile modular storage solution with shelving and hanging storage components.",
      images: [
        {
          fields: {
            file: {
              url: "/lovable-uploads/bc85b921-77e0-4eaa-95ad-c5d8bf0776f1.png",
            },
            title: "Modular Storage Unit",
          },
        },
      ],
      features: [
        "Modular components",
        "Mixed storage types",
        "Easy reconfiguration",
        "Space efficient",
      ],
      pricing: "$300-400",
      brochureUrl: "https://example.com/modular-storage-brochure.pdf",
    },
  },
];

const mockPartners = [
  {
    sys: { id: "partner-1" },
    fields: {
      name: "Solaris",
      logo: {
        fields: {
          file: {
            url: "/lovable-uploads/a64afaae-ad80-4a72-a8fc-91bf1e1b721d.png",
          },
          title: "Solaris Logo",
        },
      },
    },
  },
  {
    sys: { id: "partner-2" },
    fields: {
      name: "LightEd",
      logo: {
        fields: {
          file: {
            url: "/lovable-uploads/cfcae4a3-0e30-4dcf-b7dc-07d036627695.png",
          },
          title: "LightEd Logo",
        },
      },
    },
  },
  {
    sys: { id: "partner-3" },
    fields: {
      name: "MMEmbedded TechLab",
      logo: {
        fields: {
          file: {
            url: "/lovable-uploads/6385dcfc-42d2-4955-a1be-01db36dc6f62.png",
          },
          title: "MMEmbedded TechLab Logo",
        },
      },
    },
  },
];

// Mock filaments data
const mockFilaments = [
  {
    sys: { id: "filament-1" },
    fields: {
      name: "EcoPLA Premium",
      slug: "eco-pla-premium",
      category: "Standard Thermoplastics",
      description:
        "A biodegradable PLA filament offering excellent printability, low warping, and vibrant color options—ideal for general-purpose prototyping and hobbyist prints.",
      images: [
        {
          fields: {
            file: {
              url: "https://res.cloudinary.com/dpnsseamh/image/upload/v1751471268/6f9d1afd-e030-4df6-9a6b-dcfb8972d895.png",
            },
            title: "EcoPLA Red Spool",
          },
        },
        {
          fields: {
            file: {
              url: "https://res.cloudinary.com/dpnsseamh/image/upload/v1751471277/feca8b65-10fd-42f5-aa1a-f469fa8349c9.png",
            },
            title: "EcoPLA White Spool",
          },
        },
        {
          fields: {
            file: {
              url: "https://res.cloudinary.com/dpnsseamh/image/upload/v1751471373/c28357ee-caf1-4a95-b5e2-5fca60af891d.png",
            },
            title: "EcoPLA Black Spool",
          },
        },
      ],
      features: [
        "Diameter tolerance ±0.02 mm",
        "Print temp: 190–220 °C",
        "Biodegradable PLA base",
        "Minimal odor during printing",
      ],
      pricing: "₦25k / 1 kg",
      brochureUrl: "https://example.com/ecopla-datasheet.pdf",
    },
  },
  {
    sys: { id: "filament-2" },
    fields: {
      name: "ProPETG Clarity",
      slug: "propetg-clarity",
      category: "Engineering Plastics",
      description:
        "A high-strength PETG filament with superb layer adhesion, chemical resistance, and optical clarity—perfect for functional parts and display-quality prints.",
      images: [
        {
          fields: {
            file: {
              url: "https://res.cloudinary.com/dpnsseamh/image/upload/v1751471443/1a79f21e-c3ca-4e63-82b1-f98207c56660.png",
            },
            title: "ProPETG Clear Spool",
          },
        },
        {
          fields: {
            file: {
              url: "https://res.cloudinary.com/dpnsseamh/image/upload/v1751471464/e53a7441-ef42-485e-bc2f-d0bf16ce7847.png",
            },
            title: "ProPETG Blue Spool",
          },
        },
      ],
      features: [
        "Diameter tolerance ±0.03 mm",
        "Print temp: 230–250 °C",
        "Excellent layer bonding",
        "Good chemical & impact resistance",
      ],
      pricing: "₦35k / 1 kg",
      brochureUrl: "https://example.com/propetg-specsheet.pdf",
    },
  },
  {
    sys: { id: "filament-3" },
    fields: {
      name: "FlexiTPU Sport",
      slug: "flexitpu-sport",
      category: "Flexible & Elastomeric",
      description:
        "A premium TPU filament engineered for high elasticity and wear resistance—ideal for flexible joints, gaskets, and wearable accessories.",
      images: [
        {
          fields: {
            file: {
              url: "https://res.cloudinary.com/dpnsseamh/image/upload/v1751471568/6e48fb9d-42f0-45d7-b494-753fd6fa9582.png",
            },
            title: "FlexiTPU Black Spool",
          },
        },
      ],
      features: [
        "Shore hardness 95A",
        "Print temp: 210–230 °C",
        "Excellent layer flexibility",
        "Low shrinkage",
      ],
      pricing: "₦40k / 1 kg",
      brochureUrl: "https://example.com/flexitpu-data.pdf",
    },
  },
];

// Mock downloads data for development
const mockDownloads = [
  {
    sys: { id: "download-1" },
    fields: {
      name: "Cross Gears Test Print",
      slug: "cross-gears-test-print",
      description:
        "A precision test print for calibrating your 3D printer's gear mechanisms and tolerance settings.",
      images: [
        {
          fields: {
            file: {
              url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
            },
            title: "Cross Gears Test Print",
          },
        },
      ],
      features: [
        "STL file format",
        "Pre-optimized for FDM printing",
        "0.2mm layer height recommended",
        "No supports required",
      ],
      assets: [
        {
          fields: {
            file: {
              url: "https://example.com/cross-gears.stl",
              fileName: "cross-gears-test-print.stl",
            },
            title: "Cross Gears STL File",
          },
        },
      ],
    },
  },
  {
    sys: { id: "download-2" },
    fields: {
      name: "The Heli Launcher",
      slug: "heli-launcher",
      description:
        "An innovative helicopter launcher mechanism perfect for educational projects and demonstrations.",
      images: [
        {
          fields: {
            file: {
              url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
            },
            title: "Heli Launcher Design",
          },
        },
      ],
      features: [
        "Complete assembly guide included",
        "Multiple file formats",
        "Educational STEM project",
        "Beginner-friendly design",
      ],
      assets: [
        {
          fields: {
            file: {
              url: "https://example.com/heli-launcher.zip",
              fileName: "heli-launcher-complete.zip",
            },
            title: "Heli Launcher Complete Package",
          },
        },
      ],
    },
  },
  {
    sys: { id: "download-3" },
    fields: {
      name: "RobBob - The 2 DOF Robot Head",
      slug: "robbob-robot-head",
      description:
        "A functional 2 degrees of freedom robot head with smooth servo integration for robotics projects.",
      images: [
        {
          fields: {
            file: {
              url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
            },
            title: "RobBob Robot Head",
          },
        },
      ],
      features: [
        "2 DOF movement capability",
        "Servo mount included",
        "Arduino compatible",
        "Assembly instructions provided",
      ],
      assets: [
        {
          fields: {
            file: {
              url: "https://example.com/robbob.zip",
              fileName: "robbob-2dof-head.zip",
            },
            title: "RobBob Complete Files",
          },
        },
      ],
    },
  },
  {
    sys: { id: "download-4" },
    fields: {
      name: "The Gear Switch",
      slug: "gear-switch",
      description:
        "A mechanical gear switching mechanism for advanced 3D printing projects and mechanical demonstrations.",
      images: [
        {
          fields: {
            file: {
              url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
            },
            title: "Gear Switch Mechanism",
          },
        },
      ],
      features: [
        "Precision engineered gears",
        "Smooth switching action",
        "Print-in-place design",
        "No assembly required",
      ],
      assets: [
        {
          fields: {
            file: {
              url: "https://example.com/gear-switch.stl",
              fileName: "gear-switch-mechanism.stl",
            },
            title: "Gear Switch STL",
          },
        },
      ],
    },
  },
  {
    sys: { id: "download-5" },
    fields: {
      name: "Intertwining Rings 3D Printed Chainmail STL",
      slug: "intertwining-rings-chainmail",
      description:
        "A fascinating 3D printed chainmail design with intertwining rings that move freely after printing.",
      images: [
        {
          fields: {
            file: {
              url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
            },
            title: "Intertwining Rings Chainmail",
          },
        },
      ],
      features: [
        "Print-in-place chainmail",
        "No supports needed",
        "Flexible interlocking rings",
        "Demonstration of 3D printing capabilities",
      ],
      assets: [
        {
          fields: {
            file: {
              url: "https://example.com/chainmail-rings.stl",
              fileName: "intertwining-rings-chainmail.stl",
            },
            title: "Chainmail Rings STL",
          },
        },
      ],
    },
  },
  {
    sys: { id: "download-6" },
    fields: {
      name: "Gear Pair - Print in Place STL",
      slug: "gear-pair-print-in-place",
      description:
        "A perfectly meshing gear pair that prints in place, demonstrating precision 3D printing tolerances.",
      images: [
        {
          fields: {
            file: {
              url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
            },
            title: "Gear Pair Print in Place",
          },
        },
      ],
      features: [
        "Perfect gear meshing",
        "Print-in-place design",
        "Tolerance demonstration",
        "Educational tool",
      ],
      assets: [
        {
          fields: {
            file: {
              url: "https://example.com/gear-pair.stl",
              fileName: "gear-pair-print-in-place.stl",
            },
            title: "Gear Pair STL File",
          },
        },
      ],
    },
  },
];

const mockTestimonials = [
  {
    sys: { id: "testimonial-1" },
    fields: {
      quote:
        "Make Maker has transformed our product development process. Their expertise and rapid prototyping services have significantly accelerated our time to market.",
      author: "Jane Doe",
      position: "CEO",
      company: "Tech Innovations Inc.",
      avatar: {
        fields: {
          file: {
            url: "https://images.unsplash.com/photo-1570295999680-5e27cac9d2ca?w=200",
          },
          title: "Jane Doe",
        },
      },
    },
  },
  {
    sys: { id: "testimonial-2" },
    fields: {
      quote:
        "We have been impressed with Make Maker's commitment to quality and innovation. Their micro molding services have enabled us to create highly precise components for our medical devices.",
      author: "John Smith",
      position: "CTO",
      company: "MedTech Solutions",
      avatar: {
        fields: {
          file: {
            url: "https://images.unsplash.com/photo-1500648767791-00d5a4ee9baa?w=200",
          },
          title: "John Smith",
        },
      },
    },
  },
];

const mockBlogPosts = [
  {
    sys: { id: "blog-1" },
    fields: {
      title: "Why Infected Game Hosting is the Best Choice for Gamers",
      slug: "why-infected-game-hosting",
      excerpt:
        "Fast NVMe SSD servers, enterprise DDoS protection, global regions, and instant setup — everything you need for lag-free multiplayer.",
      publishDate: "2025-11-19",
      author: "Infected Game Hosting",
      tags: [
        "Game Hosting",
        "DDoS Protection",
        "Low Latency",
        "NVMe",
        "Multiplayer",
      ],
      category: "Product & Platform",
      readingTime: "6 min read",
      content: `# Why Infected Game Hosting is the Best Choice for Gamers

Infected Game Hosting was built by gamers for gamers — our mission is to make multiplayer painless, performant, and affordable. Whether you're running a small community Minecraft server or a latency-sensitive competitive game, our infrastructure is tuned to keep gameplay smooth and servers online.

## Performance-first infrastructure

Our game servers are backed by **NVMe SSD storage** and modern CPUs so maps load fast and I/O-heavy mods don't slow your players down. That means faster world generation, snappier saves, and reduced lag spikes during big fights or world events.

## Enterprise-grade DDoS protection

We provide constantly-monitored **DDoS protection** so your server stays online when it matters most. Attacks are detected and mitigated at the network edge, letting legitimate players connect without interruption.

## Low-latency global network

Choose from multiple regions to place your server close to your players. A shorter network path means lower ping and a better competitive experience — ideal for PvP, co-op, and speedrun communities.

## Instant setup and an easy control panel

Get your server online in minutes with our one-click setup and intuitive control panel. Manage mods, install plugins, create backups, and configure server settings without wrestling with complex configs.

## Support for popular games & modded communities

We support a wide range of dedicated game servers — from **Minecraft** (vanilla and modded), to survival and shooter titles — with custom templates for commonly used mod stacks and performant containers tuned for gaming.

## 24/7 monitoring & friendly support

Our team monitors server health around the clock and is available to help with migrations, performance tuning, and troubleshooting. We focus on fixing issues fast so you can focus on running your community.

## Fair pricing & developer-friendly features

Transparent plans, hourly billing options, and the ability to scale up resources mean you only pay for what you need. Developers will appreciate console access, scheduled backups, and API endpoints for automation.

## Getting started

1. Create an account at Infected Game Hosting.
2. Pick your game and region.
3. Customize resources and hit **deploy** — your server will be ready in minutes.
4. Invite players and use our control panel to manage plugins, mods, and backups.

## Conclusion

If you want fast servers, enterprise-grade protection, and a support team that understands gamers, Infected Game Hosting delivers. Check our plans and spin up your next server — fast, secure, and ready for play.`,
      featuredImage: {
        fields: {
          file: {
            url: "https://res.cloudinary.com/dpnsseamh/image/upload/v1760720011/wp11205562-v-rising-wallpapers_zheviw.png",
          },
          title: "Infected Game Hosting - Fast, Reliable Game Servers",
        },
      },
    },
  },
];

const mockContactInfo = {
  sys: { id: "contact-1" },
  fields: {
    email: "themakemakers@gmail.com",
    phone: "07045185420",
    whatsappNumber: "2347045185420",
    address: "12 Umuatako Rd Off Starpaper mill, Umuagasi, Aba, Abia State",
    socialLinks: [
      { platform: "Facebook", url: "https://m.facebook.com/makemaker001" },
      { platform: "Instagram", url: "https://www.instagram.com/themakemaker/" },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/make-maker",
      },
      { platform: "Twitter", url: "https://www.twitter.com/themakemaker" },
    ],
  },
};

// Check if we should use mock data
const shouldUseMockData = () => {
  return (
    import.meta.env.VITE_USE_MOCK_DATA === "true" ||
    !import.meta.env.VITE_CONTENTFUL_SPACE_ID ||
    !import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
  );
};
// Contentful client - only create if we have credentials
const createContentfulClient = (): ContentfulClientApi<undefined> | null => {
  if (shouldUseMockData()) {
    return null;
  }

  try {
    return createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || "gpsn2cci6x7n",
      accessToken:
        import.meta.env.VITE_CONTENTFUL_PREVIEW === "true"
          ? import.meta.env.VITE_CONTENTFUL_PREVIEW_TOKEN ||
            "kXos4blFKvH68DXHqI3C0t_myXivWzKwXzvtbYZZihI"
          : import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN ||
            "T_2u1OZneoOlQo4gCK1iuG65L6vbmbv0rKljb7s2WZo",
      host:
        import.meta.env.VITE_CONTENTFUL_PREVIEW === "true"
          ? "preview.contentful.com"
          : "cdn.contentful.com",
    });
  } catch (error) {
    console.error("Failed to create Contentful client:", error);
    return null;
  }
};

const contentfulClientBlog = createContentfulClient();

// Contentful client
const contentfulClient: ContentfulClientApi<undefined> = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || "gpsn2cci6x7n",
  accessToken:
    import.meta.env.VITE_CONTENTFUL_PREVIEW === "true"
      ? import.meta.env.VITE_CONTENTFUL_PREVIEW_TOKEN ||
        "kXos4blFKvH68DXHqI3C0t_myXivWzKwXzvtbYZZihI"
      : import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN ||
        "T_2u1OZneoOlQo4gCK1iuG65L6vbmbv0rKljb7s2WZo",
  host:
    import.meta.env.VITE_CONTENTFUL_PREVIEW === "true"
      ? "preview.contentful.com"
      : "cdn.contentful.com",
});

// Fetch functions
export const getHeroContent = async () => {
  if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
    return mockHeroContent;
  }
  try {
    const entry = await contentfulClient.getEntries<HeroContentSkeleton>({
      content_type: "heroContent",
    });
    return entry.items[0] || mockHeroContent;
  } catch (error) {
    console.error("Error fetching hero content:", error);
    return mockHeroContent;
  }
};

export const getCaseStudyItems = async () => {
  if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
    return mockCaseStudyItems;
  }
  try {
    const entry = await contentfulClient.getEntries<CaseStudyItemSkeleton>({
      content_type: "caseStudyItem",
    });
    return entry.items.length > 0 ? entry.items : mockCaseStudyItems;
  } catch (error) {
    console.error("Error fetching case study items:", error);
    return mockCaseStudyItems;
  }
};

export const getAboutUsContent = async () => {
  if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
    return mockAboutContent;
  }
  try {
    const entry = await contentfulClient.getEntries<AboutUsContentSkeleton>({
      content_type: "aboutUsContent",
    });
    return entry.items[0] || mockAboutContent;
  } catch (error) {
    console.error("Error fetching about content:", error);
    return mockAboutContent;
  }
};

export const getMachines = async () => {
  if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
    return mockMachines;
  }
  try {
    const entry = await contentfulClient.getEntries<MachineSkeleton>({
      content_type: "machine",
    });
    return entry.items.length > 0 ? entry.items : mockMachines;
  } catch (error) {
    console.error("Error fetching machines:", error);
    return mockMachines;
  }
};

export const getServices = async () => {
  if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
    return mockServices;
  }
  try {
    const entry = await contentfulClient.getEntries<ServiceSkeleton>({
      content_type: "service",
    });
    return entry.items.length > 0 ? entry.items : mockServices;
  } catch (error) {
    console.error("Error fetching services:", error);
    return mockServices;
  }
};

export const getUseCases = async () => {
  if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
    return mockUseCases;
  }
  try {
    const entry = await contentfulClient.getEntries<UseCaseSkeleton>({
      content_type: "useCase",
    });
    return entry.items.length > 0 ? entry.items : mockUseCases;
  } catch (error) {
    console.error("Error fetching use cases:", error);
    return mockUseCases;
  }
};

export const getImpactMetrics = async () => {
  if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
    return mockImpactMetrics;
  }
  try {
    const entry = await contentfulClient.getEntries<ImpactMetricsSkeleton>({
      content_type: "impactMetrics",
    });
    return entry.items[0] || mockImpactMetrics;
  } catch (error) {
    console.error("Error fetching impact metrics:", error);
    return mockImpactMetrics;
  }
};

export const getProducts = async () => {
  if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
    return mockProducts;
  }
  try {
    const entry = await contentfulClient.getEntries<ProductSkeleton>({
      content_type: "product",
    });
    return entry.items.length > 0 ? entry.items : mockProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return mockProducts;
  }
};

// Add getFilaments function
export const getFilaments = async () => {
  try {
    const response = await contentfulClient.getEntries<FilamentSkeleton>({
      content_type: "filament",
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching filaments:", error);

    // Return mock data for development
    return mockFilaments;
  }
};

export const getDownloads = async () => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "downloads",
      include: 3,
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching downloads:", error);
    // Return mock data for development
    return mockDownloads;
  }
};

export const getDownloadBySlug = async (slug: string) => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "downloads",
      "fields.slug": slug,
      include: 3,
    });
    return response.items[0] || null;
  } catch (error) {
    console.error("Error fetching download by slug:", error);
    // Return mock data for development
    const download = mockDownloads.find((item) => item.fields.slug === slug);
    return download || null;
  }
};

export const getPartners = async () => {
  if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
    return mockPartners;
  }
  try {
    const entry = await contentfulClient.getEntries<PartnerSkeleton>({
      content_type: "partner",
    });
    return entry.items.length > 0 ? entry.items : mockPartners;
  } catch (error) {
    console.error("Error fetching partners:", error);
    return mockPartners;
  }
};

export const getTestimonials = async () => {
  if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
    return mockTestimonials;
  }
  try {
    const entry = await contentfulClient.getEntries<TestimonialSkeleton>({
      content_type: "testimonial",
    });
    return entry.items.length > 0 ? entry.items : mockTestimonials;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return mockTestimonials;
  }
};

export const getBlogPosts = async () => {
  if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
    return mockBlogPosts;
  }
  try {
    const entry = await contentfulClient.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
    });
    return entry.items.length > 0 ? entry.items : mockBlogPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return mockBlogPosts;
  }
};

export const getContactInfo = async () => {
  if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
    return mockContactInfo;
  }
  try {
    const entry = await contentfulClient.getEntries<ContactInfoSkeleton>({
      content_type: "contactInfo",
    });
    return entry.items[0] || mockContactInfo;
  } catch (error) {
    console.error("Error fetching contact info:", error);
    return mockContactInfo;
  }
};

// export const getBlogPostBySlug = async (slug: string) => {
//   try {
//     const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
//       content_type: "blogPost",
//       "fields.slug": slug,
//       limit: 1,
//     });

//     if (entries?.items.length === 0) {
//       return null;
//     }

//     return entries?.items.length > 0 ? entries?.items[0] : mockBlogPosts[0];
//   } catch (error) {
//     console.error("Error fetching blog post by slug:", error);
//     return null;
//   }
// };

export const getBlogPostBySlug = async (slug: string) => {
  // First, try to find in mock data
  const mockPost = mockBlogPosts.find((post) => post.fields.slug === slug);

  if (shouldUseMockData() || !contentfulClient) {
    console.info(`Using mock data for blog post: ${slug}`);
    return mockPost || null;
  }

  try {
    const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      //   @ts-ignore
      "fields.slug": slug,
      limit: 1,
    });

    // If Contentful returns data, use it
    if (entries?.items && entries.items.length > 0) {
      return entries.items[0];
    }

    // If Contentful returns no data, fall back to mock data
    console.info(`No Contentful data found for slug: ${slug}, using mock data`);
    return mockPost || null;
  } catch (error) {
    console.error("Error fetching blog post by slug:", error);
    // On error, fall back to mock data
    console.info(`Error occurred, falling back to mock data for slug: ${slug}`);
    return mockPost || null;
  }
};
