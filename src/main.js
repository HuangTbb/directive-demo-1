const Vue = window.Vue
Vue.config.productionTip = false
import App from './App.vue'

Vue.directive('y', {
    inserted: function(el){
        el.addEventListener('click', ()=>console.log('y'))
    }
})

new Vue({
   render: h => h(App)
}).$mount('#app')