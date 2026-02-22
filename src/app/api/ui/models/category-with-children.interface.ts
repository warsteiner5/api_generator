import { Category } from './category.interface';

// @ts-ignore
export interface CategoryWithChildren extends Category {
  children: Category[];
}
