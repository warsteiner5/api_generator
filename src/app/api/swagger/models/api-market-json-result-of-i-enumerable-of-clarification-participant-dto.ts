/* tslint:disable */
/* eslint-disable */
import { ApiClarificationParticipantDto } from '../models/api-clarification-participant-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfIEnumerableOfClarificationParticipantDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiClarificationParticipantDto> | null;
};
