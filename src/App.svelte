<script lang="ts">
  import Hero from './lib/Hero.svelte';
  import Profile from './lib/Profile.svelte';
  import Skills from './lib/Skills.svelte';
  import Works from './lib/Works.svelte';
  import Blog from './lib/Blog.svelte';
  import Contact from './lib/Contact.svelte';
</script>

<main>
  <div id="hero" class="hero">
    <Hero />
  </div>

  <div id="profile" class="profile">
    <Profile />
  </div>

  <div id="skills" class="skills">
    <Skills />
  </div>

  <div id="works" class="works">
    <Works />
  </div>

  <div id="blog" class="blog">
    <Blog />
  </div>

  <div id="contact" class="contact">
    <Contact />
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
