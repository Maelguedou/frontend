<template>
  <div class="py-12 max-w-6xl mx-auto px-4">
    
<div class="flex flex-wrap justify-center gap-3 mb-16">
  <button 
    v-for="cat in categories" 
    :key="cat"
    @click="categoryActive = cat"
    :class="[
      'px-8 py-3 rounded-full font-bold transition-all duration-300 border-2',
      categoryActive === cat 
        ? 'bg-slate-900 border-slate-900 text-white shadow-xl scale-105' 
        : 'bg-white border-slate-100 text-slate-500 hover:border-yellow-500 hover:text-yellow-500'
    ]"
  >
    {{ cat }}
  </button>
</div>

<TransitionGroup 
  tag="div" 
  name="list" 
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
>
  <div 
  v-for="plat in platsFiltrés" 
  :key="plat.id"
  class="group bg-white rounded-[2.5rem] p-4 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 border border-slate-50"
>
  <div class="relative overflow-hidden rounded-[2rem] h-64 mb-6">
    <img 
      :src="getImageUrl(plat.image)" 
      class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      :alt="plat.nom"
    >
    <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full">
      <span class="text-[10px] font-black uppercase tracking-tighter text-slate-800">{{ plat.cat }}</span>
    </div>
  </div>

  <div class="px-2 pb-4 text-center">
    <h3 class="text-2xl font-black text-slate-800 mb-2 group-hover:text-yellow-500 transition-colors">
      {{ plat.nom }}
    </h3>
    
    <div class="flex items-center justify-center gap-2">
      <div class="h-[1px] w-8 bg-slate-200"></div>
      <span class="text-yellow-500 font-bold text-xl">{{ plat.prix }} €</span>
      <div class="h-[1px] w-8 bg-slate-200"></div>
    </div>
  </div>
</div>
</TransitionGroup>
  </div>
</template>

<style>
/* Animation de la liste (The Shuffle Effect) */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}
/* Empêche les sauts brutaux quand les éléments changent de place */
.list-move {
  transition: transform 0.5s ease;
}
</style>

<script setup>
import { ref, computed } from 'vue';

const categories = ["Tous", "Burgers", "Pizzas", "Chawarmas", "Boissons","cake"];
const categoryActive = ref("Tous");

const plats = [
  { id: 1, nom: "Gourmet Burger", cat: "Burgers", prix: 14, image: "burger.jpg" },
  { id: 2, nom: "Pizza Regina", cat: "Pizzas", prix: 13, image: "pizza.jpg" },
  { id: 3, nom: "Chawarma Royal", cat: "Chawarmas", prix: 11, image: "pasta.jpg" },
  { id: 4, nom: "Cake1", cat: "cake", prix: 20, image: "cake1.jpg" },
  { id: 5, nom: "Cake2", cat: "cake", prix: 20, image: "cake2.jpeg" },
  { id: 6, nom: "Cake3", cat: "cake", prix: 20, image: "cake3.jpeg" },
  { id: 7, nom: "Cake4", cat: "cake", prix: 20, image: "cake4.jpeg" },
  { id: 8, nom: "Cake1", cat: "cake", prix: 20, image: "cake5.jpeg" },
  { id: 9, nom: "Vin", cat: "Boissons", prix: 120, image: "vin.jpeg" },
  { id: 10, nom: "champagne", cat: "Boissons", prix: 200, image: "champagne.jpeg" },
  { id: 11, nom: "Jus de fruits", cat: "Boissons", prix: 5, image: "jus.jpeg" },
  { id: 12, nom: "Boissons SOBEBRA", cat: "Boissons", prix: 15, image: "sobebra.jpeg" },
  // Ajoute d'autres plats ici...
];

// La magie du filtrage : on recalcule la liste dès que categoryActive change
const platsFiltrés = computed(() => {
  if (categoryActive.value === "Tous") return plats;
  return plats.filter(p => p.cat === categoryActive.value);
});

const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}
</script>