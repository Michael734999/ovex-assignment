import { Typography } from "@components/Typography";
import Container, {
  CardContainer,
  LoadingContainer,
  TitleContainer,
} from "./index.styles";
import lang from "@utils/language/en.json";
import { TextInput } from "@components/Forms/TextInput";
import { Select } from "@components/Forms/Select";
import { ActivityIndicator, Button } from "react-native";
import { InfoCard } from "@components/InfoCard";
import { useHomeCurrencies } from "@hooks/useHomeCurrencies/useHomeCurrencies.hooks";
import { useTheme } from "styled-components/native";

export default function Index() {
  const theme = useTheme();
  const {
    sourceCurrencies,
    targetCurrencies,
    isDestinationVisible,
    quote,
    isButtonDisabled,
    control,
    handleSubmit,
    error,
    loading,
    onSubmit,
    sourceCurrency,
    destinationCurrency,
  } = useHomeCurrencies();

  const renderInfoCard = () => {
    if (quote && sourceCurrency && destinationCurrency) {
      return (
        <InfoCard
          fromSymbol={sourceCurrency.symbol}
          fromAmount={quote?.from_amount}
          toAmount={quote?.to_amount}
          fromCurrency={quote?.from_currency}
          toCurrency={quote?.to_currency}
          rate={quote?.rate}
        />
      );
    }
    return null;
  };

  if (loading) {
    return (
      <LoadingContainer>
        <ActivityIndicator
          size="large"
          color={theme.colors.background.secondary}
        />
      </LoadingContainer>
    );
  }

  return (
    <Container contentContainerStyle={{ gap: 25, alignItems: "center" }}>
      <TitleContainer>
        <Typography variant="heading">{lang.home.title}</Typography>
      </TitleContainer>
      <CardContainer>
        <TextInput
          rightText={
            sourceCurrency?.id ? sourceCurrency.id.toUpperCase() : "ZAR"
          }
          leftText={
            sourceCurrency?.symbol ? sourceCurrency.symbol.toUpperCase() : "R"
          }
          label={lang.home.input.amount.title}
          control={control}
          name="amount"
          keyboardType="numeric"
        />
        <Select
          label={lang.home.input.sourceCurrency.title}
          control={control}
          placeholder="Select a Source Currency"
          items={sourceCurrencies}
          name="source"
        />
        {isDestinationVisible && (
          <Select
            label={lang.home.input.destinationCurrency.title}
            control={control}
            items={targetCurrencies}
            placeholder="Select a Destination Currency"
            name="destination"
          />
        )}
        {renderInfoCard()}
        {error && (
          <Typography variant="body1">Something went wrong!</Typography>
        )}
      </CardContainer>
      <Button
        disabled={isButtonDisabled}
        title="Get A Quote"
        onPress={handleSubmit(onSubmit)}
      />
    </Container>
  );
}
