import { ApiCreateAdditionalAgreementDto } from '../../../swagger/models/api-create-additional-agreement-dto';
import { CreateAdditionalAgreement } from '../../models/create-additional-agreement.interface';
import { adaptAdditionalAgreementDocumentToUI } from './additional-agreement-document.adapter';
import { adaptAdditionalAgreementFormEnumToUI } from './additional-agreement-form-enum.adapter';

export function adaptCreateAdditionalAgreementToUI(source?: ApiCreateAdditionalAgreementDto | null): CreateAdditionalAgreement {
  return {
    dealId: source?.DealId ?? 0,
    documents: (source?.Documents ?? []).map((item) => adaptAdditionalAgreementDocumentToUI(item)),
    number: source?.Number ?? '',
    type: adaptAdditionalAgreementFormEnumToUI(source?.Type),
  };
}
