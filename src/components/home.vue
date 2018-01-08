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
.home-container {
    margin-top: 0;
    /* background: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
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
.home-content span {
    font-size: 32px;
}
/* Vue transtion effects */
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>