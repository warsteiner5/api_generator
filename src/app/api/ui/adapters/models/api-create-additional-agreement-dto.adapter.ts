import { CreateAdditionalAgreement } from '../../models/create-additional-agreement.interface';
import { ApiCreateAdditionalAgreementDto } from '../../../swagger/models/api-create-additional-agreement-dto';
import { apiAdditionalAgreementDocumentDtoAdapter } from './api-additional-agreement-document-dto.adapter';
import { apiAdditionalAgreementFormEnumAdapter } from '../enums/api-additional-agreement-form-enum.adapter';

export const apiCreateAdditionalAgreementDtoAdapter = (source?: CreateAdditionalAgreement | null): ApiCreateAdditionalAgreementDto => {
  return {
    DealId: source?.dealId,
    Documents: source?.documents?.map((item) => apiAdditionalAgreementDocumentDtoAdapter(item)),
    Number: source?.number,
    Type: source?.type === null ? undefined : apiAdditionalAgreementFormEnumAdapter(source?.type),
  };
}
