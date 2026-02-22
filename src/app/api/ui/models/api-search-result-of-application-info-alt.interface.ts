import { ApplicationInfoAlt } from './application-info-alt.interface';

// @ts-ignore
export interface ApiSearchResultOfApplicationInfoAlt {
  currpage: number;
  invdata: ApplicationInfoAlt[];
  showTotal: boolean;
  totalpages: number;
  totalrecords: number;
}
