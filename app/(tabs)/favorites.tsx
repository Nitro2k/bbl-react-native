import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ActivityIndicator, FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RatingBadge } from "@/components/rating-badge";
import { useFavoritesStore } from "@/store/favorites-store";
import type { Product } from "@/types/product";

function FavoriteRow({ product }: { product: Product }) {
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable className="mb-4 flex-row items-center gap-3 rounded-xl bg-white p-3 shadow-sm shadow-black/10 active:opacity-80">
        <Image
          source={{ uri: product.image }}
          className="h-16 w-16 rounded-lg bg-neutral-100"
          resizeMode="contain"
        />
        <View className="flex-1 flex-col gap-1">
          <Text numberOfLines={2} className="text-sm font-medium text-neutral-900">
            {product.title}
          </Text>
          <Text className="text-base font-bold text-blue-500">
            ${product.price.toFixed(2)}
          </Text>
          <RatingBadge rate={product.rating.rate} count={product.rating.count} />
        </View>
        <Pressable
          onPress={() => removeFavorite(product.id)}
          hitSlop={8}
          className="p-2 active:opacity-60"
        >
          <Ionicons name="trash-outline" size={20} color="#ef4444" />
        </Pressable>
      </Pressable>
    </Link>
  );
}

export default function FavoritesScreen() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const hasHydrated = useFavoritesStore((state) => state.hasHydrated);

  if (!hasHydrated) {
    return (
      <View className="flex-1 items-center justify-center bg-neutral-50">
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-neutral-50" edges={["top"]}>
      <Text className="px-4 pb-2 pt-4 text-2xl font-bold text-neutral-900">
        Favorites
      </Text>

      {favorites.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Text className="text-base text-neutral-500">No Favorite item</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          renderItem={({ item }) => <FavoriteRow product={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerClassName="px-4 pb-4"
        />
      )}
    </SafeAreaView>
  );
}
