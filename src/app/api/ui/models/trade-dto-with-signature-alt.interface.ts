import { FileSign } from './file-sign.interface';
import { TradeDto2 } from './trade-dto-2.interface';

export type TradeDtoWithSignatureAlt = TradeDto2 & { 'FileSigns'?: Array<FileSign> | null; };
