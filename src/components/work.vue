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
            </div>
            <div class="project-img" :class="projects[activeProjectId].imageClass"></div>
        </div>
        <button @click="nextActiveProjectId" class="btn-project">&#8250;</button>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// import MongoDbSvg from '../assets/mongodb'

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
                            key: 0,
                            textEN: 'This website purpose is to help pet owners find and compare the products sold by different pet shops in just one place. They can also look for the locations, contact informaction and much more for each veterinarian clinic and pet shop registered in the website.',
                            textES: 'El propósito de este sitio web es presentar a los dueños de mascotas, en un sólo lugar, los productos vendidos por cada veterinaria y tienda de mascotas. También podrán revisar la ubicación, información de contacto y mucho más de cada una de las tiendas registradas.'
                        },
                        {
                            key: 1,
                            textEN: 'View this website ',
                            textES: 'Ver el sitio web ',
                            url: 'https://project-pets-client.herokuapp.com',
                        },
                        {
                            key: 2,
                            textEN: 'Technologies used: ReactJS, ExpressJS, Nodejs and MongoDB.',
                            textES: 'Tecnologias usadas: ReactJS, ExpressJS, Nodejs and MongoDB.'
                        },
                        {
                            key: 3,
                            textEN: 'Photo: My dog Scotty and inspiration for this app.',
                            textES: 'Foto: My perro Scotty e inspiración para esta app.'
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
                            key: 0,
                            textEN: "This is the first version of my website, which I will be updating constantly. This version was made using VueJS to learn about this new framwork, which so far I really like.",
                            textES: 'Está es la primera versión de mi sitio web, el que estaré actualizando constantemente. Esta versión fue hecha usando VueJS para aprender de esta nueva framework, la que hasta el momento me han gustado bastante.'
                        },
                        {
                            key: 1,
                            textEN: 'In case something caught your eye or just for mere curiosity, the source code can be found on my github account ',
                            textES: 'Si te gustó algo del sitio o sólo por curiosidad, puedes revisar el código fuente en mi cuenta de github ',
                            url: 'https://github.com/javier-gs00/personal-website',
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
        // MongoDbSvg
    }
}
</script>

<style lang="less">
@import (reference) '../assets/style/style.less';

.work-container {
    background: @accent;
    .for-phone-only({
        // margin-top: 60px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    });
    .for-tablet-portrait-only({
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-end;       
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
    .for-phone-and-tablet-portrait({ font-size: 15px; });
    .for-tablet-landscape-up({ font-size: 15px; });
    .for-desktop-up({ font-size: 18px; });
}
.work-container a {
    text-decoration: underline;
    color: @primary-light;
    .for-phone-and-tablet-portrait({ font-size: 15px; });
}
.project {
    .for-phone-and-tablet-portrait({
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
    .for-phone-only({
        padding: 10px 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    });
    .for-tablet-portrait-up({
        margin: 10px 100px 50px;        
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
    background-size: cover;
    background-image: url('../assets/img/project-pets-scotty.jpg');
    .for-phone-and-tablet-portrait({
        width: 100%;
        height: 200px;
    });
    .for-tablet-portrait-only({
        width: 100%;
        height: 400px;   
    });
}
.personal-website-img {
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                        url('../assets/img/my-desk-setup-mobile.jpg');
    .for-phone-only({
        width: 100%;
        height: 200px;
    });
    .for-tablet-portrait-only({
        width: 100%;
        height: 400px;   
    });
    .for-tablet-landscape-up({
        background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                        url('../assets/img/my-desk-setup.jpg');
    });
}
.btn-project {
    background: transparent;
    color: @primary;
    border-color: transparent;
    border-style: solid;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    .for-phone-and-tablet-portrait({ display: none; });
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
    display: inline;
    .for-phone-only({
        padding: 10px 15px;
    });
    .for-tablet-portrait-up({
        padding: 10px 100px 50px;
    });
    .for-tablet-landscape-up({ display: none; });
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
    .for-phone-and-tablet-portrait({ float: right; });
}
.btn-prev {
    .for-phone-and-tablet-portrait({ float: left; });
}
</style>