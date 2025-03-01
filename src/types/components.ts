
export type ComponentCategory = {
  id: string;
  name: string;
  description: string;
  icon?: string;
  order?: number;
  displayOptions?: {
    layout?: 'grid' | 'list' | 'compact';
    itemsPerPage?: number;
    showDescription?: boolean;
  };
};

export type Component = {
  id: number;
  name: string;
  category: string;
  description: string;
  tags?: string[];
  previewUrl?: string;
  status?: 'stable' | 'beta' | 'deprecated';
  addedIn?: string;
  docsUrl?: string;
};
