<template>
    <div class="home-container">
        <div class="home-content">
            <button @click="changeLang">{{ lang === 'english' ? 'ENGLISH' : 'ESPAÑOL' }}</button>
            <h1>Javier Gutiérrez</h1>
            <div class="line"></div>
            <span>{{ lang === 'english' ? 'Web Developer' : 'Desarrollador Web' }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    props: {
        lang: String,
        changeLang: Function
    }
}
</script>

<style>
@media only screen and (max-width: 599px){
    .home-container {
        margin-top: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
}
@media only screen and (min-width: 600px) {
    .home-container {
        margin-top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
}
.home-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.home-content h1 {
    font-size: 72px;
    font-weight: 300;
    margin: 0;
    /* background: -webkit-linear-gradient(#9c27b0, #03a9f4);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}
@media only screen and (max-width: 599px){
    .home-content h1 {
        font-size: 32px;
        font-weight: 300px;
        margin: 0;
    }
}
.home-content span {
    font-size: 40px;
}
@media only screen and (max-width: 599px){
    .home-content span {
        font-size: 20px;
    }
}
.home-content .line {
    height: 1px;
    margin: 5px 0;
    background: #000;
    width: 62%;
}
.home-content button {
    top: 10px;
    right: 10px;
    position: fixed;
    background: transparent;
    color: #2196f3;
    border-width: 1px;
    border-color: #2196f3;
    border-radius: 2px;
    padding: 5px 15px;
    font-size: 20px;
    margin: 0px;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
}
.home-content button:active,
.home-content button:hover {
    color: #fff;
    background: #2196f3;
}
@media only screen and (max-width: 1200px) {
    .home-content button {
        top: 10px;
        right: 10px;
        padding: 5px 15px;
        font-size: 15px;
        margin: 0px;
        /* transition: all 0.2s ease; */
    }
    .home-content button:active,
    .home-content button:hover {
        color: #2196f3;
        background: transparent;
    }
}
/* Vue transtion effects */
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>