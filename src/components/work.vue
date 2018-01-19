<template>
    <div class="work-container">
        <button @click="prevActiveProjectId" class="btn-project">&#8249;</button>
        <div class="project">
            <div class="mobile-btns-container">
                <button @click="prevActiveProjectId" class="btn-project-mobile btn-prev">&#8249;</button>
                <button @click="nextActiveProjectId" class="btn-project-mobile btn-next">&#8250;</button>
            </div>
            <div class="project-content">
                <div class="project-line"></div>
                <h1>{{ lang === 'english' ? projects[activeProjectId].titleEN : projects[activeProjectId].titleES }}</h1>
                <p v-for="paragraph in projects[activeProjectId].paragraphs" :key="paragraph.key">
                    {{ lang === 'english' ? paragraph.textEN : paragraph.textES }}
                    <a v-if="paragraph.url" :href="paragraph.url" target="blank">{{lang === 'english' ? 'here' : 'acá'}}</a>
                    <a v-if="paragraph.url" :href="paragraph.url" target="blank"><font-awesome-icon :icon="['fas', 'external-link-alt']" size="xs"/></a>
                </p>
                <!-- <div class="technologies">
                    <span v-for="technology in project.technologiesUsed" :key="technology.key" :class="technology.class">                  
                    <font-awesome-icon v-if="technology.icon" :icon="['fab', technology.icon]" :size="technology.size" />
                    {{ technology.text }}
                    <MongoDbSvg v-if="technology.mongo" />
                    <img v-if="technology.img === 'vue'" src="../assets/logo.png" />
                    </span>
                </div> -->
            </div>
            <div class="project-img" :class="projects[activeProjectId].imageClass"></div>
        </div>
        <button @click="nextActiveProjectId" class="btn-project">&#8250;</button>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import MongoDbSvg from '../assets/mongodb'

export default {
    name: "work",
    props: {
        lang: String
    },
    data() {
        return {
            // Set the first project that will be shown here
            activeProjectId: 0,
            projectQuantity: this.countActiveProjects, 
            projects: [
                {
                    id: 0,
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
                        // {
                        //     key: 2,
                        //     class: 'react react-text',
                        //     text: 'React'
                        // },
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
                    ],
                    imageClass: 'project-pets-img'
                },
                {
                    id: 1,
                    titleEN: '02. My Personal Website',
                    titleES: '02. Mi Sitio Personal',
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
                    ],
                    imageClass: 'personal-website-img'
                }
            ]
        }
    },
    computed: {
        countActiveProjects() {
            return this.projects.length - 1
        }
    },
    methods: {
        nextActiveProjectId() {
            // Check if it's the last project or not
            return this.activeProjectId == this.countActiveProjects 
                ? this.activeProjectId = 0
                : this.activeProjectId++
        },
        prevActiveProjectId() {
            // Check if it's the first project or not
            return this.activeProjectId == 0 
                ? this.activeProjectId = this.countActiveProjects 
                : this.activeProjectId--
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
    background: @accent;
    .for-phone-and-tablet-portrait({
        // margin-top: 60px;
        width: 100%;
        display: flex;
        flex-direction: column;
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
.work-container h1 {
    margin: 20px 0;
    font-weight: 300;
    color: @primary;

    .for-phone-and-tablet-portrait({
        font-size: 24px;
    });
}
.work-container p {
    margin-bottom: 0;
    color: @primary;

    .for-phone-and-tablet-portrait({
        font-size: 15px;
    });
}
.work-container a {
    text-decoration: underline;
    color: @primary-light;

    .for-phone-and-tablet-portrait({
        font-size: 15px;
    });
}
.project {
    .for-phone-and-tablet-portrait({
        // padding: 10px 15px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
    });
    .for-tablet-landscape-up({
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    });
}
.project-content {
    padding: 10px;
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
.project-content .project-line {
    background: @primary;
    height: 2px;
    width: 100px;
    margin-top: 10px;
}
.project-img {
    .for-tablet-landscape-up({
        margin: 10px 50px 10px 0;
        padding: 10px;
        width: 400px;
        height: 400px;
        background-size: cover;
    });
    .for-desktop-up({
        margin: 10px 100px 10px 0;
    });
}
.project-pets-img {
    .for-phone-and-tablet-portrait({
        width: 100%;
        height: 200px;
        background-size: cover;
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                    url('../assets/img/doggy1.jpg');
    });
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                        url('../assets/img/doggy1.jpg');
}
.personal-website-img {
    .for-phone-and-tablet-portrait({
        width: 100%;
        height: 200px;
        background-size: cover;
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                    url('../assets/img/minimalist-desk-setup.jpg');
    });
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                        url('../assets/img/minimalist-desk-setup.jpg');
}
.btn-project {
    background: transparent;
    color: @primary;
    // border-width: 1px;
    border-color: transparent;
    border-style: solid;
    border-radius: 2px;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    .for-phone-and-tablet-portrait({
        display: none;
    });
    .for-tablet-landscape-up({
        font-size: 20px;
        border-width: 0px;
    });
    .for-desktop-up({
        padding: 5px 15px;
        font-size: 20px;
    });
}
.btn-project:hover {
    .for-desktop-up({
        background: @primary;
        color: @accent;
    });
}
.mobile-btns-container {
    padding: 10px 15px;
    display: inline;

    .for-tablet-landscape-up({
        display: none;
    });
}
.mobile-btns-container .btn-project-mobile {
    .for-phone-and-tablet-portrait({
        color: @accent;
        background-color: @primary-dark;
        border: 2px solid @primary-dark;
        font-size: 15px;
        cursor: pointer;
        outline: none;
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
    });
}
.btn-next {
    .for-phone-and-tablet-portrait({
        float: right;
    });
}
.btn-prev {
    .for-phone-and-tablet-portrait({
        float: left;
    });
}
.technologies {
    .for-phone-only({
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 10px 0 5px 0;
    });
    .for-desktop-up({
        margin: 10px 0 10px 0;
        // padding: 10px;
        // width: 400px;
        // height: 400px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
    });
}
.technologies span {
    margin: 5px 10px;
}
span.react {
    color: #61dafb;
    margin-inline-end: 2px;
}
span.react::after {
    margin-inline-start: 2px;
    font-weight: 700;
    content: 'React';
}
// span.react-text {
//     margin-inline-start: 2px;
//     font-weight: 700;

//     .for-phone-only({
//         display: none;
//     });
// }
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