export interface CreateOrUpdateAutoUpdateRequestAlt {
  cronExpr: string;
  expirationDateTime: string;
  isImmediateUploadNecessary: boolean;
  priceListId: number;
  url: string;
}
