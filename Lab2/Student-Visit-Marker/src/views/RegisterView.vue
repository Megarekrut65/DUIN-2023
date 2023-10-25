<script setup>
import { RouterLink } from 'vue-router';
import '../assets/css/custom.css'
import {ref} from 'vue'
import {register} from '../assets/js/register'

const email = ref(""), password = ref(""), name = ref("");

const error = ref("");

const submit=()=>{
    register(name.value, email.value, password.value)
    .catch(err=>error.value = err);

    return false;
};

</script>

<template>
    <main>
        <div
            class="position-relative overflow-hidden d-flex align-items-center justify-content-center">
        <div class="d-flex align-items-center justify-content-center">
            <div class="row justify-content-center">
            <div class="col-12">
                <div class="card mb-0" style="padding-left: 10px; padding-right: 10px;">
                <div class="card-body">
                    <div  class="text-nowrap logo-img text-center d-block py-3">
                    <img src="../assets/logo.png" width="280" alt="logo">
                    </div>
                    <p class="text-center">Make it easy</p>
                    <form @submit="submit" action="#" onsubmit="return false;">
                    <div class="mb-3">
                        <label for="display-name" class="form-label">Name</label>
                        <input v-model="name" type="text" class="form-control" name="display-name" required minlength="5" maxlength="200">
                    </div>
                    <div class="mb-4">
                        <label for="name" class="form-label">Email</label>
                        <input v-model="email" type="email" class="form-control" name="name" required minlength="5" maxlength="200">
                    </div>
                    <div class="mb-4">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" name="password" required minlength="8" maxlength="1000">
                    </div>
                    <div class="d-flex align-items-center mb-4">
                        <p class="fs-4 mb-0 fw-bold">Already have an Account?</p>
                        <RouterLink class="text-primary fw-bold ms-2" to="/login">Sign In</RouterLink>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <input type="submit" class="btn btn-primary py-8 fs-4 rounded-2" value="Sign up">
                    </div>
                    <div class="d-flex align-items-center mt-4">
                        <p class="fs-4 mb-0 text-danger">{{ error }}</p>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </main>
</template>