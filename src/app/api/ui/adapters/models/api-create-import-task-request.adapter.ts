import { CreateImportTaskRequestAlt } from '../../models/create-import-task-request-alt.interface';
import { ApiCreateImportTaskRequestAltDto } from '../../../swagger/models/api-create-import-task-request';
import { apiParticipantOfferSourceEnumAdapter } from '../enums/api-participant-offer-source-enum.adapter';
import { apiPriceListImportTypeEnumAdapter } from '../enums/api-price-list-import-type-enum.adapter';

export const apiCreateImportTaskRequestAltDtoAdapter = (source?: CreateImportTaskRequestAlt | null): ApiCreateImportTaskRequestAltDto => {
  return {
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    ImportType: source?.importType === null ? undefined : apiPriceListImportTypeEnumAdapter(source?.importType),
    PriceListId: source?.priceListId,
    Source: source?.source === null ? undefined : apiParticipantOfferSourceEnumAdapter(source?.source),
  };
}
