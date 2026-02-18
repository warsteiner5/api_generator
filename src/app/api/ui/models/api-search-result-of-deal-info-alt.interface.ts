import { DealInfoAlt } from './deal-info-alt.interface';

export interface ApiSearchResultOfDealInfoAlt {
  currpage: number;
  invdata: DealInfoAlt[];
  showTotal: boolean;
  totalpages: number;
  totalrecords: number;
}
