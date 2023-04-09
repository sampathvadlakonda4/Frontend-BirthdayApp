<template>
    <div>
        <div class="font-bold lg:hidden text-lg underline text-slate-600 w-full"> Add Birthday </div>
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
            <form @submit.prevent="createBirthday" class="px-3 flex gap-4 flex-col">
                <div class="flex gap-2">
                    <input
                        class="w-full capitalize rounded pl-3 focus:outline-none border h-[40px]"
                        v-model="username" type="text" placeholder="Enter user name" required/>
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
                        Create
                    </button>
                </div> 
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import backendPath from "../../../paths/backendPaths"
    export default{
        data(){
            return{
                profilepic: null,
                username: '',
                email: '',
                phonenumber: '',
                dateofbirth: '',
                gender: '',
                country: '',
                address: '',
                pincode: '',
                relation: '',
                attachment: '',
            }
        },
        methods:{
            profilePicChanged(event){
                try{
                    var input = event.target;
                    if(input.files){
                        var reader = new FileReader();
                        reader.onload = (e) => {
                            this.profilepic = e.target.result;
                        }
                        this.attachment = input.files[0];
                        reader.readAsDataURL(input.files[0]);
                    }
                }
                catch(err){
                    this.profilepic = null
                    this.attachment = null
                }
            },
            async createBirthday(){
                // let obj = {
                //             profilepic: JSON.stringify(this.profilepic),
                //             name: this.username,
                //             email: this.email,
                //             phonenumber: this.phonenumber,
                //             dateofbirth: this.dateofbirth,
                //             gender: this.gender,
                //             country: this.country,
                //             address: this.address,
                //             pincode: this.pincode,
                //             relation: this.relation,
                //             loginuserid: this.$store.state.userDetails[0]['_id']
                //         }
                    let formData = new FormData()
                    formData.append('name',this.username)
                    formData.append("email", this.email)
                    formData.append("phonenumber", this.phonenumber)
                    formData.append("dateofbirth", this.dateofbirth)
                    formData.append("relation", this.relation)
                    formData.append("gender", this.gender)
                    formData.append("country", this.country)
                    formData.append("address", this.address)
                    formData.append("pincode", this.pincode)
                    formData.append("loginuserid", this.$store.state.userDetails[0]['_id'])
                    if(this.attachment){
                        formData.append("profilepic",this.attachment)
                    }

                    let obj = formData;        
                try{
                    let path = backendPath.expressPath+"/birthday/addnew";
                    let res = await axios.post(path,obj)
                    if(res.status == "200"){
                        this.$toast.success("Birthday added successfully",{duration: 2000, position: "top", pauseOnHover: true})
                        this.profilepic = null
                        this.username = ''
                        this.email = ''
                        this.phonenumber = ''
                        this.dateofbirth = ''
                        this.gender = ''
                        this.country = ''
                        this.address = ''
                        this.pincode = ''
                        this.relation = ''
                        this.attachment = ''
                        document.querySelector(".profilepic").value = ""
                    }
                    else{
                        this.$toast.error("Something went wrong",{duration: 2000, position: "top", pauseOnHover: true})
                    } 
                }
                catch(err){
                    this.$toast.error(err.message,{duration: 2000, position: "top", pauseOnHover: true})
                }                   
            }
        }
    }
</script>
<style>

</style>