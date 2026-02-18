import { KsrValueAlt } from './ksr-value-alt.interface';

export interface KsrCategoryAlt {
  categoryName: string;
  children: KsrValueAlt[];
  order: number;
}
