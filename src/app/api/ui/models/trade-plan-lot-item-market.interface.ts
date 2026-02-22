import { BaseContractDtoWithIdAndRowVersionOfIntegerAndInteger } from './base-contract-dto-with-id-and-row-version-of-integer-and-integer.interface';
import { TradePlanItemOkpd2Market } from './trade-plan-item-okpd-2-market.interface';

// @ts-ignore
export interface TradePlanLotItemMarket extends BaseContractDtoWithIdAndRowVersionOfIntegerAndInteger {
  name: string;
  okato: string;
  regionName: string;
  additionalInfo: string;
  okpd2Classifiers: TradePlanItemOkpd2Market[];
}
