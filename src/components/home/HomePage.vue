<template>
    <div class="bg-indigo-500/10 h-[100vh]">
        <div class="flex gap-1">
            <div class="relative bg-white/60 shadow-lg h-[100vh] w-1/4">
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
            <div class="bg-white/60 shadow-lg h-[100vh] w-1/3">
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
            username: '',
        }
    },
    async mounted(){
        // await this.$store.commit('createUserDetails',JSON.parse(localStorage.getItem("userDetails")))
        this.username = this.$store.state.userDetails[0]['username']
        // await this.$router.push('/home/birthdaylists');
    }
}
</script>
<style>

</style>
