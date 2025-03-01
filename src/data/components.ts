
import { Component } from "@/types/components";

export const components: Component[] = [
  { 
    id: 1, 
    name: "Button", 
    category: "forms", 
    description: "Button component with multiple variants",
    tags: ["interactive", "action", "click"],
    status: "stable",
    docsUrl: "/docs/button"
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
    name: "Input", 
    category: "forms", 
    description: "Input field with various states",
    tags: ["form", "text", "data entry"],
    status: "stable",
    docsUrl: "/docs/input"
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
    name: "Modal", 
    category: "feedback", 
    description: "Modal dialog for important actions",
    tags: ["dialog", "popup", "overlay"],
    status: "stable",
    docsUrl: "/docs/modal"
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
    id: 9, 
    name: "Toggle", 
    category: "forms", 
    description: "Toggle switch for boolean values",
    tags: ["switch", "boolean", "control"],
    status: "stable",
    docsUrl: "/docs/toggle"
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
