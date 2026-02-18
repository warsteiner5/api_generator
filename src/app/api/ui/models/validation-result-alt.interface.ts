export interface ValidationResultAlt {
  errors: { [key: string]: Array<string>; };
  isCritical: boolean;
  isFailed: boolean;
  isSucceed: boolean;
}
