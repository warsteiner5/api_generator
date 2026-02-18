import { StopListItemExtended } from '../../models/stop-list-item-extended.interface';
import { ApiStopListItemExtendedDto } from '../../../swagger/models/api-stop-list-item-extended-dto';
import { adaptApiStopListItemDto } from './api-stop-list-item-dto.adapter';

export function adaptApiStopListItemExtendedDto(source?: StopListItemExtended | null): ApiStopListItemExtendedDto {
  return {
    LogoFileGuid: source?.logoFileGuid,
    StopListItemDtos: (source?.stopListItemDtos ?? []).map((item) => adaptApiStopListItemDto(item)),
    SupplierAdress: source?.supplierAdress,
    SupplierEmail: source?.supplierEmail,
    SupplierName: source?.supplierName,
    SupplierPhone: source?.supplierPhone,
    SupplierSite: source?.supplierSite,
  };
}
