<template lang="pug">
article(class='article-text', v-html='html')
</template>

<script setup lang="ts">
  import type { ArticleTextDataT } from 'types/common';
  
  const { data } = defineProps<{ data: ArticleTextDataT }>()

  const svgQuotes = `
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="64" viewBox="0 0 80 64" fill="none">
      <g opacity="0.8" clip-path="url(#clip0_13_591)">
        <path d="M17.58 27C21.0412 27 24.4246 28.0264 27.3025 29.9493C30.1803 31.8722 32.4234 34.6053 33.7479 37.803C35.0724 41.0007 35.419 44.5194 34.7437 47.9141C34.0685 51.3088 32.4018 54.4269 29.9544 56.8744C27.507 59.3218 24.3887 60.9885 20.9941 61.6637C17.5994 62.339 14.0807 61.9924 10.883 60.6679C7.68533 59.3434 4.95221 57.1003 3.02928 54.2225C1.10636 51.3446 0.08 47.9612 0.08 44.5L0 42C0 32.7174 3.68749 23.815 10.2513 17.2513C16.815 10.6875 25.7174 7 35 7V17C31.7155 16.9912 28.4619 17.6335 25.4272 18.89C22.3925 20.1464 19.637 21.992 17.32 24.32C16.4195 25.2188 15.5887 26.185 14.835 27.21C15.73 27.07 16.645 26.995 17.575 26.995L17.58 27ZM62.58 27C66.0412 27 69.4246 28.0264 72.3025 29.9493C75.1803 31.8722 77.4234 34.6053 78.7479 37.803C80.0724 41.0007 80.419 44.5194 79.7437 47.9141C79.0685 51.3088 77.4018 54.4269 74.9544 56.8744C72.507 59.3218 69.3887 60.9885 65.9941 61.6637C62.5994 62.339 59.0807 61.9924 55.883 60.6679C52.6853 59.3434 49.9522 57.1003 48.0293 54.2225C46.1064 51.3446 45.08 47.9612 45.08 44.5L45 42C45 32.7174 48.6875 23.815 55.2513 17.2513C61.815 10.6875 70.7174 7 80 7V17C76.7155 16.9912 73.4619 17.6335 70.4272 18.89C67.3925 20.1464 64.637 21.992 62.32 24.32C61.4195 25.2188 60.5887 26.185 59.835 27.21C60.73 27.07 61.645 27 62.58 27Z" fill="#8D959C"/>
      </g>
      <defs>
        <clipPath id="clip0_13_591">
          <rect width="80" height="64" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `

  let html = data
  if (html.includes('blockquote'))
    // insert svgQuotes into blockquote tag
    html = `
      ${data.substring(0, data.indexOf('<blockquote>') + '<blockquote>'.length)}
      ${svgQuotes}
      <span>
      ${data.substring(data.indexOf('<blockquote>') + '<blockquote>'.length)}
      </span>
    `
</script>

<style lang="scss">
  .article-text {
    width: 100%;
    max-width: 884px;
    margin: 0 auto;
    font-size: 18px;

    h2 {
      font-size: 34px;
    }

    blockquote {
      display: flex;
      gap: 30px;
      margin: 0;

      svg {
        min-width: 80px;
        margin: 18px 0;

        @include media1024 {
          min-width: 60px;
        }
        @include media425 {
          display: none;
        }
      }

      & > span {
        p {
          font-style: italic;
          font-weight: 300;
        }

        footer {
          font-size: 14px;
          color: $gray;
        }
      }
    }

    ul {
      width: fit-content;
      margin: 0 auto;
      list-style: none;

      li {
        position: relative;

        &:after {
          content: '';
          display: block;
          width: 7px;
          height: 7px;
          background: $text;
          transform: rotate(45deg);
          position: absolute;
          top: 7px;
          left: -19px;
        }
      }
    }
  }
</style>
