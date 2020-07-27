export interface Book {
  id: number | string;
  title: string;
  subtitle?: string;
  publisher?: string;
  publishedDate?: string;
  description: string;
  authors: string[];
  categories: string[];
  imageLinks: { thumbnail: string };
  // volumeInfo: object;
}
