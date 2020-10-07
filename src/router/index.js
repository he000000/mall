import Vue from 'vue'
import Router from 'vue-router'
const Home=()=>import('../views/home/home');
const Cart=()=>import('../views/cart/cart');
const Category=()=>import('../views/category/category');
const Profile=()=>import('../views/profile/profile');
const Detail=()=>import('../views/detail/Detail');

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path:'',
    //   redirect:'/home'
    // },
    {
      path: '/profile',
      component:Profile
    },
    {
      path: '/home',
      component:Home
    },
    {
      path: '/cart',
      component:Cart
    },
    {
      path: '/category',
      component:Category
    },
    {
      path:'/detail/:iid',
      component:Detail
    }
  ]
})
