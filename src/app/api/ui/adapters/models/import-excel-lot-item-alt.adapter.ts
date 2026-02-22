import { ApiImportExcelLotItemAltDto } from '../../../swagger/models/api-import-excel-lot-item';
import { ImportExcelLotItemAlt } from '../../models/import-excel-lot-item-alt.interface';
import { nationalModeRequirementTypeEnumAdapter } from '../enums/national-mode-requirement-type-enum.adapter';

export const importExcelLotItemAltAdapter = (source?: ApiImportExcelLotItemAltDto | null): ImportExcelLotItemAlt => {
  return {
    justificationForNonUseNationalModeAdditionalInfo: source?.JustificationForNonUseNationalModeAdditionalInfo,
    name: source?.Name,
    nationalModeRequirementType: source?.NationalModeRequirementType === null ? undefined : nationalModeRequirementTypeEnumAdapter(source?.NationalModeRequirementType),
    okeiCode: source?.OkeiCode,
    okeiName: source?.OkeiName,
    okpd2Code: source?.Okpd2Code,
    okpd2Name: source?.Okpd2Name,
    quantity: source?.Quantity,
    unitPrice: source?.UnitPrice,
  };
}
