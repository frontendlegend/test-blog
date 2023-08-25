<template>
  <div class="layout">
    <header class="header">
      <NuxtLink to="/">
        <SvgLogo />
      </NuxtLink>
    </header>

    <main class="main">
      <div class="container">
        <slot />
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer__info">
          <div class="about-us">
            <NuxtLink to="/">
              <SvgLogo />
            </NuxtLink>
            <p class="about-us__text">
              Cтатьи о дизайне и искусстве, 
              которые исследуют творческие вдохновения и актуальные тенденции, 
              раскрывая мир эстетики и креативности
            </p>
          </div>

          <div class="contacts">
            <div class="contacts__email">
              <p class="contacts__email__label">email</p>
              <a 
                class="contacts__email__link" 
                href="mailto:testblogsupport@gmail.com"
              >
                testblogsupport@gmail.com
              </a>
            </div>

            <div class="contacts__social">
              <SvgFacebook />
              <SvgVk />
              <SvgInstagram />
              <SvgTelegram />
            </div>
          </div>
        </div>

        <SubscribeForm />
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85px;
  }

  .main {
    margin: 30px 30px 200px;

    @include container;
  }

  .footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 332px;
    margin-top: auto;
    border-top: 1px solid $gray;

    @include container {
      width: 100%;
      margin-top: auto;

      .footer__info {
        display: flex;
        justify-content: space-between;
        margin: 50px 30px 70px;

        @include media768 {
          flex-direction: column;
          justify-content: unset;
          align-items: center;
        }

        .about-us {
          width: 100%;
          max-width: 426px;
          margin-bottom: 30px;

          &__text {
            margin: 20px 0 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: $gray;
          }
        }

        .contacts {
          &__email {
            &__label {
              margin: 0 0 2px;
              font-size: 14px;
              line-height: 20px;
              font-weight: 400;
              color: $gray;
            }
            &__link {
              font-size: 18px;
              line-height: 22px;
              font-weight: 400;
              color: $text;
              text-decoration: none;

              &:visited {
                color: $text;
              }
            }
          }

          &__social {
            display: flex;
            gap: 20px;
            margin-top: 24px;
          }
        }
      }
    }
  }
</style>
