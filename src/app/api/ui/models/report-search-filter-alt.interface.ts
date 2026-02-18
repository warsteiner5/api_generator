import { SortParameterAlt } from './sort-parameter-alt.interface';

export interface ReportSearchFilterAlt {
  skip: number;
  sorting: SortParameterAlt[];
  take: number;
  userId: number;
}
