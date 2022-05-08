<template>
  <app-header />
  <app-body />
  <app-footer />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppBody from './components/AppBody.vue';
import AppFooter from './components/AppFooter.vue';
import './assets/base.css';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppBody,
    AppFooter
  }
}
</script>
