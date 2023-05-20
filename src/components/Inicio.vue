<script>
// import { HTTP } from '../helper/axios'
import { onMounted, ref } from 'vue'
export default {
  name: 'Inicio',
  setup(){
    const items = ref([]);

    // HTTP.get(`products`)
    // .then(response => {
    //     console.log('🚀 ~ file: Inicio.vue:134 ~ setup ~ response:', response)
    // })
    // .catch(e => {
    //     console.log('🚀 ~ file: Inicio.vue:133 ~ setup ~ e:', e)
    // })

    const array = [
        {
        "id": 1,
        "nombre": "Peluche",
        "precio": 20000,
        "descripcion": "Peluche bonito barato",
        "stock": 2,
        "imagen": "https://olimpica.vtexassets.com/arquivos/ids/679816/Oso-YONLY-Peluche-90Centimetros.jpg?v=637667065619030000",
        "created_at": "2023-05-20T00:26:43Z"
        },
        {
        "id": 2,
        "nombre": "Taza de café",
        "precio": 15000,
        "descripcion": "Taza de cerámica con diseño único",
        "stock": 10,
        "imagen": "https://thumbs.dreamstime.com/b/taza-de-t%C3%A9-blanca-aislada-52730457.jpg",
        "created_at": "2023-05-20T10:00:00Z"
        },
        {
        "id": 3,
        "nombre": "Camiseta",
        "precio": 35000,
        "descripcion": "Camiseta de algodón de alta calidad",
        "stock": 5,
        "imagen": "https://www.uniforma.net/blog/wp-content/uploads/2015/07/Camisetas-de-trabajo.jpg",
        "created_at": "2023-05-20T14:30:00Z"
        },
        {
        "id": 4,
        "nombre": "Pelota de fútbol",
        "precio": 45000,
        "descripcion": "Pelota de cuero resistente para practicar deportes",
        "stock": 8,
        "imagen": "https://monterosport.com.ar/wp-content/uploads/2016/10/pelota-de-fubol-cuero-nacional.jpg",
        "created_at": "2023-05-20T18:15:00Z"
        }
    ]   

    onMounted(async () =>{
        items.value = array.reduce((acumulador, elemento) => {
            if (acumulador.length === 0 || acumulador[acumulador.length - 1].length === 3) {
                acumulador.push([elemento]);
            } else {
                acumulador[acumulador.length - 1].push(elemento);
            }
            return acumulador;
        }, []);
    })

    return { items }
    
  }
}
</script>
<template>
  <main class="container mb-5" style="margin-top: 150px;">
        <section class="mb-5">
            <div class="card mb-3 border-0">
                <div class="row g-0 align-items-center">
                  <div class="col-6">
                    <div class="card-body">
                      <h5 class="card-title display-6">Teddy Planet</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                  <div class="col-6">
                    <img src="../assets/teddy.png" class="img-fluid rounded-start" alt="...">
                  </div>
                </div>
              </div>
        </section>
        <section style="margin-top: 150px;">
            <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                <div class="carousel-inner" v-for="(datas, index) in items" :key="index">
                    <div :class="['carousel-item', index === 1 ? 'active': '']">
                        <div class="row">
                            <div class="card" style="width: 18rem; margin: auto;" v-for="(data, index) in datas" :key="index">
                                <img :src="data.imagen"
                                    class="card-img-top" :alt="data.nombre">
                                <div class="card-body">
                                    <h5 class="card-title">{{data.nombre}}</h5>
                                    <p class="card-text">{{data.descripcion}}</p>
                                    <footer class="">${{data.precio}}</footer>
                                    <a href="#" class="btn btn-primary">Ver Más.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev w-auto" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="prev">
                    <span aria-hidden="true">
                        <i class="bi bi-chevron-left" style="font-size: 50px; color: #000;"></i>
                    </span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next w-auto" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="next">
                    <span aria-hidden="true">
                        <i class="bi bi-chevron-right" style="font-size: 50px; color: #000;"></i>
                    </span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    </main>
</template>