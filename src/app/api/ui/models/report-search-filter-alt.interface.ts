import { SortParameterAlt } from './sort-parameter-alt.interface';

// @ts-ignore
export interface ReportSearchFilterAlt {
  skip: number;
  sorting: SortParameterAlt[];
  take: number;
  userId: number;
}
