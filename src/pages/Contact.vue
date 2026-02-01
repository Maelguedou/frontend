<template>
  <div class="py-16 px-4 max-w-6xl mx-auto">
    
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-slate-800">Contactez-<span class="text-yellow-500">nous</span></h1>
      <p class="text-slate-500 mt-2">Une question ? Une réservation spéciale ? Nous sommes à votre écoute.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      
      <div class="space-y-8">
        
        <div class="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div class="text-3xl text-yellow-500">📍</div>
          <div>
            <h3 class="font-bold text-lg text-slate-800">Notre Adresse</h3>
            <p class="text-slate-600">123 Rue de la Gastronomie</p>
            <p class="text-slate-600">75001 Paris, France</p>
          </div>
        </div>

        <div class="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div class="text-3xl text-yellow-500">📞</div>
          <div>
            <h3 class="font-bold text-lg text-slate-800">Téléphone</h3>
            <p class="text-slate-600">+229 00 00 00 00</p>
            <p class="text-green-600 font-medium mt-1">✓ Disponible sur WhatsApp</p>
          </div>
        </div>

        <div class="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div class="text-3xl text-yellow-500">🕒</div>
          <div class="w-full">
            <h3 class="font-bold text-lg text-slate-800 mb-2">Nos Horaires</h3>
            <div class="flex justify-between text-slate-600 text-sm border-b py-1">
              <span>Lundi - Vendredi</span>
              <span class="font-semibold text-slate-800">11:00 - 22:30</span>
            </div>
            <div class="flex justify-between text-slate-600 text-sm py-1">
              <span>Samedi - Dimanche</span>
              <span class="font-semibold text-slate-800">12:00 - 23:30</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white shadow-xl p-8 rounded-3xl border border-slate-100">
        <h3 class="text-xl font-bold text-slate-800 mb-6">Envoyez-nous un message</h3>
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Nom complet</label>
            <input type="text" class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition" placeholder="Ex: Jean Dupont">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input type="email" class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition" placeholder="jean@example.com">
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea rows="4" class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition" placeholder="Votre message ici..."></textarea>
          </div>

          <button class="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors">
            Envoyer le message
          </button>
        </form>
      </div>

    </div>
  </div>
  <section class="w-full h-[450px] rounded-3xl overflow-hidden shadow-inner border border-slate-200">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615673172!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca97ef0a0212c!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1647874000000!5m2!1sen!2sfr" 
    width="100%" 
    height="100%" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</section>
</template>