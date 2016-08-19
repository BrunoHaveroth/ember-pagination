import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      clients: [
        { name: 'Pedro' },
        { name: 'Paulo' },
        { name: 'Joao' },
        { name: 'Maria' },
        { name: 'Joaquina' },
        { name: 'Felipe' },
        { name: 'Carla' },
        { name: 'Mariana' },
        { name: 'Karina' },
        { name: 'Evelyn' },
        { name: 'Draven' },
        { name: 'Zed' },
        { name: 'Darius' },
        { name: 'Shaco' },
        { name: 'Elise' },
        { name: 'Rumble' },
        { name: 'Marcos' }
      ],
      total: 100
    }
  }
});
