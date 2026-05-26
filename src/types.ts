export interface LeadData {
  fullName: string;
  pharmacyName: string;
  phoneNumber: string;
  address: string;
  email?: string;
  message?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}
