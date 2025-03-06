import { useCallback, useState } from "react";
import { getQuote } from "@services/api";
import { QuoteResponse } from "@services/types";
import { UseGetQuoteReturn } from "./types";

export const useGetQuote = (): UseGetQuoteReturn => {
  const [data, setData] = useState<QuoteResponse | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getQuoteData = useCallback(async (amount: string, market: string) => {
    try {
      setLoading(true);
      const res = await getQuote(amount, market);
      setData(res);
      setError(false);
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    getQuoteData,
    loading,
    error,
  };
};
