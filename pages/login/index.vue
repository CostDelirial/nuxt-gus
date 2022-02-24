<template>
   <v-app id="inspire">
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>PEMEX</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              prepend-icon="mdi-account-outline"
                              name="usuario"
                              label="Usuario"
                              type="text"
                              v-model="Usuario"
                              :rules="[rules.required, rules.min]"
                           ></v-text-field>
                          <v-text-field
                              v-model="Password"
                              prepend-icon="mdi-lock"
                              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="show1 ? 'text' : 'password'"
                              name="input-10-1"
                              label="Password"
                              hint="At least 8 characters"
                              counter
                              @click:append="show1 = !show1"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="loginHandler">Ingresar</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
export default {
    name: 'Login',
   layout: 'login',
   data() {
       return {
            show1: false,
               //variables de formulario de login 
               
                     Usuario: "webuser",
                     Password: "B}UD@{}Mb(a*KH_",
                     ip:"miip",
                     Device: "654321",
            
               rules: {
          required: value => !!value || 'Campo requerido.',
          min: v => v.length >= 8 || 'Minimo 4 caracteres',
          emailMatch: () => (`The email and password you entered don't match`),
        },
       }
   },
   methods: {
      //formulario de login par ainicio de sesion y guardado de datos en localStorage.
       async loginHandler(){
          const formData = {
               "Usuario": this.Usuario,
               "Password": this.Password,
               "ip": this.ip,
               "Device": this.Device
                } 
            await this.$auth.loginWith('local',{data: formData}).then((resp) => {
               this.$auth.$storage.setLocalStorage('authtoken',resp.data.Data.AuthenticationToken) //guardado de token en localstorage
                  console.log(resp)
               })
           /*const formdata = {
               "Usuario": this.Usuario,
               "Password": this.Password,
               "ip": this.ip,
               "Device": this.Device
                } 
            try {
      //consulta a base de datos mediante $auth. axios integrado con loginWith
            const resp = await this.$auth.loginWith('local',{data:formdata}).catch( (error)=>(console.log(error)))
               this.$auth.$storage.setLocalStorage('authtoken',resp.data.Data.AuthenticationToken) //guardado de token en localstorage
               console.log(resp)
            }catch(e){
                console.log(e.message)
            }*/
       }
   }
};
</script>

<style></style>
