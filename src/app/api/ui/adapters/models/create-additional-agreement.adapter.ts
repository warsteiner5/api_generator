import { ApiCreateAdditionalAgreementDto } from '../../../swagger/models/api-create-additional-agreement-dto';
import { CreateAdditionalAgreement } from '../../models/create-additional-agreement.interface';
import { additionalAgreementDocumentAdapter } from './additional-agreement-document.adapter';
import { additionalAgreementFormEnumAdapter } from '../enums/additional-agreement-form-enum.adapter';

export const createAdditionalAgreementAdapter = (source?: ApiCreateAdditionalAgreementDto | null): CreateAdditionalAgreement => {
  return {
    dealId: source?.DealId,
    documents: source?.Documents?.map((item) => additionalAgreementDocumentAdapter(item)),
    number: source?.Number,
    type: source?.Type === null ? undefined : additionalAgreementFormEnumAdapter(source?.Type),
  };
}
