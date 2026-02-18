import { BaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAlt } from './base-contract-dto-with-id-and-row-version-of-integer-and-integer-alt.interface';
import { TradePlanItemOkpd2Market } from './trade-plan-item-okpd-2-market.interface';

export type TradePlanLotItemMarket = BaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAlt & { 'Name'?: string | null; 'Okato'?: string | null; 'RegionName'?: string | null; 'AdditionalInfo'?: string | null; 'Okpd2Classifiers'?: Array<TradePlanItemOkpd2Market> | null; };
