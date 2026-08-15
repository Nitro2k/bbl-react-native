import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type RatingBadgeProps = {
  rate: number;
  count: number;
};

export function RatingBadge({ rate, count }: RatingBadgeProps) {
  return (
    <View className="flex-row items-center gap-1">
      <Ionicons name="star" size={14} color="#f5a623" />
      <Text className="text-xs font-medium text-neutral-700">
        {rate.toFixed(1)}
      </Text>
      <Text className="text-xs text-neutral-500">· {count} sold</Text>
    </View>
  );
}
