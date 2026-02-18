import { SaveResultOfIntegerAlt } from './save-result-of-integer-alt.interface';

export type LotSaveResultAlt = SaveResultOfIntegerAlt & { 'Customers'?: Array<SaveResultOfIntegerAlt> | null; 'Items'?: Array<SaveResultOfIntegerAlt> | null; };
