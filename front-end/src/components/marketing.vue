<template>
	<div class="container-marketing">
		<img :src="imageBackground" alt="Logo Life com Deus" />
	</div>
</template>

<script>
import imageBackground from "@/assets/imagens/amanhecer.jpg";
import backgroundImage from "@/assets/imagens/aflicoes.jpg";
import logo from "@/assets/imagens/aflicoes.jpg";

export default {
	name: "marketing",
	components: {},
	data() {
		return {
			imageBackground: imageBackground,
			logo: logo,
			backgroundImage: backgroundImage,
		};
	},
};
</script>
<style lang="postcss" scoped>
.container-marketing {
	@apply h-screen overflow-y-hidden ;

	img {	@apply w-full; }
}
</style>
