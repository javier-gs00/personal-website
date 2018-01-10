<template>
    <div class="about-container">
        <div class="about">
            <h1>A little bit about me...</h1>
            <div class="line"></div>
            <!-- <p>{{ langEn ? 'true' : 'false' }}</p><button @click="changeLang">Swap</button> -->
            <p>I am a web developer with a drive for creating applications that provide value to people.</p>
            <p>To achieve this, a lot of my time is spent learning about new methodologies and technologies that would provide the end user a pleasant experience.</p>
            <p>Want to know the specifics? Check out my work history on 
                <a href="https://www.linkedin.com/in/javier-gutierrez-sepulveda-66bb9835/" target="blank">LinkedIn</a>
                 <a href="https://www.linkedin.com/in/javier-gutierrez-sepulveda-66bb9835/" target="blank"><font-awesome-icon :icon='["fas", "external-link-alt"]' size="xs"/></a>
            </p>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
    name: "about",
    props: {
        lang: Boolean
    },
    data() {
        return {
            langEn: true
        }
    },
    computed: {
        logEn: function() {
            return console.log(this.langEn)
        }
    },
    methods: {
        changeLang: function() {
            console.log(this.lang)
            return this.langEn = !this.langEn
        }
    },
    components: {
        FontAwesomeIcon
    }
}
</script>

<style>
@media only screen and (max-width: 599px) {
    .about-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
@media only screen and (min-width: 600px) {
    .about-container {
        margin: 250px 50px;
    }
}
@media only screen and (min-width: 900px) {
    .about-container {
        margin: 250px 150px;
    }
}
@media only screen and (min-width: 1200px) {
    .about-container {
        margin: 250px 150px;
    }
}
@media only screen and (max-width: 599px) {
    .about {
        margin: 10px;
        padding: auto 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
.about {
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .3);
    padding: 10px;
}
.about h1 {
    margin: 20px 0;
}
@media only screen and (max-width: 599px) {
    .about h1 {
        margin: 0;
    }
}
.about a {
    cursor: pointer;
    text-decoration: underline;
}
</style>