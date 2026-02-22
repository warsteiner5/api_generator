import { ApiStopListItemExtendedDto } from '../../../swagger/models/api-stop-list-item-extended-dto';
import { StopListItemExtended } from '../../models/stop-list-item-extended.interface';
import { stopListItemAdapter } from './stop-list-item.adapter';

export const stopListItemExtendedAdapter = (source?: ApiStopListItemExtendedDto | null): StopListItemExtended => {
  return {
    logoFileGuid: source?.LogoFileGuid,
    stopListItemDtos: source?.StopListItemDtos?.map((item) => stopListItemAdapter(item)),
    supplierAdress: source?.SupplierAdress,
    supplierEmail: source?.SupplierEmail,
    supplierName: source?.SupplierName,
    supplierPhone: source?.SupplierPhone,
    supplierSite: source?.SupplierSite,
  };
}
