<template>
  <div class="reportCard card" @click="$emit(`onDelete`, data.id)">
    <h2>Report {{data.id}}</h2>
    <p>cases: {{data.cases}}</p>
    <p>Country: {{data.Country.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'reportCard',
  props: [`data`],
}
</script>
