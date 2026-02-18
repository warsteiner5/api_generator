/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterAltDto } from '../models/api-base-filter';
export type ApiRegulationDocumentFilterAltDto = ApiBaseFilterAltDto & {
'IsActual'?: boolean | null;
'TypeId'?: number | null;
'TypeIds'?: Array<number> | null;
'ShowHidden'?: boolean;
};
