import { QuoteResponse } from "@services/types";

export interface UseGetQuoteReturn {
  data?: QuoteResponse;
  getQuoteData: (amount: string, market: string) => Promise<void>;
  loading: boolean;
  error: boolean;
}
