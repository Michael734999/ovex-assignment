import { CurrencyResponse, QuoteResponse } from "@services/types";
import { Control, UseFormHandleSubmit } from "react-hook-form";

export interface CurrencyFormValues {
  source: CurrencyResponse | null;
  destination: CurrencyResponse | null;
  amount: string;
}

export interface UseCurrencyQuoteReturn {
  sourceCurrencies: CurrencyResponse[];
  targetCurrencies: CurrencyResponse[];
  isDestinationVisible: boolean;
  quote?: QuoteResponse;
  isButtonDisabled: boolean;
  error: boolean;
  loading: boolean;
  sourceCurrency?: CurrencyResponse | null;
  destinationCurrency: CurrencyResponse | null;
  control: Control<any>;
  handleSubmit: UseFormHandleSubmit<CurrencyFormValues, undefined>;
  onSubmit: (data: CurrencyFormValues) => void;
}
