<template>
	<div id="livros">
		<div class="titulo">
			<h2>Encontre seu verso em algum livro</h2>
			<p>Alguns insights de livros que contêm alguma passagem que vale uma reflexão mais profunda.</p>
		</div>
		<section>
			<article>
				<div v-if="currentItem" class="container-artigo">
					<figure>
						<img :src="currentImage" alt="imagem do livro" />
						<p><cite>{{ currentItem.author }}</cite></p>
					</figure>
					<div class="container-insigth">
						<h2>{{ currentItem.title }}</h2>
						<p>{{ currentItem.insights }}</p>
					</div>
				</div>
			</article>
		</section>
		<div class="container-button">
			<button @click="previousItem" :disabled="currentIndex === 0">Anterior</button>
			<button @click="nextItem" :disabled="currentIndex >= dataLivros.data.length">Próximo</button>
		</div>
	</div>
</template>

<script>
import { StoreLivros } from "@/stores/apiLivros";

export default {
	name: "livros",
	data() {
		return {
			dataLivros: { data: [] },
			currentIndex: 0,
		};
	},
	computed: {
		currentItem() {
			return this.dataLivros.data[this.currentIndex];
		},
		currentImage() {
			const titleMap = {
				"Mais Esperto que o Diabo": "https://www.livrariasfamiliacrista.com.br/media/tmp/webp/catalog/product/cache/1/small_image/275x340/8104d67811b5b3c5190375b34be1f1fe/_/-/_-esperto-que-o-diabo.webp",
				"As 25 Leis Bíblicas do sucesso": "https://www.livrariasfamiliacrista.com.br/media/catalog/product/cache/1/image/800x/56819907b1c49a4bc751319b3fccb0da/l/i/livro_as_25_leis_b_blicas_do_sucesso.jpg",
			};
			return titleMap[this.currentItem.title] || "https://img.skoob.com.br/XnQdUf07fNcMg0Ci84avk8Kjn7Y=/600x0/center/top/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/401847/MAIS_ESPERTO_QUE_O_DIABO_1405468411B.jpg";
		},
	},
	methods: {
		nextItem() {
			if (this.currentIndex < this.dataLivros.data.length - 1) {
				this.currentIndex++;
			}
		},
		previousItem() {
			if (this.currentIndex > 0) {
				this.currentIndex--;
			}
		},
		shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
		},
	},
	async mounted() {
		this.storeLivros = StoreLivros();
		this.dataLivros = await this.storeLivros.load();
		this.shuffleArray(this.dataLivros.data);
		
	},
};
</script>

<style scoped postcss>
#livros {

	.titulo {
		@apply p-5;

		h2 {
			@apply font-bold tracking-tight text-base-content text-3xl;
		}

		p {
			@apply mt-2 text-base text-base-content;
		}
	}

	section {
		@apply w-full h-1/2 px-10;

		article {
			@apply shadow-md border-t-2 border-base-200 rounded-md;

			.container-artigo {
				@apply flex flex-col items-center p-10;
				@apply md:flex-row;

				figure {
					@apply h-80 w-80 flex-shrink-0;

					img {
						@apply h-80 w-80 object-cover object-center;
					}

					p {
						@apply relative text-center mt-2 text-base-content;
					}
				}

				.container-insigth {
					@apply flex flex-col text-sm gap-5;

					h2 {
						@apply font-bold text-2xl text-base-content mt-10;
						@apply md:mt-0
					}

					p {
						@apply text-base text-base-content;
					}
				}
			}
		}
	}

	.container-button {
		@apply flex justify-center gap-2 mt-5;

		button {
			@apply hover:bg-sky-500 text-base-content;
		}
	}
}
</style>