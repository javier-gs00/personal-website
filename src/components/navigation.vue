<template>
    <div class="nav-container">
        <div class="logo-container">
            <router-link to="/home">
                <span class="logo">JAVIER</span>
            </router-link>
        </div>
        <div class="nav" id="nav">
            <a class="btn-close-nav" @click="closeNav">&times;</a>
            <a v-for="navItem in navItems" :key="navItem.id" :name="navItem.to" @click="goTo">
                <span>{{ lang === 'english'? navItem.nameEN : navItem.nameES }}</span>
            </a> 
        </div>
    </div>
</template>

<script>
import Router from '../router'

export default {
    name: "navigation",
    props: {
        lang: String
    },
    data() {
        return {
            navItems: [
                {
                    id: 0,
                    nameEN: 'HOME',
                    nameES: 'INICIO',
                    to: '/home'
                },
                {
                    id: 1,
                    nameEN: 'ABOUT',
                    nameES: 'SOBRE MI',
                    to: '/about'
                },
                {
                    id: 2,
                    nameEN: 'PROJECTS',
                    nameES: 'PROYECTOS',
                    to: '/projects'
                },
                {
                    id: 3,
                    nameEN: 'CONTACT',
                    nameES: 'CONTACTO',
                    to: '/contact'
                }
            ],
            menuButton: 'bars'
        }
    },
    methods: {
        closeNav() {
            return document.getElementById('nav').style.width = "0"
        },
        goTo(e) {
            let to = e.currentTarget.name
            document.getElementById('nav').style.width = "0"
            return Router.push(to)
        }
    }
}
</script>

<style lang="less">
@import (reference) '../assets/style/style.less';

.nav-container {
    .for-tablet-landscape-up({
        top: 0px;
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: row;
        position: relative;
        z-index: 1;
    });    
}
.logo-container {
    display: none;
    .for-tablet-landscape-up({
        display: inline;
        margin: 5px 30px;
        flex: .2;
    })
}
.logo {
    .for-phone-only({ font-size: 24px; });
    .for-tablet-landscape-up({ font-size: 30px; })
}
.nav {
    .for-phone-and-tablet-portrait({
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 2;
        top: 0;
        right: 0;
        background-color: @primary-dark;
        overflow-x: hidden;
        overflow-y: scroll;
        transition: 0.5s;
        padding-top: 60px;        
    });
    .for-tablet-landscape-up({
        flex: .8;
        margin: 10px 10px 10px 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    })
}
.btn-close-nav {
    .for-phone-and-tablet-portrait({
        position: absolute;
        top: 0;
        right: 0px;
        padding: 10px;
        font-size: 36px;
    });
    .for-tablet-landscape-up({ display: none; });
}
.nav a {
    color: @accent-light;
    margin: 5px 0px;
    .for-phone-and-tablet-portrait({
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        display: block;
        transition: 0.3s;
    });
    .for-tablet-landscape-up({
        margin: 0 20px;
        cursor: pointer;
    })
}
.nav a:hover {
    .for-tablet-landscape-up({
        color: @primary-dark;
    });
    .for-desktop-up({
        font-weight: 600;
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
    });
}
</style>