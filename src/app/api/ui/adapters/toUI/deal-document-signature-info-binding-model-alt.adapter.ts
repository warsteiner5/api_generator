import { ApiDealDocumentSignatureInfoBindingModelAltDto } from '../../../swagger/models/api-deal-document-signature-info-binding-model';
import { DealDocumentSignatureInfoBindingModelAlt } from '../../models/deal-document-signature-info-binding-model-alt.interface';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';

export function adaptDealDocumentSignatureInfoBindingModelAltToUI(source?: ApiDealDocumentSignatureInfoBindingModelAltDto | null): DealDocumentSignatureInfoBindingModelAlt {
  return {
    dealId: source?.DealId ?? 0,
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
    fileGuid: source?.FileGuid ?? '',
  };
}
