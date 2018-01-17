<template>
    <div class="contact-container">
        <div class="contact-card">
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
    margin: 30px 0;
    height: 90%;
    display: flex;
    align-items: top;
    justify-content: center;
}
.contact-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
    background: @accent;
    border-radius: 2px;

    .for-phone-only({
        margin: 10px;
        padding: 10px;
    });
    // .for-tablet-portrait-up({
    //     margin: 250px 50px;
    //     padding: 20px 15px;
    //     max-width: 500px;
    // });
    // .for-tablet-landscape-up({
    //     margin: 250px 150px;
    //     padding: 20px 15px;
    //     max-width: 500px;
    // });
    .for-desktop-up({
        // margin: 20px;
        width: 600px;
        height: 30%;
        padding: 20px 15px;
        max-width: 500px;
    });    
}
.contact-card h1 {
    margin: 0;
    color: @primary;

    .for-phone-only({
        margin: 0;
        font-weight: 300;
    });
}
.contact-card p {
    color: @primary;
}
.social-media-contact {
    display: flex;
}
.social-media-contact span {
    color: @primary;
    margin: 10px 5px;
}
.social-media-contact a {
    color: @primary;
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