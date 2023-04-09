<template>
    <div>
        <div class="font-bold lg:hidden text-lg underline text-slate-600 w-full"> User Profile </div>
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
            <form @submit.prevent="updateUser" class="px-3 flex gap-4 flex-col">
                <div class="flex gap-2">
                    <input
                        class="w-full capitalize rounded pl-3 focus:outline-none border h-[40px]"
                        v-model="username" @change="allowUpdate" type="text" placeholder="Enter user name" required/>
                    <input
                        class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                        v-model="email" @change="allowUpdate" type="email" disabled="true" placeholder="Enter email" required/>
                </div>
                <div class="flex gap-2">
                    <input
                        class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                        v-model="phonenumber" @change="allowUpdate" type="tel" minlength="10" maxlength="10" placeholder="Enter phone number" required/>
                    <select v-model="gender" @change="allowUpdate" required
                        class="w-full rounded pl-3 focus:outline-none border h-[40px]" placeholder="Select Gender">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                    <input
                        class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                        v-model="country" @change="allowUpdate" type="text" placeholder="Enter country name" required/>    
                </div>
                <textarea required rows="3"
                    class="w-full rounded pl-3 focus:outline-none border"
                    v-model="address" @change="allowUpdate" placeholder="Enter address">
                </textarea>
                <div class="flex gap-2">
                    <input
                        class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                        v-model="pincode" @change="allowUpdate" type="tel" minlength="6" maxlength="6" placeholder="Enter pin code" required/>
                    <div class="w-full relative">
                        <input 
                            class="w-full rounded pl-3 px-9 focus:outline-none border h-[40px]"
                            v-model="password" @change="allowUpdate" :type="show_Password ? 'text' : 'password'" placeholder="Enter new password" required/>
                        <button type="button"
                            class="absolute right-3 top-2"
                            @click="toggle_Password_Eye">
                                <i v-if="!show_Password" class="fa-solid fa-eye"></i>
                                <i v-if="show_Password" class="fa-solid fa-eye-slash"></i>
                        </button>     
                    </div>                                
                </div>
                <div>
                    <button type="submit" 
                        class="bg-indigo-600 text-white px-6 py-1 rounded shadow-xl drop-shadow focus:outline-none hover:bg-indigo-600/90"
                        :class=" !allow_update ? 'opacity-50' : '' "
                        :disabled="!allow_update">
                        Update
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
                profilepic: '',
                username: this.$store.state.userDetails[0].username,
                email: this.$store.state.userDetails[0].email,
                phonenumber: this.$store.state.userDetails[0].phonenumber,
                password: this.$store.state.userDetails[0].password,
                gender: this.$store.state.userDetails[0].gender,
                country: this.$store.state.userDetails[0].country,
                address: this.$store.state.userDetails[0].address,
                pincode: this.$store.state.userDetails[0].pincode,
                attachment: '',
                show_Password: false,
                allow_update: false,
            }
        },
        methods:{
            profilePicChanged(event){
                try{
                    this.allow_update = true;
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
            allowUpdate(){
                this.allow_update = true;
            },
            async updateUser(){
                // let obj = {
                //             profilepic: JSON.stringify(this.profilepic),
                //             username: this.username,
                //             email: this.email,
                //             phonenumber: this.phonenumber,
                //             password: this.password,
                //             gender: this.gender,
                //             country: this.country,
                //             address: this.address,
                //             pincode: this.pincode,
                //         }
                        let formData = new FormData()
                        formData.append('username',this.username)
                        formData.append("email", this.email)
                        formData.append("phonenumber", this.phonenumber)
                        formData.append("password", this.password)
                        formData.append("gender", this.gender)
                        formData.append("country", this.country)
                        formData.append("address", this.address)
                        formData.append("pincode", this.pincode)
                        if(this.attachment){
                            formData.append("profilepic",this.attachment)
                        }

                        let obj = formData;
                try{
                    let path = backendPath.expressPath+"/users/update";
                    let res = await axios.post(path,obj)
                    if(res.status == "200"){
                        await this.$store.commit('createUserDetails',[res.data])
                        localStorage.setItem('userDetails',JSON.stringify([res.data]))
                        this.$toast.success("User profile updated successfully",{duration: 2000, position: "top", pauseOnHover: true})
                        this.allow_update = false;
                    }
                    else{
                        this.$toast.error("Something went wrong",{duration: 2000, position: "top", pauseOnHover: true})
                    } 
                }
                catch(err){
                    this.$toast.error(err.message,{duration: 2000, position: "top", pauseOnHover: true})
                }                   
            },
            toggle_Password_Eye(){
                this.show_Password = !this.show_Password
            },
        },
        async mounted(){
            if(this.$store.state.userDetails[0].profilepic){
                let file = this.$store.state.userDetails[0].profilepic?.data
                var byteCharacters = await atob(file);
                var byteNumbers = new Array(byteCharacters.length);
                for (var i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                var input = new Blob([byteArray], {
                    type: "image/png",
                });
                this.profilepic =  URL.createObjectURL(input);
                this.attachment = input;
            }
        }
    }
</script>
<style scoped>
input[disabled]{
    background: #d7d7d7;
}
</style>