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
                    titleEN: '01. Pets Bazaar',
                    titleES: '01. Pets Bazaar',
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
                    titleEN: '00. My Personal Website',
                    titleES: '00. Mi Sitio Personal',
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

<style lang="less">
@import (reference) '../assets/style/style.less';

.work-container {
    .for-phone-only({
        margin: 10px 10px 65px 10px;
        overflow-y: hidden;
    });
    // .for-tablet-portrait-up({
    //     margin: 150px 50px;
    // });
    // .for-tablet-landscape-up({
    //     margin: 250px 150px;
    // });
    .for-desktop-up({
        margin: 30px auto;
    });    
}
.work-container .project {
    // background: @primary;
    padding: 10px;
    margin: 0 auto 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
    background: @accent;
    border-radius: 2px;

    .for-phone-only({
        margin: 0 0 10px 0;
    });

    .for-desktop-up({
        width: 1000px;
    });
}
.work-container h1 {
    margin: 20px 0;
    font-weight: 300;
    color: @primary;

    .for-phone-only({
        margin: 0;
        font-weight: 300;
    });
}
.work-container p {
    margin-bottom: 0;
    color: @primary;
}
.work-container a {
    text-decoration: underline;
    color: @primary-light;
}
.technologies {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 10px 0 5px 0;

    .for-phone-only({
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 10px 0 5px 0;
    });
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

    .for-phone-only({
        display: none;
    });
}
.express {
    font: 25px "Helvetica Neue","Open Sans",sans-serif;
    font-weight: 100;
    background: #fff;
    color: rgb(80, 80, 80);
    border-radius: 2px;
    padding: 0 5px;
}
.nodejs {
    /* https://nodejs.org/static/documents/foundation-visual-guidelines.pdf */
    /* color: #026e00; */
    color: #339933;
}
span.vue img {
    height: 48px;
}
</style>