# Vue.js lesson-4

***Vue.js da dinamic classlar va computedni q'llas bo'yicha ham nazariya va amalyot***

### 1. Array syntax
```
<p :class="[ isSacses ? 'isSacsses' : 'isDanger']">Bu matin dinamic class yordamida , array sintx sida ishlamoqda</p>
```
*Array syntax uslibida ko'rishimiz mumkun "isSacses" ref yani reactiv  o'zgaruvchimiz holatiga ko'ra class nomi rendirlanishini*

### 2. Object syntax
```
<p :class="{'isSacsses':isSacses , 'isDanger':!isSacses} ">Bu matin dinamic class yordamida , object sintx sida ishlamoqda</p>
```

### 3. Computed syntax
```
<p :class="computedClass">Bu matin computed sintx metodi yordamida ishlamoqda </p>
```
```
const computedClass = computed(() => {
  return isSacses.value? 'isSacsses' : 'isDanger';
});
```
