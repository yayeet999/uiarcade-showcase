import { Component } from "@/types/components";

export const components: Component[] = [
  { 
    id: 1, 
    name: "Lavender Auth Form", 
    category: "forms", 
    description: "A modern authentication form with smooth animations, gradient background, and interactive states",
    tags: ["form", "auth", "animated", "gradient", "interactive"],
    status: "stable",
    docsUrl: "/docs/lavender-auth-form"
  },
  { 
    id: 2, 
    name: "Card", 
    category: "surfaces", 
    description: "Versatile card component for content",
    tags: ["container", "surface", "layout"],
    status: "stable",
    docsUrl: "/docs/card"
  },
  { 
    id: 3, 
    name: "Grey Retro Auth Form", 
    category: "forms", 
    description: "A modern retro-styled authentication form with stepped sign-in, social auth options, and smooth animations",
    tags: ["form", "auth", "retro", "social", "animated"],
    status: "stable",
    docsUrl: "/docs/grey-retro-auth-form"
  },
  { 
    id: 4, 
    name: "Dropdown", 
    category: "navigation", 
    description: "Dropdown menu with customizable options",
    tags: ["menu", "select", "options"],
    status: "stable",
    docsUrl: "/docs/dropdown"
  },
  { 
    id: 5, 
    name: "Cyber Punk Auth Form",
    category: "forms",
    description: "A cyberpunk-themed authentication form with XP progression, level system, and social login options",
    tags: ["form", "auth", "cyberpunk", "animated", "social", "game"],
    status: "stable",
    docsUrl: "/docs/cyber-punk-auth-form"
  },
  { 
    id: 6, 
    name: "Tabs", 
    category: "navigation", 
    description: "Tab interface for organized content",
    tags: ["navigation", "organize", "sections"],
    status: "stable",
    docsUrl: "/docs/tabs"
  },
  { 
    id: 7, 
    name: "Table", 
    category: "data-display", 
    description: "Data table with sorting and pagination",
    tags: ["data", "grid", "display"],
    status: "stable",
    docsUrl: "/docs/table"
  },
  { 
    id: 8, 
    name: "Avatar", 
    category: "data-display", 
    description: "User avatar with various sizes",
    tags: ["user", "profile", "image"],
    status: "stable",
    docsUrl: "/docs/avatar"
  },
  { 
    id: 10, 
    name: "Alert", 
    category: "feedback", 
    description: "Alert messages for notifications",
    tags: ["notification", "message", "info"],
    status: "stable",
    docsUrl: "/docs/alert"
  },
  { 
    id: 11, 
    name: "Progress", 
    category: "feedback", 
    description: "Progress indicators and bars",
    tags: ["loading", "status", "indicator"],
    status: "stable",
    docsUrl: "/docs/progress"
  },
  { 
    id: 12, 
    name: "Tooltip", 
    category: "feedback", 
    description: "Contextual tooltips for elements",
    tags: ["info", "hover", "help"],
    status: "stable",
    docsUrl: "/docs/tooltip"
  },
  { 
    id: 13, 
    name: "Animated Submit Button", 
    category: "buttons", 
    description: "A modern, minimalist submit button with smooth animations, loading states, and success feedback",
    tags: ["interactive", "animation", "submit", "loading", "success"],
    status: "stable",
    docsUrl: "/docs/animated-submit-button"
  },
  { 
    id: 14, 
    name: "Buy Now Button", 
    category: "buttons", 
    description: "Animated gradient button with hover and click effects",
    tags: ["button", "animation", "gradient", "interactive"],
    status: "stable",
    docsUrl: "/docs/buy-now-button"
  },
  { 
    id: 15, 
    name: "Download Button", 
    category: "buttons", 
    description: "Interactive download button with progress indicator and success animation",
    tags: ["button", "animation", "download", "progress", "interactive"],
    status: "stable",
    docsUrl: "/docs/download-button"
  },
  { 
    id: 16, 
    name: "Delete Button", 
    category: "buttons", 
    description: "Interactive delete button with confirmation, progress indicator, and success animation",
    tags: ["button", "animation", "delete", "confirmation", "interactive"],
    status: "stable",
    docsUrl: "/docs/delete-button"
  },
  { 
    id: 17, 
    name: "Google Auth Button", 
    category: "buttons", 
    description: "Modern Google sign-in button with magnetic outline, particle effects, and smooth animations",
    tags: ["button", "google", "auth", "animation", "interactive", "social"],
    status: "stable",
    docsUrl: "/docs/google-auth-button"
  }
];

export const getComponentsByCategory = (categoryId: string): Component[] => {
  if (categoryId === "all") {
    return components;
  }
  return components.filter(component => component.category === categoryId);
};

export const getComponentById = (id: number): Component | undefined => {
  return components.find(component => component.id === id);
};

export const getComponentByName = (name: string): Component | undefined => {
  return components.find(component => component.name.toLowerCase() === name.toLowerCase());
};

export const searchComponents = (query: string, categoryId: string = "all"): Component[] => {
  const lowerQuery = query.toLowerCase();
  const categoryFiltered = categoryId === "all" 
    ? components 
    : components.filter(component => component.category === categoryId);
  
  return categoryFiltered.filter(component => 
    component.name.toLowerCase().includes(lowerQuery) || 
    component.description.toLowerCase().includes(lowerQuery) ||
    component.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
