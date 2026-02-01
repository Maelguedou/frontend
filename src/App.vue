<template>

<div class="relative w-full h-100">
  <img 
    src="./assets/images/food.jpg" 
    class="absolute inset-0 w-full h-full object-cover z-0" 
    alt="Background"
  >

  <div class="absolute inset-0 bg-black/30 z-10"></div>

  <div class="relative z-20 flex justify-between items-center">
      <div class="p-4">
        <h1 class="font-bold text-white text-2xl">
          Fast<span class="text-yellow-500">Food</span>
        </h1>
      </div>

      <nav class="p-4 text-white flex gap-6 font-medium">
        <router-link to="/" class="transition-colors duration-300 hover:text-yellow-500 hover:underline hover:decoration-white hover:decoration-2 underline-offset-8 ">Accueil</router-link>
        <router-link :to="{ name: 'menu'}" class="transition-colors duration-300 hover:text-yellow-500 hover:underline hover:decoration-white hover:decoration-2 underline-offset-8">Menu</router-link>
        <router-link :to="{ name: 'contact'}" class="transition-colors duration-300 hover:text-yellow-500 hover:underline hover:decoration-white hover:decoration-2 underline-offset-8">Contact</router-link>
      </nav>

  </div>
  <div class="relative z-20 flex flex-col items-center justify-center h-64 text-center px-6">
    <h1 class="text-white text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-2xl">
      L'Éveil de vos <span class="text-yellow-500">Sens</span>
    </h1>
    
    <p class="text-gray-200 mt-4 max-w-xl text-lg font-light leading-relaxed">
      Découvrez une cuisine faite maison, où les produits du terroir rencontrent 
      l'innovation culinaire.
    </p>
 <div class="p-5">
  <button class="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-black px-10 py-4 rounded-full shadow-lg shadow-yellow-500/30 transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm">
    Réserver une table
  </button>
</div>
  </div>
</div>

<main class="p-8">
  <div data-aos="fade-up" data-aos-duration="1000">
    <router-view />
  </div>
</main>
  
<footer class="bg-slate-900 text-white border-t border-slate-800">
    <div data-aos="zoom-in" data-aos-duration="800">
      <section class="py-16 px-4 relative overflow-hidden">
        <div class="max-w-4xl mx-auto text-center relative z-10">
          <h2 class="text-2xl md:text-4xl font-bold mb-4">Une envie soudaine ?</h2>
          <p class="text-slate-400 mb-8">Commandez maintenant ou réservez votre table en un clic.</p>
          
          <div class="flex flex-col md:flex-row items-center justify-center gap-4">
            <button class="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-xl transition-all active:scale-95">
              Passer commande
            </button>
            <button class="w-full md:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-xl border border-white/20 transition-all">
              Réserver une table
            </button>
            <a href="https://wa.me/votre_numero" class="w-full md:w-auto bg-[#25D366] text-white font-bold py-3 px-8 rounded-xl flex items-center justify-center gap-2">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div class="bg-black/30 py-8 px-4 border-t border-white/5">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
          
          <div class="text-center md:text-left">
            <p class="font-bold text-white text-lg">Fast<span class="text-yellow-500">Food</span></p>
            <p>© 2026 - Saveurs & Tradition. Tous droits réservés.</p>
          </div>

          <div class="flex gap-8">
             <div class="text-center">
               <p class="text-white font-semibold">Horaires</p>
               <p>Lun-Ven: 11h-23h</p>
             </div>
             <div class="text-center">
               <p class="text-white font-semibold">Contact</p>
               <p>+229 00 00 00 00</p>
             </div>
          </div>

          <div class="flex gap-4">
            <a href="#" class="hover:text-yellow-500">Instagram</a>
            <a href="#" class="hover:text-yellow-500">Facebook</a>
          </div>

        </div>
      </div>
    </div>   
    </footer>
</template>
<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    once: false, // Permet de rejouer l'animation si on remonte/redescend
    mirror: true,
  });
});
</script>