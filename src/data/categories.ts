
import { ComponentCategory } from "@/types/components";
import { Layers, FileText, Square, LayoutGrid, Image, Input, Loader2, Plus } from "lucide-react";

export const categories: ComponentCategory[] = [
  { 
    id: "all", 
    name: "All Categories",
    description: "Browse all UI components in our library",
    icon: Layers,
    href: "/components/all",
    order: 0,
    maxColumns: 4,
    displayOptions: {
      layout: "grid",
      itemsPerPage: 12,
      showDescription: true
    }
  },
  { 
    id: "forms", 
    name: "Forms",
    description: "Input components for user interaction and data collection",
    icon: FileText,
    href: "/components/forms",
    order: 1,
    maxColumns: 3,
    displayOptions: {
      layout: "grid",
      itemsPerPage: 9,
      showDescription: true
    }
  },
  { 
    id: "buttons", 
    name: "Buttons",
    description: "Button components for user interactions",
    icon: Square,
    href: "/components/buttons",
    order: 2,
    maxColumns: 4,
    displayOptions: {
      layout: "grid",
      itemsPerPage: 12,
      showDescription: true
    }
  },
  { 
    id: "cards", 
    name: "Cards",
    description: "Card components for displaying content",
    icon: LayoutGrid,
    href: "/components/cards",
    order: 3,
    maxColumns: 4,
    displayOptions: {
      layout: "grid",
      itemsPerPage: 12,
      showDescription: true
    }
  },
  { 
    id: "images", 
    name: "Images",
    description: "Image display components",
    icon: Image,
    href: "/components/images",
    order: 4,
    maxColumns: 3,
    displayOptions: {
      layout: "grid",
      itemsPerPage: 9,
      showDescription: true
    }
  },
  { 
    id: "inputs", 
    name: "Inputs",
    description: "Input components for forms and data collection",
    icon: Input,
    href: "/components/inputs",
    order: 5,
    maxColumns: 4,
    displayOptions: {
      layout: "grid",
      itemsPerPage: 12,
      showDescription: true
    }
  },
  { 
    id: "loaders", 
    name: "Loaders",
    description: "Loading and progress indicators",
    icon: Loader2,
    href: "/components/loaders",
    order: 6,
    maxColumns: 4,
    displayOptions: {
      layout: "grid",
      itemsPerPage: 12,
      showDescription: true
    }
  },
  { 
    id: "others", 
    name: "Others",
    description: "Miscellaneous UI components",
    icon: Plus,
    href: "/components/others",
    order: 7,
    maxColumns: 4,
    displayOptions: {
      layout: "grid",
      itemsPerPage: 12,
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
