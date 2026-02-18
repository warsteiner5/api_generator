/* tslint:disable */
/* eslint-disable */
import { ApiDealFormEnum } from '../models/api-deal-form-enum';
import { ApiDealStateEnum } from '../models/api-deal-state-enum';
import { ApiDocumentAltDto } from '../models/api-document';
export interface ApiMarketDealDto {
  ApplicationPrice?: number | null;
  CustomerGuid?: string;
  CustomerName?: string | null;
  CustomerSignDate?: string | null;
  DealForm?: ApiDealFormEnum;
  DealPrice?: number;
  DealState?: ApiDealStateEnum;
  DifferenceProtocolDocuments?: Array<ApiDocumentAltDto> | null;
  Documents?: Array<ApiDocumentAltDto> | null;
  Id?: number;
  IsPriceWithVat?: boolean | null;
  LotItemsSumPrice?: number | null;
  SumVat?: number | null;
  SupplierGuid?: string;
  SupplierName?: string | null;
  SupplierSignDate?: string | null;
  TaxPercent?: number | null;
  TradePrice?: number | null;
}
