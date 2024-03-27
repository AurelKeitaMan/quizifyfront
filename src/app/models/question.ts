import { Category } from './category';

export interface Question {
  id: number;
  libelle: string;
  categorie: Category;
  reponse: Response[];
}
