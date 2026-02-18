import { ApiImportExcelLotItemAltDto } from '../../../swagger/models/api-import-excel-lot-item';
import { ImportExcelLotItemAlt } from '../../models/import-excel-lot-item-alt.interface';
import { adaptNationalModeRequirementTypeEnumToUI } from './national-mode-requirement-type-enum.adapter';

export function adaptImportExcelLotItemAltToUI(source?: ApiImportExcelLotItemAltDto | null): ImportExcelLotItemAlt {
  return {
    justificationForNonUseNationalModeAdditionalInfo: source?.JustificationForNonUseNationalModeAdditionalInfo ?? '',
    name: source?.Name ?? '',
    nationalModeRequirementType: adaptNationalModeRequirementTypeEnumToUI(source?.NationalModeRequirementType),
    okeiCode: source?.OkeiCode ?? '',
    okeiName: source?.OkeiName ?? '',
    okpd2Code: source?.Okpd2Code ?? '',
    okpd2Name: source?.Okpd2Name ?? '',
    quantity: source?.Quantity ?? 0,
    unitPrice: source?.UnitPrice ?? 0,
  };
}
