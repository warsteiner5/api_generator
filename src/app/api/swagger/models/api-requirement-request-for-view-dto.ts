/* tslint:disable */
/* eslint-disable */
import { ApiRequirementRequestDto } from '../models/api-requirement-request-dto';
export type ApiRequirementRequestForViewDto = ApiRequirementRequestDto & {
'PriceMin'?: number;
'PriceMax'?: number;
'PriceAverage'?: number;
'ShortOkeiName'?: string | null;
'IsEditRequirementRequestAvailable'?: boolean;
'ApprovedCharacteristicsCount'?: number | null;
'RejectedCharacteristicsCount'?: number | null;
'ConsiderationCharacteristicsCount'?: number | null;
'CompetetiveListItemCount'?: number | null;
};
