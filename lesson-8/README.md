# Props , Provide - Inject , Emit
- ### Props
companentalar orasida malumotlarni almashunuvini taminlash uchun ishlatiladi va faqat bir tamonlama parent componentada child componentaga uzatiladi .

misol :  <code>parend.vue</code>

```
<template>
  <div class="wrapperApp">
     <h3>App </h3>
       <ComponentA :propsCar="car" />
  </div>
</template>

<script setup>
import { reactive} from "vue";
import ComponentA from "./components/component-a.vue";

const car = reactive({
  brand: "Toyota",
  model: "Camry",
  year: 2021,
  color: "blue",
  description: "This is a great car!",
  price: 30000,
})

</script>

```
<code>child-component.vue</code>   da biz hardoyim parentdan berilgan malumotni defineProps vue.js ning funcsiyasi orqali qabul qilib olamiz agar propisni ustida qandaydur amal bajaradigan bo'lsak uni bir o'zgaruvchiga tenglab olishligimiz kerak , template tegi ichida gina ishlatadigan bo'lsa bunga hojat yo'q lekin har ikkal holatda ham template tegi ichida ishlay veradi.


```

<template>
  <div class="wrapperA">
    <h3>Component A</h3>
    <p>{{ infoCar.brand }}</p>
    <p>{{ prop.infoCar.model }}</p>
    <ComponentB />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ComponentB from "./component-b.vue";

const prop = defineProps({
  infoCar: {
    type: Object,
    required: true,
    default: () => ({
      brand: "Toyota",
      model: "Camry",
      year: 2021,
      color: "blue",
      description: "This is a great car!",
      price: 30000,
    }),
  },
});
</script>
```

<hr />



-  ### **Provide - Inject**
qaconki companentalar ichma ich bo'lib ketadigan bo'lsa propis o'rniga <code>provide</code> va <code>inject</code> dan foydalanish maqulroq bo'ldi shunda biz parendan child ichidagi child companentaga malumot uzatishimiz osonroq bo'ladi .  

misol :  <code>parend.vue</code>
```
import {provide , reactive} from "vue";
import ComponentA from "./components/component-a.vue";

const car = reactive({
  brand: "Toyota",
  model: "Camry",
  year: 2021,
  color: "blue",
  description: "This is a great car!",
  price: 30000,
})

provide("car", car);
```


<code>child-component.vue</code>

```
import {inject} from "vue";

const cardInfo = inject("car")

```

<hr />