import { ApiCreateImportTaskRequestAltDto } from '../../../swagger/models/api-create-import-task-request';
import { CreateImportTaskRequestAlt } from '../../models/create-import-task-request-alt.interface';
import { adaptParticipantOfferSourceEnumToUI } from './participant-offer-source-enum.adapter';
import { adaptPriceListImportTypeEnumToUI } from './price-list-import-type-enum.adapter';

export function adaptCreateImportTaskRequestAltToUI(source?: ApiCreateImportTaskRequestAltDto | null): CreateImportTaskRequestAlt {
  return {
    fileGuid: source?.FileGuid ?? '',
    fileName: source?.FileName ?? '',
    importType: adaptPriceListImportTypeEnumToUI(source?.ImportType),
    priceListId: source?.PriceListId ?? 0,
    source: adaptParticipantOfferSourceEnumToUI(source?.Source),
  };
}
