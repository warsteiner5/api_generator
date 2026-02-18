import { DealDocumentSignatureInfoBindingModelAlt } from '../../models/deal-document-signature-info-binding-model-alt.interface';
import { ApiDealDocumentSignatureInfoBindingModelAltDto } from '../../../swagger/models/api-deal-document-signature-info-binding-model';
import { adaptApiDealObjectEnum } from './api-deal-object-enum.adapter';

export function adaptApiDealDocumentSignatureInfoBindingModelAltDto(source?: DealDocumentSignatureInfoBindingModelAlt | null): ApiDealDocumentSignatureInfoBindingModelAltDto {
  return {
    DealId: source?.dealId,
    DealObject: adaptApiDealObjectEnum(source?.dealObject),
    FileGuid: source?.fileGuid,
  };
}
