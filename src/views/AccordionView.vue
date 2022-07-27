<script>
export default {
  data() {
    return {
      isActive: false,
      isActiveAccordion: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isActiveAccordion =  ! this.isActiveAccordion
    },
    getAnswer() {
      this.isActive =  true
    },
    reset() {
      this.isActive =  false
      this.isActiveAccordion = false
    }
  },
};
</script>

<template>
  <div class="content">
    <h1>Quelle propriété CSS permet d'élaborer un layout en 2 dimensions ?</h1>
    <div class="buttons" :class="isActive ? 'active' : ''">
      <button :class="isActive ? 'false' : ''" @click="getAnswer">Flex</button>
      <button :class="isActive ? 'true' : ''" @click="getAnswer">Grid</button>
    </div>
    <div class="accordion" :class="isActiveAccordion ? 'active' : ''">
      <div class="accordion__header" @click="toggleAccordion">
        <h2>Comprendre la réponse</h2>
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </div>
      <div class="accordion__content">
        <p>Le flex va permettre de créer un layout à une dimension. Au travers de la propriété <i>flex-direction</i>, nous pouvons définir un layout horizontal (row) ou vertical (column). De son côté, le grid permet de créer des cellules, et de positionner des éléments de haut en bas et de droite à gauche au travers de ces cellules. C'est donc un layout à deux dimensions.</p>
      </div>
    </div>
    <button class="reset" @click="reset">Recommencer</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .content {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .content h1 {
    text-align: center;
    margin-bottom: 3rem;
  }

  .buttons {
    display: flex;
    gap: 1rem;
  }

  button {
    border: 2px solid;
    padding: 1rem 2rem;
    text-transform: uppercase;
    background-color: transparent;
    color: var(--color-text);
  }

  button.false {
    background-color: darkred;
    color: white;
  }

  button.true {
    background-color: green;
    color: white;
  }

  button:hover {
    cursor: pointer;
  }

  .buttons.active + .accordion {
    display: block;
  }

  .accordion {
    display: none;
    width: 90%;
    margin: 3rem auto;
  }

  .accordion__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border: 2px solid var(--color-text);
  }

  .accordion__header svg {
    transition: all 0.4s;
  }

  .accordion__header:hover {
    cursor: pointer;
  }

  .accordion.active .accordion__header svg {
    transform: rotate(90deg);
  }

  .accordion__content {
    border: 2px solid var(--color-text);
    border-top: none;
    position: relative;
    top: -2px;
    height: 0;
    overflow: hidden;
    padding: 0;
    opacity: 0;
    transition: height 0.4s, opacity 0.3s 0.2s;
  }

  .accordion.active .accordion__content {
    overflow: visible;
    height: 200px;
    opacity: 1;
  }

  .accordion__content p {
    padding: 1rem;
  }

  .reset {
    display: none;
  }

  .buttons.active ~ .reset {
    display: block;
  }
}
</style>
