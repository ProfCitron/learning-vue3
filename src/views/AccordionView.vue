<script>
export default {
  data() {
    return {
      cardTitle: 'Ajoute un titre',
      cardAuthor: 'Auteur',
      cardColor: '#1d1c2e',
      cardStatus: null,
      cardStatusItems: [
        "En cours d'apprentissage",
        "Découverte",
        "Acquis",
        "Expertise technique"
      ]
    }
  }
}
</script>

<template>
  <div class="accordion">
    <div class="accordion__header">

    </div>
    <div class="accordion__content">

    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .accordion {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>