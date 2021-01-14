const app = Vue.createApp({
  data() {
    return {
      currentTab: 'All',
      inputValue: '',
      tabs: [
        { name: 'All', class: 'tab-all' },
        { name: 'Active', class: 'tab-active' },
        { name: 'Completed', class: 'tab-completed' },
      ],
      items: [
        {
          todo: 'Do coding challenges 1',
          completed: 'no-completed',
          id: 'tab-1',
        },
        {
          todo: 'Do coding challenges 2',
          completed: 'completed',
          id: 'tab-2',
        },
        {
          todo: 'Do coding challenges 3',
          completed: 'no-completed',
          id: 'tab-3',
        },
      ],
      checkedItems: ['tab-2'],
      initId: 3,
      storageCheckItems: '',
      storageItems: '',
    };
  },
  mounted() {
    this.storageCheckItems = localStorage.getItem('checkItems');
    this.storageItems = localStorage.getItem('items');

    if (this.storageCheckItems !== null) {
      this.checkedItems = this.storageCheckItems.split(',');
    }

    if (this.storageItems !== null) {
      this.items = JSON.parse(this.storageItems);
    }

    if (localStorage.getItem('initId')) {
      this.initId = localStorage.getItem('initId');
    }
  },
  updated() {
    if (this.items.length === 0) {
      this.initId = 0;
    }
  },
  methods: {
    checkItem(item) {
      const elementItem = document.getElementById(item.id);

      if (elementItem.checked) {
        this.checkedItems.push(item.id);

        item.completed = 'completed';

        this.tabNavigation();
      } else {
        this.checkedItems.forEach((element, key) => {
          if (element === item.id) {
            this.checkedItems.splice(key, 1);
          }
        });

        item.completed = 'no-completed';

        this.tabNavigation();
      }

      this.backupStorage();
    },
    tabNavigation() {
      if (this.currentTab === 'All') {
        this.items.forEach((element) => {
          let item = document.getElementById(element.id);

          item.parentElement.style.display = 'block';
        });
      }

      if (this.currentTab === 'Active') {
        this.items.forEach((element) => {
          let item = document.getElementById(element.id);

          if (element.completed === 'completed') {
            item.parentElement.style.display = 'none';
          } else {
            item.parentElement.style.display = 'block';
          }
        });
      }

      if (this.currentTab === 'Completed') {
        this.items.forEach((element) => {
          let item = document.getElementById(element.id);

          if (element.completed !== 'completed') {
            item.parentElement.style.display = 'none';
          } else {
            item.parentElement.style.display = 'block';
          }
        });
      }
    },
    delItem(item) {
      this.items.forEach((element, key) => {
        if (element.id === item.id) {
          this.items.splice(key, 1);
        }
      });

      this.checkedItems.forEach((element, key) => {
        if (element === item.id) {
          this.checkedItems.splice(key, 1);
        }
      });

      this.backupStorage();
    },
    delAll() {
      this.checkedItems.forEach((elementCheck) => {
        this.items.forEach((element, key) => {
          if (elementCheck === element.id) {
            this.items.splice(key, 1);
          }
        });
      });

      this.checkedItems = [];

      this.backupStorage();
    },
    addNewItem(text) {
      let newItem = {};
      newItem.todo = text;
      newItem.completed = 'no-completed';
      newItem.id = 'tab-' + ++this.initId;

      this.items.push(newItem);

      this.inputValue = '';
      let stringItems = JSON.stringify(this.items);
      localStorage.setItem('items', stringItems);
      localStorage.setItem('initId', this.initId);
    },
    backupStorage() {
      let stringCheckItems = this.checkedItems.toString();
      let stringItems = JSON.stringify(this.items);

      localStorage.setItem('checkItems', stringCheckItems);
      localStorage.setItem('items', stringItems);
    },
  },
});

const vm = app.mount('#app');
