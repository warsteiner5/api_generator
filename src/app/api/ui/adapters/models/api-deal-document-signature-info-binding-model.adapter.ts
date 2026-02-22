import { DealDocumentSignatureInfoBindingModelAlt } from '../../models/deal-document-signature-info-binding-model-alt.interface';
import { ApiDealDocumentSignatureInfoBindingModelAltDto } from '../../../swagger/models/api-deal-document-signature-info-binding-model';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';

export const apiDealDocumentSignatureInfoBindingModelAltDtoAdapter = (source?: DealDocumentSignatureInfoBindingModelAlt | null): ApiDealDocumentSignatureInfoBindingModelAltDto => {
  return {
    DealId: source?.dealId,
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
    FileGuid: source?.fileGuid,
  };
}
