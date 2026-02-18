/* tslint:disable */
/* eslint-disable */
import { ApiTagSettingsAddDto } from '../models/api-tag-settings-add-dto';
export type ApiTagSettingsUpdateDto = ApiTagSettingsAddDto & {
'SettingsId'?: string | null;
'PriceFrom'?: number | null;
'PriceTo'?: number | null;
'Regions'?: Array<string> | null;
};
