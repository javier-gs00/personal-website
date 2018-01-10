<template>
    <div class="nav-container">
        <!-- <span class="logo">Javier</span> -->
        <ul class="nav-bar">
            <li v-for="navItem in navItems" :key="navItem.id" class="nav-item">
                <router-link :to="navItem.to">
                    <font-awesome-icon :icon="['fas', navItem.icon]" />
                    <span class="nav-text">{{ lang === 'english'? navItem.nameEN : navItem.nameES }}</span>
                </router-link> 
            </li>
        </ul>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solids from '@fortawesome/fontawesome-free-solid'

export default {
    name: "navigation",
    props: {
        lang: String
    },
    data() {
        return {
            navItems: [
                {
                    id: 1,
                    nameEN: 'HOME',
                    nameES: 'INICIO',
                    to: '/home',
                    icon: 'home'
                },
                {
                    id: 2,
                    nameEN: 'ABOUT',
                    nameES: 'SOBRE MI',
                    to: '/about',
                    icon: 'user'
                },
                {
                    id: 3,
                    nameEN: 'WORK',
                    nameES: 'TRABAJO',
                    to: '/work',
                    icon: 'briefcase'
                },
                {
                    id: 4,
                    nameEN: 'CONTACT',
                    nameES: 'CONTACTO',
                    to: '/contact',
                    icon: 'at'
                }
            ]
        }
    },
    components: {
        FontAwesomeIcon
    }
}
</script>

<style>
.logo {
    font-size: 30px;
    margin-top: 20px;
    text-align: center;
}
.nav-container {
    background: #000;
    box-shadow: 2px 0 4px 1px rgba(0, 0, 0, .3);
}
@media only screen and (max-width: 599px){
    .nav-container {
        bottom: 0px;
        width: 100%;
        position: fixed;
        box-shadow: 0 1px 6px 2px rgba(0, 0, 0, .3);
    }
}
@media only screen and (min-width: 600px) {
    .nav-container {
        flex-basis: 50px;
        min-width: 50px;
        display: flex;
        flex-direction: column;
    }
}
@media only screen and (min-width: 1200px) {
    .nav-container {
        flex-basis: 250px;
        min-width: 250px;
        display: flex;
        flex-direction: column;
    }   
}
@media only screen and (max-width: 599px){
    .nav-bar {
        margin: 0;
        padding: 0;
        display: flex;
    }
}
@media only screen and (min-width: 600px) {
    .nav-bar {
        margin: auto;
        padding: 10px;
        float: left;
        list-style-type: none;
    }
}
@media only screen and (min-width: 1200px) {
    .nav-bar {
        margin: auto 0;
        padding: 0 50px;
        float: left;
        list-style-type: none;
    } 
}
.nav-item {
    margin: 20px 0;
}
@media only screen and (max-width: 599px){
    .nav-item {
        flex-basis: 20%;
        display: flex;
        justify-content: center;
    }
}
.nav-item span {
    margin-inline-start: 5px;
}
@media only screen and (max-width: 599px){
    .nav-item span{
        margin-inline-start: 0px;
    }
    .nav-text {
        display: none;
    }
}
@media only screen and (min-width: 600px) {
    .nav-text {
        display: none;
    }
}
@media only screen and (min-width: 1200px) {
    .nav-text {
        display: inline;
    }
}
ul.nav-bar a {
    color: #9e9e9e;
}
ul.nav-bar a:hover,
ul.nav-bar a.router-link-active,
ul.nav-bar a.router-link-exact-active {
    color: #fff; 
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
}
</style>