<template>
  <div class="p-5 header-footer-custom text-center">
    <h1 class="display-4 fw-bold">Roman Rico Albania</h1>
    <p class="lead">IT Student | Explorer | Athlete</p>
  </div>

  <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top shadow">
    <div class="container-fluid">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item"><a class="nav-link active" href="#"><i class="fas fa-user me-1"></i> Profile</a></li>
        <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-trophy me-1"></i> Achievements</a></li>
        <li class="nav-item"><a class="nav-link" href="#resources"><i class="fas fa-book me-1"></i> Resources</a></li>
      </ul>
    </div>
  </nav>

  <div class="container mt-5 content-card p-4 p-md-5 mb-5">
    <div class="row g-4">
      <div class="col-lg-4 col-md-12">
        <h2>About Me</h2>
        <img src="https://github.com/ricoalbania/WEBPROG-IT242-HTML-Lessons/blob/feature/rwd/Image%20(5).jpg?raw=true" alt="rico" class="img-fluid themed-img mb-4" style="max-width: 200px;" />
        <h4 class="fw-bold mb-3">The Basics</h4>
        <p>I am an aspiring IT professional at <b>Asia Pacific College</b>, passionate about solving real-world problems through technology.</p>
      </div>

      <div class="col-lg-8 col-md-12">
        <h2>Hobbies & Interests</h2>
        <img src="https://github.com/ricoalbania/WEBPROG-IT242-HTML-Lessons/blob/feature/bootstrap5/Untitled%20design.png?raw=true" alt="hobbies" class="img-fluid themed-img mb-4 shadow-sm" />
        <p class="lead">When I'm not in front of a screen...</p>
        <p>I believe in a life of balance. My time is split between the digital world of IT and the physical world of adventure.</p>

        <h2 class="mt-5">Asia Pacific College</h2>
        <div id="demo" class="carousel slide shadow rounded-4 overflow-hidden mb-4" data-bs-ride="carousel" style="max-width: 600px;">
          <div class="carousel-inner">
            <div class="carousel-item active"><img src="https://github.com/ricoalbania/WEBPROG-IT242-HTML-Lessons/blob/feature/bootstrap5/apc.jpg?raw=true" class="d-block w-100" alt="APC" /></div>
            <div class="carousel-item"><img src="https://github.com/ricoalbania/WEBPROG-IT242-HTML-Lessons/blob/feature/bootstrap5/apc2.jpg?raw=true" class="d-block w-100" alt="APC 2" /></div>
            <div class="carousel-item"><img src="https://github.com/ricoalbania/WEBPROG-IT242-HTML-Lessons/blob/feature/bootstrap5/apc3.jpg?raw=true" class="d-block w-100" alt="APC 3" /></div>
          </div>
        </div>
      </div>
    </div>

    <hr class="my-5" />

    <div id="resources" class="row g-4">
      <div class="col-12 text-center mb-2">
        <h2>Resources & Learning</h2>
        <p class="text-muted">Tools and AI assistants used for this project.</p>
      </div>
      
      <div class="col-md-4">
        <a href="https://www.w3schools.com" target="_blank" class="resource-card brand-w3s p-4 shadow-sm text-center">
          <i class="fas fa-laptop-code fa-2x mb-3"></i>
          <h6>W3Schools</h6>
          <small class="text-muted">Tutorials</small>
        </a>
      </div>
      <div class="col-md-4">
        <a href="https://gemini.google.com" target="_blank" class="resource-card brand-gemini p-4 shadow-sm text-center">
          <i class="fas fa-wand-magic-sparkles fa-2x mb-3"></i>
          <h6>Gemini</h6>
          <small class="text-muted">AI Coding</small>
        </a>
      </div>
      <div class="col-md-4">
        <a href="https://fontawesome.com" target="_blank" class="resource-card brand-fa p-4 shadow-sm text-center">
          <i class="fas fa-icons fa-2x mb-3"></i>
          <h6>Font Awesome</h6>
          <small class="text-muted">Vector Icons</small>
        </a>
      </div>
    </div> <div class="row g-4 mt-5">
      <div class="col-12 text-start">
        <h4 class="fw-bold mb-3" style="color: #6B705C; border-left: 5px solid #A5A58D; padding-left: 15px;">My Gallery</h4>
      </div>

      <div class="col-md-4">
        <img src="https://github.com/ricoalbania/WEBPROG-IT242-HTML-Lessons/blob/feature/2_RRA_Customize_My_Website/apc4.jpg?raw=true" class="img-fluid themed-img gallery-trigger" data-bs-toggle="modal" data-bs-target="#galleryModal1" alt="APC 4" />
      </div>
      <div class="col-md-4">
        <img src="https://github.com/ricoalbania/WEBPROG-IT242-HTML-Lessons/blob/feature/2_RRA_Customize_My_Website/apc5.jpg?raw=true" class="img-fluid themed-img gallery-trigger" data-bs-toggle="modal" data-bs-target="#galleryModal2" alt="APC 5" />
      </div>
      <div class="col-md-4">
        <img src="https://github.com/ricoalbania/WEBPROG-IT242-HTML-Lessons/blob/feature/2_RRA_Customize_My_Website/apc6.jpg?raw=true" class="img-fluid themed-img gallery-trigger" data-bs-toggle="modal" data-bs-target="#galleryModal3" alt="APC 6" />
      </div>
    </div>
  </div> <div class="modal fade" id="galleryModal1" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content bg-transparent border-0">
        <div class="modal-body p-0 text-center">
          <button type="button" class="btn-close btn-close-white float-end mb-2" data-bs-dismiss="modal"></button>
          <img src="https://github.com/ricoalbania/WEBPROG-IT242-HTML-Lessons/blob/feature/2_RRA_Customize_My_Website/apc4.jpg?raw=true" class="img-fluid rounded shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalProfile'
}
</script>

<style src="./css/personalprofile.css/">
</style>