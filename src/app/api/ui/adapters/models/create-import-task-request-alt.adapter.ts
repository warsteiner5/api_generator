import { ApiCreateImportTaskRequestAltDto } from '../../../swagger/models/api-create-import-task-request';
import { CreateImportTaskRequestAlt } from '../../models/create-import-task-request-alt.interface';
import { participantOfferSourceEnumAdapter } from '../enums/participant-offer-source-enum.adapter';
import { priceListImportTypeEnumAdapter } from '../enums/price-list-import-type-enum.adapter';

export const createImportTaskRequestAltAdapter = (source?: ApiCreateImportTaskRequestAltDto | null): CreateImportTaskRequestAlt => {
  return {
    fileGuid: source?.FileGuid,
    fileName: source?.FileName,
    importType: source?.ImportType === null ? undefined : priceListImportTypeEnumAdapter(source?.ImportType),
    priceListId: source?.PriceListId,
    source: source?.Source === null ? undefined : participantOfferSourceEnumAdapter(source?.Source),
  };
}
