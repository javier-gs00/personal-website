<template>
    <div class="home-container">
        <div class="home-content">
            <h1>Javier Gutiérrez</h1>
            <span>Web Developer</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            show: true
        }
    }
}
</script>

<style>
@media only screen and (min-width: 600px) {
    .home-container {
        margin-top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
}
@media only screen and (max-width: 599px){
    .home-container {
        display: flex;
        flex-direction: column;
        align-items: center;
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
/* Vue transtion effects */
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>