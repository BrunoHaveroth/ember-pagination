import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    loadMore: function(page) {
      alert('>> '+ page);
    }
  }
});
