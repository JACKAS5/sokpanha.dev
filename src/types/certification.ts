export interface Certification {
  id: string | number;
  title: string;
  issuer: string;
  year: string;
  logo: string;
  credentialUrl: string;
  issuerUrl?: string; 
}