<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://www.acefitness.org/education-and-resources/lifestyle/blog/6593/top-25-at-home-exercises"
          target="_blank"
        >
          Excercises
        </a>
      </li>
      <li>
        <a
          href="https://forum.muscleandstrength.com/"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://www.onhealth.com/content/1/nutrition_and_fitness"
          target="_blank"
        >
          Nutrition
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/hashtag/fitness?lang=en"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="https://www.inkin.com/"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="https://deniseleeyohn.com/build-fitness-tech-ecosystem/"
          target="_blank"
        >
          fitness-tech-ecosyatem
        </a>
      </li>
      <li>
        <a
          href="https://medium.com/@playtness/how-playtness-benefits-every-member-of-the-fitness-ecosystem-ef56b0ae7b79"
          target="_blank"
        >
          fitness-benifits
        </a>
      </li>
      <li>
        <a
          href="https://clubsolutionsmagazine.com/2017/12/building-wearable-tech-ecosystem/"
          target="_blank"
        >
          wearable-technology-ecosystem
        </a>
      </li>
      <li>
        <a
          href="https://www.refinery29.com/en-us/best-nyc-fitness-classes"
          target="_blank"
        >
          awesome-fitness
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Fitness Tracker App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
