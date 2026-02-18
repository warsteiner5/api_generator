/* tslint:disable */
/* eslint-disable */
import { ApiCategoryDto } from '../models/api-category-dto';
export type ApiCategoryWithChildrenDto = ApiCategoryDto & {
'Children'?: Array<ApiCategoryDto> | null;
};
