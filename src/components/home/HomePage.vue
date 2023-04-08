<template>
    <div class="bg-indigo-500/10 h-[100vh]">
        <button class="pl-2 absolute top-[9px] text-xl lg:hidden z-[11] text-indigo-500"
            @click="showMenu">
            <i class="fa-solid fa-bars-staggered"></i>
        </button>
        <button class="pl-2 absolute top-[9px] right-[10px] text-2xl lg:hidden z-[1] text-indigo-500"
            @click="showProfile">
            <i class="fa-solid fa-circle-user"></i>
        </button>
        <button ref="hideProfile" class="hideprofile hidden pl-2 absolute top-[11px] lg:hidden z-[1111] text-red-500 bg-red-500/20 p-2 py-0.5 rounded ml-3"
            @click="hideProfile">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="flex gap-1">
            <div ref="sideBar" class="side_bar transition duration-300 relative bg-white/60 shadow-lg h-[100vh] w-1/4"
                @click="toHideMenu_on_outclick">
                <SideBar class="hidden lg:block"/>
                <SideBar class="sidebarComponent lg:hidden" @hideMenu="showMenu"/>
            </div>
            <div class="p-2 w-full pt-11 lg:pt-2">
                <div>
                    <div class="h-[50px]">
                        <h4 
                            class="font-bold text-lg lg:text-slate-600 text-orange-500">
                            Good Morning, 
                            <span class="capitalize"> {{ username }} </span>
                        </h4>
                    </div>
                    <div class="pt-1 lg:pt-4 overflow-auto" style="max-height: calc(100vh - 70px)">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
            <div ref="profileBar" class="profile_bar bg-white/60 shadow-lg h-[100vh] w-1/3">
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
    methods:{
        showMenu(){
            if(this.$refs.sideBar.style.display == 'block'){
                this.$refs.sideBar.style.display = 'none'
            }
            else{
                this.$refs.sideBar.style.display = 'block'
            }
        },
        showProfile(){
            this.$refs.profileBar.style.display = 'block'
            this.$refs.hideProfile.style.display = 'block'
        },
        hideProfile(){
            this.$refs.profileBar.style.display = 'none'
            this.$refs.hideProfile.style.display = 'none'
        },
        toHideMenu_on_outclick(event){
            if(event.target.closest('.sidebarComponent') === null){
                this.$refs.sideBar.style.display = 'none'
            }
        },
    },
    async beforeMount(){
        await this.$store.commit('createUserDetails',JSON.parse(localStorage.getItem("userDetails")))
    },
    async mounted(){
        // await this.$store.commit('createUserDetails',JSON.parse(localStorage.getItem("userDetails")))
        this.username = this.$store.state.userDetails[0]['username']
        // await this.$router.push('/home/birthdaylists');
    }
}
</script>
<style scoped>
@media (max-width: 1024px){
    .side_bar{
        display: none;
        position: absolute;
        width: 100%;
        z-index: 1;
        background: rgb(0 0 0 / 12%);
        top: 0;
    }
    .side_bar > div{
        width: 50%;
        position: relative;
        height: 100%;
        background: #fff;
    }
    
    /* profile bar styles */
    .profile_bar{
        display: none;
        position: absolute;
        width: 100%;
        z-index: 111;
        background: #fff;
    }
}
@media (min-width: 1024px){
    .profile_bar,.side_bar{
        display: block !important;
    }
}
</style>
