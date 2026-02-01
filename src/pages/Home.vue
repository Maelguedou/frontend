<template>
  <section class="py-16 px-4 bg-white">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-slate-800">Nos Signatures</h2>
      <div class="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
    </div>

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div 
        v-for="plat in incontournables" 
        :key="plat.id"
        class="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
      >
        <div class="relative overflow-hidden">
        
          <img 
            :src="getImageUrl(plat.image)" 
            :alt="plat.nom" 
            class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          >
        </div>

        <div class="p-6">
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-xl font-bold text-slate-800">{{ plat.nom }}</h3>
            <span class="text-orange-600 font-semibold text-lg">{{ plat.prix }}€</span>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ plat.description }}
          </p>
        </div>
      </div>

    </div>
  </section>
  <section class="py-20 bg-slate-50 px-4">
  <div class="max-w-6xl mx-auto">
    
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-slate-800">Ce que nos gourmets en disent</h2>
      <p class="text-orange-600 font-semibold mt-2">⭐ Déjà plus de 500 gourmets conquis ce mois-ci</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div 
        v-for="temoignage in avis" 
        :key="temoignage.id"
        class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
      >
        <span class="absolute top-4 right-6 text-6xl text-slate-100 font-serif">“</span>

        <div class="flex text-yellow-400 mb-4">
          <span v-for="star in temoignage.note" :key="star">★</span>
        </div>

        <p class="text-slate-600 italic mb-6 leading-relaxed">
          "{{ temoignage.commentaire }}"
        </p>

        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
            {{ temoignage.client.charAt(0) }}
          </div>
          <div>
            <h4 class="font-bold text-slate-800 text-sm">{{ temoignage.client }}</h4>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<section class="py-20 bg-white overflow-hidden">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex flex-col md:flex-row items-center gap-12">
      
      <div class="w-full md:w-1/2 relative">
        <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-500/20 rounded-full -z-10"></div>
        
        <img 
          src="../assets/images/chef.jpeg" 
          alt="Notre chef en cuisine" 
          class="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
        >
        
        <div class="absolute -bottom-10 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
          <p class="text-4xl font-bold text-yellow-500">10+</p>
          <p class="text-sm text-slate-600 font-medium">Ans de passion<br>culinaire</p>
        </div>
      </div>

      <div class="w-full md:w-1/2">
        <span class="text-yellow-600 font-semibold tracking-widest uppercase text-sm">Notre Promesse</span>
        <h2 class="text-3xl md:text-5xl font-bold text-slate-800 mt-4 mb-6 leading-tight">
          Plus qu'un Fast-Food,<br>une <span class="text-yellow-500">Tradition</span>.
        </h2>
        
        <p class="text-slate-600 text-lg mb-8 leading-relaxed">
          Chez <span class="font-bold">FastFood</span>, nous croyons que la rapidité ne doit jamais sacrifier la qualité. Chaque matin, nous sélectionnons le meilleur pour vos papilles.
        </p>

        <div class="space-y-6">
          <div class="flex items-start gap-4">
            <div class="bg-yellow-100 p-3 rounded-lg text-yellow-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-slate-800">Produits frais du marché</h4>
              <p class="text-slate-500 text-sm">Livrés chaque aube par nos producteurs locaux.</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="bg-yellow-100 p-3 rounded-lg text-yellow-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-slate-800">Viande 100% Locale</h4>
              <p class="text-slate-500 text-sm">Un circuit court pour une traçabilité irréprochable.</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="bg-yellow-100 p-3 rounded-lg text-yellow-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-slate-800">Recettes de Grand-Mère</h4>
              <p class="text-slate-500 text-sm">Des sauces et marinades maison transmises depuis des générations.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
</template>
<script setup>
const avis = [
  {
    id: 1,
    client: "Sophie L.",
    note: 5,
    commentaire: "Le Gourmet Burger est une tuerie ! La viande est juteuse et le pain brioché change tout. Je reviendrai sans hésiter.",
  },
  {
    id: 2,
    client: "Marc-Antoine",
    note: 5,
    commentaire: "Ambiance chaleureuse et service rapide. La pizza à la truffe est parfumée comme il faut. Une vraie pépite !",
  },
  {
    id: 3,
    client: "Julie D.",
    note: 4,
    commentaire: "Superbe découverte. Le chawarma est bien épicé et la crème d'ail est incroyable. Portions généreuses.",
  }
];
const incontournables = [
  {
    id: 1,
    nom: "Le Gourmet Burger",
    prix: 16,
    description: "Un steak de bœuf charolais saisi à la flamme, surmonté d'une tranche de cheddar affiné fondant, d'oignons rouges croquants et de notre sauce secrète maison. Le tout niché dans un pain brioché artisanal toasté au beurre.",
    image: "burger.jpg",
  },
  {
    id: 2,
    nom: "Pizza Regina",
    prix: 19,
    description: "Une pâte fine pétrie à la main et maturée 48h pour une légèreté incomparable. Garnie d'une sauce tomate basilic, de mozzarella di bufala onctueuse, de jambon blanc de pays et de champignons de Paris frais.",
    image: "pizza.jpg",
  },
  {
    id: 3,
    nom: "Le Chawarma Royal",
    prix: 22,
    description: "Fines lamelles de poulet marinées aux épices d'Orient et grillées à la broche. Servi dans un pain libanais chaud avec un trio de légumes croquants, quelques feuilles de menthe fraîche et notre crème d'ail onctueuse (toum).",
    image: "pasta.jpg",
  }
];

// Fonction pour gérer le chemin des images proprement avec Vite
const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}
</script>