<template>
    <div class="nav-container">
        <!-- <span class="logo">Javier</span> -->
        <ul>
            <li>
                <router-link to="/">
                    <font-awesome-icon :icon="faHome" />
                    <span>HOME</span>
                </router-link>
            </li>
            <li>
                <router-link to="/about">
                    <font-awesome-icon :icon="faUser" />
                    <span>ABOUT</span>
                </router-link>
            </li>
            <li>
                <router-link to="/work">
                    <font-awesome-icon :icon="faBriefcase" />
                    <span>WORK</span>
                </router-link>
            </li>
            <li>
                <router-link to="/contact">
                    <font-awesome-icon :icon="faAt" />
                    <span>CONTACT</span>
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
.nav-container {
    flex-basis: 320px;
    min-width: 320px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .3);
    display: flex;
    flex-direction: column;
}
.logo {
    font-size: 30px;
    margin-top: 20px;
    text-align: center;
}
ul {
    margin: auto 0;
    padding: 0 50px;
    float: left;
    list-style-type: none;
}
li {
    margin: 20px 0;
}
li span {
    margin-inline-start: 5px;
}
a {
    text-decoration: none;
    color: #2c2c2c;
    font-size: 20px;
}
</style>