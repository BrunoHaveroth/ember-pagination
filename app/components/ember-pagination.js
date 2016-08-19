import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this.renderPagination();
  },

  renderPagination: function() {
    var total = this.get('total'),
        perPage = this.get('perPage'),
        limit = this.get('limit');

    var pages = total/perPage;
    var arrayPages = Ember.A();

    for (var i = 0; i < pages; i++) {
      arrayPages.push(i+1);
    }

    this.set('arrayPagesFull', arrayPages);
    this.set('arrayPages', arrayPages.slice(0, limit));
    this.updatePrevNext();
  },

  updatePrevNext: function() {
    var min = this.get('arrayPages.firstObject'),
      max = this.get('arrayPages.lastObject'),
      arrayPagesFull = this.get('arrayPagesFull');

    this.set('havePrev', (min > 1 ? true:false));
    this.set('haveNext', (max < arrayPagesFull.length ? true:false));
  },

  actions: {
    loadNewPage: function(page) {
      this.sendAction('loadAction', page);
    },

    next: function() {
      var skip = this.get('arrayPages.lastObject');
      var arrayPagesFull = this.get('arrayPagesFull');

      if (skip < arrayPagesFull.length) {
        this.set('haveNext', true);
        this.set('arrayPages', arrayPagesFull.slice(skip, skip + this.get('limit')));
      }
      this.updatePrevNext();
    },

    prev: function() {
      var skip = this.get('arrayPages.firstObject');
      skip--;
      var arrayPagesFull = this.get('arrayPagesFull');
      if (skip !== 0) {
        this.set('havePrev', true);
        this.set('arrayPages', arrayPagesFull.slice(skip - this.get('limit'), skip));
      }
      this.updatePrevNext();
    }
  }
});
