<template>
    <div class="contact-container">
        <div class="contact-card">
            <div class="contact-line"></div>
            <h1>{{ lang === 'english' ? 'Want to get in touch?' : 'Estemos en contacto'}}</h1>
            <p>{{ lang === 'english' 
                ? 'Just send me a message in any of my social media accounts and I will get back to you.'
                : 'Envíame un mensaje en cualquiera de mis redes sociales y respondere tan pronto como pueda'}}</p>
            <div v-for="contact in contacts" :key="contact.id" class="social-media-contact">
                <span :class="contact.class"><font-awesome-icon :icon='["fab", contact.logo]'/></span>
                <span><a :href="contact.link" class="contact-text" target="blank">{{ contact.text }}</a>
                        <a :href="contact.link" target="blank"><font-awesome-icon :icon="['fas', 'external-link-alt']" size="xs"/></a></span>
            </div>
            <!-- <div class="social-media-contact">
                <span><font-awesome-icon :icon='["fab", "github"]'/></span>
                <span>In Github as javier-gs00</span>
                <span><a href="https://github.com/javier-gs00" target="blank"><font-awesome-icon :icon='["fas", "external-link-alt"]' size="xs"/></a></span>
            </div>
            <div class="social-media-contact">
                <span><font-awesome-icon :icon='["fab", "codepen"]'/></span>
                <span>In CODEPEN as javier-gs00</span>
                <span><a href="https://codepen.io/javier-gs00/" target="blank"><font-awesome-icon :icon='["fas", "external-link-alt"]' size="xs"/></a></span>
            </div>
            <div class="social-media-contact">
                <span class="linkedin"><font-awesome-icon :icon='["fab", "linkedin"]'/></span>
                <span>In LinkedIn as Javier Gutiérrez</span>
                <span><a href="https://www.linkedin.com/in/javier-gutierrez-sepulveda-66bb9835/" target="blank"><font-awesome-icon :icon='["fas", "external-link-alt"]' size="xs"/></a></span>
            </div> -->
        </div>
        <div class="contact-img"></div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// import brands from '@fortawesome/fontawesome-free-brands'
// import { linkedin, github, codepen } from '@fortawesome/fontawesome-free-brands'

export default {
    name: "contact",
    props: {
        lang: String
    },
    
    data() {
        return {
            contacts: [
                {
                    id: 1,
                    logo: 'github',
                    text: 'Github',
                    link: "https://github.com/javier-gs00"
                },
                {
                    id: 2,
                    logo: 'codepen',
                    text: 'CODEPEN',
                    link: "https://codepen.io/javier-gs00/"
                },
                {
                    id: 3,
                    logo: 'linkedin-in',
                    text: 'LinkedIn',
                    link: "https://www.linkedin.com/in/javier-gutierrez-sepulveda-66bb9835/",
                    class: 'linkedin'
                },
            ]
        }
    },

    components: {
        FontAwesomeIcon
    }
}
</script>

<style lang="less">
@import (reference) '../assets/style/style.less';

.contact-container {
    background: @accent;

    .for-phone-only({
        // margin-top: 60px;
        // width: 100%;
        // display: flex;
        // flex-direction: column-reverse;
        // justify-content: center;
    });
    .for-phone-and-tablet-portrait({
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
    });
    .for-tablet-landscape-up({
        margin: 20px 0px;
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    });
    .for-desktop-up({
        margin: 30px 40px;
    });
    .for-big-desktop-up({
        margin: 50px 50px;
    });
}
.contact-card {
    padding: 10px;

    .for-phone-only({
        // padding: 10px 15px;
        // display: flex;
        // flex-direction: column;
        // justify-content: center;
    });
    .for-phone-and-tablet-portrait({
        padding: 10px 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    });    
    .for-tablet-landscape-up({
        margin: 10px 0 10px 50px;
        width: 400px;
        height: 400px;
    });
    .for-desktop-up({
        margin: 10px 0 10px 100px;
    });    
}
.contact-card .contact-line {
    background: @primary;
    height: 2px;
    width: 100px;
    margin-top: 10px;
}
.contact-card h1 {
    color: @primary;

    .for-phone-and-tablet-portrait({
        font-size: 24px;
    });
}
.contact-card p {
    color: @primary;

    .for-phone-and-tablet-portrait({
        font-size: 15px;
    });
}
.contact-img {
    .for-phone-and-tablet-portrait({
        width: 100%;
        height: 200px;
        background-image: url('../assets/img/pexels-photo.jpg');
        background-size: cover;
    });
    .for-tablet-landscape-up({
        margin: 10px 50px 10px 0;
        padding: 10px;
        width: 400px;
        height: 400px;
        background-image: url('../assets/img/pexels-photo.jpg');
    });
    .for-desktop-up({
        margin: 10px 100px 10px 0;
    });
}
.social-media-contact {
    display: flex;
}
.social-media-contact span {
    color: @primary;
    margin: 10px 5px;

    .for-phone-and-tablet-portrait({
        font-size: 15px;
    });
}
.social-media-contact a {
    color: @primary;

    .for-phone-and-tablet-portrait({
        font-size: 15px;
    });
}
.linkedin {
    // color: #0084bf;
    color: #fff;
    // background: #0084bf;
    // padding: 1px 3px;
    // border-radius: 2px;
    // height: 20px;
}
</style>