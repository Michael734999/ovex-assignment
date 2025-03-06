import { CurrencyResponse } from "@services/types";

export interface UseCurrenciesReturn {
  sourceCurrencies: CurrencyResponse[];
  targetCurrencies: CurrencyResponse[];
  getTargetCurrencies: (sourceCurrency: string) => Promise<void>;
  loading: boolean;
  error: boolean;
}
