<template>
    <div class="bg-indigo-500/10 h-[100vh]">
        <div class="flex gap-1">
            <div class="relative bg-white/60 shadow-lg h-[100vh] w-1/5">
                <SideBar />
            </div>
            <div class="p-2 w-full">
                <div>
                    <div class="h-[50px]">
                        <h4 
                            class="font-bold text-lg text-slate-600">
                            Good Morning, 
                            <span class="capitalize"> {{ username }} </span>
                        </h4>
                    </div>
                    <div class="pt-4 overflow-auto" style="max-height: calc(100vh - 70px)">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
            <div class="bg-white/60 shadow-lg h-[100vh] w-3/12">
                <RightSideBar />
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from "../sidebar/sideBar.vue"
import RightSideBar from "../sidebar/RightSideBar.vue"
export default{
    components:{
        SideBar,
        RightSideBar
    },
    data(){
        return{
            username: JSON.parse(localStorage.getItem("userDetails"))[0]["username"],
        }
    },
    mounted(){
        this.$router.push('/home/birthdaylists');
    }
}
</script>
<style>

</style>
