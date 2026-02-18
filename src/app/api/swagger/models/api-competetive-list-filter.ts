/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterAltDto } from '../models/api-base-filter';
import { ApiCompetitiveListItemStateEnum } from '../models/api-competitive-list-item-state-enum';
export type ApiCompetetiveListFilterAltDto = ApiBaseFilterAltDto & {
'TradeId'?: number;
'DeliveryKladrRegionCode'?: string | null;
'State'?: ApiCompetitiveListItemStateEnum | null;
};
