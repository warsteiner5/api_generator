import { ImportedApplicationProduct } from './imported-application-product.interface';

// @ts-ignore
export interface ImportApplicationProductsResponseAlt {
  applicationProducts: ImportedApplicationProduct[];
  errorText: string;
  errorsFileUrl: string;
  isSuccess: boolean;
}
