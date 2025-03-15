export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface GeoLocation {
  country: string;
  countryCode: string;
  city: string;
  cityCode: string;
  state: string;
  stateCode: string;
}

export interface Education {
  schoolName: string;
  degree: string;
  description?: string;
  fieldOfStudy?: string;
  start: { day: number; month: number; year: number };
  end?: { day: number; month: number; year: number };
  logo?: Image;
}

export interface Position {
  companyName: string;
  companyUrn?: string;
  title: string;
  description?: string;
  location?: string;
  start: { day: number; month: number; year: number };
  end?: { day: number; month: number; year: number };
  logo?: Image;
}

export interface LinkedInProfile {
  id: string;
  urn: string;
  username: string;
  firstName: string;
  lastName: string;
  fullName: string;
  headline: string;
  summary: string;
  isTopVoice: boolean;
  isCreator: boolean;
  isPremium: boolean;
  profilePicture?: Image;
  profilePictures?: Image[];
  backgroundImage?: Image;
  geo: GeoLocation;
  educations: Education[];
  position: Position;
  fullPositions: Position[];
}
