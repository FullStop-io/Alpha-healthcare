export type EquipmentCategory = string;

export interface DepartmentCategory {
  id: string;
  name: string;
  shortName?: string;
  iconName: string;
  image?: string;
  description: string;
  equipmentList: string[];
  badge?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: EquipmentCategory;
  categoryName: string;
  relatedDepartments?: string[];
  tagline: string;
  description: string;
  fullSpecs: {
    label: string;
    value: string;
  }[];
  features: string[];
  certifications: string[];
  badge?: string;
  image: string;
  modelNumber: string;
  applications: string[];
  warrantyYears: number;
}

export interface HospitalSolution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedBeds: string;
  coreEquipment: string[];
  standardsComplied: string[];
  turnaroundTime: string;
  image: string;
  iconName: string;
  estimatedBudgetRange: string;
  deliverables: string[];
}

export interface ServiceOffering {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  slaGuarantee: string;
  idealFor: string;
  iconName: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  hospitalName: string;
  location: string;
  quote: string;
  author: string;
  role: string;
  verifiedInstallation: string;
  rating: number;
}
