import DS from 'ember-data';

export default DS.Model.extend({
	nombre : DS.attr('string'),
	fecha : DS.attr('date'),

	pregunta : DS.hasMany('question')
});
