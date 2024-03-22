import { defineStore } from "pinia";

import axios from "axios";

export const StoreUser = defineStore({
	id: "StoreUser",
	state: () => ({

		user: null,
		response: null,
		authToken: false,
		data: {},

	}),
	actions: {

		//request para end-point
		async login(data) {
			try {
				const response = await axios.post(
					"https://vida-com-deus.onrender.com/usuarios/login",
					data
				);
				if (response.data && response.data.token) {
          const token = response.data.token;
          console.log("Token recebido:", token);
          localStorage.setItem("authToken", token);
          
          this.authToken = token;
          return true; 
        }
				return false;

				
			} catch (error) {
				console.error("Erro ao fazer login:", error);
				return null;
			}
		},

		// Remove o token do armazenamento local
		logout() {
			localStorage.removeItem("authToken");
			this.authToken = null;
		
		},
	},
});
