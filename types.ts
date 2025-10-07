// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Portfolio Settings (Singleton)
export interface PortfolioSettings extends CosmicObject {
  type: 'portfolio-settings';
  metadata: {
    full_name: string;
    tagline: string;
    hero_animation?: {
      key: 'gradient' | 'geometric' | 'particles';
      value: string;
    };
    about_bio: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    education?: string;
    email: string;
    linkedin_url?: string;
    location?: string;
    theme_primary_color?: string;
    theme_secondary_color?: string;
    resume_pdf?: {
      url: string;
    } | null;
  };
}

// Experience Entry
export interface ExperienceEntry extends CosmicObject {
  type: 'experience-entries';
  metadata: {
    company_name: string;
    role: string;
    start_date: string;
    end_date?: string;
    current?: boolean;
    description: string;
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    icon_emoji?: string;
  };
}

// Project
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    project_title: string;
    short_description: string;
    full_description: string;
    technologies?: string;
    project_type?: {
      key: 'research' | 'development' | 'academic' | 'business';
      value: string;
    };
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    project_date?: string;
    publication_link?: string;
  };
}

// Skill
export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    skill_name: string;
    skill_category: {
      key: 'technical' | 'interpersonal' | 'tools';
      value: string;
    };
    proficiency_level?: number;
    icon_emoji?: string;
  };
}

// Certificate
export interface Certificate extends CosmicObject {
  type: 'certificates';
  metadata: {
    certificate_title: string;
    issuing_org: string;
    issue_date?: string;
    certificate_image?: {
      url: string;
      imgix_url: string;
    };
    verification_link?: string;
    description?: string;
  };
}

// API Response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isPortfolioSettings(obj: CosmicObject): obj is PortfolioSettings {
  return obj.type === 'portfolio-settings';
}

export function isExperienceEntry(obj: CosmicObject): obj is ExperienceEntry {
  return obj.type === 'experience-entries';
}

export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}

export function isSkill(obj: CosmicObject): obj is Skill {
  return obj.type === 'skills';
}

export function isCertificate(obj: CosmicObject): obj is Certificate {
  return obj.type === 'certificates';
}