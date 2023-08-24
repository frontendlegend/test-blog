<template lang="pug">
div(class="subscribe-form")
  b(class="label") Подпишись на рассылку
  form
    input(type="email", class="email-input", placeholder="Email")
    button(type="button", class="subscribe-btn") Подписаться
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

    .label {
      font-size: 22px;
      line-height: 30px;
      font-weight: 800;
      color: $white;

      @include media1024 {
        font-size: 18px;
      }
    }

    form {
      display: flex;
      align-items: center;
      gap: 37px;

      @include media768 {
        flex-direction: column;
        width: 100%;
        max-width: 353px;
      }

      .email-input {
        width: 353px;
        height: 28px;
        padding: 2px 10px;

        font-size: 18px;
        line-height: 26px;
        color: $white;
        background: $text;
        outline: none;
        
        border: none;
        border-bottom: 1px solid $gray;
        transition: border .2s;

        &::placeholder {
          transition: color .2s;
        }

        &:focus {
          border-bottom-color: $blue;
          caret-color: $white;

          &::placeholder {
            color: transparent;
          }
        }

        @include media1280 {
          width: 280px;
        }
        @include media1024 {
          width: 100%;
          max-width: 280px;
        }
        @include media768 {
          max-width: unset;
        }
      }

      .subscribe-btn {
        width: 223px;
        max-width: 223px;
        height: 46px;
        
        font-size: 18px;
        line-height: 26px;
        color: $white;
        
        background: $blue;
        border-radius: 2px;
        border: none;

        transition: background .2s;
        cursor: pointer;

        &:hover {
          background: transparent;
          border: 1px solid $blue;
        }

        @include media1280 {
          width: 180px;
        }
        @include media1024 {
          width: 100%;
          max-width: 180px;
        }
        @include media768 {
          max-width: 223px;
        }
      }
    }
  }
</style>
