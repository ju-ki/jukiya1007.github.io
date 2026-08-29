<script lang="ts">
  interface Skill {
    name: string;
    image: string;
    description: string;
  }

  const skills: Skill[] = [
    {
      name: 'Python',
      image: '/python.svg',
      description: 'メインで使用してます。'
    },
    {
      name: 'C#',
      image: '/c-sharp.svg',
      description: '一番最初に触れた言語です。'
    },
    {
      name: 'PHP',
      image: '/php.svg',
      description: '最近勉強し始めました。'
    },
    {
      name: 'JavaScript',
      image: '/javascript.svg',
      description: '最近勉強し始めました。'
    }
  ];
</script>

<section class="skills py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <div class="mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-8">Skill</h2>
    </div>

    <div class="mb-12">
      <h3 class="text-2xl font-bold mb-4">使用したことのある技術</h3>
      <p class="text-gray-600 dark:text-gray-400">✳ 実務経験は現時点ではないです</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each skills as skill}
        <div class="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src={skill.image}
            alt={skill.name}
            class="w-24 h-24 mb-4 object-contain"
          />
          <h4 class="text-xl font-semibold mb-4">{skill.name}</h4>
          <p class="text-gray-600 dark:text-gray-400">{skill.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
