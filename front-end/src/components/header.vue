<template>
	<header id="header">
		<nav id="desktop">
			<router-link to="/home">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0ZRdV_U9tw_Iz7_eO2R74xNCqmZk3ObmNQ&usqp=CAU"
					alt="logo" />
			</router-link>
			<router-link to="/livros">
				<i class="fa-solid fa-book-bible"></i>
				Leitura diária
			</router-link>
			<router-link to="/artigo-semanal">
				<i class="fa-solid fa-newspaper"></i>
				Artigo semanal
			</router-link>
			<router-link to="/home">
				<i class="fa-solid fa-house"></i>
				Home
			</router-link>
			<router-link to="/login" @click="logout()">
				<i class="fa-solid fa-right-from-bracket"></i>
				Sair
			</router-link>
		</nav>
		<div id="hamburguer">
			<div>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZyM4aHP8joG0N3qfTkMp-L5jyPK5GBkzpQ&usqp=CAU"
					alt="logo" class="h-20 w-20" />
			</div>
			<label class="swap swap-rotate">
				<input @click="toogle" type="checkbox" />
				<i class="fa-solid fa-bars swap-off fill-current"></i>
				<i class="fa-solid fa-xmark swap-on fill-current"></i>
			</label>
		</div>
		<div :class="{ hidden: !mobile }" id="mobile">
			<nav id="mobile-access">
				<ul>
					<li>
						<router-link to="/livros">
							<i class="fa-solid fa-book-bible"></i>
							Leitura diária
						</router-link>
					</li>
					<li>
						<router-link to="/artigo-semanal">
							<i class="fa-solid fa-newspaper"></i>
							Artigo semanal
						</router-link>
					</li>
					<li>
						<router-link to="/home">
							<i class="fa-solid fa-house"></i>
							Home
						</router-link>
					</li>
					<li>
						<router-link to="/login" @click="logout()">
							<i class="fa-solid fa-right-from-bracket"></i>
							Sair
						</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>
<script>
import { StoreUser } from "@/stores/user";
export default {
	name: "Header",
	data() {
		return {
			store: null,
			authToken: null,
			mobile: false,
		};
	},
	async mounted() {
		// store
		this.storelogout = StoreUser();
	},
	methods: {
		logout() {
			if (this.store) {
				this.storelogout.logout();
			}
			localStorage.removeItem("authToken");
			this.$router.push("/login");
		},
		toogle() {
			this.mobile = !this.mobile;
		},
	},
};
</script>
<style scoped postcss>
#header {
	#desktop {
		@apply items-center justify-between px-10 py-5 bg-gray-400 hidden md:flex ;

		img {
			@apply h-8 w-auto;
		}

		a {
			@apply text-base font-semibold text-base-100;
		}
	}

	#hamburguer {
		@apply flex justify-between px-5;
		@apply md:hidden;

		img {
			@apply flex flex-1
		}

		input {
			@apply hidden;
		}

	}

	#mobile {
		@apply w-full p-4 pl-0 text-base-content;
		@apply md:hidden;

		#mobile-access ul {
			@apply flex flex-col gap-4 p-4 bg-primary text-base-100;
		}

		.i {
			@apply pr-1 text-primary;
		}
	}
}
</style>
