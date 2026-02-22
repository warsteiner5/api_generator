import { ApiCustomerComissionProtocolDto } from '../../../swagger/models/api-customer-comission-protocol-dto';
import { CustomerComissionProtocol } from '../../models/customer-comission-protocol.interface';

export const customerComissionProtocolAdapter = (source?: ApiCustomerComissionProtocolDto | null): CustomerComissionProtocol => {
  return {
    considerationPlace: source?.ConsiderationPlace,
    missedContest: source?.MissedContest,
    missedContestReason: source?.MissedContestReason,
    oosProtocolType: source?.OosProtocolType,
    publishDate: source?.PublishDate,
    signDate: source?.SignDate,
    singleParticipantContract: source?.SingleParticipantContract,
    stageDate: source?.StageDate,
  };
}
