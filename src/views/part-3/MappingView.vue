<script>
export default {
  data() {
    return {
      frameworks: [
        {
          id: 1,
          name: "VueJS",
          type: "JS",
          location: null,
        },
        {
          id: 2,
          name: "Laravel",
          type: "PHP",
          location: null,
        },
        {
          id: 3,
          name: "Symfony",
          type: "PHP",
          location: null,
        },
        {
          id: 4,
          name: "React",
          type: "JS",
          location: null,
        },
        {
          id: 5,
          name: "Svelte",
          type: "JS",
          location: null,
        },
      ],
      languages: [
        {
          id: 1,
          name: "JS",
        },
        {
          id: 2,
          name: "PHP",
        },
      ],
    };
  },
  computed: {
    jsFilter() {
      return this.frameworks.filter((framework) => framework.location === "JS")
    },
    phpFilter() {
      return this.frameworks.filter((framework) => framework.location === "PHP")
    },
  },
};
</script>

<template>
  <div class="mapping">
    <h1>Mapping</h1>
    <p>Trier les différents frameworks en fonction de leur langage associé</p>

    <div class="card" v-for="framework in frameworks" :key="framework.id">
      <p>{{ framework.name }}</p>
      <select name="" id="" v-model="framework.location">
        <option value=""></option>
        <option v-for="language in languages" :value="language.name" :key="language.id">{{ language.name }}</option>
      </select>
    </div>

    <div class="js-list" v-show="jsFilter.length">
      <h2>Frameworks JS</h2>
      <div class="card" :class="framework.location === framework.type ? 'valid' : 'not-valid'" v-for="framework in jsFilter" :key="framework.id">
        <p>{{ framework.name }}</p>
      </div>
    </div>

    <div class="php-list" v-show="phpFilter.length">
      <h2>Frameworks PHP</h2>
      <div class="card" :class="framework.location === framework.type ? 'valid' : 'not-valid'" v-for="framework in phpFilter" :key="framework.id">
        <p>{{ framework.name }}</p>
      </div>
    </div>

  </div>
</template>

<style>
  .mapping {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .card {
    display: flex;
    gap: 2rem;
    margin: 1rem;
  }

  .valid {
    background: green;
  }

  .not-valid {
    background: red;
  }
</style>