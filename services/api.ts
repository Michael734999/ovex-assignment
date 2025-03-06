import axios from "axios";
import { CurrencyResponse, MarketResponse, QuoteResponse } from "./types";

const BASE_URL = "https://www.ovex.io/api/v2";

const options = {
  method: "GET",
  redirect: "follow",
};

export const fetchMarkets = async (): Promise<MarketResponse[]> => {
  const res = await axios.get(`${BASE_URL}/markets`, options);
  return res.data;
};

export const fetchCurrencies = async (): Promise<CurrencyResponse[]> => {
  const res = await axios.get(`${BASE_URL}/currencies`, options);
  return res.data;
};

export const getQuote = async (
  amount: string,
  market: string,
): Promise<QuoteResponse> => {
  const res = await axios.get(
    `${BASE_URL}/rfq/get_quote?market=${market}&from_amount=${amount}&side=buy`,
    options,
  );
  return res.data;
};
