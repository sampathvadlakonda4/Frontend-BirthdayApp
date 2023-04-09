<template>
    <div class="p-3">
       <div class="pb-3 flex justify-end">
            <div class="active:bg-red-500/20 bg-indigo-500/20 p-2 py-0.5 rounded">
                <button 
                 class="text-lg text-indigo-500 focus:outline-none active:text-red-500"
                 @click="logout">
                     <i class="fa-solid fa-power-off"></i>
                </button>
            </div>
       </div> 
       <div class="pt-4 w-full flex flex-col">
            <div v-if="profilepic" class="mx-auto">
                <img :src="profilepic" class="object-contain w-[103px] h-[103px] border border-slate-300 rounded-full bg-indigo-500/[0.12]"/>
            </div>
            <div v-if="!profilepic" class="mx-auto p-5 px-6 text-indigo-500/40 border border-slate-300 rounded-full text-6xl bg-indigo-500/[0.12]">
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="text-center pt-2">
                <p class="text-slate-600 text-lg font-bold capitalize">{{ username }}</p>
                <p class="text-indigo-600 text-sm"> 
                    <i class="fa-solid fa-location-dot"></i> 
                    <span class="font-bold pl-1">{{ country}}</span>
                </p>
            </div>
            <div class="flex items-center pt-5">
                <div class="rounded-md bg-orange-600/25 w-[30px] h-[30px]  flex justify-center items-center px-2 py-0.5">
                   <span class="text-orange-600 text-sm"> <i class="fa-solid fa-envelope"></i> </span>
                </div>
                <div style="width: calc(100% - 30px);font-size: 14px;"  class="pl-2 -mt-1 break-all text-slate-500 font-bold">
                    {{ email }}
                </div>
            </div>
            <div class="flex items-center pt-5">
                <div class="rounded-md bg-indigo-600/25 w-[30px] h-[30px]  flex justify-center items-center px-2 py-0.5">
                   <span class="text-indigo-600 text-sm"> <i class="fa-solid fa-mobile-screen"></i> </span>
                </div>
                <div style="width: calc(100% - 30px);font-size: 14px;"  class="pl-2 -mt-1 break-all text-slate-500 font-bold">
                    {{ phonenumber }}
                </div>
            </div>
            <div class="flex items-center pt-5">
                <div class="rounded-md bg-emerald-600/25 w-[30px] h-[30px]  flex justify-center items-center px-2 py-0.5">
                   <span class="text-emerald-600 text-sm"> <i class="fa-solid fa-location-dot"></i> </span>
                </div>
                <div style="width: calc(100% - 30px);font-size: 14px;" class="pl-2 -mt-1 break-all text-slate-500 break-word font-bold">
                    {{ address }}
                </div>
            </div>
            <div class="flex items-center pt-5">
                <div class="rounded-md bg-yellow-600/25 w-[30px] h-[30px]  flex justify-center items-center px-2 py-0.5">
                   <span class="text-yellow-600 text-sm"> <i class="fa-solid fa-location-arrow"></i> </span>
                </div>
                <div style="width: calc(100% - 30px);font-size: 14px;" class="pl-2 -mt-1 break-all text-slate-500 break-word font-bold">
                    {{ pincode}}
                </div>
            </div>
       </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                // username: this.$store.state.userDetails[0].username,
                // email: this.$store.state.userDetails[0].email,
                // phonenumber: this.$store.state.userDetails[0].phonenumber,
                // address: this.$store.state.userDetails[0].address,
                // pincode: this.$store.state.userDetails[0].pincode,
                // profilepic: JSON.parse(this.$store.state.userDetails[0].profilepic),
                // country: this.$store.state.userDetails[0].country,
                // gender: this.$store.state.userDetails[0].gender,
            }
        },
        methods:{
            logout(){
                localStorage.clear()
                this.$router.push("/")
            },
            get_profilepic(){
                if(this.$store.state.userDetails[0].profilepic){
                    let file = this.$store.state.userDetails[0].profilepic?.data
                    var byteCharacters = atob(file);
                    var byteNumbers = new Array(byteCharacters.length);
                    for (var i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    var byteArray = new Uint8Array(byteNumbers);
                    var input = new Blob([byteArray], {
                        type: "image/png",
                    });
                    return URL.createObjectURL(input);
                }
                else{
                    return null
                }
            }
        },
        computed:{
            username(){ return this.$store.state.userDetails[0].username},
            email(){ return this.$store.state.userDetails[0].email},
            phonenumber(){ return this.$store.state.userDetails[0].phonenumber},
            address(){ return this.$store.state.userDetails[0].address},
            pincode(){ return this.$store.state.userDetails[0].pincode},
            profilepic(){ return this.get_profilepic() },
            country(){ return this.$store.state.userDetails[0].country},
            gender(){ return this.$store.state.userDetails[0].gender},
        }
    }
</script>
<style>

</style>