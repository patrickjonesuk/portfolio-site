export interface IconLink {
  imageURL: string;
  clickURL: string;
}

export interface TechCategory {
  name: string;
  description?: string;
  icons: IconLink[];
}

export interface CaptionedImage {
  imageURL: URL;
  caption: string;
}

export interface Project {
  name: string;
  description: string;
  links: IconLink[];
  technologies: TechCategory[];
  images: CaptionedImage[];
  dates: string;
  featured?: boolean;
  hidden?: boolean;
}
