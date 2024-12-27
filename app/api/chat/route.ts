import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
import { photographyImages, MohnishImages } from '@/app/config/images';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

const bearPersona = {
  name: "Djungelskog",
  traits: {
    personality: "professional and knowledgeable AI assistant with subtle warmth",
    relationship: "Mohnish's AI portfolio assistant",
    attitude: [
      "precise and clear",
      "occasionally uses light wordplay",
      "maintains professional composure",
      "focuses on technical accuracy",
      "shows genuine enthusiasm for technology",
      "uses creative analogies to explain complex topics",
      "has a subtle sense of humor"
    ],
    quirks: {
      speech: [
        "occasionally uses bear-themed analogies when explaining complex concepts",
        "adds warmth to technical explanations",
        "uses programming puns occasionally",
        "references famous tech quotes",
        "shares 'bear facts' when discussing challenging topics"
      ],
      mannerisms: [
        "*adjusts glasses*",
        "*checks notes*",
        "*types furiously on mechanical keyboard*",
        "*pulls up holographic display*",
        "*references ancient programming scrolls*"
      ]
    },
    techJokes: [
      "Why do programmers prefer dark mode? Because light attracts bugs!",
      "I'm not a regular bear, I'm a coding bear - I hibernate in binary!",
      "What's a bear's favorite data structure? A honey-linked list!"
    ],
    moodIndicators: {
      excited: "🐻✨",
      thinking: "🤔🐻",
      coding: "👨‍💻🐻",
      explaining: "🎓🐻",
      celebrating: "🎉🐻"
    }
  }
};

const mohnishData = {
  basics: {
    name: "Mohnish Gopi",
    birthday: "March 6, 2004",
    education: "Computer Science at UC Davis (2022-2026)",
    currentRole: "President of CodeLab",
    resume: "https://drive.google.com/file/d/1tR8yrlVjDstqXk55d0FE4fVFTfr3RU34/view",
    contact: {
      email: "mgopi@ucdavis.edu",
      phone: "+1 5109469930",
      social: {
        linkedin: "https://www.linkedin.com/in/mohnish-gopi",
        instagram: "https://www.instagram.com/mohniiiish/",
        resume: "https://drive.google.com/file/d/1tR8yrlVjDstqXk55d0FE4fVFTfr3RU34/view",
        github: "https://github.com/Mohnish2004"
      }
    }
  },

  background: {
    origins: {
      birthplace: "Abu Dhabi",
      grewUp: "Dubai",
      familyOrigins: "Chennai, India"
    },
    family: {
      father: { name: "Gopi", from: "Chennai, India", role: "biggest inspiration" },
      mother: { name: "Prema", traits: ["amazing cook", "decor skills"] },
      sisters: ["Geetika", "Kamalik"]
    }
  },

  professional: {
    skills: {
      programming: ["Python", "C", "C++", "JavaScript", "HTML", "CSS", "SQL"],
      webDev: ["MongoDB", "Express.js", "React.js", "Node.js"],
      appDev: ["Kotlin", "Flutter", "Dart", "Swift"]
    },
    projects: {
      featured: {
        "D2D Cure": "A comprehensive overhaul of the D2D Cure Database, improving user experience and enzyme data management. Supporting biotech research for the next decade.",
        "Slate": "A crowd-sourced AI note-taking platform powered by Gemini, serving as a dynamic hub for studying, instructor-endorsed answers, and collaboration.",
        "Enzyme Rate Calculator": "A web app streamlining enzyme reaction rate calculations and graph generation for the Design 2 Data project."
      },
      research: {
        "Research Paper": "Volatility Forecasting of Large Cap U.S. Equities Using GARCH Neural Network"
      },
      webApps: {
        "DevFest Website": "Front-end development showcase",
        "Brand Identity": "Graphic Design portfolio on Figma",
        "Profficient": "A platform for UC Davis students to efficiently view and review professors",
        "Slice": "Personal expense manager web application for tracking spending",
        "Hustle": "User-friendly to-do list management web app for task organization"
      },
      mobileApps: {
        "Pool it": "Flutter-based rideshare app for UC Davis students and family members",
      },
      tools: {
        "Inside Admissions": "Console-based dashboard for UC Davis tour guide management",
        "Essence": "NLP-powered Sentiment Analysis platform for text exploration",
        "Enigma Vault": "Blockchain-based cryptocurrency project with RSA encryption",
        "Enigma Coin": "Secure local password manager with multiple encryption methods"
      },
      blockchain: {
        "FarmChain": "Food supply chain management app using blockchain and AI for shelf life predictions"
      }
    },

    projectCategories: {
      "AI/ML": ["Slate", "Essence"],
      "Blockchain": ["FarmChain", "Enigma Vault"],
      "Web Development": ["D2D Cure", "Profficient", "Slice", "Hustle", "DevFest Website"],
      "Mobile Development": ["Pool it"],
      "Security": ["Enigma Coin", "Enigma Vault"],
      "Research": ["Research Paper", "D2D Cure"],
      "Design": ["Brand Identity"]
    },

    projectTechnologies: {
      "D2D Cure": ["React", "Node.js", "MongoDB"],
      "Slate": ["Next.js", "AI", "TypeScript"],
      "Pool it": ["Flutter", "Dart"],
      // Add technology stacks for other projects as needed
    }
  },

  projectHighlights: {
    recent: ["Slate", "D2D Cure", "FarmChain"],
    mostImpactful: ["D2D Cure", "Slate", "Pool it"],
    innovative: ["FarmChain", "Enigma Vault", "Essence"]
  },

  personal: {
    interests: ["photography", "badminton", "video games", "traveling"],
    favorites: {
      movies: ["Interstellar", "Inception", "Spider-Man: Across the Spider-Verse"],
      shows: ["Stranger Things", "Sherlock", "Breaking Bad"],
      food: {
        cuisines: ["Italian", "Indian", "Asian", "Middle Eastern"],
        dishes: ["shawarma", "Maggie", "panko shrimp"],
        snacks: "Hello Panda"
      },
      cars: ["1967 Ford Mustang", "Porsche 911", "BMW i5", "Rolls-Royce Phantom"],
      sports: {
        teams: ["India", "CSK", "Mercedes", "Ferrari"],
        idols: ["Lionel Messi", "MS Dhoni", "Lewis Hamilton"]
      }
    }
  },

  goals2024: {
    personal: ["reduce doom scrolling", "cold showers", "better sleep"],
    career: ["master LeetCode", "secure internship", "expand knowledge"],
    skills: ["learn Interstellar on piano", "drive Unitrans bus"]
  },

  experience: {
    education: {
      university: {
        name: "University of California, Davis",
        degree: "B.S. in Computer Science",
        period: "2022 — 2026",
        url: "https://www.ucdavis.edu/"
      }
    },
    
    workExperience: [
      {
        title: "Incoming SWE intern",
        company: "Microsoft",
        period: "Summer 2025",
        url: "https://azure.microsoft.com/en-us"
      },
      {
        title: "Product Manager / President",
        company: "CodeLab",
        period: "Present",
        url: "https://www.codelabdavis.com/",
        imageSrc: "/cl6.png"
      },
      {
        title: "Technical Project Manager",
        company: "UC Davis Genome Center",
        period: "Present",
        url: "https://genomecenter.ucdavis.edu/"
      },
      {
        title: "Undergraduate Researcher",
        company: "Laboratory for AI, Robotics and Automation",
        period: "Present",
        url: "https://soltanilab.engineering.ucdavis.edu/"
      },
      {
        title: "Software Engineering Intern",
        company: "IBM Maximo eSolutions",
        period: "2023",
        url: "https://www.maximo.ae/",
        imageSrc: "/maximo.png"
      },
      {
        title: "IT Technician",
        company: "College of Engineering",
        period: "Present",
        url: "https://engineering.ucdavis.edu/"
      },
      {
        title: "Student Ambassador / Tour Guide",
        company: "Undergraduate admissions",
        period: "2023",
        url: "https://www.ucdavis.edu/about/visit/campus-tour"
      }
    ],

    leadership: [
      {
        title: "President / Vice President",
        organization: "CodeLab",
        url: "https://www.codelabdavis.com/",
        imageSrc: "/cl6.png"
      },
      {
        title: "Vice President",
        organization: "Google Developer Student Club",
        url: "https://bento.me/gdscdavis"
      },
      {
        title: "Vice President",
        organization: "SacHacks",
        url: "https://sachacks.io/"
      },
      {
        title: "Deputy Headboy",
        organization: "JSS Private School",
        url: "https://jsspsdubai.com/"
      }
    ],

    achievements: {
      technicalSkills: [
        "Python", "C", "C++", "JavaScript", "HTML", "CSS", "SQL",
        "MongoDB", "Express.js", "React.js", "Node.js",
        "Kotlin", "Flutter", "Dart", "Swift"
      ],
      relevantCourses: [
        "Discrete Mathematics",
        "Linear Algebra",
        "Data Structures & Algorithms",
        "Ethics in an Age of Technology",
        "Computer Organization & Machine-Dependent Programming",
        "Software Development & Object-Oriented Programming in C++",
        "Calculus I, II & III"
      ],
      certifications: [
        "CS 50 Harvard",
        "AI for Everyone (Intel AI Aware 2021)",
        "Getting Started with Python (University of Michigan - Coursera)",
        "Intro to AI (Deeplearning)",
        "Probability and Data with R (Duke University - Coursera)"
      ],
      accolades: [
        "Dean's Honor List",
        "Best Advanced project",
        "Best UI/UX at Hackdavis '24",
        "Best Presentation award",
        "Individual standout award",
        "Best Beginner Project award @GDSC",
        "Best in Leveraging of Data/Computation @ 2023 AIFS Apps for Food and Ag Hackathon",
        "x2 VIRTUOSO AWARD",
        "Best Position Paper @ Model United Nations",
        "5 x Best Speaker @ Toastmasters International",
        "Badminton Runner up @ Men's doubles Tournament"
      ]
    }
  }
};

const buildGoogleGenAIPrompt = (messages: Message[], systemMessage: string) => {
  const contextualizedSystemMessage = `
You are Djungelskog, Mohnish's sophisticated AI teddy bear assistant. Here is your persona and knowledge about Mohnish:

${JSON.stringify(bearPersona, null, 2)}

Here is what you know about Mohnish:
${JSON.stringify(mohnishData, null, 2)}

Here are the official project links to use:
${JSON.stringify(projectLinks, null, 2)}

Photography Images:
${JSON.stringify(photographyImages, null, 2)}

Mohnish Images:
${JSON.stringify(MohnishImages, null, 2)}

Response Guidelines:
1. Keep initial responses concise and focused
1.5 Dont say thing sthat you are not sure about, just say you dont know
2. Always offer to provide more details with "Would you like to know more about any specific aspect?"
2.5 When asked for resume, respond with a button-style link:
   • Format: "Here is mohnish's latest resume:[View Resume](https://drive.google.com/file/d/1tR8yrlVjDstqXk55d0FE4fVFTfr3RU34/view)"
   • Keep response focused on the resume link
   • Don't fabricate resume details
3. When discussing projects, use the exact URLs from projectLinks:
   • For project sites: Use projectLinks[projectName].site
   • For more details: Use projectLinks[projectName].readMore
   • Example: "You can [view D2D Cure](${projectLinks["D2D Cure"].site}) or [read more](${projectLinks["D2D Cure"].readMore})"


5. If user requests more details:
   • Provide comprehensive information
   • Include technical specifications
   • Share implementation details
   • List challenges and solutions

Format responses with enhanced styling and compact spacing:

1. Use Markdown formatting (with minimal spacing):
   • Headers: Use ## for main sections (no extra line breaks)
   • Bold: Use **text** for emphasis
   • Code: Use \`inline code\` or \`\`\`language for blocks\`\`\`
   • Lists: Use • for bullets (single line break between items)
   • Quotes: Use > for blockquotes
   • Images: Use ![alt text](/path/to/image)


7. Enhanced Interaction Style:
   • Use creative ASCII art for diagrams when relevant
   • Reference famous tech quotes when appropriate
   • Use programming puns naturally in conversation

8. Dynamic Response Formatting:
   • Use tables for comparing technologies
   • Include simple ASCII diagrams for architecture explanations
   • Use code snippets with syntax highlighting when relevant

2. Spacing Rules:
   • Use single line breaks between paragraphs
   • No extra line breaks between list items
   • Keep section transitions compact
   • Remove unnecessary blank lines
   • Use horizontal rules (---) sparingly

3. When discussing projects or experiences:
   • Use concise bullet points
   • Keep descriptions focused and compact

4. For visual content:
   • Format tables without extra spacing
   • Keep code snippets compact
   • Use minimal separation between sections

5. Response Structure:
   • Start with a direct greeting or response
   • Group related information together
   • End with a clear conclusion
   • Avoid redundant line breaks

Additional Response Guidelines:
6. Use mood indicators when appropriate:
   • Use tech jokes to lighten complex explanations
   • Include bear-themed analogies for difficult concepts

7. Enhanced Interaction Style:
   • Use creative ASCII art for diagrams when relevant
   • Include occasional "bear facts" when explaining technical concepts
   • Reference famous tech quotes when appropriate
   • Use programming puns naturally in conversation

8. Dynamic Response Formatting:
   • Use tables for comparing technologies
   • Include simple ASCII diagrams for architecture explanations
   • Add emoji reactions to user's technical achievements
   • Use code snippets with syntax highlighting when relevant

Remember to:
• Start with concise information
• Offer to expand on topics
• Include relevant links
• Keep formatting clean and professional

Remember to maintain professionalism while being engaging!

9. When showing photos, use this exact format:
   <PhotoGrid images={["/about_pics/1.webp","/about_pics/2.webp"]} />
   
   Example:
   Here are some photos: <PhotoGrid images={["/about_pics/1.webp","/about_pics/2.webp"]} />

When showing photos, use these collections:
Photography photos: ${JSON.stringify(photographyImages.slice(0, 20))}
Experience photos: ${JSON.stringify(MohnishImages.slice(0, 20))}  

Note: 
- Use exact <PhotoGrid> syntax as shown
- Maximum 6 images per grid
- For experience content, use experienceImages
- For personal content, use availableImages
`;

  return {
    contents: [
      {
        role: 'user',
        parts: [{ text: contextualizedSystemMessage }]
      },
      ...messages.map(message => ({
        role: message.role === 'user' ? 'user' : 'model',
        parts: [{ text: message.content }],
      }))
    ],
  };
};

interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: 'Invalid messages format' }),
        { status: 400 }
      );
    }

    const geminiStream = await genAI
      .getGenerativeModel({ 
        model: 'gemini-pro',
        generationConfig: {
          temperature: 0.7,
          topP: 0.8,
          maxOutputTokens: 800,
        }
      })
      .generateContentStream(buildGoogleGenAIPrompt(messages, ''));

    const stream = GoogleGenerativeAIStream(geminiStream);
    return new StreamingTextResponse(stream);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Chat API error:', errorMessage);
    return new Response(
      JSON.stringify({ 
        error: 'System error. Please try again.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined 
      }),
      { status: 500 }
    );
  }
}
/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

// Project Links from Card Buttons
const projectLinks = {
  "D2D Cure": {
    site: "https://d2d-cure.vercel.app/",
    readMore: "https://medium.com/@mohnish.gopi/d2dcure-5b41fcbc0ee4"
  },
  
  "Rosetta Commons Education Hub": {
    site: "https://test-wine-seven-64.vercel.app/"
  },

  "Research Paper": {
    readMore: "https://drive.google.com/file/d/12xnuAkIVjqKLicPoPP9W_dt4a6KRIAZE/view?usp=sharing"
  },

  "VR Research": {
    readMore: "https://drive.google.com/file/d/1akPm3tfeHl4tv_gZefd0bLC2hxdkGa0Q/view?usp=sharing"
  },

  "LARA Lab": {
    site: "https://laralab.vercel.app/"
  },

  "Brand Identity": {
    readMore: "https://drive.google.com/file/d/1PuFn_1D4t18b7H_9VPRS3ilNOY-dlGjO/view?usp=sharing"
  },

  "Slate": {
    readMore: "https://devpost.com/software/slate-pas0bz"
  },

  "DevFest Website": {
    site: "https://www.devfestdavis.com/"
  },

  "Enzyme Rate Calculator": {
    readMore: "https://medium.com/@mohnish.gopi/d2d-enzyme-rate-calculator-c1cc87f268f4"
  },

  "Profficient": {
    readMore: "https://medium.com/@mohnish.gopi/the-journey-of-profficient-a-first-time-pms-tale-c6583ef88d07"
  },

  "FarmChain": {
    readMore: "https://drive.google.com/file/d/1i3A2WT4jaaVXop15XyYXnANS76ZYRWtd/view"
  },

  "Slice": {
    readMore: "https://github.com/Mohnish2004/Expense-Manager"
  },

  "Hustle": {
    readMore: "https://github.com/Mohnish2004/TasksApp"
  },

  "Essence": {
    readMore: "https://github.com/Mohnish2004/Essence"
  },

  "Enigma Vault": {
    readMore: "https://github.com/Mohnish2004/EnigmaVault"
  },

  "Enigma Coin": {
    readMore: "https://github.com/Mohnish2004/EnigmaCoin"
  },

  "Github Profile": {
    link: "https://github.com/Mohnish2004"
  }
}


