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
                <span class="nav-text">{{ lang === 'english'? navItem.nameEN : navItem.nameES }}</span>
            </a> 
        </div>
    </div>
</template>

<script>
import Router from '../router'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

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
                    to: '/home',
                    icon: 'home'
                },
                {
                    id: 1,
                    nameEN: 'ABOUT',
                    nameES: 'SOBRE MI',
                    to: '/about',
                    icon: 'user'
                },
                {
                    id: 2,
                    nameEN: 'WORK',
                    nameES: 'TRABAJO',
                    to: '/work',
                    icon: 'briefcase'
                },
                {
                    id: 3,
                    nameEN: 'CONTACT',
                    nameES: 'CONTACTO',
                    to: '/contact',
                    icon: 'at'
                }
            ],
            menuButton: 'bars'
        }
    },
    methods: {
        closeNav() {
            return document.getElementById('nav').style.width = "0"
        },
        goTo(e){
            let to = e.currentTarget.name
            document.getElementById('nav').style.width = "0"
            return Router.push(to)
        }
    },
    components: {
        FontAwesomeIcon
    }
}
</script>

<style lang="less">
@import (reference) '../assets/style/style.less';

.nav-container {
    // .for-phone-and-tablet-portrait({

    // });
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
    .for-phone-only({
        // display: none;
        // display: inline;
        // padding: 10px;
    });
    .for-tablet-landscape-up({
        display: inline;
        margin: 5px 30px;
        margin: 10px 0 10px 30px;
        flex: .2;
    })
}
.logo {
    .for-phone-only({
        font-size: 24px;
    });
    .for-tablet-landscape-up({
        font-size: 30px;
    })
}
.nav {
    .for-phone-only({
        // height: 100%;
        // width: 0;
        // position: fixed;
        // z-index: 1;
        // top: 0;
        // right: 0;
        // background-color: @primary-dark;
        // overflow-x: hidden;
        // transition: 0.5s;
        // padding-top: 60px;
    });
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
        // margin-top: 0px;
        // margin-left: 50px;
    });
    .for-tablet-landscape-up({
        display: none;
    });
}
.nav a {
    color: @accent-light;
    margin: 5px 0px;
    .for-phone-only({
        // padding: 8px 8px 8px 32px;
        // text-decoration: none;
        // font-size: 25px;
        // display: block;
        // transition: 0.3s;
    });
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
// .nav a {
//     .for-phone-only({
//         position: absolute;
//         top: 0;
//         right: 0px;
//         padding: 10px;
//         font-size: 36px;
//     });
// }
.nav-text {
    .for-phone-only({
        // display: none;
    });
    .for-tablet-landscape-up({
        // display: inline;
        // margin: 0 30px;
    });
}
.icon {
    .for-tablet-landscape-up({
        display: none;
    })
}
.nav a:hover,
.nav a.router-link-active,
.nav a.router-link-exact-active {
    .for-tablet-landscape-up({
        color: @accent;
    });
    .for-desktop-up({
        color: @accent;
        // font-weight: 600;
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
    });
}
</style>