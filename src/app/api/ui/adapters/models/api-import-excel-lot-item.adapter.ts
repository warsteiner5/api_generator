import { ImportExcelLotItemAlt } from '../../models/import-excel-lot-item-alt.interface';
import { ApiImportExcelLotItemAltDto } from '../../../swagger/models/api-import-excel-lot-item';
import { apiNationalModeRequirementTypeEnumAdapter } from '../enums/api-national-mode-requirement-type-enum.adapter';

export const apiImportExcelLotItemAltDtoAdapter = (source?: ImportExcelLotItemAlt | null): ApiImportExcelLotItemAltDto => {
  return {
    JustificationForNonUseNationalModeAdditionalInfo: source?.justificationForNonUseNationalModeAdditionalInfo,
    Name: source?.name,
    NationalModeRequirementType: source?.nationalModeRequirementType === null ? undefined : apiNationalModeRequirementTypeEnumAdapter(source?.nationalModeRequirementType),
    OkeiCode: source?.okeiCode,
    OkeiName: source?.okeiName,
    Okpd2Code: source?.okpd2Code,
    Okpd2Name: source?.okpd2Name,
    Quantity: source?.quantity,
    UnitPrice: source?.unitPrice,
  };
}
