export interface ListItemProps {
  title: string;
  subTitle?: string;
  onPress?: () => void;
  rightIcon?: React.ReactElement;
  imageUrl?: string;
  isFirst?: boolean;
  isLast?: boolean;
  backgroundColor?: string;
}
