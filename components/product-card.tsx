import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

import { RatingBadge } from "@/components/rating-badge";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable className="mb-4 flex-col overflow-hidden rounded-xl bg-white shadow-sm shadow-black/10 active:opacity-80">
        <Image
          source={{ uri: product.image }}
          className="h-48 w-full bg-neutral-100"
          resizeMode="contain"
        />
        <View className="flex-col gap-1 p-3">
          <Text
            numberOfLines={2}
            className="text-sm font-medium text-neutral-900"
          >
            {product.title}
          </Text>
          <Text className="text-base font-bold text-blue-500">
            ${product.price.toFixed(2)}
          </Text>
          <RatingBadge
            rate={product.rating.rate}
            count={product.rating.count}
          />
        </View>
      </Pressable>
    </Link>
  );
}
