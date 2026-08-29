<script lang="ts">
  import { onMount } from 'svelte';
  
  let headerVisible = false;

  onMount(() => {
    setTimeout(() => {
      headerVisible = true;
    }, 500);
  });

  function smoothScroll(sectionClass: string) {
    const element = document.querySelector(`.${sectionClass}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<section class="hero relative w-full h-screen bg-cover bg-center" style="background-image: url('/background.jpg'); opacity: 0.95;">
  <div class="absolute inset-0 bg-black/20"></div>
  
  {#if headerVisible}
    <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 animate-fade-in">
      <h1 class="text-6xl md:text-7xl font-bold text-white text-center drop-shadow-lg">
        Jukiya's Portfolio
      </h1>
    </div>
  {/if}

  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <nav class="flex flex-wrap justify-center gap-6 md:gap-8">
      <button
        on:click={() => smoothScroll('hero')}
        class="px-4 py-2 text-lg md:text-xl text-white font-semibold hover:text-yellow-300 transition-colors"
      >
        Home
      </button>
      <button
        on:click={() => smoothScroll('profile')}
        class="px-4 py-2 text-lg md:text-xl text-white font-semibold hover:text-yellow-300 transition-colors"
      >
        Profile
      </button>
      <button
        on:click={() => smoothScroll('skills')}
        class="px-4 py-2 text-lg md:text-xl text-white font-semibold hover:text-yellow-300 transition-colors"
      >
        Skill
      </button>
      <button
        on:click={() => smoothScroll('blog')}
        class="px-4 py-2 text-lg md:text-xl text-white font-semibold hover:text-yellow-300 transition-colors"
      >
        Blog
      </button>
      <button
        on:click={() => smoothScroll('contact')}
        class="px-4 py-2 text-lg md:text-xl text-white font-semibold hover:text-yellow-300 transition-colors"
      >
        Contact
      </button>
    </nav>
  </div>
</section>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :global(.animate-fade-in) {
    animation: fadeIn 1.5s ease-in-out;
  }
</style>
