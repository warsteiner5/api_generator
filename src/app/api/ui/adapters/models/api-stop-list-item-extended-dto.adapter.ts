import { StopListItemExtended } from '../../models/stop-list-item-extended.interface';
import { ApiStopListItemExtendedDto } from '../../../swagger/models/api-stop-list-item-extended-dto';
import { apiStopListItemDtoAdapter } from './api-stop-list-item-dto.adapter';

export const apiStopListItemExtendedDtoAdapter = (source?: StopListItemExtended | null): ApiStopListItemExtendedDto => {
  return {
    LogoFileGuid: source?.logoFileGuid,
    StopListItemDtos: source?.stopListItemDtos?.map((item) => apiStopListItemDtoAdapter(item)),
    SupplierAdress: source?.supplierAdress,
    SupplierEmail: source?.supplierEmail,
    SupplierName: source?.supplierName,
    SupplierPhone: source?.supplierPhone,
    SupplierSite: source?.supplierSite,
  };
}
