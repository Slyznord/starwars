<template>
    <div class="loader">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-4"></div>
        <div class="circle circle-5"></div>
    </div>
</template>

<style lang="scss">  
    $color: #926def, #8c6ced, #876beb, #6565dd, #5f64db;
    // $color: #49b8e5, #1e98d4, #2a92d0, #3a88c8, #507cbe; 

    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0, .8);
        z-index: 10;
    }

    $circle-size: 20px;
    $circle-margin: 7px; 

    .circle {
        width: $circle-size;
        height: $circle-size;
        border-radius: 50%;
        margin: $circle-margin;
        display: flex;
        justify-content: center;
        align-items: center;

        &:before {
            content: "";
            width: $circle-size;
            height: $circle-size;
            border-radius: 50%;
            opacity: 0.7;
            animation: scale 2s infinite 
            cubic-bezier(0, 0, 0.49, 1.02);
        }
    }

    @for $i from 1 through 5 {
        .circle-#{$i} {
            background-color: nth($color, $i);
            
            &:before {
                background-color: nth($color, $i);
                animation-delay: 200ms * $i;
            }
        }
    }

    @keyframes scale {
        0% {
            transform: scale(1);
        }
        50%, 75% {
            transform: scale(2.5);
        }
        78%, 100% {
            opacity: 0;
        }
    }
</style>