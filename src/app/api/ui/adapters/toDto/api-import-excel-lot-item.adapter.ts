import { ImportExcelLotItemAlt } from '../../models/import-excel-lot-item-alt.interface';
import { ApiImportExcelLotItemAltDto } from '../../../swagger/models/api-import-excel-lot-item';
import { adaptApiNationalModeRequirementTypeEnum } from './api-national-mode-requirement-type-enum.adapter';

export function adaptApiImportExcelLotItemAltDto(source?: ImportExcelLotItemAlt | null): ApiImportExcelLotItemAltDto {
  return {
    JustificationForNonUseNationalModeAdditionalInfo: source?.justificationForNonUseNationalModeAdditionalInfo,
    Name: source?.name,
    NationalModeRequirementType: adaptApiNationalModeRequirementTypeEnum(source?.nationalModeRequirementType),
    OkeiCode: source?.okeiCode,
    OkeiName: source?.okeiName,
    Okpd2Code: source?.okpd2Code,
    Okpd2Name: source?.okpd2Name,
    Quantity: source?.quantity,
    UnitPrice: source?.unitPrice,
  };
}
