import { FileSign } from './file-sign.interface';
import { TradeDto2 } from './trade-dto-2.interface';

// @ts-ignore
export interface TradeDtoWithSignature extends TradeDto2 {
  fileSigns: FileSign[];
}
