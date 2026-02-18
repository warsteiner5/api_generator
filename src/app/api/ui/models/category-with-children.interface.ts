import { Category } from './category.interface';

export type CategoryWithChildren = Category & { 'Children'?: Array<Category> | null; };
