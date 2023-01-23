<template>
    <div class="width-container">
    <div class='charger-card'>
        <img :src="require(`../assets/images/${chargerImage}`)" />
        <p class="blue-highlight">{{chargerCity}}</p>
        <p class="faded-blk">{{chargerCategory}}</p>
        <p class="faded-blk">{{chargerPrice}}</p>
    </div>
    </div>
</template>

<script>
export default {
  name: "ChargerCard",
  props: {
    chargerImage: {
        type: String,
        required: true
    },
    chargerCity: {
        type: String,
        required: true
    },
    chargerCategory: {
        type: String,
        required: true
    },
    chargerPrice: {
        type: String,
        required: true
    }
  }
};
</script>

<style scoped>

.width-container{
  margin: 15px;
  display: flex;
  justify-content: center;
  
}



.blue-highlight{ 
    color: #589BFF;
    font-weight: bold;
}

.faded-blk{
   color:#737373
}

</style>


