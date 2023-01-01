<template>
    <div class='footer'>
        <h1>
            ElectricEdge
        </h1>
        <h2>
            Terms and Conditions  <br>
            Privacy Policy  <br>
            Copyright © 2022
        </h2>
    </div>
</template>


<script>

    export default {
        name: 'AppFooter',
    }

</script>
  
<style scoped>

    .footer{
        background-color: #ffffff;
        width: 150rem;
        height: 7rem;
        border-top: 1px solid rgba(0, 0, 0, 0.301);
        background: linear-gradient(180deg, #090724 30.21%, #002B6C 100%);
    }

    h1{
        color: #FFFFFF;
        text-align: center;
        font-size: 1.55rem;
        padding-top: 1rem;
        font-style: normal;
        font-weight: 900;
        line-height: 2rem;
    }

    h2{
        text-align: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #FFFFFF;
    }


</style>

