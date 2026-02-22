import { SaveResultOfIntegerAlt } from './save-result-of-integer-alt.interface';

// @ts-ignore
export interface LotSaveResultAlt extends SaveResultOfIntegerAlt {
  customers: SaveResultOfIntegerAlt[];
  items: SaveResultOfIntegerAlt[];
}
