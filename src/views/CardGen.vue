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
  <div class="coursegen">
    <h1>Card generator</h1>
    <form action="">
      <div>
        <label for="cardSelect">Selectionner un statut</label>
        <select v-model="cardStatus" id="cardSelect" name="cardSelect">
          <option v-for="(item, index) in cardStatusItems" :value="item" :key="index">{{ item }}</option>
        </select>
      </div>
      <div>
        <label for="cardTitle">Titre de votre carte</label>
        <input type="text" v-model="cardTitle" placeholder="Votre titre" name="cardTitle" id="cardTitle">
      </div>
      <div>
        <label for="cardAuthor">Auteur</label>
        <input type="text" v-model="cardAuthor" placeholder="Auteur" name="cardAuthor" id="cardAuthor">
      </div>
      <div>
        <label for="cardColor">Choisir une couleur de fond</label>
        <input type="color" v-model="cardColor" name="cardColor" id="cardColor">
      </div>
    </form>

    <div class="card" :style="{ backgroundColor:cardColor }">
      <div class="card__title">
        <p>{{ cardStatus }}</p>
      </div>
      <div class="card__content">
        <p class="author">{{ cardAuthor }}</p>
        <h2>{{ cardTitle }}</h2>
      </div>

    </div>
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .coursegen {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}

form {
  text-align: center;
  margin-bottom: 3rem;
}

label {
  display: block;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.card {
  background-color: #1d1c2e;
  border-radius: 1rem;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(101, 101, 101, 0.2);
}

.card h2 {
  font-size: 3rem;
  color: #ffffff;
  font-weight: 700;
  line-height: 1.2;
}

.card p {
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 2px;
  font-size: 1rem;
}
</style>