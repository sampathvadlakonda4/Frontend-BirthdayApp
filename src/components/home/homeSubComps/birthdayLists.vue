<template>
    <div>
        <div v-if="!showEdit_Birthday" class="flex flex-wrap">
            <div v-for="(each,index) in birthdayLists" :key="index"
                 class="p-2 w-1/3">
                 <!-- <div class="rounded px-4 py-3 shadow-lg border border-slate-200 bg-white/60"> -->
                   <div class="relative rounded px-4 py-3 shadow border border-slate-200 bg-indigo-500/[0.12]">
                     <div class="absolute right-3 top-0.5 text-sm flex gap-3 justify-end">
                         <button class="focus:outline-none text-slate-600"
                             @click="editBirthday(each,index)">
                             <i class=" fa-solid fa-pencil"></i>
                         </button>
                         <button class="focus:outline-none text-red-500"
                             @click="deleteBirthday(each,index)">
                             <i class="fa-solid fa-trash"></i>
                         </button>
                     </div>
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
        <div v-if="showEdit_Birthday" class="w-full">
            name, email, phonenumber, address, pincode, relation, dateofbirth, gender , country, profilepic,  loginuserid
            <div class="pt-2">
                <div class="flex flex-col gap-4 mb-5">
                    <div v-if="profilepic && profilepic != 'null'">
                        <img :src="profilepic" class="mr-auto ml-3 object-contain w-[103px] h-[103px] border border-slate-300 rounded-full bg-indigo-500/[0.12]"/>
                    </div>
                    <div v-else class="mr-auto ml-3 p-5 px-6 text-indigo-500/40 border border-slate-300 rounded-full text-6xl bg-indigo-500/[0.12]">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="text-xs">
                        <input class="pl-5 profilepic" type="file" @change="profilePicChanged" />
                    </div>
                </div>
                <form @submit.prevent="updateBirthday" class="px-3 flex gap-4 flex-col">
                    <div class="flex gap-2">
                        <input
                            class="w-full capitalize rounded pl-3 focus:outline-none border h-[40px]"
                            v-model="name" type="text" placeholder="Enter user name" required/>
                        <input
                            class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                            v-model="email" type="email" placeholder="Enter email" required/>
                        <input
                            class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                            v-model="phonenumber" type="tel" minlength="10" maxlength="10" placeholder="Enter phone number" required/>
                    </div>
                    <div class="flex gap-2">
                        <input
                            class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                            v-model="dateofbirth" type="date" required/>    
                        <select v-model="gender" required
                            class="w-full rounded pl-3 focus:outline-none border h-[40px]" placeholder="Select Gender">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                        <input
                            class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                            v-model="country" type="text" placeholder="Enter country name" required/>    
                    </div>
                    <textarea required rows="3"
                        class="w-full rounded pl-3 focus:outline-none border"
                        v-model="address" placeholder="Enter address">
                    </textarea>
                    <div class="flex gap-2">
                        <input
                            class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                            v-model="pincode" type="tel" minlength="6" maxlength="6" placeholder="Enter pin code" required/>
                        <input
                            class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                            v-model="relation" type="text" placeholder="Enter your relation" required/>    
                    </div>
                    <div>
                        <button type="submit" 
                            class="bg-indigo-600 text-white px-6 py-1 rounded shadow-xl drop-shadow focus:outline-none hover:bg-indigo-600/90"
                            >
                            Update
                        </button>
                    </div> 
                </form>
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
                birthdayLists: [],
                showEdit_Birthday: false,
                profilepic: null,
                name: '',
                email: '',
                phonenumber: '',
                dateofbirth: '',
                gender: '',
                country: '',
                address: '',
                pincode: '',
                relation: '',
            }
        },
        methods:{
            editBirthday(obj){
                this.showEdit_Birthday = true;
                this.profilepic = JSON.parse(obj.profilepic)
                this.name = obj.name
                this.email = obj.email
                this.phonenumber = obj.phonenumber
                this.dateofbirth = obj.dateofbirth
                this.gender = obj.gender
                this.country = obj.country
                this.address = obj.country
                this.pincode = obj.pincode
                this.relation = obj.relation
            },
            async updateBirthday(){
                let obj = {
                    profilepic: JSON.stringify(this.profilepic),
                    name: this.name,
                    email: this.email,
                    phonenumber: this.phonenumber,
                    dateofbirth: this.dateofbirth,
                    gender: this.gender,
                    country: this.country,
                    address: this.address,
                    pincode: this.pincode,
                    relation: this.relation,
                    loginuserid: this.$store.state.userDetails[0]["_id"]
                }
                try{
                    let path = backendPath.expressPath+"/birthday/update";
                    let res = await axios.post(path,obj)
                    if(res.status == "200"){
                        this.$toast.success("Updated successfully",{duration: 2000, position: "top", pauseOnHover: true})
                    }
                    else{
                        this.$toast.error("Something went wrong",{duration: 2000, position: "top", pauseOnHover: true})
                    } 
                }
                catch(err){
                    this.$toast.error(err.message,{duration: 2000, position: "top", pauseOnHover: true})
                }
            },
            async deleteBirthday(obj,index){
                try{
                    let path = backendPath.expressPath+"/birthday/delete";
                    let res = await axios.delete(path,{data: obj})
                    if(res.status == "200"){
                        this.birthdayLists.splice(index,1);
                        this.$toast.success("Deleted successfully",{duration: 2000, position: "top", pauseOnHover: true})
                    }
                    else{
                        this.$toast.error("Something went wrong",{duration: 2000, position: "top", pauseOnHover: true})
                    } 
                }
                catch(err){
                    this.$toast.error(err.message,{duration: 2000, position: "top", pauseOnHover: true})
                }
            }

        },
        async mounted(){
            const loggedIn_user = this.$store.state.userDetails;
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