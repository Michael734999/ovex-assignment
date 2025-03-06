import { Typography } from "@components/Typography";
import { Container } from "./InfoCard.styles";
import { InfoCardProps } from "./InfoCard.types";

export const InfoCard = ({
  rate,
  fromSymbol,
  fromAmount,
  fromCurrency,
  toAmount,
  toCurrency,
}: InfoCardProps) => {
  const formattedFromAmount = parseFloat(fromAmount).toFixed(2);
  const fromConvertion = parseFloat(rate);
  const toConvertion = (1 / parseFloat(rate)).toFixed(10);
  return (
    <Container>
      <Typography variant="body1">
        {`${fromSymbol.toUpperCase()}${formattedFromAmount} ${fromCurrency.toUpperCase()} =`}
      </Typography>
      <Typography variant="title">
        {`${toAmount} ${toCurrency.toUpperCase()}`}
      </Typography>
      <Typography variant="body2">
        {`1 ${fromCurrency.toUpperCase()} = ${toConvertion} ${toCurrency.toUpperCase()}`}
      </Typography>
      <Typography variant="body2">
        {`1 ${toCurrency.toUpperCase()} = ${fromConvertion} ${fromCurrency.toUpperCase()}`}
      </Typography>
    </Container>
  );
};
