<template>
	<div id="artigo">
		<div>
			<h2>Uma vida com Deus</h2>
			<p>
				Ouça a palavra de Deus de uma maneira leve, diversos artigos para
				meditar e refletir.
			</p>
			<article v-for="(artigo, index) in artigos" :key="index">
				<div>
					<img :src="artigo.imagem" alt="Minha Imagem" class="img"/>
				</div>
				<section>
					<legend>
						<date :datetime="artigo.data">{{artigo.data}}</date>
						<a href="#">{{ artigo.categoria }}</a>
					</legend>
					<div class="conteudo">
						<h3>{{ artigo.titulo }}</h3>
						<p>{{ artigo.conteudo }}</p>
					</div>
					<div class="autor">
						<img :src="amiltonMenezes" alt="amilton"/>
						<cite>Pastor{{ artigo.autor }}</cite>
					</div>
				</section>
			</article>
		</div>
	</div>
</template>

<script>
import tempoRefletir from "@/assets/imagens/tempoRefletir.jpg";
import amiltonMenezes from "@/assets/imagens/amiltonMenezes.jpg";
import escolhas from "@/assets/imagens/escolhas.jpg";
import amanhecer from "@/assets/imagens/amanhecer.jpg";

import { artigosStore } from "@/stores/storeArtigo";
export default {
	name: "Artigo",
	data() {
		const store = artigosStore();
		const artigos = store.listaDeArtigos;
		const img = {
			tempoRefletir,
			amiltonMenezes,
			escolhas,
			amanhecer,
		};
		return {
			tempoRefletir,
			amiltonMenezes,
			escolhas,
			amanhecer,
			artigos,
			store: null,
		};
	},
};
</script>

<style scoped postcss>
#artigo {
	@apply w-full h-full flex p-5 bg-base-100;
	
	h2 {
		@apply text-4xl font-bold text-base-content
	};
	p{
		@apply mt-2 text-lg text-base-content
	};
	}
	article{
		@apply w-full flex flex-col md:flex-row justify-center gap-2 mt-10;
		div{
			@apply sm:relative sm:w-1/2 w-full;
			@apply flex flex-col;
			.img{
				@apply sm:inset-0 h-full w-full;
			}
		}
		section{
			@apply w-full mx-10;
			legend{
				@apply flex items-center gap-4 text-xs;
				a{
					@apply relative z-10 rounded-full bg-base-100 px-3 py-1.5;
				}
			}
			.conteudo{
				@apply w-full flex flex-wrap;
				h3{
					@apply mt-3 text-lg font-semibold text-base-content;
				}
				p {
					@apply px-2 text-sm text-base-content text-justify mr-20;
					@apply md:mr-0;
					
				}
			}
			.autor{
				@apply flex flex-col items-start mt-6 gap-1;
				img{
					@apply h-10 w-10 rounded-full;
				}
				cite{
					@apply font-semibold text-base-content;
				}
			}
		}
	}
</style>