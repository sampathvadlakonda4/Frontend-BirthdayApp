<template>
    <div>
       <div class="p-3 flex justify-end">
           <button 
            class="text-lg text-slate-600 focus:outline-none active:text-indigo-500"
            @click="logout">
                <i class="fa-solid fa-power-off"></i>
           </button>
       </div> 
    </div>
</template>
<script>
    export default{
        data(){
            return{
    
            }
        },
        methods:{
            logout(){
                localStorage.clear()
                this.$router.push("/")
            }
        }
    }
</script>
<style>

</style>