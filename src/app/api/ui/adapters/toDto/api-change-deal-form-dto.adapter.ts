import { ChangeDealForm } from '../../models/change-deal-form.interface';
import { ApiChangeDealFormDto } from '../../../swagger/models/api-change-deal-form-dto';
import { adaptApiDealDocumentDto } from './api-deal-document-dto.adapter';
import { adaptApiDealObjectEnum } from './api-deal-object-enum.adapter';
import { adaptApiDealStateEnum } from './api-deal-state-enum.adapter';

export function adaptApiChangeDealFormDto(source?: ChangeDealForm | null): ApiChangeDealFormDto {
  return {
    CancellationReason: source?.cancellationReason,
    ConclusionDate: source?.conclusionDate,
    DealCustomNumber: source?.dealCustomNumber,
    DealObject: adaptApiDealObjectEnum(source?.dealObject),
    Documents: (source?.documents ?? []).map((item) => adaptApiDealDocumentDto(item)),
    ExecutionFrom: source?.executionFrom,
    ExecutionTo: source?.executionTo,
    Id: source?.id,
    Price: source?.price,
    State: adaptApiDealStateEnum(source?.state),
  };
}
