/* tslint:disable */
/* eslint-disable */
import { ApiParticipantOfferSourceEnum } from '../models/api-participant-offer-source-enum';
import { ApiPriceListImportTypeEnum } from '../models/api-price-list-import-type-enum';
export interface ApiCreateImportTaskRequestAltDto {
  FileGuid?: string;
  FileName?: string | null;
  ImportType?: ApiPriceListImportTypeEnum;
  PriceListId?: number | null;
  Source?: ApiParticipantOfferSourceEnum;
}
