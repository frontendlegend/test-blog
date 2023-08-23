<template>
  <div class="layout">
    <header class="header">
      <Logo />
    </header>

    <main class="main">
      <div class="container">
        <slot />
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="subscribe" />
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
    height: 332px;
    margin-top: auto;
    border-top: 1px solid $gray;

    @include container {
      width: 100%;
      height: 100px;
      margin-top: auto;

      .subscribe {
        width: 100%;
        height: 100%;
        background: $text;
      }
    }
  }
</style>
