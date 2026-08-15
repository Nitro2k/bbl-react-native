import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RatingBadge } from "@/components/rating-badge";
import { fetchProductById } from "@/lib/api";
import { useFavoritesStore } from "@/store/favorites-store";
import type { Product } from "@/types/product";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isFavorite = useFavoritesStore((state) =>
    state.favorites.some((p) => p.id === Number(id)),
  );
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  useEffect(() => {
    fetchProductById(Number(id))
      .then(setProduct)
      .catch(() => setError("Couldn't load this product."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  if (error || !product) {
    return (
      <View className="flex-1 items-center justify-center bg-white px-6">
        <Text className="text-center text-neutral-500">
          {error ?? "Product not found."}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["bottom"]}>
      <Stack.Screen options={{ title: product.title }} />
      <ScrollView>
        <Image
          source={{ uri: product.image }}
          className="h-72 w-full bg-neutral-100"
          resizeMode="contain"
        />
        <View className="flex-col gap-3 p-4">
          <Text className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            {product.category}
          </Text>
          <Text className="text-xl font-bold text-neutral-900">
            {product.title}
          </Text>
          <Text className="text-2xl font-bold text-blue-500">
            ${product.price.toFixed(2)}
          </Text>
          <RatingBadge
            rate={product.rating.rate}
            count={product.rating.count}
          />
          <Text className="mt-2 text-sm leading-6 text-neutral-600">
            {product.description}
          </Text>

          <Pressable
            onPress={() => toggleFavorite(product)}
            className="mt-4 flex-row items-center justify-center gap-2 rounded-xl bg-blue-500 py-3 active:opacity-80"
          >
            <Ionicons
              name={isFavorite ? "heart" : "heart-outline"}
              size={20}
              color="white"
            />
            <Text className="text-base font-semibold text-white">
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
