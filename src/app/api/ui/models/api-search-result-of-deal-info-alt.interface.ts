import { DealInfoAlt } from './deal-info-alt.interface';

// @ts-ignore
export interface ApiSearchResultOfDealInfoAlt {
  currpage: number;
  invdata: DealInfoAlt[];
  showTotal: boolean;
  totalpages: number;
  totalrecords: number;
}
