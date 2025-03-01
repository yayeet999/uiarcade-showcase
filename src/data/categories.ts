
import { ComponentCategory } from "@/types/components";

export const categories: ComponentCategory[] = [
  { 
    id: "all", 
    name: "All Components",
    description: "Browse all UI components in our library",
    order: 0,
    displayOptions: {
      layout: "grid",
      itemsPerPage: 12,
      showDescription: true
    }
  },
  { 
    id: "layout", 
    name: "Layout",
    description: "Components that help with page structure and layout",
    order: 1,
    displayOptions: {
      layout: "grid",
      itemsPerPage: 9,
      showDescription: true
    }
  },
  { 
    id: "forms", 
    name: "Forms",
    description: "Input components for user interaction and data collection",
    order: 2,
    displayOptions: {
      layout: "grid",
      itemsPerPage: 9,
      showDescription: true
    }
  },
  { 
    id: "data-display", 
    name: "Data Display",
    description: "Components for displaying various types of data and content",
    order: 3,
    displayOptions: {
      layout: "grid",
      itemsPerPage: 9,
      showDescription: true
    }
  },
  { 
    id: "navigation", 
    name: "Navigation",
    description: "Components for site navigation and wayfinding",
    order: 4,
    displayOptions: {
      layout: "grid",
      itemsPerPage: 9,
      showDescription: true
    }
  },
  { 
    id: "feedback", 
    name: "Feedback",
    description: "Components for providing feedback to user interactions",
    order: 5,
    displayOptions: {
      layout: "grid",
      itemsPerPage: 9,
      showDescription: true
    }
  },
  { 
    id: "surfaces", 
    name: "Surfaces",
    description: "Structural components that serve as containers",
    order: 6,
    displayOptions: {
      layout: "grid",
      itemsPerPage: 9,
      showDescription: true
    }
  },
];

export const getCategoryById = (id: string): ComponentCategory | undefined => {
  return categories.find(category => category.id === id);
};

export const getOrderedCategories = (): ComponentCategory[] => {
  return [...categories].sort((a, b) => (a.order || 0) - (b.order || 0));
};
