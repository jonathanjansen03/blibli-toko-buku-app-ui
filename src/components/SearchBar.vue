<template>
  <BliField leading-icon no-gap type="search">
    <BliInput placeholder="Search for book titles" v-model="searchQuery" />
    <BliIconSearch slot="leading-icon" />
    <BliButton color="secondary" @click="handleSearch">Search</BliButton>
  </BliField>
</template>

<script src="./js/search-bar.js"></script>

<style lang="scss" scoped>
.blu-field {
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    width: 100%;
  }

  button {
    margin-left: -7.7rem;
  }
}
</style>
