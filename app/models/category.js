import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),

  /**
   * Relationships
   */
  books: DS.hasMany('book', { async: true })
});
