import { CustomerComissionProtocol } from '../../models/customer-comission-protocol.interface';
import { ApiCustomerComissionProtocolDto } from '../../../swagger/models/api-customer-comission-protocol-dto';

export const apiCustomerComissionProtocolDtoAdapter = (source?: CustomerComissionProtocol | null): ApiCustomerComissionProtocolDto => {
  return {
    ConsiderationPlace: source?.considerationPlace,
    MissedContest: source?.missedContest,
    MissedContestReason: source?.missedContestReason,
    OosProtocolType: source?.oosProtocolType,
    PublishDate: source?.publishDate,
    SignDate: source?.signDate,
    SingleParticipantContract: source?.singleParticipantContract,
    StageDate: source?.stageDate,
  };
}
