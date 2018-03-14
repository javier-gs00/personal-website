<template>
    <div class="about-container">
        <div class="about">
            <div class="about-line"></div>
            <h1>{{ lang === 'english' ? 'A little bit about me...' : 'Acerca de mí...' }}</h1>
            <p>{{ lang === 'english' 
                ? 'I am a web developer and industrial engineer from Santigo, Chile.'
                : 'Soy un desarrollador web e ingeniero industrial ubicado en Santiago de Chile.' }}</p>
            <p>{{ lang === 'english' 
                ? "I love technology, learning about new things and optimizing processes. Having taken part in multiple technology projects, I enjoy using my skills to create useful and fast websites and applications."
                : 'Me encanta la tecnología, aprender sobre nuevas cosas y optimizar procesos. Habiendo participado en distintos proyectos tecnológicos, uso mis habilidades para crear sitios webs y apliciones rápidas y útiles.' }}</p>
        </div>
        <div class="about-img"></div>
    </div>
</template>

<script>
export default {
    name: "about",
    props: {
        lang: String
    }
}
</script>

<style lang="less">
@import (reference) '../assets/style/style.less';

.about-container {
    background: @accent;
    .for-phone-only({
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
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
.about {
    background: @accent;
    padding: 10px;
    .for-phone-only({
        padding: 10px 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    });
    .for-tablet-portrait-only({
        margin: 10px 100px 100px;
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
    .for-phone-and-tablet-portrait({ font-size: 24px; });
}
.about .about-line {
    background: @primary;
    height: 2px;
    width: 100px;
    margin-top: 10px;
}
.about p {
    color: @primary;
    .for-phone-and-tablet-portrait({ font-size: 15px; });
}
.about a {
    color: @primary-light;
    cursor: pointer;
    text-decoration: underline;
    .for-phone-and-tablet-portrait({ font-size: 15px; });
}
.about-img {
    background-size: cover;
    background-image: url('../assets/img/about-mobile.jpg');
    .for-phone-only({
        width: 100%;
        height: 200px;
    });
    .for-tablet-portrait-only({
        width: 100%;
        height: 500px;
    });
    .for-tablet-landscape-up({
        margin: 10px 50px 10px 0;
        padding: 10px;
        width: 400px;
        height: 400px;
        background-image: url('../assets/img/about.jpg');
    });
    .for-desktop-up({
        margin: 10px 100px 10px 0;
    }) 
}
</style>