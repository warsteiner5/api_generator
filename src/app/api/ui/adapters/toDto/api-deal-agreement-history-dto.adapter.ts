import { DealAgreementHistory } from '../../models/deal-agreement-history.interface';
import { ApiDealAgreementHistoryDto } from '../../../swagger/models/api-deal-agreement-history-dto';
import { adaptApiDealAgreementDetailDto } from './api-deal-agreement-detail-dto.adapter';
import { adaptApiDealAgreementHistoryStateEnum } from './api-deal-agreement-history-state-enum.adapter';
import { adaptApiDealAgreementHistoryTypeEnum } from './api-deal-agreement-history-type-enum.adapter';

export function adaptApiDealAgreementHistoryDto(source?: DealAgreementHistory | null): ApiDealAgreementHistoryDto {
  return {
    AgreementState: adaptApiDealAgreementHistoryStateEnum(source?.agreementState),
    BuyerOrgId: source?.buyerOrgId,
    DateTimeCreated: source?.dateTimeCreated,
    DealChangeDetails: (source?.dealChangeDetails ?? []).map((item) => adaptApiDealAgreementDetailDto(item)),
    DealId: source?.dealId,
    Id: source?.id,
    SellerOrgId: source?.sellerOrgId,
    Type: adaptApiDealAgreementHistoryTypeEnum(source?.type),
  };
}
