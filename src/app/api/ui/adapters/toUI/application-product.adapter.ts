import { ApiApplicationProductDto } from '../../../swagger/models/api-application-product-dto';
import { ApplicationProduct } from '../../models/application-product.interface';

export function adaptApplicationProductToUI(source?: ApiApplicationProductDto | null): ApplicationProduct {
  return (source ?? {}) as ApplicationProduct;
}
