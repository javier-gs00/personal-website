<template>
    <div class="work-container">
        <div v-for="project in projects" :key="project.id" class="project">
            <h1>{{ lang === 'english' ? project.titleEN : project.titleES }}</h1>
            <p v-for="paragraph in project.paragraphs" :key="paragraph.key">
                {{ lang === 'english' ? paragraph.textEN : paragraph.textES }}
                <a v-if="paragraph.url" :href="paragraph.url" target="blank">{{lang === 'english' ? 'here' : 'acá'}}</a>
                <a v-if="paragraph.url" :href="paragraph.url" target="blank"><font-awesome-icon :icon="['fas', 'external-link-alt']" size="xs"/></a>
            </p>
            <div class="technologies">
                <span v-for="technology in project.technologiesUsed" :key="technology.key" :class="technology.class">                  
                    <font-awesome-icon v-if="technology.icon" :icon="['fab', technology.icon]" :size="technology.size" />
                    {{ technology.text }}
                    <MongoDbSvg v-if="technology.mongo" />
                    <img v-if="technology.img === 'vue'" src="../assets/logo.png" />
                </span>
            </div>
        </div>
        <!-- <div class="project">
            <h1>Project Pets <a href="https://project-pets-client.herokuapp.com" target="blank"><font-awesome-icon :icon='["fas", "external-link-alt"]' size="xs"/></a></h1>
            <p>The focus of this project is to help pet owners find the products that better fit their needs, as well as providing an easier way to locate pet clinics and stores.</p>
            <p>Did I peek your interest? You can check the progress of this project <a href="https://project-pets-client.herokuapp.com" target="blank">here</a> <a href="https://project-pets-client.herokuapp.com" target="blank"><font-awesome-icon :icon='["fas", "external-link-alt"]' size="xs"/></a></p>
            <p>The main technologies used in this project are the following. </p>
            <div class="technologies">
                <span class="react"><font-awesome-icon :icon="['fab', 'react']" size="2x"/></span>
                <span class="react react-text">React</span>
                <span class="express">Express</span>
                <span class="nodejs"><font-awesome-icon :icon="['fab', 'node']" size="2x"/></span>
                <span><MongoDbSvg /></span>
            </div>
        </div>
        <div class="project">
            <h1>This website</h1>
            <p>This website was made using Vue.js.</p>
            <p>You can learn more about this amazing javascript framework from the <a href="https://vuejs.org" target="blank">official website</a> <a href="https://vuejs.org" target="blank"><font-awesome-icon :icon='["fas", "external-link-alt"]' size="xs"/></a></p>
            <p>The main technologies used in this project are the following. </p>
            <div class="technologies">
                <span class="vue"><img src="../assets/logo.png"/></span>
            </div>
        </div> -->
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// import brands from '@fortawesome/fontawesome-free-brands'
import MongoDbSvg from '../assets/mongodb'

export default {
    name: "work",
    props: {
        lang: String
    },
    data() {
        return {
            projects: [
                {
                    id: 1,
                    titleEN: 'Pets Bazaar',
                    titleES: 'Pets Bazaar',
                    paragraphs: [
                        {
                            key: 1,
                            textEN: 'The focus of this project is to help pet owners find the products that better fit their needs, as well as providing an easier way to locate pet clinics and stores.',
                            textES: 'El propósito de este proyecto es ayudar a los dueños de mascotas encontrar los productos de mascotas que mejor se ajusten a su situación, como tambien proveer una forma fácil de encontrar veterinarias y tiendas para mascotas.'
                        },
                        {
                            key: 2,
                            textEN: 'Did I peek your interest? You can check the progress of this project ',
                            textES: '¿Te interesa saber más? Puedes ver el avance de este proyecto ',
                            url: 'https://project-pets-client.herokuapp.com',
                        },
                        {
                            key: 3,
                            textEN: 'Main technologies used...',
                            textES: 'Principales tecnologias usadas...'
                        }
                    ],
                    technologiesUsed: [
                        {
                            key: 1,
                            class: 'react',
                            icon: 'react',
                            size: '2x'
                        },
                        {
                            key: 2,
                            class: 'react react-text',
                            text: 'React'
                        },
                        {
                            key: 3,
                            class: 'express',
                            text: 'Express'
                        },
                        {
                            key: 4,
                            class: 'nodejs',
                            icon: 'node-js',
                            size: '2x'
                        },
                        {
                            key: 5,
                            mongo: true
                        }
                    ]
                },
                {
                    id: 2,
                    titleEN: 'My Personal Website',
                    titleES: 'Mi Sitio Personal',
                        paragraphs: [
                        {
                            key: 1,
                            textEN: "This is my own canvas, where I'll be trying out new things often just for the fun of it. ",
                            textES: 'Este es mi propio lienzo, donde estaré probando nuevas cosas en forma constante sólo porque puedo.'
                        },
                        {
                            key: 2,
                            textEN: 'This website was made using Vue.js. You can learn more about this javascript framerwork from ',
                            textES: 'El sitio fue hecho usando Vue.js. Puedes aprender más sobre este framework para javascript ',
                            url: 'https://vuejs.org',
                        },
                        {
                            key: 3,
                            textEN: 'Main technologies used...',
                            textES: 'Principales tecnologias usadas...'
                        }
                    ],
                    technologiesUsed: [
                        {
                            key: 1,
                            class: 'vue',
                            img: 'vue',
                        }
                    ]
                }
            ]
        }
    },

    components: {
        FontAwesomeIcon,
        MongoDbSvg
    }
}
</script>

<style>
@media only screen and (max-width: 599px) {
    .work-container {
        margin: 10px 10px 65px 10px;
        overflow-y: hidden;
    }
}
@media only screen and (min-width: 600px) {
    .work-container {
        margin: 150px 50px;
    }
}
@media only screen and (min-width: 900px) {
    .work-container {
        margin: 250px 150px;
    }
}
@media only screen and (min-width: 1200px) {
    .work-container {
        margin: 150px 150px;
    }
}
.work-container .project {
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .3);
    padding: 10px;
    margin: 20px 0;
}
@media only screen and (max-width: 599px) {
    .work-container .project {
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .3);
        padding: 10px;
        margin: 0 0 10px 0;
    }
}
.work-container h1 {
    margin: 20px 0;
    font-weight: 300;
}
@media only screen and (max-width: 599px) {
    .work-container h1{
        margin: 0;
        font-weight: 300;
    }
}
.work-container p {
    margin-bottom: 0;
}
.work-container a {
    text-decoration: underline;
}
.technologies {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 10px 0 5px 0;
}
@media only screen and (max-width: 599px) {
    .technologies {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 10px 0 5px 0;
    }
}
.technologies span {
    margin: 5px 10px;
}
span.react {
    color: #61dafb;
    margin-inline-end: 2px;
}
span.react-text {
    margin-inline-start: 2px;
    font-weight: 700;
}
@media only screen and (max-width: 599px) {
    span.react-text  {
        display: none;
    }
}
.express {
    font: 25px "Helvetica Neue","Open Sans",sans-serif;
    font-weight: 100;
    color: rgb(80, 80, 80);
}
.nodejs {
    /* color: #026e00; */
    color: #339933;
}
span.vue img {
    height: 48px;
}
</style>