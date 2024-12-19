<script setup>
import { ref } from "vue";
import { MaskInput } from "vue-3-mask";
import { toast } from "vue3-toastify";

const name = ref("");
const phone = ref("");

// const handelSubmit = () => {
//     console.log(phone.value);
//   if (!name.value.trim() || !phone.value.trim().length == 19) {
//     toast.error("Iltimos, ismingiz va telefon raqamingizni to'ldiring!");
//     return;
//   } else {
//     console.log({ name: name.value, phone: phone.value });
//     name.value = "";
//     phone.value = "";
//     toast.success("Ushbu formani muvaffaqiyatli to'ldirdingiz");
//   }
// };

const handelSubmit = async () => {
  if (!name.value.trim() || !phone.value.trim()) {
    toast.error("Iltimos, ismingiz va telefon raqamingizni to'ldiring!");
    return;
  }

  const formData = {
    name: name.value,
    phone: phone.value,
  };

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzIK7BlQHIVYmq0dh6tEoBG5lzSTwoceYr91sqv3DiBlo4a5U3HfQPem4eRRTHIqJWw/exec", //https://script.google.com/macros/s/AKfycbxUySklB7CSnFx8JuhTadqozjOtEceLfxu0IVrlsXzjCSmh0HdSWWlSCMlxU9rTYH7f/exec
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // JSON formatda ma'lumot yuboriladi
      }
    );

    const result = await response.json();

    if (result.status === "success") {
      toast.success("Form muvaffaqiyatli yuborildi!");
      name.value = "";
      phone.value = "";
    } else {
      throw new Error(result.message || "Ma'lumotlarni saqlashda xatolik yuz berdi.");
    }
  } catch (error) {
    toast.error(error.message);
  }
};
</script>

<template>
  <form @submit.prevent="handelSubmit" class="cantact--form">
    <h4>Hoziroq ro'yxatdan o'ting</h4>
    <p>va farzandingiz kelajagi uchun muhim qadamni tashlang</p>
    <div class="cantact--form--parent">
      <input type="text" v-model="name" placeholder="Ismingiz" />
      <MaskInput
        type="tel"
        v-model="phone"
        placeholder="+998-(##) ###-##-##"
        mask="+998-(##) ###-##-##"
      />
    </div>
    <button type="submit">Yuborish</button>
  </form>
</template>

<style lang="scss" scoped>
.cantact--form {
  margin-top: 85px;

  h4 {
    color: #012a30;
    font-size: 32px;
    font-weight: 800;
    text-align: center;
  }

  p {
    color: rgba(0, 0, 0, 0.25);
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
  }

  &--parent {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 29px;
    padding: 40px 0;

    input {
      display: flex;
      width: 417px;
      padding: 19px 22px;
      align-items: center;
      border-radius: 16px;
      background: #dbf9d8;
      color: #012a30;
      font-size: 22px;
      font-weight: 800;
      outline: none;
      border: none;
    }
  }

  button {
    display: block;
    padding: 20px 33px 21px 31px;
    border-radius: 16px;
    background: #00b534;
    color: #fff;
    font-size: 22px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    margin: 0 auto;
    transition: all 0.3s linear;

    &:hover {
      background: #00962b;
    }
  }
}
</style>
