<template>
    <div class="about-container">
        <div class="about">
            <div class="about-line"></div>
            <h1>{{ lang === 'english' ? 'A little bit about me...' : 'Un poco acerca de mí...'}}</h1>
            <p>{{ lang === 'english' 
                ? 'I am a web developer with a drive for creating applications that provide value to people.'
                : 'Soy un desarrollador web que posee una gran motivación para la creación de aplicaciones que provean valor para las personas.'}}</p>
            <p>{{ lang === 'english' 
                ? 'To achieve this, a lot of my time is spent learning about new methodologies and technologies that would provide the end user a pleasant experience.'
                : 'Para poder cumplir con esto, dedico gran parte de mi tiempo aprendiendo sobre nuevas metodologias y tecnologias que puedan proveer al usuario una experiencia agradable' }}</p>
            <p>{{lang === 'english' 
                ? 'Want to know the specifics? Check out my work history on ' 
                : '¿Me quieres conocer más en detalle? Puedes revisar mi historia en ' }}
                <a href="https://www.linkedin.com/in/javier-gutierrez-sepulveda-66bb9835/" target="blank">LinkedIn</a>
                 <a href="https://www.linkedin.com/in/javier-gutierrez-sepulveda-66bb9835/" target="blank"><font-awesome-icon :icon="['fas', 'external-link-alt']" size="xs"/></a>
            </p>
        </div>
        <div class="about-img"></div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
    name: "about",
    props: {
        lang: String
    },
    components: {
        FontAwesomeIcon
    }
}
</script>

<style lang="less">
@import (reference) '../assets/style/style.less';

.about-container {
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
        // width: 1200px;
        width: 100%;
        // height: 600px;
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
.about {
    background: @accent;
    padding: 10px;

    .for-phone-only({
        padding: 10px 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    });
    .for-tablet-portrait-up({
        margin: 10px 100px 100px;
        // display: flex;
        // flex-direction: column;
        // justify-content: center;
    });
    .for-tablet-landscape-up({
        margin: 10px 0 10px 50px;
        padding: 10px;
        width: 400px;
        height: 400px;
    });
    .for-desktop-up({
        margin: 10px 0 10px 100px;
    });
}
.about h1 {
    margin: 20px 0;
    color: @primary;

    .for-phone-and-tablet-portrait({
        font-size: 24px;
    });
}
.about .about-line {
    background: @primary;
    height: 2px;
    width: 100px;
    margin-top: 10px;
}
.about p {
    color: @primary;

    .for-phone-and-tablet-portrait({
        font-size: 15px;
    });
}
.about a {
    color: @primary-light;
    cursor: pointer;
    text-decoration: underline;

    .for-phone-and-tablet-portrait({
        font-size: 15px;
    });
}
.about-img {
    .for-phone-only({
        width: 100%;
        height: 200px;
        background-image: url('../assets/img/pexels-photo.jpg');
        background-size: cover;  
    });
    .for-tablet-portrait-up({
        width: 100%;
        height: 400px;
        background-image: url('../assets/img/pexels-photo.jpg');
        background-size: cover;        
    });
    .for-tablet-landscape-up({
        margin: 10px 50px 10px 0;
        padding: 10px;
        width: 400px;
        height: 400px;
        // background-image: url('../assets/img/pexels-photo.jpg');
    });
    .for-desktop-up({
        margin: 10px 100px 10px 0;
    }) 
}
</style>