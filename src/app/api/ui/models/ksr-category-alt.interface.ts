import { KsrValueAlt } from './ksr-value-alt.interface';

// @ts-ignore
export interface KsrCategoryAlt {
  categoryName: string;
  children: KsrValueAlt[];
  order: number;
}
