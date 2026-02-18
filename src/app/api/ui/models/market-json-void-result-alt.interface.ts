import { HttpStatusCodeAltEnum } from '../enums/http-status-code-alt.enum';

export interface MarketJsonVoidResultAlt {
  code: HttpStatusCodeAltEnum;
  message: string;
  redirectToUrl: string;
  templates: { [key: string]: any; };
}
