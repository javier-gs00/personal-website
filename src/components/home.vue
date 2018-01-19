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

<style lang="less">
@import (reference) '../assets/style/style.less';

.home-container {
    // .for-phone-only({
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     justify-content: center;
    //     height: 100%;
    //     width: 100%;
    //     background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
    //                     url('../assets/img/santiago_landscape_1920x1080.jpg');
    //     background-size: cover;
    // });
    .for-phone-and-tablet-portrait({
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
                        url('../assets/img/santiago_landscape_1920x1080.jpg');
        background-size: cover;     
    });
    .for-tablet-portrait-up({
        // relative to nav-container height
        margin-top: -60px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0.4)),
                                url('../assets/img/santiago_landscape_1920x1080.jpg');
        background-size: cover; 
        position: fixed;
        z-index: -1;
    });
}
.home-content {
    // .for-phone-only({
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     justify-content: center;        
    // });
    .for-phone-and-tablet-portrait({
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;         
    });
    .for-tablet-portrait-up({
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        position: fixed;
    });
}
.home-content h1 {
    font-size: 72px;
    font-weight: 300;
    margin: 0;

    // .for-phone-only({
    //     font-size: 32px;
    // });
    .for-phone-and-tablet-portrait({
        font-size: 32px;        
    });
    /* background: -webkit-linear-gradient(#9c27b0, #03a9f4);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}
.home-content span {
    font-size: 40px;

    // .for-phone-only({
    //     font-size: 20px;
    // });
    .for-phone-and-tablet-portrait({
        font-size: 20px;        
    });
}
.home-content .line {
    height: 1px;
    margin: 5px 0;
    background: @accent-light;
    width: 62%;
}
.home-content button {
    background: transparent;
    color: @accent;
    // border-width: 1px;
    // border-color: @accent;
    // border-style: solid;
    border: 1px solid @accent;
    border-radius: 2px;
    padding: 5px 15px;
    font-size: 20px;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;

    // .for-phone-only({
    //     position: absolute;
    //     z-index: -1;
    //     bottom: 10px;
    //     font-size: 15px;
    // });
    .for-phone-and-tablet-portrait({
        position: absolute;
        z-index: 0;
        bottom: 10px;
        font-size: 15px;     
    });

    .for-tablet-landscape-up({
        position: absolute;
        // z-index: 3;
        bottom: 10px;
        // right: 10px;
        padding: 5px 15px;
        font-size: 15px;
        margin: 0px;
    });
}
.home-content button:active,
.home-content button:hover {
    color: @accent;
    background: transparent;

    .for-desktop-up({
        color: @primary;
        background: @accent;
    });
}
/* Vue transtion effects */
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>