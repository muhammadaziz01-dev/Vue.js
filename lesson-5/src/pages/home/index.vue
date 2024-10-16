<script setup>
const dataLanguage = [
  {
    language: "HTML",
    version: "HTML5",
    year: 1997,
    creator: "World Wide Web Consortium",
    popularity: 90,
    id: "1dq",
    image:
      "https://cdn3d.iconscout.com/3d/free/thumb/free-html-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-interface-website-isolated-programming-language-pack-logos-icons-5453024.png?f=webp",
  },
  {
    language: "CSS",
    version: "CSS3",
    year: 1996,
    creator: "Cascading Style Sheets (CSS) Working Group",
    popularity: 95,
    id: "2dq",
    image:
      "https://static.vecteezy.com/system/resources/previews/011/665/094/non_2x/stylized-3d-css-icon-side-view-free-png.png",
  },
  {
    language: "SCSS",
    version: "SCSS 3.8",
    year: 2010,
    creator: "Sassy CSS Preprocessor",
    popularity: 90,
    id: "3dq",
    image:
      "https://cdn3d.iconscout.com/3d/free/thumb/free-sass-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-preprocessor-scripting-language-css-coding-lang-pack-logos-icons-7578019.png?f=webp",
  },
  {
    language: "Bootstrap",
    version: "Bootstrap 4.6",
    year: 2019,
    creator: "Twitter, Inc.",
    popularity: 95,
    id: "4dq",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/012/697/297/small/3d-bootstrap-programming-framework-logo-free-png.png",
  },
];
</script>
<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <ul class="list">
          <li class="list--itim" v-for="el in dataLanguage" :key="el?.div">
            <div class="list--itim-image">
              <img :src="el.image" :alt="el.language" />
            </div>
            <div class="list--itim-content">
              <p>
                Lenguage: <span>{{ el.language }}</span>
              </p>
              <p>
                Version: <span>{{ el.version }}</span>
              </p>
              <p>
                Year: <span>{{ el.year }} </span>
              </p>
              <p>
                Craator: <span>{{ el.creator }} </span>
              </p>
              <p>
                Popilarity: <span>{{ el.popularity }} </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>




.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  list-style: none;
}

.list--itim {
  display: flex;
  align-items: center;
  gap: 20px;
}

.list--itim-image > img {
  width: 150px;
  height: 150px;
}

.list--itim-content > p {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2;
  display: flex;
  align-items: center;
  gap: 20px;
}

.list--itim-content > p > span {
  font-weight: normal;
  color: #4b70ff;
}
</style>
