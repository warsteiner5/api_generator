import { ApiCustomerComissionProtocolDto } from '../../../swagger/models/api-customer-comission-protocol-dto';
import { CustomerComissionProtocol } from '../../models/customer-comission-protocol.interface';

export function adaptCustomerComissionProtocolToUI(source?: ApiCustomerComissionProtocolDto | null): CustomerComissionProtocol {
  return {
    considerationPlace: source?.ConsiderationPlace ?? '',
    missedContest: source?.MissedContest ?? false,
    missedContestReason: source?.MissedContestReason ?? '',
    oosProtocolType: source?.OosProtocolType ?? 0,
    publishDate: source?.PublishDate ?? '',
    signDate: source?.SignDate ?? '',
    singleParticipantContract: source?.SingleParticipantContract ?? false,
    stageDate: source?.StageDate ?? '',
  };
}
