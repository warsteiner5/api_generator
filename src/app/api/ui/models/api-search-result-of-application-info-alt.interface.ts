import { ApplicationInfoAlt } from './application-info-alt.interface';

export interface ApiSearchResultOfApplicationInfoAlt {
  currpage: number;
  invdata: ApplicationInfoAlt[];
  showTotal: boolean;
  totalpages: number;
  totalrecords: number;
}
