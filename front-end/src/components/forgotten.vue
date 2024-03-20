<template>
	<div class="container">
		<img class="w-40 h-40 mx-auto"
		src=data:image/png;base64,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
		alt="life com deus" />
		<h2>Lembrar sua senha?</h2>
		<form class="formulario">
			<hr />
			<label class="labelclass" for="email">
				Usuário ou Email
				<input
					id="email"
					v-model="data.user"
					name="email"
					type="email"
					class="inputGeral"
					required />
			</label>
			<div v-if="status === 'info'" class="alert alert-info">
				<i class="fa-solid fa-exclamation"></i>
				<div class="alert-load">
					<strong>Aguarde!</strong>
					Carregando
					<span class="loading loading-dots loading-xs"></span>
				</div>
			</div>
			<div v-if="status === 'warning'" class="alert alert-warning">
				<i class="fa-solid fa-exclamation"></i>
				<span>
					<strong>Lembrar senha!</strong>
					Um email com instruções para recuperação de senha foi encaminhado ao
					endereço cadastrado.
				</span>
			</div>
			<div v-if="status === 'error'" class="alert alert-error">
				<i class="fa-solid fa-xmark"></i>
				<span>
					<strong>Usuário ou e-mail inválido!</strong>

					<a class="contact" href="#" target="_blank"> contato@contato </a>
				</span>
			</div>
			<button @click="reset">Lembrar senha</button>
			<div class="remember-password">
				<router-link class="recover-password" to="/register">
					logar
				</router-link>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "Forgotten",

	data() {
		return {
			status: "",
			data: {
				user: "",
			},
		};
	},

	methods: {
		reset() {
			window.alert("senha enviada");
			this.$router.push("/login");
		},
	},
};
</script>
<style lang="postcss" scoped>
.container {
	@apply py-20 px-4  h-screen flex flex-col;

	hr {
		@apply my-4 block;
	}
	h1 {
		@apply text-6xl text-primary font-bold text-center;
	}

	h2 {
		@apply mt-2 text-center text-2xl  tracking-tight;
	}

	.formulario {
		@apply flex flex-col mx-10;
		.labelclass {
			@apply label flex flex-col items-start relative;

			.input-icon {
				@apply absolute top-12 left-5 text-primary focus:ring-transparent focus:border-primary input-bordered input;
			}

			.inputGeral {
				@apply w-full focus:ring-transparent focus:border-primary input-bordered input;
			}
		}

		.buttonclass {
			@apply mt-6  lg:w-full bg-blue-500 btn-outline btn-primary hover:bg-base-100  text-base-content btn;
		}
		.recover-password {
			@apply my-1 text-right block underline text-primary;
		}

		.alert-load {
			@apply flex gap-1 items-end;
		}

		.alert {
			span {
				@apply max-w-[45ch];
			}
		}
	}

	.suport {
		@apply text-center mt-3 text-base-content;

		a {
			@apply block mt-1 underline font-semibold;
		}
	}

	.copy {
		@apply flex items-center justify-center gap-2 flex-col mt-6;

		span {
			@apply text-xs;
		}

		img {
			@apply max-w-[142px];
		}
	}
	/* link com svg voltar login style exclusivo register */
}
.alert {
	@apply rounded-md;
}
</style>
