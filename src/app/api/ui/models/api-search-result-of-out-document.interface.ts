import { OutDocument } from './out-document.interface';

// @ts-ignore
export interface ApiSearchResultOfOutDocument {
  currpage: number;
  invdata: OutDocument[];
  showTotal: boolean;
  totalpages: number;
  totalrecords: number;
}
