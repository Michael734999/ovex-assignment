import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useCurrencies } from "@hooks/useCurrencies/useCurrencies.hooks";
import { useGetQuote } from "@hooks/useGetQuote/useGetQuote.hooks";
import { CurrencyResponse } from "@services/types";
import { CurrencyFormValues, UseCurrencyQuoteReturn } from "./types";

export const useHomeCurrencies = (): UseCurrencyQuoteReturn => {
  const {
    sourceCurrencies,
    targetCurrencies,
    getTargetCurrencies,
    error,
    loading,
  } = useCurrencies();
  const {
    getQuoteData,
    data: quote,
    error: quoteError,
    loading: quoteLoading,
  } = useGetQuote();
  const { control, watch, handleSubmit, setValue } =
    useForm<CurrencyFormValues>();

  const sourceCurrency = watch("source");
  const destinationCurrency = watch("destination");
  const amount = watch("amount");

  const [isDestinationVisible, setDestinationVisible] = useState(false);

  useEffect(() => {
    const updateCurrenciesVisibility = () => {
      if (sourceCurrency) {
        setDestinationVisible(true);
        getTargetCurrencies(sourceCurrency.id);
        setValue("destination", null);
      } else {
        setDestinationVisible(false);
      }
    };

    updateCurrenciesVisibility();
  }, [sourceCurrency, getTargetCurrencies, setValue]);

  const isButtonDisabled =
    !sourceCurrency ||
    !destinationCurrency ||
    !amount ||
    parseFloat(amount) <= 0;

  const onSubmit = useCallback(
    (data: {
      source: CurrencyResponse | null;
      destination: CurrencyResponse | null;
      amount: string;
    }) => {
      const { source, destination, amount } = data;
      if (source && destination && amount) {
        const market = `${destination.id}${source.id}`;
        getQuoteData(amount, market);
      }
    },
    [getQuoteData],
  );

  return {
    sourceCurrencies,
    targetCurrencies,
    isDestinationVisible,
    quote,
    error: error || quoteError,
    loading: loading || quoteLoading,
    isButtonDisabled,
    sourceCurrency,
    destinationCurrency,
    control,
    handleSubmit,
    onSubmit,
  };
};
