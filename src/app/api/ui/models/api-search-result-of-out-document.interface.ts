import { OutDocument } from './out-document.interface';

export interface ApiSearchResultOfOutDocument {
  currpage: number;
  invdata: OutDocument[];
  showTotal: boolean;
  totalpages: number;
  totalrecords: number;
}
