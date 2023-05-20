<template>
  <nav class="navbar navbar-expand-lg fixed-top" style="background-color: #fff;">
            <router-link class="navbar-brand" to="/">
                <img src="./logo.png" alt="Teddy">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg"
                aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg"
                aria-labelledby="navbarOffcanvasLgLabel">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/galeria">Galeria</router-link>
                    </li>
                </ul>
            </div>
        </nav>
</template>
<script>
export default {
  name: 'Nav'
}
</script>