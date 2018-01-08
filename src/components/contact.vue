<template>
    <div class="contact-container">
        <div class="contact-card">
            <h1>Want to get in touch?</h1>
            <p>Just send me a message in any of my social media accounts!</p>
            <div class="social-media-contact">
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
                <span>In Linkedin as Javier Gutiérrez</span>
                <span><a href="https://www.linkedin.com/in/javier-gutierrez-sepulveda-66bb9835/" target="blank"><font-awesome-icon :icon='["fas", "external-link-alt"]' size="xs"/></a></span>
            </div>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

export default {
    name: "contact",

    components: {
        FontAwesomeIcon
    }
}
</script>

<style>
.contact-container {
    display: flex;
    align-items: center;
    justify-content: center;
}
.contact-card {
    margin: 150px 150px;
    padding: 20px 15px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .3);
}
.contact-card h1 {
    margin: 0;
    font-size: 40px;
}
.contact-card p {
    font-size: 20px;
}
.social-media-contact {
    display: flex;
    align-items: center;
}
.social-media-contact span {
    margin: 10px 5px;
    font-size: 20px;
}
.linkedin {
    color: #0084bf;
}
</style>