<template>
    <div class="bg-indigo-500/10 h-[100vh] flex">
        <!-- <div class="px-4 w-full sm:w-3/4 md:w-1/2 mx-auto"> -->
        <div class="w-1/2 px-4">
            <div class="h-[40px] pt-2 flex items-center text-indigo-500 font-bold text-2xl">
                <i class="fas fa-birthday-cake"></i>
                <span class="pl-3 pt-1">Sams Birthday World </span>
            </div>
            <div v-if="!showLogin && !showSignUp && !showForgotPassword" class="flex pl-11 flex-col justify-center" 
                style="height: calc(100vh - 45px)">
                <div class="mb-5">
                    <h3 style="text-shadow:3px 2px 2px #9191917d"
                        class="uppercase font-bold text-5xl mb-5 text-orange-500">
                        Sam Welcomes You
                    </h3>
                    <h5 class="text-slate-700 text-xl mb-5 pl-2">
                        To his
                    </h5>
                    <h3 style="text-shadow: 2.3px 2px 2px #9191917d;"
                        class="uppercase text-yellow-700 font-bold text-dark-500 text-3xl mb-5">
                        Birthday World
                    </h3>
                    <p class="text-slate-900 font-semibold mb-5">
                        "The greatest gift that you can give to others is the gift of unconditional love and acceptance."
                    </p>
                </div>
                <div class="mt-5">
                    <button 
                        class="flex items-center bg-indigo-600 text-white px-3 py-2 rounded shadow-xl focus:outline-none hover:bg-indigo-600/90"
                        @click="showLogin_Template">
                        Get Started
                        <i class="pl-3 fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>
            </div>
            <div v-if="showLogin && !showSignUp && !showForgotPassword" class="flex pl-11 flex-col justify-center w-[80%]"
                style="height: calc(100vh - 45px)">
                <div class="border-2 border-indigo-500/10 rounded-lg p-8 py-10">
                    <h3 class="mb-3 uppercase font-bold text-3xl text-slate-600">Log in</h3>
                    <form class="flex flex-col gap-5 mt-10" @submit.prevent="Login">
                        <input
                            class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                            v-model="email" type="email" placeholder="Enter email" required/>
                        <div class="relative">    
                            <input 
                                class="w-full rounded pl-3 px-9 focus:outline-none border h-[40px]"
                                v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Enter password" required/>
                             <button type="button"
                                class="absolute right-3 top-2"
                                @click="toggleEye">
                                <i v-if="!showPassword" class="fa-solid fa-eye"></i>
                                <i v-if="showPassword" class="fa-solid fa-eye-slash"></i>
                             </button>   
                        </div>                            
                         <div>   
                            <button type="submit" 
                                class="bg-indigo-600 text-white px-6 py-1.5 rounded shadow-xl drop-shadow focus:outline-none hover:bg-indigo-600/90"
                                >
                                Login
                            </button>
                        </div>
                         <div class="self-end -mt-2">   
                            <button type="button" 
                                class="text-indigo-600 hover:text-indigo-500/80"
                                @click="forgotPassword">
                                forgot password ?
                            </button>
                        </div>
                        <div> 
                            Don't have an account? Please click here to  
                            <button type="button" 
                                @click="SignUp"
                                class="border-0 border-indigo-600 text-indigo-600 px-1 py-1.5 focus:outline-none hover:text-indigo-500/70 hover:underline ease-in duration-200"
                                >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div v-if="!showLogin && showSignUp && !showForgotPassword" class="flex pl-11 flex-col justify-center w-[95%]"
                style="height: calc(100vh - 45px)">
                <div class="border-2 border-indigo-500/10 rounded-lg p-8 py-10">
                    <h3 class="mb-3 uppercase font-bold text-3xl text-slate-600">Sign Up</h3>
                    <form class="flex flex-col gap-5 mt-10" @submit.prevent="createUser">
                        <div class="flex gap-2">
                            <input
                                class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                                v-model="createUserName" type="text" placeholder="Enter user name" required/>
                            <input
                                class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                                v-model="createEmail" type="email" placeholder="Enter email" required/>
                        </div>
                        <input
                            class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                            v-model="createPhoneNumber" type="tel" minlength="10" maxlength="10" placeholder="Enter phone number" required/>
                        <textarea
                            class="w-full rounded pl-3 focus:outline-none border"
                            v-model="createAddress" placeholder="Enter address">
                        </textarea>
                        <div class="flex gap-2">    
                            <input
                                class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                                v-model="createPinCode" type="tel" minlength="6" maxlength="6" placeholder="Enter pin code" required/>
                            <div class="w-full relative">    
                                <input 
                                    class="w-full rounded pl-3 px-9 focus:outline-none border h-[40px]"
                                    v-model="createPassword" :type="show_Created_Password ? 'text' : 'password'" placeholder="Create password" required/>
                                <button type="button"
                                    class="absolute right-3 top-2"
                                    @click="toggle_Created_Password_Eye">
                                    <i v-if="!show_Created_Password" class="fa-solid fa-eye"></i>
                                    <i v-if="show_Created_Password" class="fa-solid fa-eye-slash"></i>
                                </button>   
                            </div> 
                        </div>                           
                         <div>   
                            <button type="submit" 
                                class="bg-indigo-600 text-white px-6 py-1.5 rounded shadow-xl drop-shadow focus:outline-none hover:bg-indigo-600/90"
                                >
                                Sign Up
                            </button>
                        </div>
                        <div> 
                            Already have an account? Please click here to  
                            <button type="button" 
                                @click="backToLogin"
                                class="border-0 border-indigo-600 text-indigo-600 px-1 py-1.5 focus:outline-none hover:text-indigo-500/70 hover:underline ease-in duration-200"
                                >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div v-if="!showLogin && !showSignUp && showForgotPassword" class="flex pl-11 flex-col justify-center w-[80%]"
                style="height: calc(100vh - 45px)">
                <div class="border-2 border-indigo-500/10 rounded-lg p-8 py-10">
                    <h3 class="mb-3 uppercase font-bold text-3xl text-slate-600">Change Password</h3>
                    <form class="flex flex-col gap-5 mt-10" @submit.prevent="createNewPassword">
                        <input
                            class="w-full rounded pl-3 focus:outline-none border h-[40px]"
                            v-model="check_forgot_pw_email" type="email" placeholder="Enter email" required/>
                        <div v-if="!divs_to_create_password">
                            <button type="button" 
                                class="bg-indigo-600 text-white px-6 py-1.5 rounded shadow-xl drop-shadow focus:outline-none hover:bg-indigo-600/90"
                                @click="check_for_user_with_email">
                                Validate
                            </button>
                        </div>    
                        
                        <div class="relative" v-if="divs_to_create_password">    
                            <input 
                                class="w-full rounded pl-3 px-9 focus:outline-none border h-[40px]"
                                v-model="newly_created_password" :type="show_New_Password ? 'text' : 'password'" placeholder="Enter new password" required/>
                             <button type="button"
                                class="absolute right-3 top-2"
                                @click="toggleNew_Password_Eye">
                                <i v-if="!show_New_Password" class="fa-solid fa-eye"></i>
                                <i v-if="show_New_Password" class="fa-solid fa-eye-slash"></i>
                             </button>   
                        </div>                            
                         <div v-if="divs_to_create_password">   
                            <button type="submit" 
                                class="bg-indigo-600 text-white px-6 py-1.5 rounded shadow-xl drop-shadow focus:outline-none hover:bg-indigo-600/90"
                                >
                                Change Password
                            </button>
                        </div>
                        <div> 
                            Please click here to  
                            <button type="button" 
                                @click="logInFrom_Forgot_password"
                                class="border-0 border-indigo-600 text-indigo-600 px-1 py-1.5 focus:outline-none hover:text-indigo-500/70 hover:underline ease-in duration-200"
                                >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- right side images -->
        <div class="w-1/2 relative overflow-hidden">
            <img class="z-10 ml-auto relative w-[70%] right-[0] top-[2%] rotate-[21deg]" src="../assets/images/birthday-flag.png" alt="birthday flags" />
            <!-- <img class="ml-auto relative w-[78%] right-[1%] -top-[25%] rotate-[0deg]" src="../assets/images/ballons-1.png" alt="birthday flags" /> -->
            <img class="absolute h-[37vh] right-[30%] bottom-[23%]" src="../assets/images/bd-cake.png" alt="birthday flags" />
            <!-- <img class="ml-auto fixed w-[80%] h-[30vh] right-[1%] bottom-[0] top-auto" src="../assets/images/people.png" alt="birthday flags" /> -->
            <img class="absolute w-[95%] h-[40vh] -bottom-[7%] right-[5%]" src="../assets/images/people-2.png" alt="birthday flags" />
            <!-- <button class="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none" @click="Login">Log In</button> -->
        </div>
    </div>
</template>
<script>
import axios from "axios";
import backendPath from "../paths/backendPaths"
    export default{
        beforeRouteEnter(to,from,next){
            if(localStorage.getItem('loggedIn')){
                next(vm=>vm.$router.replace("/home"))
            }
            else{
                next()
            }
        },
        data(){
            return{
                showLogin: false,
                showSignUp: false,
                showForgotPassword: false,

                //login
                showPassword: false,
                email: '',
                password: '',

                //signup
                show_Created_Password: false,
                createUserName: "",
                createEmail: "",
                createPhoneNumber: "",
                createAddress: "",
                createPinCode: "",
                createPassword: "",

                //forgot password
                show_New_Password: false,
                divs_to_create_password: false,
                check_forgot_pw_email: '',
                newly_created_password: '',
            }
        },
        methods:{
            // login page
            showLogin_Template(){
                this.showLogin = true;
            },
            toggleEye(){
                this.showPassword = !this.showPassword
            },
            async Login(){
                if(this.email && this.password){
                    let path = backendPath.expressPath+"/users/search"
                    try{
                        let res = await axios.post(path,{email: this.email, password: this.password})
                        console.log(res)
                        if(res.status == 200){
                            localStorage.setItem('loggedIn', true)
                            localStorage.setItem('userDetails', JSON.stringify(res.data))
                            this.$router.push("/home");
                            this.$toast.success("Logged In Successfully",{duration: 2000, position: "top", pauseOnHover: true})
                        }
                        else{
                            this.$toast.error("Please Enter Correct Credentials",{duration: 2000, position: "top", pauseOnHover: true})
                        }
                    }
                    catch(err){
                        this.$toast.error("Please Enter Correct Credentials",{duration: 2000, position: "top", pauseOnHover: true})
                    }
                }
            },

            // signUp page
            SignUp(){
                this.showLogin = false;
                this.showSignUp = true;

                this.show_Created_Password = false
                this.createUserName = ""
                this.createEmail = ""
                this.createPhoneNumber = ""
                this.createAddress = ""
                this.createPinCode = ""
                this.createPassword = ""
            },
            backToLogin(){
                this.showLogin = true;
                this.showSignUp = false;

                this.showPassword = false
                this.email = ''
                this.password = ''
            },
            toggle_Created_Password_Eye(){
                this.show_Created_Password= !this.show_Created_Password
            },
            async createUser(){
                let obj = {
                    username: this.createUserName,
                    email: this.createEmail,
                    phonenumber: this.createPhoneNumber,
                    address: this.createAddress,
                    pincode: this.createPinCode,
                    password: this.createPassword,
                }

                try{
                    let path = backendPath.expressPath+"/users/signup";
                    const userCreated = await axios.post(path,obj)
                    if(userCreated.status == "200"){
                        this.$toast.success("Account created successfully",{duration: 2000, position: "top", pauseOnHover: true})
                        this.createUserName = ""
                        this.createEmail = ""
                        this.createPhoneNumber = ""
                        this.createAddress = ""
                        this.createPinCode = ""
                        this.createPassword = ""
                    }
                    else{
                        this.$toast.error("Something went wrong",{duration: 2000, position: "top", pauseOnHover: true})
                    }
                }
                catch(err){
                    this.$toast.error(err.message,{duration: 2000, position: "top", pauseOnHover: true})
                }
            },

            //forgot password
            forgotPassword(){
                this.showLogin = false
                this.showSignUp = false
                this.showForgotPassword = true

                this.show_New_Password = false
                this.divs_to_create_password = false
                this.check_forgot_pw_email = ''
                this.newly_created_password = ''
            },
            logInFrom_Forgot_password(){
                this.showLogin = true
                this.showSignUp = false
                this.showForgotPassword = false

                this.showPassword = false
                this.email = ''
                this.password = ''
            },
            toggleNew_Password_Eye(){
                this.show_New_Password = !this.show_New_Password
            },
            async check_for_user_with_email(){
                if(this.check_forgot_pw_email != ""){
                    try{
                        let path = backendPath.expressPath+"/users/checkforuser"
                        let res = await axios.post(path,{email: this.check_forgot_pw_email})
                        if(res.status == "200"){
                            this.divs_to_create_password = true;
                            this.$toast.success("Record Identified, Please Change the Password",{duration: 2000, position: "top", pauseOnHover: true})
                        }else{
                            this.$toast.error("Something went wrong",{duration: 2000, position: "top", pauseOnHover: true})
                        }
                    }
                    catch(err){
                        this.$toast.error(err.message,{duration: 2000, position: "top", pauseOnHover: true})
                    }
                }
                else{
                    this.$toast.error("Please enter the email",{duration: 2000, position: "top", pauseOnHover: true})
                }
            },
            async createNewPassword(){
                if(this.newly_created_password != ""){
                    try{
                        let obj ={
                            email: this.check_forgot_pw_email,
                            password: this.newly_created_password,
                        }
                        let path = backendPath.expressPath+"/users/updatepassword"
                        let res = await axios.post(path,obj)
                        if(res.status == "200"){
                            this.$toast.success("Password Changed Successfully",{duration: 2000, position: "top", pauseOnHover: true})
                            this.check_forgot_pw_email = "";
                            this.newly_created_password = "";
                            this.divs_to_create_password = false;
                        }else{
                            this.$toast.error("Something went wrong",{duration: 2000, position: "top", pauseOnHover: true})
                        }
                    }
                    catch(err){
                        this.$toast.error(err.message,{duration: 2000, position: "top", pauseOnHover: true})
                    }
                }
                else{
                    this.$toast.error("Please enter the password",{duration: 2000, position: "top", pauseOnHover: true})
                }
            }
        }
    }
</script>
<style scoped>

</style>