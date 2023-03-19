import { BliProduct, BliProductList } from "@blibli/dls/dist/add-ons/product"
import CardActionButtons from "@/components/CardActionButtons.vue";

export default {
  props: ["isBuyingBooks"],
  name: "BookCard",
  components: {
    BliProduct,
    BliProductList,
    CardActionButtons
  },
  data() {
    return {
      totalProducts: 40,
      productInfo: {
        name: "Harry Potter",
        imageUrl: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-11147207/dekoruma_dekoruma_full03.jpg",
        variant: 5,
        seller: {
          name: "J.K. Rowling",
          location: "United Kingdom",
          isOfficialStore: false,
        },
        features: {
          feature: "",
          "2hd": false
        },
        price: {
          final: 1000000,
          old: 2000000,
          discount: 50
        }
      }
    }
  },
  methods: {
    bliProductList() {
      return BliProductList;
    },
    bliProduct() {
      return BliProduct;
    },
    productClick() {
      console.log("Clicked", this.productInfo.name);
    }
  }
}