import { ApiDealDocumentSignatureInfoBindingModelAltDto } from '../../../swagger/models/api-deal-document-signature-info-binding-model';
import { DealDocumentSignatureInfoBindingModelAlt } from '../../models/deal-document-signature-info-binding-model-alt.interface';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';

export const dealDocumentSignatureInfoBindingModelAltAdapter = (source?: ApiDealDocumentSignatureInfoBindingModelAltDto | null): DealDocumentSignatureInfoBindingModelAlt => {
  return {
    dealId: source?.DealId,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    fileGuid: source?.FileGuid,
  };
}
