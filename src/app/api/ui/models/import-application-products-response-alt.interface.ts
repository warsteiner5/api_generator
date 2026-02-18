import { ImportedApplicationProduct } from './imported-application-product.interface';

export interface ImportApplicationProductsResponseAlt {
  applicationProducts: ImportedApplicationProduct[];
  errorText: string;
  errorsFileUrl: string;
  isSuccess: boolean;
}
