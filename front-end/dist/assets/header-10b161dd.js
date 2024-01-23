import{S as l}from"./user-5a7d6ad8.js";import{_ as n}from"./_plugin-vue_export-helper-c27b6911.js";import{r,o as d,c,a as e,d as s,f as o,i as m,b as g}from"./index-491a4354.js";const h={name:"Header",data(){return{store:null,authToken:null}},async mounted(){this.storelogout=l()},methods:{logout(){this.store&&this.storelogout.logout(),localStorage.removeItem("authToken"),this.$router.push("/login")}}},u={class:"bg-info opacity-40"},f={class:"mx-auto flex max-w-7xl items-center justify-around p-6 lg:px-8","aria-label":"Global"},p=m('<div class="flex lg:flex-1"><a href="#" class="-m-1.5 p-1.5"><span class="sr-only">Your Company</span><img class="h-8 w-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0ZRdV_U9tw_Iz7_eO2R74xNCqmZk3ObmNQ&amp;usqp=CAU" alt=""></a></div><div class="flex lg:hidden"><button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-indigo-300"><span class="sr-only">Open main menu</span><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg></button></div>',2),x={class:"hidden lg:flex lg:gap-x-40"},_=e("a",{href:"#",class:"text-sm font-semibold leading-6 text-white"},"Leitura diária",-1),v=e("a",{href:"#",class:"text-sm font-semibold leading-6 text-white"},"Artigo semanal",-1),y=e("a",{href:"#",class:"text-sm font-semibold leading-6 text-white"},"Home",-1),b=e("div",{class:"hidden lg:flex lg:flex-1 lg:justify-end"},null,-1),w={class:"hidden lg:flex lg:flex-1 lg:justify-end"},k=e("span",{"aria-hidden":"true"},"→",-1),C=e("div",{class:"lg:hidden",role:"dialog","aria-modal":"true"},[e("div",{class:"fixed inset-0 z-10"}),e("div",{class:"right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},[e("div",{class:"flex items-center justify-between"},[e("a",{href:"#",class:"-m-1.5 p-1.5"},[e("span",{class:"sr-only"},"Vida livre"),e("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:""})])]),e("div",{class:"mt-6 flow-root"},[e("div",{class:"-my-6 divide-y divide-gray-500/10"},[e("div",{class:"space-y-2 py-6"},[e("a",{href:"#",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},"Leitura diária"),e("a",{href:"#",class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},"Artigo semanal")])])])])],-1);function N(j,a,V,S,$,i){const t=r("router-link");return d(),c("header",u,[e("nav",f,[p,e("div",x,[s(t,{to:"/livros"},{default:o(()=>[_]),_:1}),s(t,{to:"/artigo-semanal"},{default:o(()=>[v]),_:1}),s(t,{to:"/home"},{default:o(()=>[y]),_:1})]),b,e("div",w,[s(t,{to:"/login"},{default:o(()=>[e("a",{href:"#",class:"text-sm font-semibold leading-6 text-white",onClick:a[0]||(a[0]=A=>i.logout())},[g("Sair"),k])]),_:1})])]),C])}const q=n(h,[["render",N]]);export{q as H};