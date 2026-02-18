/* tslint:disable */
/* eslint-disable */
import { ApiManufactureTypeEnum } from '../models/api-manufacture-type-enum';
import { ApiMeetsRequirementsEnum } from '../models/api-meets-requirements-enum';
export interface ApiApplicationReviewDto {
  Id?: number;
  IncomplianceWithTheRequirementsReason?: string | null;
  LotItemApplicationId?: number | null;
  ManufactureType?: ApiManufactureTypeEnum | null;
  MeetsRequirements?: ApiMeetsRequirementsEnum;
  RankNumber?: number;
  RejectReasonComment?: string | null;
}
