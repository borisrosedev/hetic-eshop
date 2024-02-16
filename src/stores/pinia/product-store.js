import { defineStore } from "pinia";
import { ref, onMounted, watch } from "vue";
import { FirebaseService } from "../../services/firestore.service";

export const useProductStore = defineStore("product", () => {
  onMounted(() => {
    console.log("🛍️ Product Store has mounted");
  });

  const products = ref([]);
  const productsGetter = () => products.value

  const fetchProductsFromFirebaseService = async () => {
    console.log("action[product-fetch]");
    products.value = await FirebaseService.fetchAllDocumentsFromCollection(
      "products"
    );
  };

  return {
    productsGetter, fetchProductsFromFirebaseService
  }
});
