<template>
  <v-container>
    <v-toolbar app dark prominent class="blue">
      <v-toolbar-title class="headline text-uppercase">
        <span>Pixel</span>
        <span class="font-weight-light">House</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-layout>
      <v-flex md6 offset-md3>
        <v-card class="mb-2" v-for="(data, index) in user" :key="index">
            <v-card-text>
                <v-layout>
                    <v-flex xs3>
                        <div>Nama</div>
                        <div>Email</div>
                    </v-flex>
                    <v-flex xs7>
                        <div>: {{data.name}}</div>
                        <div>: {{data.email}}</div>
                    </v-flex>
                    <v-flex xs2>
                        <div class="text-xs-right">
                            <v-icon @click="edit(index)">edit</v-icon>
                            <v-icon @click="del(index)">clear</v-icon>
                        </div>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-text>
                    <v-text-field v-model="data.name" label="Name" />
                    <v-text-field v-model="data.email" label="Email" />
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" flat @click="saveEdit(data, index)">
                        Edit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
    <loading :loading="loading"></loading>
  </v-container>
</template>

<script>
import loading from '@/components/Loading.vue'
export default {
    nama: 'home',
    components:{
        loading
    },
    data(){
        return{
            loading: false,
            dialog: false,
            data: {
                name: '',
                email: ''
            }
        }
    },
    methods:{
        edit(index){
            const user =  this.user
            this.index =  index
            this.data.name =  user[index].name
            this.data.email =  user[index].email
            this.dialog = true
        },
        saveEdit(data, index){
            const user =  this.user
            user[index].name = data.name
            user[index].email = data.email
            user.splice(index, 1, user[index])
            this.dialog = false
        },
        del(index){
            const user = this.user
            confirm("Are you sure want to delete user?") ? user.splice(index, 1) : null
        },
    },
    computed: {
        user(){
            return this.$store.state.user
        }
    },
    mounted(){
        this.$store.dispatch('getUser')
    }
}
</script>

