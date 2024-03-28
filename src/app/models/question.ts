import { Category } from './category';
import { ResponseQ } from './responseQ';

export interface Question {
  id: number;
  libelle: string;
  categorie: Category;
  reponse: ResponseQ[];
}
