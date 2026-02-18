/* tslint:disable */
/* eslint-disable */
import { ApiBaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAltDto } from '../models/api-base-contract-dto-with-id-and-row-version-of-integer-and-integer';
import { ApiTradePlanItemOkpd2MarketDto } from '../models/api-trade-plan-item-okpd-2-market-dto';
export type ApiTradePlanLotItemMarketDto = ApiBaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAltDto & {
'Name'?: string | null;
'Okato'?: string | null;
'RegionName'?: string | null;
'AdditionalInfo'?: string | null;
'Okpd2Classifiers'?: Array<ApiTradePlanItemOkpd2MarketDto> | null;
};
