import Ember from 'ember';

export default Ember.Route.extend({
			model(){
		let test = this.get('store').createRecord('test', {});
		return test;
	}
});
