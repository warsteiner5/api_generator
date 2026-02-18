import { DealExtendedInfoAlt } from '../../models/deal-extended-info-alt.interface';
import { ApiDealExtendedInfoAltDto } from '../../../swagger/models/api-deal-extended-info';
import { adaptApiDealDocumentDto } from './api-deal-document-dto.adapter';

export function adaptApiDealExtendedInfoAltDto(source?: DealExtendedInfoAlt | null): ApiDealExtendedInfoAltDto {
  return {
    ConcludeDate: source?.concludeDate,
    DealId: source?.dealId,
    DealNumber: source?.dealNumber,
    DealTerms: source?.dealTerms,
    Documents: (source?.documents ?? []).map((item) => adaptApiDealDocumentDto(item)),
  };
}
