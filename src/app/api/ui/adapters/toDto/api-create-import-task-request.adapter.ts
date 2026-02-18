import { CreateImportTaskRequestAlt } from '../../models/create-import-task-request-alt.interface';
import { ApiCreateImportTaskRequestAltDto } from '../../../swagger/models/api-create-import-task-request';
import { adaptApiParticipantOfferSourceEnum } from './api-participant-offer-source-enum.adapter';
import { adaptApiPriceListImportTypeEnum } from './api-price-list-import-type-enum.adapter';

export function adaptApiCreateImportTaskRequestAltDto(source?: CreateImportTaskRequestAlt | null): ApiCreateImportTaskRequestAltDto {
  return {
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    ImportType: adaptApiPriceListImportTypeEnum(source?.importType),
    PriceListId: source?.priceListId,
    Source: adaptApiParticipantOfferSourceEnum(source?.source),
  };
}
