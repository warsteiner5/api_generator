import { MinPromTorgCharacteristic } from './min-prom-torg-characteristic.interface';
import { OfferCreatedMethodEnum } from '../enums/offer-created-method.enum';
import { ProductStatusAltEnum } from '../enums/product-status-alt.enum';

export interface ExternalIntegrationParticipantOffer {
  additionalPhotos: string[];
  categoryId: string;
  characteristics: MinPromTorgCharacteristic[];
  cost: string;
  country: string;
  deliveryRegions: string[];
  description: string;
  documents: string[];
  gost: string;
  id: number;
  integrationSource: OfferCreatedMethodEnum;
  isCommodityProducer: boolean;
  manufacturer: string;
  manufacturerRegion: string;
  measureUnit: string;
  measureUnitId: string;
  name: string;
  ntdCode: string;
  okpd2Code: string;
  photoUrl: string;
  quantity: number;
  status: ProductStatusAltEnum;
  vatInclude: boolean;
  vatPercent: number;
}
