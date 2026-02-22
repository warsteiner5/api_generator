import { ParticipantOfferSourceEnum } from '../enums/participant-offer-source.enum';
import { PriceListImportTypeEnum } from '../enums/price-list-import-type.enum';

// @ts-ignore
export interface CreateImportTaskRequestAlt {
  fileGuid: string;
  fileName: string;
  importType: PriceListImportTypeEnum;
  priceListId: number;
  source: ParticipantOfferSourceEnum;
}
