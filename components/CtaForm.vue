<template lang="pug">
div(class="cta-form")
  img(src="/img/cta-form.png")
  form
    h2 Стань участником проекта
    div(class="inputs")
      input(type="text", class="input", placeholder="Имя")
      input(type="tel", class="input", placeholder="Телефон")
      input(type="email", class="input", placeholder="Email")
    button(type="button", class="subscribe-button") Присоединиться
</template>

<style lang="scss">
  .cta-form {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    padding: 60px;
    background: $text;

    @include media1024 {
      flex-direction: column;
      gap: 40px;
      width: 100%;
      max-width: 595px;
      margin: 0 auto;
      padding: 40px;
    }
    @include media425 {
      flex-direction: column;
      gap: 30px;
      padding: 30px;
    }

    img {
      width: 100%;
      max-width: 595px;
      height: 328px;
      object-fit: cover;

      @include media1440 {
        max-width: 500px;
      }
      @include media1280 {
        max-width: 450px;
      }
      @include media1024 {
        max-width: unset;
      }
    }
    
    form {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 50px;

      h2 {
        margin: 0;
        font-size: 34px;
        font-weight: 800;
        line-height: 46px;
        color: $white;

        @include media1280 {
          font-size: 28px;
          line-height: unset;
        }
      }

      .inputs {
        display: flex;
        flex-direction: column;
        gap: 25px;

        @include input;
      }

      @include subscribe-button;
    }
  }
</style>
