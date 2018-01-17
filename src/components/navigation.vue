<template>
    <div class="nav-container">
        <button @click="showMenu">
            <!-- <font-awesome-icon class="icon" :icon='["fas", menuButton]' /> -->
            <span style="font-size: 24px;">&#9776;</span>
            <span style="font-size: 32px;">&times;</span>
        </button>
        <div class="logo-container">
            <router-link to="/home">
                <span class="logo">JAVIER</span>
            </router-link>
        </div>
        <div class="nav">
            <router-link v-for="navItem in navItems" :key="navItem.id" :to="navItem.to">
                <!-- <font-awesome-icon :icon="['fas', navItem.icon]" /> -->
                <!-- <font-awesome-icon class="icon" :icon="navItem.icon" /> -->
                <span class="nav-text">{{ lang === 'english'? navItem.nameEN : navItem.nameES }}</span>
            </router-link> 
        </div>
        <!-- <ul class="nav-bar">
            <li v-for="navItem in navItems" :key="navItem.id" class="nav-item">
                <router-link :to="navItem.to">
                    <font-awesome-icon class="icon" :icon="navItem.icon" />
                    <span class="nav-text">{{ lang === 'english'? navItem.nameEN : navItem.nameES }}</span>
                </router-link> 
            </li>
        </ul> -->
    </div>
</template>

<script>
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
        showMenu() {
            if (this.menuButton === 'bars') {
                this.menuButton = 'times'
                document.getElementById('nav-container').style.display = 'block'
            } else {
                this.menuButton = 'bars'
                document.getElementById('nav-container').style.display = 'none'
            }
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
    .for-phone-only({
        display: block;
        background: @primary-light;
        height: 100%;
        width: 200px;
        position: fixed;
        overflow: auto;
    });

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
.nav-container button {
    .for-phone-only({
        outline: none;
        margin: 15px 30px 10px;
        padding: 0;
        background: transparent;
        border-width: 0;
        font-size: 20px;
    });
    .for-tablet-landscape-up({
        display: none;
    })
}
.nav-container .logo-container {
    margin: 5px 30px;

    .for-tablet-landscape-up({
        margin: 10px 0 10px 30px;
        flex: .2;
    })
}
.logo {
    .for-tablet-landscape-up({
        font-size: 30px;
    })
}
.nav-container .nav {
    .for-phone-only({
        display: flex;
        flex-direction: column;
    });

    .for-tablet-landscape-up({
        flex: .8;
        margin: 10px 10px 10px 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    })
}
.nav a {
    // color: @primary-dark;
    color: @accent-light;
    margin: 5px 0px;

    .for-tablet-landscape-up({
        margin: 0 20px;
    })
}
.nav-text {
    .for-phone-only({
        display: none;
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