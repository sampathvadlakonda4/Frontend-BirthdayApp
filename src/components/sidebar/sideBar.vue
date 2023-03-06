<template>
    <div>
       <h3 style="text-shadow:rgb(179 179 179) 0.5px 0.5px 1px" 
        class="p-2 pl-1 text-indigo-500 font-bold text-lg text-center">
            Sams <i class="px-2 fa-solid fa-cake-candles"></i> World
        </h3>

        <div class="pt-8 flex flex-col gap-6">
            <router-link
                class="transition duration-200 font-semibold h-[20px] text-sm"
                :class="route == '/home/birthdaylists' ? 'text-orange-500' : 'text-slate-500'"
                to="/home/birthdaylists">
                <div class="relative flex pl-6 items-center">
                    <span>
                        <i class="fa-solid fa-rectangle-list"></i>
                        <span class="pl-3">Birthday lists</span>
                    </span>
                    <span v-if="route == '/home/birthdaylists'" class="absolute right-0 h-[20px] w-[4px] rounded-l-lg bg-orange-500"></span>
                </div>
            </router-link>
            <router-link
                class="transition duration-200 font-semibold h-[20px] text-sm"
                :class="route == '/home/addbirthday' ? 'text-orange-500' : 'text-slate-500'"
                to="/home/addbirthday">
                <div class="relative flex pl-6 items-center">
                    <span>
                        <i class="fa-solid fa-folder-plus"></i>
                        <span class="pl-3">Add Birthday</span>
                    </span>
                    <span v-if="route == '/home/addbirthday'" class="absolute right-0 h-[20px] w-[4px] rounded-l-lg bg-orange-500"></span>
                </div>
            </router-link>
        </div>
        <div class="absolute w-[110%] -ml-2 bottom-[0px] top-auto">
            <img src="../../assets/images/cakepic.png" />
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                route: this.$router.currentRoute._value.fullPath
            }
        },
        methods:{
            // assignRoute(){
            //     this.route = this.$router.currentRoute._value.fullPath;
            // }
        },
        watch:{
            $route(to){
                this.route = to.fullPath;
            }
        }
    }
</script>
<style>

</style>