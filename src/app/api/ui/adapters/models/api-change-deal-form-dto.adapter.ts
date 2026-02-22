import { ChangeDealForm } from '../../models/change-deal-form.interface';
import { ApiChangeDealFormDto } from '../../../swagger/models/api-change-deal-form-dto';
import { apiDealDocumentDtoAdapter } from './api-deal-document-dto.adapter';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';
import { apiDealStateEnumAdapter } from '../enums/api-deal-state-enum.adapter';

export const apiChangeDealFormDtoAdapter = (source?: ChangeDealForm | null): ApiChangeDealFormDto => {
  return {
    CancellationReason: source?.cancellationReason,
    ConclusionDate: source?.conclusionDate,
    DealCustomNumber: source?.dealCustomNumber,
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
    Documents: source?.documents?.map((item) => apiDealDocumentDtoAdapter(item)),
    ExecutionFrom: source?.executionFrom,
    ExecutionTo: source?.executionTo,
    Id: source?.id,
    Price: source?.price,
    State: source?.state === null ? undefined : apiDealStateEnumAdapter(source?.state),
  };
}
