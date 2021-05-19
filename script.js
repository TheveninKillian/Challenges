const app = Vue.createApp({
  data() {
    return {
      projects: [
        {
          srcImg: './Checkout/public/img/screen.png',
          linkUrl: './Checkout/index.html',
          title: 'Checkout',
        },
        {
          srcImg: './Gallery/public/img/screen.png',
          linkUrl: './Gallery/index.html',
          title: 'Gallery',
        },
        {
          srcImg: './Todo/screenshot.jpg',
          linkUrl: './Todo/index.html',
          title: 'Todo List',
        },
        {
          srcImg: './Dashboard/public/screenshot.png',
          linkUrl: './Dashboard/dist/index.html',
          title: 'Dashboard',
        },
        {
          srcImg: './landing-page/screenshot.png',
          linkUrl: './landing-page/dist/index.html',
          title: 'Landing Page',
        },
      ],
    };
  },
});

app.component('card-project', {
  props: {
    srcImg: String,
    linkUrl: String,
    title: String,
  },
  template: `
    <div class="card-project">
      <a :href="linkUrl">
        <div>
          <div class='img-project'>
            <img :src="srcImg" />
          </div>

          <div class='details-project'>{{ title }}</div>
        </div>
      </a>
    </div>
  `,
});

const vm = app.mount('#app');
