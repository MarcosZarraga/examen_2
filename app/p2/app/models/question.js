import DS from 'ember-data';

export default DS.Model.extend({
	nombre : DS.attr ('string'),
	examen : DS.belongTo('test'),
	opcion : DS.hasMany('option')

});
