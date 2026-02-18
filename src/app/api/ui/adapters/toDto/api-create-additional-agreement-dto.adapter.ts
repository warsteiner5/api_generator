import { CreateAdditionalAgreement } from '../../models/create-additional-agreement.interface';
import { ApiCreateAdditionalAgreementDto } from '../../../swagger/models/api-create-additional-agreement-dto';
import { adaptApiAdditionalAgreementDocumentDto } from './api-additional-agreement-document-dto.adapter';
import { adaptApiAdditionalAgreementFormEnum } from './api-additional-agreement-form-enum.adapter';

export function adaptApiCreateAdditionalAgreementDto(source?: CreateAdditionalAgreement | null): ApiCreateAdditionalAgreementDto {
  return {
    DealId: source?.dealId,
    Documents: (source?.documents ?? []).map((item) => adaptApiAdditionalAgreementDocumentDto(item)),
    Number: source?.number,
    Type: adaptApiAdditionalAgreementFormEnum(source?.type),
  };
}
