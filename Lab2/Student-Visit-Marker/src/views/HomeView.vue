<script setup>
import "../assets/css/custom.css";
import { ref } from 'vue';
import {getText} from "../assets/js/home";

const file = ref(null);

const submit=()=>{
    getText(file.value.files[0]).then(text=>console.log(text))

    return false;
};

</script>

<template>
  <main>
    <div class="card">
          <div class="card-body">
            <h1>Dashboard</h1>
            
            <form @submit="submit" action="#" onsubmit="return false;" class="left-form">
              <div class="mb-3">
                <label for="file" class="form-label">Image with students names</label>
                <input type="file" class="form-control" name="file" ref="file">
              </div>
              <div>
                <input type="submit" class="btn btn-primary py-8 fs-4 mb-1 rounded-2" value="Upload" accept="image/png, image/jpeg">
              </div>
            </form>

            <div class="table-responsive">
                  <table class="table text-nowrap mb-0 align-middle">
                    <thead class="text-dark fs-4">
                      <tr>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0"><i class="ti ti-list-numbers"></i></h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Full name</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Mark</h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border-bottom-0"><h6 class="fw-semibold mb-0">1</h6></td>
                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-1">Олександр Бандалак</h6>                        
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal"><i class="ti ti-checks"></i></p>
                        </td>
                      </tr>   
                      <tr>
                        <td class="border-bottom-0"><h6 class="fw-semibold mb-0">2</h6></td>
                        <td class="border-bottom-0">
                            <h6 class="fw-semibold mb-1">Олексій Ткачук</h6>                        
                        </td>
                        <td class="border-bottom-0">
                          <p class="mb-0 fw-normal"></p>
                        </td>
                      </tr>             
                    </tbody>
                  </table>
                </div>  
          </div>
      </div>
  </main>
</template>
