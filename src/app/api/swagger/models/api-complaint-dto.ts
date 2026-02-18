/* tslint:disable */
/* eslint-disable */
import { ApiComplaintCloseReasonEnum } from '../models/api-complaint-close-reason-enum';
import { ApiComplaintStateEnum } from '../models/api-complaint-state-enum';
import { ApiParticipantOfferComplaintCreateRequestAltDto } from '../models/api-participant-offer-complaint-create-request';
export type ApiComplaintDto = ApiParticipantOfferComplaintCreateRequestAltDto & {
'Id'?: number;
'UserId'?: number;
'State'?: ApiComplaintStateEnum;
'ManagerId'?: number | null;
'ReviewDate'?: string | null;
'CloseReason'?: ApiComplaintCloseReasonEnum | null;
'CloseComment'?: string | null;
};
