import {ref} from "vue";

export const categories = ref([
    {
        category: "Shirts",
    },
    {
        category: "Dresses",
    },
    {
        category: "Jeans",
        more: [
            "Skinny",
            "Relaxed",
            "Bootcut",
            "Straight",
        ]
    },
    {
        category: "Jackets",
    },
    {
        category: "Gymwear",
    },
    {
        category: "Blazers",
    },
    {
        category: "Shoes",
    }
])