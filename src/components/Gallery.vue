<template>
  <main class="container mb-5" style="margin-top: 100px;">
        <section>
            <div class="row mb-5">
                <div class="col-8">
                    <h2>Galeria de productos</h2>
                </div>
                <div class="col-4">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                        <button class="btn btn-outline-info" type="submit"><i class="bi bi-search"></i></button>
                    </form>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                    <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <figure class="figure">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                class="figure-img img-fluid rounded" alt="...">
                        </figure>
                    </a>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                    <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <figure class="figure">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                class="figure-img img-fluid rounded" alt="...">
                        </figure>
                    </a>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                    <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <figure class="figure">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                class="figure-img img-fluid rounded" alt="...">
                        </figure>
                    </a>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                        class="figure-img img-fluid rounded" alt="..." />
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
