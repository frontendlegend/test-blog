<template lang="pug">
div(class="subscribe-form")
  b(class="subscribe-form__label") Подпишись на рассылку
  form(class="subscribe-form__form")
    input(type="email", class="input", placeholder="Email")
    button(type="button", class="subscribe-button") Подписаться
</template>

<style lang="scss">
  .subscribe-form {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100px;
    padding: 0 30px;
    background: $text;

    @include media768 {
      flex-direction: column;
      gap: 30px;
      height: unset;
      padding: 15px 30px;
    }
    @include media425 {
      padding: 15px;
    }

    &__label {
      font-size: 22px;
      line-height: 30px;
      font-weight: 800;
      color: $white;

      @include media1024 {
        font-size: 18px;
      }
    }

    &__form {
      display: flex;
      align-items: center;
      gap: 37px;

      @include media768 {
        flex-direction: column;
        width: 100%;
        max-width: 353px;
      }

      @include input;
      @include subscribe-button;
    }
  }
</style>
