<template>
	<header>
		<img
			alt="Vue logo"
			class="logo"
			src="./../assets/logo.svg"
			width="125"
			height="125"
		/>
	</header>
</template>

<script>
export default {
	name: 'AppHeader',
};
</script>

<style scoped>
.logo {
	width: 50px;
	height: 50px;
}

header {
	padding: 10px;
	height: 11vh;
	background-color: var(--vt-c-black-soft);
}
</style>
