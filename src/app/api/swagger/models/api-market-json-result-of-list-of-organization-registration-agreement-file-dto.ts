/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiOrganizationRegistrationAgreementFileDto } from '../models/api-organization-registration-agreement-file-dto';
export type ApiMarketJsonResultOfListOfOrganizationRegistrationAgreementFileDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiOrganizationRegistrationAgreementFileDto> | null;
};
