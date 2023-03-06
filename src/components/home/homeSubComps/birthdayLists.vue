<template>
    <div class="flex flex-wrap">
       <div v-for="(each,index) in birthdayLists" :key="index"
            class="p-2 w-1/3">
            <!-- <div class="rounded px-4 py-3 shadow-lg border border-slate-200 bg-white/60"> -->
              <div class="rounded px-4 py-3 shadow border border-slate-200 bg-indigo-500/[0.12]">
                <h3 class="text-indigo-500 text-md font-semibold">{{each.name}}</h3>
                <p class="-mt-1 text-sm text-slate-500">{{each.relation}}</p>
                
                <!-- email -->
                <div class="pt-1 flex items-center" :title="each.email">
                    <span class="text-slate-500">
                        <i class="fa-solid fa-envelope"></i>
                    </span>
                    <span class="pl-2 text-sm text-ellipsis overflow-hidden whitespace-nowrap text-slate-800">
                        {{ each.email }}
                    </span>
    
                </div>

                <!-- phonenumber -->
                <div class="pt-1 flex items-center">
                    <span class="text-slate-500">
                        <i class="fa-solid fa-mobile-screen"></i>
                    </span>
                    <span class="pl-2 text-sm text-slate-800">
                        {{ each.phonenumber }}
                    </span>
    
                </div>

                <!-- address -->
                <div class="pt-1 flex items-center" :title="each.address">
                    <span class="text-slate-500">
                        <i class="fa-solid fa-location-dot"></i>
                    </span>
                    <span class="pl-2 text-sm text-ellipsis overflow-hidden whitespace-nowrap text-slate-800">
                        {{ each.address }}
                    </span>
    
                </div>

                <!-- dateofbirth -->
                <div class="pt-1 flex items-center">
                    <span class="text-slate-500">
                        <i class="fa-solid fa-cake-candles"></i>
                    </span>
                    <span class="pl-2 text-sm text-wrap text-slate-800">
                        {{ each.dateofbirth }}
                    </span>
    
                </div>
            </div>
       </div>
    </div>
</template>
<script>
import axios from "axios"
import backendPath from "../../../paths/backendPaths"
    export default{
        data(){
            return{
                birthdayLists: []
            }
        },
        methods:{


        },
        async mounted(){
            const loggedIn_user = JSON.parse(localStorage.getItem('userDetails'))
            let path = backendPath.expressPath+"/birthday/list/search"
            try{
                let res = await axios.post(path,{loginuserid: loggedIn_user[0]["_id"]})
                if(res.data != "" && res.status == "200"){
                    this.birthdayLists = res.data;
                    this.$toast.clear()
                    this.$toast.success("Data fetched Successfully",{duration: 2000, position: "top", pauseOnHover: true})
                }
                else{
                    this.$toast.clear()
                    this.$toast.error("No data found",{duration: 2000, position: "top", pauseOnHover: true})
                }
            }
            catch(err){
                this.$toast.clear()
                this.$toast.error(err,{duration: 2000, position: "top", pauseOnHover: true})
            }
        }
    }
</script>
<style>

</style>