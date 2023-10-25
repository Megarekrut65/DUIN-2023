<script setup>
import '../assets/css/custom.css';

import { RouterLink } from 'vue-router';
import {ref} from 'vue';
import { login } from '../assets/js/login';

const email = ref(""), password = ref("");
const error = ref("");

const submit = ()=>{
    login(email.value, password.value)
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
                <div class="card mb-0">
                <div class="card-body">
                    <div  class="text-nowrap logo-img text-center d-block py-3">
                    <img src="../assets/logo.png" width="280" alt="logo">
                    </div>
                    <p class="text-center">Make it easy</p>
                    <form @submit="submit" action="#" onsubmit="return false;">
                    <div class="mb-3">
                        <label for="name" class="form-label">Email</label>
                        <input v-model="email" type="email" class="form-control" name="name" required maxlength="200">
                    </div>
                    <div class="mb-4">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" name="password" required maxlength="1000">
                    </div>
                    
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <p class="fs-4 mb-0 fw-bold">New here?</p>
                        <RouterLink class="text-primary fw-bold ms-2" to="/register">
                            Create an account
                        </RouterLink>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <input type="submit" class="btn btn-primary py-8 fs-4 rounded-2" value="Sign In">
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