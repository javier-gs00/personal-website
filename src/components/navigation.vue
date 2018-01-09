<template>
    <div class="nav-container">
        <!-- <span class="logo">Javier</span> -->
        <ul class="nav-bar">
            <li class="nav-item">
                <router-link to="/home">
                    <font-awesome-icon :icon="faHome" />
                    <span class="nav-text">HOME</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about">
                    <font-awesome-icon :icon="faUser" />
                    <span class="nav-text">ABOUT</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/work">
                    <font-awesome-icon :icon="faBriefcase" />
                    <span class="nav-text">WORK</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/contact">
                    <font-awesome-icon :icon="faAt" />
                    <span class="nav-text">CONTACT</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faHome, faUser, faBriefcase, faAt } from '@fortawesome/fontawesome-free-solid'

export default {
    name: "navigation",

    computed: {
        faHome() {
            return faHome
        },
        faUser() {
            return faUser
        },
        faBriefcase() {
            return faBriefcase
        },
        faAt() {
            return faAt
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
@media only screen and (max-width: 599px){
    .nav-container {
        bottom: 0px;
        width: 100%;
        position: fixed;
        background: #fff;
        box-shadow: 0 1px 6px 2px rgba(0, 0, 0, .3);
    }
}
@media only screen and (min-width: 600px) {
    .nav-container {
        flex-basis: 50px;
        min-width: 50px;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .3);
        display: flex;
        flex-direction: column;
    }
}
@media only screen and (min-width: 1200px) {
    .nav-container {
        flex-basis: 250px;
        min-width: 250px;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .3);
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
        flex-basis: 25%;
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
    color: #465a64;
}
</style>