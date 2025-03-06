import { useCallback, useEffect, useState } from "react";
import { fetchCurrencies, fetchMarkets } from "@services/api";
import { CurrencyResponse } from "@services/types";
import { UseCurrenciesReturn } from "./types";

export const useCurrencies = (): UseCurrenciesReturn => {
  const [sourceCurrencies, setSourceCurrencies] = useState<CurrencyResponse[]>(
    [],
  );
  const [targetCurrencies, setTargetCurrencies] = useState<CurrencyResponse[]>(
    [],
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getSourceCurrencies = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetchCurrencies();
      setSourceCurrencies(res);
      setError(false);
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const getTargetCurrencies = useCallback(
    async (sourceCurrency: string) => {
      try {
        const markets = await fetchMarkets();

        const targetCurrenciesFromMarkets = markets
          .filter((market) => market.quote_currency === sourceCurrency)
          .map((market) => market.base_currency);

        const targetCurrenciesDetails = sourceCurrencies.filter((currency) =>
          targetCurrenciesFromMarkets.includes(currency.id),
        );

        setTargetCurrencies(targetCurrenciesDetails);
        setError(false);
      } catch (e) {
        console.log(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    [sourceCurrencies],
  );

  useEffect(() => void getSourceCurrencies(), [getSourceCurrencies]);

  return {
    sourceCurrencies,
    targetCurrencies,
    getTargetCurrencies,
    loading,
    error,
  };
};
